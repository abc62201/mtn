//启动设置页
function start_web(){
var web_obj = document.getElementById('main_content');
var web_txt='';
joy_start(0);
web_txt+='<h2>当前选择：基础设置-启动设置</h2>';
web_txt+='<p>这里会根据你的设置修改软件的启动效果。</p>';
web_txt+= '<form id="settingsForm">'
		+'<div class="setting-label">打开软件时是否启动视频：</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="start_t" name="strar_video_ft" value="1" checked>'
        +'<label for="start_t">是</label>'
        +'<input type="radio" id="start_f" name="strar_video_ft" value="0">'
		+'<label for="start_f">否</label></div>'
		+'<div class="setting-label">设置开机视频文件夹路径(将视频放置文件夹内会随机选择一个播放暂时只支持H264格式的mp4视频):</div>'
		+'<div class="input-with-button">'
		+'<input type="text" style=" width: 300px;" id="strar_video" name="strar_video">'
		+'<button type="button" onclick="path_sl()">选择文件夹</button></div>'
		+'<div class="setting-label">进入设置页面是否播放背景音乐：</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="music_t" name="set_music_ft" value="1" checked>'
        +'<label for="music_t">是</label>'
        +'<input type="radio" id="music_f" name="set_music_ft" value="0">'
		+'<label for="music_f">否 背景音乐路径</label>'
		+'<input type="text" style=" width: 300px;" id="set_music_path" name="set_music_path">'
		+'<button type="button" onclick="path_set_music_path()">选择文件夹</button></div>'

		+'<div class="setting-label">启动后自动扫描:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="auto_scan_t" name="auto_scan" value="1" checked>'
        +'<label for="auto_scan_t">是</label>'
        +'<input type="radio" id="auto_scan_f" name="auto_scan" value="0">'
		+'<label for="auto_scan_f">否</label></div>'

		+'<div class="setting-label">开机是否自启动:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="Self_t" name="Self_starting" value="1" checked>'
        +'<label for="Self_t">是</label>'
        +'<input type="radio" id="Self_f" name="Self_starting" value="0">'
		+'<label for="Self_f">否</label></div>'

		+'<div class="setting-label">窗口是否最大化:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="wmax_t" name="windows_max" value="1" checked>'
        +'<label for="wmax_t">是</label>'
        +'<input type="radio" id="wmax_f" name="windows_max" value="0">'
		+'<label for="wmax_f">否</label></div>'

		+'<div class="setting-label">窗口是否总在最前不被遮挡:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="wFront_t" name="Front_window" value="1" checked>'
        +'<label for="wFront_t">是</label>'
        +'<input type="radio" id="wFront_f" name="Front_window" value="0">'
		+'<label for="wFront_f">否</label></div>'
		+'<div class="setting-label">是否全屏启动:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="Full_t" name="Full_screen" value="1" checked>'
        +'<label for="Full_t">是</label>'
        +'<input type="radio" id="Full_f" name="Full_screen" value="0">'
		+'<label for="Full_f">否</label></div>'

		+'<div class="setting-label">下载时是否使用服务器分类:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="DefDwnlCat_t" name="DefDwnlCat" value="0" checked>'
        +'<label for="DefDwnlCat_t">是</label>'
        +'<input type="radio" id="DefDwnlCat_f" name="DefDwnlCat" value="1">'
		+'<label for="DefDwnlCat_f">否</label></div>'


		+'<div class="setting-label">设置下载临时文件夹:</div>'
		+'<div class="input-with-button">'
		+'<input type="text" style=" width: 300px;" id="dw_path" name="dw_path">'
		+'<button type="button" onclick="path_dw_temp()">选择文件夹</button></div>'

		+'<div class="setting-label">是否自启动php服务器(启动后可支持PHP代码 1增强主题功能.2用来跨平台使用例如手机，平板等。3可以直接使用php代码来直接编辑数据):</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="server_t" name="strar_server" value="1" checked>'
        +'<label for="server_t">是</label>'
        +'<input type="radio" id="server_f" name="strar_server" value="0">'
		+'<label for="server_f">否</label></div>'
		+'<div class="setting-label">设置主题的文本支持:</div>'
		+'<div class="inline-radio-group">'
		+'<input type="radio" id="CN" name="msg" value="0" checked>'
        +'<label for="CN">简体中文</label>'
		+'<input type="radio" id="TW" name="msg" value="1">'
        +'<label for="TW">繁体中文</label>'
        +'<input type="radio" id="EN" name="msg" value="2">'
		+'<label for="EN">英文</label></div>'
		+'<div class="setting-label">服务器设置：</div>'
		+'<div class="input-with-button">'
		+'<label for="nginx_i">ip</label>'
		+'<input type="text" id="nginx_i" name="nginx_ip">'
		+'<label for="nginx_p">端口</label>'
		+'<input type="text" id="nginx_p" style="width: 80px;" name="nginx_port"></div>';
web_txt += '<button type="button" class="savebutton" onclick="saveSettings()">保存设置</button>'; // 添加保存按钮
web_txt+='<div class="classify_down"></div></form>';
web_obj.innerHTML = web_txt;
set_start_value();
}
//下载临时路径
async function path_dw_temp(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.path_sl();
	var dw_path = document.getElementById('dw_path');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
dw_path.value=result;
} 
return result; 
}
//视频路径
async function path_sl(){
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.path_sl();
		var strar_video = document.getElementById('strar_video');
		if (result !== "") {
    // 文件夹路径不为空的处理逻辑
    strar_video.value=result;
	} 
	return result; 
}
//背景音乐路径
async function path_set_music_path(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.path_sl();
	var set_music_path = document.getElementById('set_music_path');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
set_music_path.value=result;
} 
return result; 
}
function set_start_value(){
	var start_f = document.getElementById('start_f');
	var start_t = document.getElementById('start_t');
	var music_t = document.getElementById('music_t');
	var music_f = document.getElementById('music_f');

	var auto_scan_f = document.getElementById('auto_scan_f');
	var auto_scan_t = document.getElementById('auto_scan_t');

	var Self_f = document.getElementById('Self_f');
	var Self_t = document.getElementById('Self_t');
	var wmax_t = document.getElementById('wmax_t');
	var wmax_f = document.getElementById('wmax_f');
	var wFront_f = document.getElementById('wFront_f');
	var wFront_t = document.getElementById('wFront_t');
	var Full_f = document.getElementById('Full_f');
	var Full_t = document.getElementById('Full_t');
	var DefDwnlCat_t = document.getElementById('DefDwnlCat_t');
	var DefDwnlCat_f = document.getElementById('DefDwnlCat_f');	
	var server_f = document.getElementById('server_f');
	var server_t = document.getElementById('server_t');
	var CN = document.getElementById('CN');
	var TW = document.getElementById('TW');
	var EN = document.getElementById('EN');
	var dw_path = document.getElementById('dw_path');

	var strar_video = document.getElementById('strar_video');
	var set_music_path = document.getElementById('set_music_path');
	var nginx_i = document.getElementById('nginx_i');
	var nginx_p = document.getElementById('nginx_p');
	//设置启动视频文件夹路径的默认值
	strar_video.value=mtn_config[0]['strar_video'];
	set_music_path.value=mtn_config[0]['set_music_path'];
	//设置服务器ip的默认值
	dw_path.value=mtn_config[0]['dw_path'];
	nginx_i.value=mtn_config[0]['nginx_ip'];
	//设置服务器端口的默认值
	nginx_p.value=mtn_config[0]['nginx_port'];
	//设置是否启动视频的默认值
	if(mtn_config[0]['strar_video_ft']==1){	
	start_t.checked=true;
	start_f.checked=false;
	}
	else{
	start_t.checked=false;
	start_f.checked=true;
	}

	if(mtn_config[0]['set_music_ft']==1){	
		music_t.checked=true;
		music_f.checked=false;
		}
		else{
		music_t.checked=false;
		music_f.checked=true;
	}

//设置是否自动扫描的默认值
	if(mtn_config[0]['auto_scan']==1){
		auto_scan_t.checked=true;
		auto_scan_f.checked=false;
		}else{
			auto_scan_t.checked=false;
			auto_scan_f.checked=true;
	}

	//设置是否自启动启动的默认值
	if(mtn_config[0]['Self_starting']==1){	
	Self_t.checked=true;
	Self_f.checked=false;
	}
	else{
	Self_t.checked=false;
	Self_f.checked=true;
	}
	//设置窗口是否最大化的默认值
	if(mtn_config[0]['windows_max']==1){	
		wmax_t.checked=true;
		wmax_f.checked=false;
		}
		else{
			wmax_t.checked=false;
			wmax_f.checked=true;
		}
	//设置窗口是否总在最前不被遮挡的默认值
	if(mtn_config[0]['Front_window']==1){	
	wFront_t.checked=true;
	wFront_f.checked=false;
	}
	else{
	wFront_t.checked=false;
	wFront_f.checked=true;
	}
	//设置是否全屏启动的默认值
	if(mtn_config[0]['Full_screen']==1){	
	Full_t.checked=true;
	Full_f.checked=false;
	}
	else{
	Full_t.checked=false;
	Full_f.checked=true;
	}
	//设置是否全屏启动的默认值
	if(mtn_config[0]['DefDwnlCat']==0){	
	DefDwnlCat_t.checked=true;
	DefDwnlCat_f.checked=false;
	}
	else{
	DefDwnlCat_t.checked=false;
	DefDwnlCat_f.checked=true;
	}	
	//设置是否自启动服务器的默认值
	if(mtn_config[0]['strar_server']==1){	
	server_t.checked=true;
	server_f.checked=false;
	}
	else{
	server_t.checked=false;
	server_f.checked=true;
	}
	if(mtn_config[0]['msg']==0){	
	CN.checked=true;
	TW.checked=false;
	EN.checked=false;
	}
	else if(mtn_config[0]['msg']==1){
	CN.checked=false;
	TW.checked=true;
	EN.checked=false;
	}else{
	CN.checked=false;
	TW.checked=false;
	EN.checked=true;
	}
	
}

async function saveSettings() { 
  var form = document.getElementById('settingsForm');
  var formData = new FormData(form);
      // 转换表单数据为普通对象
    var formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.config_save(formDataObject);
	return result; 
 } 
