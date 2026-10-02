// 启动 AI 设置页
function mtn_set_ai(){
    var web_obj = document.getElementById('main_content');
    var web_txt='';
    joy_start(0);
    web_txt+='<h2>当前选择：基础设置-AI 核心设置</h2>';
    web_txt += '<p>配置本地大模型运行参数。修改后需重启 AI 服务生效。</p>';
    web_txt += '<p>未下载ai的请先在《游戏设置--其他下载--游戏工具》中下载ai大模型</p>'
    web_txt +='<p>ai下载后解压到mtn_tool文件夹里(认真查看mtn_tool/llama/llama-server.exe文件是否存在)</p>';
    web_txt += '<form id="aiSettingsForm">';

    // 2. GPU 加速层数
    web_txt += '<div class="setting-group">';
    web_txt += '<div class="setting-label">🎮 GPU 卸载层数 (n-gpu-layers)：</div>';
    web_txt += '<div class="input-with-button">';
    web_txt += '<input type="number" id="ai_gpu_layers" name="ai_gpu_layers" style="width: 100px;" value="-1">';
    web_txt += '<span style="margin-left:10px; color:#666;">-1 = 全部加载到显卡 (推荐)</span>';
    web_txt += '</div>';
    web_txt += '<small style="color:#000;">如果显存不足导致崩溃，请尝试减小此数值 (如 20, 30)。</small>';
    web_txt += '</div>';

    // 3. 上下文长度
    web_txt += '<div class="setting-group">';
    web_txt += '<div class="setting-label">📝 上下文长度 (Context Size)：</div>';
    web_txt += '<div class="input-with-button">';
    web_txt += '<input type="number" id="ai_context_size" name="ai_context_size" style="width: 100px;" value="4096">';
    web_txt += '<span style="margin-left:10px; color:#666;">tokens</span>';
    web_txt += '</div>';
    web_txt += '<small style="color:#000;">决定 AI 能记住多少对话内容。越大越占内存。</small>';
    web_txt += '</div>';
    // 5. 网络设置
    web_txt += '<div class="setting-label">ip设置：</div>';
        // IP
        web_txt +='<div class="input-with-button">';
        web_txt += '<label for="ai_host">ip</label>';       
        web_txt += '<input type="text" id="ai_host" name="ai_host"  value="127.0.0.1">';
        // 端口
        web_txt += '<label for="ai_port">端口</label>';
        web_txt += '<input type="text" id="ai_port" style="width: 80px;" name="ai_port"  value="8080">';     
        web_txt += '</div>';
    web_txt += '</div>';

    // 6. 启动行为
    web_txt += '<div class="setting-group" style="margin-top:20px; border-top:1px solid #eee; padding-top:15px;">';
    web_txt += '<div class="setting-label">🚀 启动行为设置：</div>';
    
    web_txt += '<div class="inline-radio-group" style="margin-bottom:10px;">';
    web_txt += '<input type="radio" id="ai_auto_start_t" name="ai_verbose_tf" value="1" checked>';
    web_txt += '<label for="ai_auto_start_t">软件启动时自动运行 AI 服务</label>';
    web_txt += '<input type="radio" id="ai_auto_start_f" name="ai_verbose_tf" value="0">';
    web_txt += '<label for="ai_auto_start_f">手动启动 (不自动运行)</label>';
    web_txt += '</div>';
    web_txt += '</div>';

    // 保存按钮
    web_txt += '<div style="margin-top:30px; text-align:center;">';
    web_txt += '<button type="button" class="savebutton" onclick="saveAiSettings()" style="padding:10px 40px; font-size:16px; background:#4f46e5; color:white; border:none; border-radius:6px; cursor:pointer;">💾 保存并应用设置</button>';
    web_txt += '</div>';
    
    web_txt += '</form>';
    
    web_obj.innerHTML = web_txt;
    
    // 初始化填充数据
    set_ai_start_value();
}



// 填充默认值
async function set_ai_start_value(){
    // 防止 mtn_config 未定义报错
    await CefSharp.BindObjectAsync('indexViewBinding'); 
    const result=await window.indexViewBinding.get_ai_config();
    mtn_config=JSON.parse(result);
    if(typeof mtn_config === 'undefined' || !mtn_config[0]) return;

    var cfg = mtn_config[0];



    // 2. GPU 层数
    var gpuInput = document.getElementById('ai_gpu_layers');
    if(gpuInput) gpuInput.value = (cfg['ai_gpu_layers'] !== undefined) ? cfg['ai_gpu_layers'] : -1;

    // 3. 上下文
    var ctxInput = document.getElementById('ai_context_size');
    if(ctxInput) ctxInput.value = (cfg['ai_context_size'] !== undefined) ? cfg['ai_context_size'] : 4096;
    // 5. 网络
    var hostInput = document.getElementById('ai_host');
    var portInput = document.getElementById('ai_port');
    if(hostInput) hostInput.value = (cfg['ai_host'] !== undefined) ? cfg['ai_host'] : '127.0.0.1';
    if(portInput) portInput.value = (cfg['ai_port'] !== undefined) ? cfg['ai_port'] : '8080';

    // 6. 自动启动
    var autoStartT = document.getElementById('ai_auto_start_t');
    var autoStartF = document.getElementById('ai_auto_start_f');
    if(autoStartT && autoStartF) {
        if(cfg['ai_verbose_tf'] == 1) {
            autoStartT.checked = true;
            autoStartF.checked = false;
        } else {
            autoStartT.checked = false;
            autoStartF.checked = true;
        }
    }
    
}

// 保存设置
async function saveAiSettings() { 
    var form = document.getElementById('aiSettingsForm');
    var formData = new FormData(form);
    
    // 转换表单数据为普通对象
    var formDataObject = {};
    formData.forEach(function(value, key){
        // 数字类型转换
        if(key.includes('port') || key.includes('size') || key.includes('layers') || key.includes('threads')) {
            formDataObject[key] = parseInt(value);
        } else {
            formDataObject[key] = value;
        }
    });

 

    await CefSharp.BindObjectAsync('indexViewBinding'); 	
    // 调用后端保存方法，假设后端能处理这个新的对象结构
    const result = await window.indexViewBinding.ai_config_save(formDataObject);
    
    if(result) {
        alert("✅ AI 设置已保存！\n如果选择了“自动启动”，下次打开软件时将自动加载模型。");
    } else {
        alert("❌ 保存失败，请检查后端日志。");
    }
    
    return result; 
}