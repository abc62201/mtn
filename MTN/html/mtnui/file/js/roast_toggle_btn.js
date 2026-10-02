const roast_toggle_html = `
<!-- 右下角悬浮按钮 -->
<button id="roast-toggle-btn" title="打开评论面板">
    <!-- 对话气泡图标 -->
    <svg viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
</button>

<!-- 吐槽板面板 -->
<div id="roast-board-panel">
    <div class="board-header">
        <span class="board-title">📝 玩家评价墙</span>
        <button class="close-btn" id="close-board">&times;</button>
    </div>

    <div class="board-content" id="notes-container">
        <!-- 便利贴将通过 JS 动态插入到这里 -->
    </div>

    <div class="board-footer">
        <input type="text" id="roast-input" placeholder="写点吐槽吧... (限200字)" maxlength="100">
        <button id="send-btn">
            <!-- 发送图标 -->
            <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
        </button>
    </div>
</div>
            `;
document.body.insertAdjacentHTML('beforeend', roast_toggle_html);




        let isToggling = false; // 防止快速连续点击
        // --- 1. 模拟本地数据 (对应您的 MySQL 数据) ---
        // 假设当前游戏的 ROM MD5 是 'abc123...'
        let roastData = [
            { id: 1, user: "红狼", content_txt: "这游戏难度比魂斗罗高多了！第一关那个扔斧头的简直变态！", color: "note-yellow", created_at: "1701234567890" },
            { id: 2, user: "忍者猫", content_txt: "其实叫赤影战士更好听，水上魂斗罗是盗版商瞎起的名字😂", color: "note-pink", created_at: "1723456789012" },
            { id: 3, user: "广告狗", content_txt: "加薇信领大礼包 www. scam.com", color: "note-blue", created_at: "1734567890123" }, // 模拟广告，等下删掉它
            { id: 4, user: "老玩家", content_txt: "音乐太经典了，特别是第二关的 BGM，听得我热血沸腾。", color: "note-green", created_at: "1701234597890" },
            { id: 5, user: "手残党", content_txt: "这游戏不能续命吗？我死了无数次了...", color: "note-orange", created_at: "1712345678901" }
        ];

        // --- 2. DOM 元素获取 ---
        const toggleBtn = document.getElementById('roast-toggle-btn');
        const closeBtn = document.getElementById('close-board');
        const boardPanel = document.getElementById('roast-board-panel');
        const notesContainer = document.getElementById('notes-container');
        const sendBtn = document.getElementById('send-btn');
        const roastInput = document.getElementById('roast-input');
        let roast_table_game_md5="";
        // --- 3. 初始化渲染 ---
function renderNotes(scrollToBottom = false) {
    notesContainer.innerHTML = '';
    
    roastData.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.className = `sticky-note ${note.color}`;
        
        const randomRotate = (Math.random() * 6 - 3).toFixed(1);
        noteEl.style.transform = `rotate(${randomRotate}deg)`;
        const date_time=formatTimestamp(note.created_at)
        // 移除内联 onclick，改用 data-id 存储
        noteEl.innerHTML = `
            <div class="delete-btn" data-id="${note.id}">×</div>
            <div class="note-meta">
                <span>${note.user}</span>
                <span class="note-date">${date_time}</span>
            </div>
            <div class="note-content">${escapeHtml(note.content_txt)}</div>
        `;
        
        // 绑定删除事件，阻止冒泡
        const deleteBtn = noteEl.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();  // ← 关键：阻止事件冒泡到 document
            deleteNote(note.id);
        });
        
        notesContainer.appendChild(noteEl);
    });
    //自动滚动到底部
    if (scrollToBottom) {
        notesContainer.scrollTop = notesContainer.scrollHeight;
    }
}



        // --- 4. 功能函数 ---

        // 切换面板显示/隐藏
        function toggleBoard() {
if (isToggling) {
        //console.log('⚡ 操作太快，已忽略本次点击');
        return;
    }

    // 锁定状态
    isToggling = true;

    // 执行切换逻辑
    const wasActive = boardPanel.classList.contains('active');
    
    // 切换类名
    boardPanel.classList.toggle('active');
    
    // 更新状态记录
    isOpen = !wasActive;

    console.log(`面板已${isOpen ? '打开' : '关闭'}`);

    if (isOpen) {
        roastInput.focus();
    }
    setTimeout(() => {
        isToggling = false;
    }, 300); // 这里的 300 毫秒需要匹配你 CSS 中的 transition 时间
        }

