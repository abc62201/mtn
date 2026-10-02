//启动设置页
function set_args_web(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-启动参数设置</h2>';
web_txt+='<div class="emu_args_form"><p>启动参数设置	使用说明部分软件启动时需要启动参数，例如：</p>'
		+'<p>RetroArc模拟器启动游戏rom时需要使用到运行参数才能启动游戏rom和核心</p>'
		+'<p>retroarch[模拟器] -L[参数] 核心 游戏；或者 retroarch -L 核心  -f[全屏参数] 游戏  </p>'
		+'<p>梦童年参数设置为{emu}+ -L {core} -f +{gamefullpath} </p>'
		+'<p>mame模拟器{emu}+ -rompath {gamepath};roms +{gamefullname}</p>'
		+'<p>fbneo模拟器{emu}+ {gamename} -ips +{ipsfile}</p>'
		+'<p>pc游戏或直接运行的软件{gamefullpath}++<p/>'
		+'<p>注意格式为1.运行的文件+(加号)2启动参数+(加号)3使用启动文件运行的文件</p>'
		+'<p>{emu}=模拟器全路径{core}=核心全路径'
		+'{gamefullpath}=游戏全路径包括游戏名'
		+'{gamepath}=游戏路径不带游戏名'
		+'{gamefullname}=游戏全名'
		+'{gamename}=不带扩展名的游戏名'
		+'{ipsfile}=ips文件名</p>'
		+'<div class="emu_args_text" onclick="emu_args(1);">模拟器</div>'
		+'<div class="emu_args_text" onclick="emu_args(2)">核心</div>'
		+'<div class="emu_args_text" onclick="emu_args(3)">全路径包括游戏名</div>'
		+'<div class="emu_args_text" onclick="emu_args(4)">游戏路径带引号</div>'
		+'<div class="emu_args_text" onclick="emu_args(8)">游戏路径不带引号</div>'
		+'<div class="emu_args_text" onclick="emu_args(5)">游戏全名</div>'
		+'<div class="emu_args_text" onclick="emu_args(6)">不带扩展名的游戏名</div>'
		+'<div class="emu_args_text" onclick="emu_args(7)">ips文件名</div>'
		+'<form id="settingsForm">'
		+'<label for="country">已经添加的参数名:</label>'
        +'<select id="country" name="country"></select>'
            //<option value="cn">CN</option>
		+'<div class="form-item">'
		+'<label for="args_name">参数别名—注意不能重名:</label>'
		+'<input type="text"  id="args_name" name="args_name"><br><br><br></div>'
		+'<div class="form-item">'
		+'<label for="args" style="width:200px;">参数命令行:</label>'
		+'<input type="text" style="width:800px;" id="args" name="args">'
		+'</div><div class="emu_button">'
		+'<button type="button"   onclick="args_add()">添加</button>'
		+'<button type="button"   onclick="args_up()">修改</button>'
		+'<button type="button"   onclick="args_del()">删除</button>'
		+'</div></form></div>';
web_obj.innerHTML = web_txt;

args_config_set();

}

//删除启动参数
async function args_del(){
	var form= document.getElementById('settingsForm');
	
	if(form.country.value=='0'){
		alert('请选择要修改的参数');
		return;
	}else{
		await CefSharp.BindObjectAsync('indexViewBinding'); 
		const result=await window.indexViewBinding.args_del(form.country.value);
		if(result=='ok'){
			args_config_set();
		}
	}
}
//修改启动参数
async function args_up(){
	var form= document.getElementById('settingsForm');
	
	if(form.country.value=='0'){
		alert('请选择要修改的参数');
		return;
	}else if(form.args_name.value=='' || form.args.value==''){
		alert('请输入参数别名和参数');
		return;
	}else{
		var formDataObject = {};
		formDataObject['args_id']=form.country.value;
		formDataObject['args_name']=form.args_name.value;
		formDataObject['args']=form.args.value;
		await CefSharp.BindObjectAsync('indexViewBinding'); 
		const result=await window.indexViewBinding.args_up(formDataObject);
		if(result=='ok'){
			args_config_set();
		}
	}
}
//添加启动参数
async function args_add(){
	var form= document.getElementById('settingsForm');
	if(form.args_name.value=='' || form.args.value==''){
		alert('请输入参数别名和参数');
		return;
	}
	var formDataObject = {};
	formDataObject['args_id']=form.country.value;
	formDataObject['args_name']=form.args_name.value;
	formDataObject['args']=form.args.value;
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.args_add(formDataObject);
	if(result=='ok'){
		args_config_set();
	}
}
//初始化菜单
function args_config_set(){
	var args_set_option = document.getElementById('country');
	var args_name= document.getElementById('args_name');
	var args_val = document.getElementById('args');
	args_name.value =mtn_args_list[0]['args_name'];
	args_val.value =mtn_args_list[0]['args'];
	args_set_option.innerHTML = '';
	//args_set_option.innerHTML='<option value="0" value_args=" ">无</option>';
	for(var i=0;i<mtn_args_list.length;i++){
		var args_set_option_item = document.createElement('option');
		args_set_option_item.value = mtn_args_list[i]['id'];
		args_set_option_item.text = mtn_args_list[i]['args_name'];
		args_set_option_item.value_args = mtn_args_list[i]['args'];
		args_set_option.appendChild(args_set_option_item);
		args_set_option.addEventListener('change', function() {
			var selectedItem = this.options[this.selectedIndex];
			var value_args = selectedItem.value_args;
			var value_name = selectedItem.text;
			var args_name= document.getElementById('args_name');
			args_name.value =value_name;
			var args_val = document.getElementById('args');
			args_val.value = value_args;
		});
	}
}
//输入参数
function emu_args(value){
	var args_val = document.getElementById('args');
	switch (value) {
		case 1:
			args_val.value += '{emu}';
			break;
		case 2:
			args_val.value += '{core}';
			break;
		case 3:
			args_val.value += '{gamefullpath}';
			break;
		case 4:
			args_val.value += '{gamepath}';
			break;
		case 5:
			args_val.value += '{gamefullname}';
			break;
		case 6:
			args_val.value += '{gamename}';
			break;
		case 7:
			args_val.value += '{ipsfile}';
			break;
		case 8:
			args_val.value += '{gamepathnoquote}';
			break;
	}
	
}