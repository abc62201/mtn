async function classify_up_web(classify_id){
	joy_start(0);
	var web_obj = document.getElementById('main_content');
	var web_txt='';
	web_txt+='<h2>当前选择：基础设置-修改分类</h2>';
	web_obj.innerHTML = web_txt;
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_classify_up_table(classify_id);
	if(result.length==0){
		return;
	}else
	{
	const parsedResult = JSON.parse(result);
	web_txt+='<form id="settingsForm" class="classify_form">'
	+'<div class="setting-label">尽量使用英文分类保证所有游戏模拟器都能正常运行，不要添加除了_之外的特殊字符</div>'
	
	+'<div class="inline-radio-group">'
	+'<label for="classify_order">排列序号</label>'
	+'<input type="text" class="form-control" id="classify_order" name="classify_order" value="'+parsedResult[0].classify_order+'">'
	+'</div>'

	
	+'<div class="inline-radio-group">'
	+'<label for="classify">分类</label>'
	+'<input type="text" class="form-control" id="classify" name="classify" value="'+parsedResult[0].classify+'">'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="daohang_name">导航名称</label>'
	+'<input type="text" class="form-control" id="daohang_name" name="daohang_name" value="'+parsedResult[0].daohang_name+'">'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="daohang_ico">导航图标</label></div>'
	+'<div class="inline-radio-group">'
	+'<img id="daohang_ico_img" src="'+ispath(parsedResult[0].daohang_ico)+'" style="width: 32px;height: 32px;"/></div>'
	+'<div class="inline-radio-group">'
	//+'<input type="text" class="form-control" id="daohang_ico" name="daohang_ico" value="'+parsedResult[0].daohang_ico+'">'
	+'<input type="text" class="form-control" id="daohang_ico" name="daohang_ico" value="'+(parsedResult[0].daohang_ico || '')+'">'
	+'<button type="button" onclick="daohang_add_ico()">选择文件</button>'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="daohang_bg">导航背景图片</label></div>'
	+'<div class="inline-radio-group">'
	+'<img id="daohang_bg_img" src="'+ispath(parsedResult[0].daohang_bg)+'" style="width: 100px;height: 60px;"/></div>'
	+'<div class="inline-radio-group">'
	+'<input type="text" class="form-control" id="daohang_bg" name="daohang_bg" value="'+(parsedResult[0].daohang_bg || '')+'">'
	+'<button type="button" onclick="daohang_add_bg()">选择文件</button>'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="daohang_img">导航图片</label></div>'
	+'<div class="inline-radio-group">'
	+'<img id="daohang_img_img" src="'+ispath(parsedResult[0].daohang_img)+'" style="width: 60px;height: 60px;"/></div>'
	+'<div class="inline-radio-group">'
	+'<input type="text" class="form-control" id="daohang_img" name="daohang_img" value="'+(parsedResult[0].daohang_img || '')+'">'
	+'<button type="button" onclick="daohang_add_img()">选择文件</button>'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="other_img">其他图片</label></div>'
	+'<div class="inline-radio-group">'
	+'<img id="other_img_img" src="'+ispath(parsedResult[0].other_img)+'" style="width: 60px;height: 60px;"/></div>'
	+'<div class="inline-radio-group" >'
	+'<input type="text" class="form-control" id="other_img"  name="other_img" value="'+(parsedResult[0].other_img || '')+'">'
	+'<button type="button" onclick="daohang_add_other()">选择文件</button>'
	+'</div>'
	+'<div id="classify_emu_ico" class="classify_emu_ico"></div>'
	+'<div class="inline-radio-group">'
	+'<label for="game_emu_id">选择模拟器</label>'
	+'<input type="text" style="display: none;" id="game_emu_id" name="game_emu_id" value="'+parsedResult[0].game_emu_id+'">'
	+'<button type="button" onclick="classify_select_emu()">选择模拟器</button>'
	+'</div>'
	+'<div id="classify_core_ico" class="classify_core_ico"></div>'
	+'<div class="inline-radio-group">'
	+'<label for="emu_core_id">选择模拟器核心</label>'
	+'<input type="text" style="display: none;" id="emu_core_id" name="emu_core_id" value="'+parsedResult[0].emu_core_id+'">'
	+'<button type="button" onclick="classify_select_core()">选择核心</button>'
	+'</div>'
	+'<div class="inline-radio-group">'
	+'<label for="emu_core_id">添加启动参数</label></div>'
	+'<div class="inline-radio-group">'
	+'<label for="emu_core_id">选择</label>'
	+'<select id="country" name="country"></select></div>'
	+'<div class="inline-radio-group">'
	+'<input type="text" id="emu_args"  name="emu_args" style="width: 50%; value="'+parsedResult[0].emu_args+'">'
	+'</div>'
	+'<div id="classify_ui_img" class="classify_ui_img"></div>'
	+'<div class="inline-radio-group">'
	+'<label for="ui_name_id">选择主题</label>'
	+'<input type="text" style="display: none;" id="ui_name_id" name="ui_name_id" value="'+parsedResult[0].ui_name_id+'">'
	+'<button type="button" onclick="classify_select_ui()">选择主题</button>'
	+'</div>'
	+'<div class="inline-radio-group">'	
	+'<label for="emu_core_id">分类等级</label></div>'
	+'<div class="inline-radio-group">'
	+'<input type="radio" id="classify_level_0" name="classify_level" value="0" onclick="classify_level_set()" checked>'
	+'<label for="classify_level_0">主分类</label>'
	+'<input type="radio" id="classify_level_1" name="classify_level" value="1" onclick="classify_level_set()" >'
	+'<label for="classify_level_1">子分类</label></div>'
	+'<div id="classify_level_z" style="display: none;">'
	+'<div class="inline-radio-group">'	
	+'<label for="classify_level_z">请选择新分类属于下面哪个分类</label></div>'
	+'</div>'
	+'<input type="text" style="display: none;" id="classify_level" name="classify_level" value="'+parsedResult[0].classify_level+'">'
	+'<input type="text" style="display: none;" id="classify_id" name="classify_id" value="'+parsedResult[0].classify_id+'">'
	+'<div id="classify_level_name" class="classify_level_name"></div>'
	+'<div class="inline-radio-group">'
	+'<button type="button"  class="classify_add_button" onclick="classify_up_entr('+parsedResult[0].id+')">确定</button>'
	+'<button type="button"  class="classify_add_button" onclick="classify_add_esc()">取消</button>'
	+'</div>'
	+'<div class="classify_down"></div>'
	+'</form>';
	web_obj.innerHTML = web_txt;
	
	classify_args_select();
	classify_up_web_init(parsedResult);
	
	}
//classify_web_table();
}
function classify_add_esc(){
	classify_set_web();
}
async function classify_up_web_init(daohang_list){
	
	if(daohang_list[0].game_emu_id){	
	var index = Number(daohang_list[0].game_emu_id);
	var emulator = mtn_emu_list.find(item => item.id === index);
	if(emulator){
		var classify_emu_ico = document.getElementById('classify_emu_ico');
		classify_emu_ico.style.display = 'block';
		var classify_emu_ico_img = document.createElement('img');
		classify_emu_ico_img.className='classify_emu_ico_img'	
		classify_emu_ico_img.src =ispath(emulator['emu_ico']);	
		classify_emu_ico.innerHTML = '';
		classify_emu_ico.appendChild(classify_emu_ico_img);
	}
}

if(daohang_list[0].game_emu_id){
	var index = Number(daohang_list[0].emu_core_id);
	var emulator = mtn_emu_list.find(item => item.id === index);
	if(emulator){
		var classify_core_ico = document.getElementById('classify_core_ico');
		classify_core_ico.style.display = 'block';
		var classify_core_ico_img = document.createElement('img');
		classify_core_ico_img.className='classify_emu_ico_img'	
		classify_core_ico_img.src =ispath(emulator['emu_ico']);	
		classify_core_ico.innerHTML = '';
		classify_core_ico.appendChild(classify_core_ico_img);
	}
}
if(daohang_list[0].emu_args){
	var emu_args = document.getElementById('emu_args');
	emu_args.value = daohang_list[0].emu_args;
}

if(daohang_list[0].ui_name_id){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.get_ui(daohang_list[0].ui_name_id);
	if(result !=""){
		const ui_list = JSON.parse(result);
		var classify_ui_img = document.getElementById('classify_ui_img');
		classify_ui_img.style.display = 'block';
		var classify_ui_img_img = document.createElement('img');
		classify_ui_img_img.className='classify_ui_img_img'
		classify_ui_img_img.src =ispath(ui_list[0].ui_img);
		classify_ui_img.innerHTML = '';
		classify_ui_img.appendChild(classify_ui_img_img);
	}
}
if(Number(daohang_list[0].classify_level)>0){
var classify_level_1 = document.getElementById('classify_level_1');
classify_level_1.checked=true;
classify_level_set();
}
}
async function classify_up_entr(daohang_id){
	var formDataObject = {};
	var classify = document.getElementById('classify');
	var daohang_name=document.getElementById('daohang_name');
	var daohang_ico=document.getElementById('daohang_ico');
	var daohang_bg=document.getElementById('daohang_bg');
	var daohang_img=document.getElementById('daohang_img');
	var other_img=document.getElementById('other_img');
	var game_emu_id=document.getElementById('game_emu_id');
	var emu_core_id=document.getElementById('emu_core_id');
	var emu_args=document.getElementById('emu_args');
	var ui_name_id=document.getElementById('ui_name_id');
	var classify_level=document.getElementById('classify_level');
	var classify_id=document.getElementById('classify_id');
	if(classify.value=="" && daohang_name.value==""){
		alert('请输入分类和名称');
		return;
	}
	var classify_order=document.getElementById('classify_order');
	if(classify_order.value==""){
		alert('排列序号不能留空');
		return;
	}
	formDataObject["id"]=daohang_id;
	formDataObject['classify']=classify.value;
	formDataObject['daohang_name']=daohang_name.value;
	formDataObject['daohang_ico']=daohang_ico.value;
	formDataObject['daohang_bg']=daohang_bg.value;
	formDataObject['daohang_img']=daohang_img.value;
	formDataObject['other_img']=other_img.value;
	formDataObject['game_emu_id']=game_emu_id.value;
	formDataObject['emu_core_id']=emu_core_id.value;
    formDataObject['emu_args']=emu_args.value;
	formDataObject['ui_name_id']=ui_name_id.value;
	formDataObject['classify_level']=classify_level.value;
	formDataObject['classify_id']=classify_id.value;
	formDataObject['classify_order']=classify_order.value;
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.classify_up_entr(formDataObject);
	if(result=="ok"){
		classify_set_web();
	}else{
		alert(result);
	}
}