// --- 删除笔记 ---
async function deleteNote(id) {
    if(confirm("确定要删除这条评论吗?此操作无法恢复！")) {
        await CefSharp.BindObjectAsync('indexViewBinding');
        const result =await window.indexViewBinding.del_roast_table(id);
        if (result.startsWith("请先登录")) {
            alert("请先登录"); // 显示具体错误信息，方便调试
            return;
        }
        if (result.startsWith("你还不是管理员")) {
            alert("只能管理员才有删除权限"); // 显示具体错误信息，方便调试
            return;
        }
        if (result.startsWith("删除失败")) {
            alert("删除失败"); // 显示具体错误信息，方便调试
            return;
        }
        roastData = roastData.filter(item => item.id !== id);
        renderNotes(false);
        console.log(`Deleted note ID: ${id}`);
        // 不再需要 window.deleteNote，改为局部函数
    }
}

// 发布新吐槽
async function addNote() {
    const content = roastInput.value.trim();
    if (!content) return;

    const roast_color = getRandomColor();
    const roast_created_at = Math.floor(Date.now() / 1000);
    
    // 锁定按钮，防止重复提交
    sendBtn.disabled = true;
    try {
        // 确保绑定对象可用
        await CefSharp.BindObjectAsync('indexViewBinding'); 
        
        // 调用后端
        const result = await window.indexViewBinding.add_roast_table(
            roast_table_game_md5, // 游戏标识
            content,              // 用户评价
            roast_color,          // 块背景颜色
            roast_created_at      // 发言的时间戳
        );

        // --- 【核心修正】逻辑判断 ---
        
        // 情况 1: 结果为空 (未登录)
        if (!result || result === "") {
            alert("请先登录后再发言！");
            sendBtn.disabled = false;
            return;
        }

        // 情况 2: 结果以 "错误" 开头 (服务器错误或同步失败)
        // 使用 startsWith 可以兼容 "错误" 和 "错误：详细描述"
        if (result.startsWith("错误")) {
            alert("评论失败"); // 显示具体错误信息，方便调试
            sendBtn.disabled = false;
            return;
        }
        if (result.startsWith("内容不能为空")) {
            alert("内容不能为空"); // 显示具体错误信息，方便调试
            sendBtn.disabled = false;
            return;
        }
        if (result.startsWith("内容包含违规词汇")) {
            alert("内容包含违规词汇"); // 显示具体错误信息，方便调试
            sendBtn.disabled = false;
            return;
        }
        if (result.startsWith("发言太快了")) {
            alert("每5秒发表一次评论"); // 显示具体错误信息，方便调试
            sendBtn.disabled = false;
            return;
        }
        if (result.startsWith("内容不能超过200字")) {
            alert("评论内容不能超过200字"); // 显示具体错误信息，方便调试
            sendBtn.disabled = false;
            return;
        }
        // 情况 3: 成功 (返回的是 JSON 字符串)
        // 能走到这里，说明既不是空，也不是错误，肯定是 JSON
        let new_data = JSON.parse(result);
        
        const newNote = {
            id: new_data.roast_id, 
            user: new_data.roast_user, 
            content_txt: content,
            color: roast_color,
            created_at: roast_created_at
        };

        // 更新本地数据
        roastData.push(newNote);
        roastInput.value = ''; // 清空输入框    
        // 恢复按钮
        sendBtn.disabled = false; 
        // 重绘界面 (置顶新消息)
        renderNotes(true);

    } catch (error) {
        // 捕获网络异常或 JSON 解析异常
        console.error("发送吐槽时发生异常:", error);
        alert("网络异常或数据解析失败，请稍后重试。");
        sendBtn.disabled = false;
    }
}
        // 随机颜色选择器
        function getRandomColor() {
            const colors = ['note-yellow', 'note-pink', 'note-blue', 'note-green', 'note-orange'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        // HTML 转义防 XSS
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // --- 5. 事件监听 ---
        toggleBtn.addEventListener('click', toggleBoard);
        closeBtn.addEventListener('click', toggleBoard);
        
        sendBtn.addEventListener('click', addNote);
        
        roastInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addNote();
            }
        });

        // 点击面板外部关闭 (可选体验优化)
        document.addEventListener('click', function(e) {
            if (boardPanel.classList.contains('active') && 
                !boardPanel.contains(e.target) && 
                e.target !== toggleBtn) {
                toggleBoard();
            }
        });

        // 初始渲染
        async function get_roast_table(game_md5){
            roast_table_game_md5=game_md5;
            await CefSharp.BindObjectAsync('indexViewBinding'); 
            const result=await window.indexViewBinding.get_roast_table(game_md5);
            if (result.startsWith("不能刷新")) {
                return;
            }
            roastData=JSON.parse(result);
            renderNotes(true);          
    }


/** 时间戳格式化 (Unix Timestamp -> YYYY/M/D H:mm:ss) */
function formatTimestamp(timestamp) {
    if (!timestamp) return "未知时间";
    
    // 兼容秒级和毫秒级时间戳，并确保转换为数字类型
    const ts = typeof timestamp === 'string' 
        ? (timestamp.length > 10 ? parseInt(timestamp, 10) : parseInt(timestamp, 10) * 1000)
        : timestamp > 10000000000 ? timestamp : timestamp * 1000;
    
    const date = new Date(ts);
    
    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}
