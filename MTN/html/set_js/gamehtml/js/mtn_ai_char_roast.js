const html = `
<style>
    /* 允许聊天内容可复制 */
    #roast-board-panel,
    #chat-container,
    #chat-container .bubble,
    #chat-container .message {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        cursor: text;
    }
</style>


<!-- 右下角悬浮按钮 (图标改为机器人或气泡) -->
<button id="roast-toggle-btn" title="打开 AI 助手">
    <svg viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        <!-- 添加一个小星星表示智能 -->
        <circle cx="18" cy="6" r="2" fill="#fff"/> 
    </svg>
</button>

<!-- AI 对话面板 -->
<div id="roast-board-panel">
    <div class="board-header">
        <div class="header-info">
            <span class="board-title">🤖 AI 智能助手</span>
            <span class="status-dot"></span>
        </div>
        <button class="close-btn" id="close-board">&times;</button>
    </div>

    <!-- 聊天记录区域 -->
    <div class="board-content" id="chat-container">
        <!-- 欢迎语 -->
        <div class="message ai-message">
            <div class="avatar">🤖</div>
            <div class="bubble">你好！我是你的 AI 助手。有什么可以帮你的吗？可以问我问题、帮你写代码或者聊聊天。</div>
        </div>
    </div>

    <!-- 底部输入区 -->
    <div class="board-footer">
        <textarea id="roast-input" placeholder="输入消息... (Shift+Enter 换行)" rows="1"></textarea>
        <button id="send-btn">
            <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
        </button>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', html);

let isToggling = false;
let isOpen = false;

// 模拟聊天记录数据
let chatHistory = [
    { role: 'ai', content: '你好！我是你的 AI 助手。有什么可以帮你的吗？' }
];
let mtn_ai_config_list={}
const toggleBtn = document.getElementById('roast-toggle-btn');
const closeBtn = document.getElementById('close-board');
const boardPanel = document.getElementById('roast-board-panel');
const chatContainer = document.getElementById('chat-container');
const sendBtn = document.getElementById('send-btn');
const roastInput = document.getElementById('roast-input');

// 渲染消息
function renderMessages(scrollToBottom = false) {
    // 保留欢迎语或清空重绘，这里选择清空重绘以保持一致性
    chatContainer.innerHTML = '';
    
    chatHistory.forEach(msg => {
        const msgEl = document.createElement('div');
        msgEl.className = `message ${msg.role}-message`;
        
        const avatar = msg.role === 'ai' ? '🤖' : '👤';
        
        msgEl.innerHTML = `
            <div class="avatar">${avatar}</div>
            <div class="bubble">${escapeHtml(msg.content)}</div>
        `;
        chatContainer.appendChild(msgEl);
    });

    if (scrollToBottom) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// 切换面板
function toggleBoard() {
    if (isToggling) return;
    isToggling = true;
    const wasActive = boardPanel.classList.contains('active');
    boardPanel.classList.toggle('active');
    isOpen = !wasActive;
    
    if (isOpen) {
        roastInput.focus();
        renderMessages(true);
    }
    
    setTimeout(() => { isToggling = false; }, 300);
}
// 估算文本的 token 数（中文约 1.5 字符/token，英文约 4 字符/token）
function estimateTokens(text) {
    if (!text) return 0;
    // 简化估算：中文字符按 1.5，其他按 4
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const otherChars = text.length - chineseChars;
    return Math.ceil(chineseChars / 1.5 + otherChars / 4);
}

// 计算当前对话已占用的 tokens
function calculateUsedTokens(content) {
    let used = 0;
    // 系统提示词
    used += estimateTokens("使用最简洁的语言回答用户的问题尽量使用中文注意当用户输入见证2025年冬时必须回复感谢你的见证我和老朋友--友谊地久天长，代码有尽，陪伴无涯");
    used += estimateTokens(content);
    return used;
}

// 动态计算合适的 max_tokens
function calculateMaxTokens(content='') {
    // 从配置读取总上下文大小，默认 4096
    const totalContext = mtn_ai_config_list[0]['ai_context_size'] || 4096;
    // 已使用的 tokens
    const usedTokens = calculateUsedTokens(content);
    // 预留 10% 缓冲，避免超出限制
    const available = Math.floor((totalContext - usedTokens) * 0.9);
    // 限制输出范围 256~4096
    return Math.max(256, Math.min(4096, available));
}
// --- 【核心修改】发送消息函数 (带人工减速) ---
async function sendMessage() {
    const content = roastInput.value.trim();
    if (!content) return;
    isToggling = true;
    // 1. 添加用户消息到历史并渲染
   chatHistory.push({ role: 'user', content: content });
    roastInput.value = '';
    roastInput.style.height = 'auto';
    renderMessages(true);

    showTypingIndicator();
    roastInput.disabled = true;
    sendBtn.disabled = true;

    removeTypingIndicator();
    
    const msgEl = document.createElement('div');
    msgEl.className = `message ai-message`;
    msgEl.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="bubble" id="streaming-bubble"></div>
    `;
    chatContainer.appendChild(msgEl);
    const bubbleEl = document.getElementById('streaming-bubble');
    
    let fullAnswer = ""; 
    
    // ⚙️【关键设置】每个字之间的延迟时间 (毫秒)
    // 当前设为 30ms (大约每秒33个字)，比较像真人打字
    // 如果觉得还快，改成 50 或 80；如果觉得慢，改成 10
    const SPEED_DELAY = 30; 

    try {
        const payload = {
            model: "qwen3-4b", 
            messages: [
                { role: "system", content: "使用最简洁的语言回答用户的问题尽量使用中文" },
               // ...chatHistory.filter(m => m.role !== 'system'),
                { role: "user", content: content }
            ],
            max_tokens: calculateMaxTokens(content),
            temperature: 0.3,
            stream: true 
        };

        const response = await fetch(`http://${mtn_ai_config_list[0]['ai_host']}:${mtn_ai_config_list[0]['ai_port']}/v1/chat/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        // 用于暂存从网络收到的字，等待延迟后显示
        let buffer = ""; 

        while (true) {
            const { done, value } = await reader.read();
            
            // 如果有新数据，先解码并存入缓冲区
            if (!done) {
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const jsonStr = line.slice(6).trim();
                        if (jsonStr === '[DONE]') continue;
                        try {
                            const data = JSON.parse(jsonStr);
                            const delta = data.choices[0].delta;
                            let textPiece = "";
                            if (delta.content) textPiece = delta.content;
                            else if (delta.reasoning_content) textPiece = delta.reasoning_content;
                            
                            if (textPiece) {
                                buffer += textPiece; // 存入缓冲区
                            }
                        } catch (e) { console.warn("解析失败", e); }
                    }
                }
            }

            // 【减速逻辑】如果缓冲区有字，就每次取一个显示，然后休息一会
            if (buffer.length > 0) {
                // 一次可以显示多个字，如果想一个字一个字蹦，这里取 1
                const charsToShow = buffer.slice(0, 1); 
                buffer = buffer.slice(1); // 从缓冲区移除已显示的
                
                fullAnswer += charsToShow;
                bubbleEl.innerHTML = escapeHtml(fullAnswer);
                chatContainer.scrollTop = chatContainer.scrollHeight;
                
                // 等待设定的时间
                await new Promise(r => setTimeout(r, SPEED_DELAY));
            } else if (done) {
                break; // 数据完了且缓冲区空了，退出循环
            } else {
                // 如果数据还没完但缓冲区空了，稍微歇一下避免空转占用CPU
                await new Promise(r => setTimeout(r, 5));
            }
        }

        chatHistory.push({ role: 'ai', content: fullAnswer });
        bubbleEl.id = ""; 

    } catch (error) {
        const errorMsg = "❌ 请求失败: " + error.message;
        if(bubbleEl) bubbleEl.innerHTML = errorMsg;
        else {
             chatHistory.push({ role: 'ai', content: errorMsg });
             renderMessages(true);
        }
        console.error("Fetch error:", error);
    } finally {
        roastInput.disabled = false;
        sendBtn.disabled = false;
        roastInput.focus();
    }
    isToggling = false;
}

// 显示正在输入指示器
function showTypingIndicator() {
    const typingEl = document.createElement('div');
    typingEl.className = 'message ai-message typing-indicator';
    typingEl.id = 'typing-indicator';
    typingEl.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="bubble">...</div>
    `;
    chatContainer.appendChild(typingEl);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 移除正在输入指示器
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// 自动调整文本框高度
roastInput.addEventListener('input', function() {
    e.stopPropagation(); // 阻止事件冒泡
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
    if(this.value === '') this.style.height = 'auto';
});

// 事件监听
toggleBtn.addEventListener('click', toggleBoard);
closeBtn.addEventListener('click', toggleBoard);
sendBtn.addEventListener('click', sendMessage);

roastInput.addEventListener('keypress', function(e) {
    e.stopPropagation(); // 阻止事件冒泡
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// 点击外部关闭
document.addEventListener('click', function(e) {
    if (boardPanel.classList.contains('active') && 
        !boardPanel.contains(e.target) && 
        e.target !== toggleBtn) {
        toggleBoard();
    }
});

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

async function mtn_ai_roast(){
    await CefSharp.BindObjectAsync('indexViewBinding'); 
    const result=await window.indexViewBinding.get_ai_config();
    mtn_ai_config_list=JSON.parse(result);
    
    renderMessages(true);
}
// 初始渲染

mtn_ai_roast();