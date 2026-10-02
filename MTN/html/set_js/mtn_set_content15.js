
function meu_up_web(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-上传模拟器</h2>'
	   +'<div class="emu_args_form">'
	   + '<form id="emu_up_form">'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="country">选择模拟器：</label>'
	   +'<select id="emu_up_select" name="emu_up_select" style="margin: 0 10px 0 10px;"></select></div>'

	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器别名：</label>'
	   +'<input type="text"  id="emu_name" name="emu_name" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器文件：</label>'
	   +'<input type="text"  id="emu_path" name="emu_path" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_path_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器压缩包：</label>'
	   +'<input type="text"  id="emu_path_rar" name="emu_path_rar" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_rar_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">全能模拟器核心：</label>'
	   +'<input type="text"  id="emu_core" name="emu_core" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_core_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器图标：</label>'
	   +'<input type="text"  id="emu_ico" name="emu_ico" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_ico_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器图片：</label>'
	   +'<input type="text"  id="emu_img" name="emu_img" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_img_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器简介文本：</label>'
	   +'<input type="text"  id="emu_txt" name="emu_txt" style="margin: 0 10px 0 10px;">'
	   +'<button type="button" onclick="emu_txt_flie()">选择</button></div>'
	   +'<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">模拟器版本：</label>'
	   +'<input type="text"  id="emu_ver" name="emu_ver" style="margin: 0 10px 0 10px;"></div>'
	   +'<div class="emu_button">'
	   +'<button type="button"  onclick="emu_up_flie()">上传</button></div>'
	   +'</form></div>'
	   +'<div class="progress" id="progress" style="display:none;;width: 30%;margin: 0 10px 0 10px;">'
	   +'<span id="up-progress" class="sr-only">0% 已完成</span>'
	   +'<div id="progress-bar"  style="height: 20px;width:0%;background-color: #5cb85c;">'  
	   +'</div>'
	   +'</div>';

web_obj.innerHTML = web_txt;
emu_up_config();
}
//上传值的初始化
function emu_up_config(){
	const up_select_option = document.getElementById('emu_up_select');
	const emu_name = document.getElementById('emu_name');
	const emu_path = document.getElementById('emu_path');
	const emu_core = document.getElementById('emu_core');
	const emu_ico = document.getElementById('emu_ico');
	const emu_img = document.getElementById('emu_img');
	const emu_txt = document.getElementById('emu_txt');
	const emu_ver = document.getElementById('emu_ver');
	up_select_option.innerHTML='';
	for (var i = 0; i < mtn_emu_list.length; i++) { 
		var option = document.createElement('option');
		option.value = i;
		option.text = mtn_emu_list[i].emu_name;
		up_select_option.appendChild(option);
		up_select_option.addEventListener('change', function() {
			var selectedValue = this.value;
			emu_name.value=mtn_emu_list[selectedValue].emu_name;
			emu_path.value=mtn_emu_list[selectedValue].emu_path;
			emu_core.value=mtn_emu_list[selectedValue].emu_core;
			emu_ico.value=mtn_emu_list[selectedValue].emu_ico;
			emu_img.value=mtn_emu_list[selectedValue].emu_img;
			emu_txt.value=mtn_emu_list[selectedValue].emu_txt;
			emu_ver.value=mtn_emu_list[selectedValue].emu_ver;
		});
	}
}

//获取选中的模拟器icon路径
async function emu_rar_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.file_path();
	var emu_path_rar = document.getElementById('emu_path_rar');
	if (result !== "") {
	// 文件夹路径不为空的处理逻辑
	emu_path_rar.value=result;
	} 
	return result; 
}
//上传到数据库
async function emu_up_flie(){
	var formDataObject = {};
	const emu_name = document.getElementById('emu_name');
	const emu_path = document.getElementById('emu_path');
	const emu_path_rar = document.getElementById('emu_path_rar');
	const emu_core = document.getElementById('emu_core');
	const emu_ico = document.getElementById('emu_ico');
	const emu_img = document.getElementById('emu_img');
	const emu_txt = document.getElementById('emu_txt');
	const emu_ver = document.getElementById('emu_ver');
	if((emu_path_rar.value != '' && emu_path.value !=''&& emu_img.value !='')||(emu_core.value != '')){
		formDataObject['emu_name'] = emu_name.value;
		formDataObject['emu_path'] = emu_path.value;
		formDataObject['emu_core'] = emu_core.value;
		formDataObject['emu_ico'] = emu_ico.value;
		formDataObject['emu_img'] = emu_img.value;
		formDataObject['emu_txt']= emu_txt.value;
		formDataObject['emu_path_rar'] = emu_path_rar.value;
		formDataObject['emu_ver'] = emu_ver.value;
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.emu_up_flie(formDataObject);
		if (result !== "") {
			//alert('上传成功');
			} 
	}else{
		alert('上传数据有错误');
}
}