//启动设置页
var emu_id=1;

function set_emu_web(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-模拟器设置</h2>';
web_txt+='<div id="emu_set_form" class="emu_set_form">'
		+'<form id="settingsForm">'
		+'<div style="display: flex; flex-wrap: wrap;">'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器别名—注意不能重名</label>'
		+'<input type="text"  id="emu_name" name="emu_name"></div>'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器文件</label>'
		+'<input type="text"  id="emu_path" name="emu_path">'
		+'<button type="button" onclick="emu_path_flie()">选择</button></div>'
		+'<div class="form-item">'
		+'<label for="start_t">全能模拟器核心</label>'
		+'<input type="text" id="emu_core" name="emu_core">'
		+'<button type="button" onclick="emu_core_flie()">选择</button></div>'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器版本</label>'
		+'<input type="text" id="emu_ver" name="emu_ver"></div>'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器图标</label>'
		+'<input type="text"  id="emu_ico" name="emu_ico">'
		+'<button type="button" onclick="emu_ico_flie()">选择</button></div>'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器图片</label>'
		+'<input type="text" id="emu_img" name="emu_img">'
		+'<button type="button" onclick="emu_img_flie()">选择</button></div>'
		+'<div class="form-item">'
		+'<label for="start_t">模拟器简介文本</label>'
		+'<input type="text" id="emu_txt" name="emu_txt">'
		+'<button type="button" onclick="emu_txt_flie()">选择</button></div></div>'
		+'<div class="emu_button">'
		+'<button type="button" id="button_add" onclick="emu_add()">添加</button>'
		+'<button type="button" id="button_up" onclick="emu_up()">修改</button>'
		+'<button type="button" onclick="emu_cancel()">取消</button>' // 添加保存按钮
		+'</div></form></div>'
		+'<div class="emu_div" id="emu_div" >'
		+'</div>'
		+'<div id="emu_ContextMenu" class="custom-context-menu" style="display: none; position: absolute;">'
		+'<ul><li id="emu_ContextMenu1" onclick="emu_set_bj()">更换背景图片</li>'
		+'<li id="emu_ContextMenu2" onclick="emu_ico_big()">大图标</li>'
		+'<li id="emu_ContextMenu3" onclick="emu_ico_mid()">中图标</li>'
		+'<li id="emu_ContextMenu4" onclick="emu_ico_small()">小图标</li>'
		+'<li id="emu_ContextMenu5" onclick="emu_con_add()">添加模拟器</li>'
		+'</ul></div>'
		+'<div id="customContextMenu" class="custom-context-menu" style="display: none; position: absolute;">'
		+'<ul><li id="menuItemEdit1" onclick="emu_run()">运行</li>'
		+'<li id="menuItempath2" onclick="emu_find_flie()">目录</li>'
		+'<li id="menuItempath3" onclick="emu_del()">删除</li>'
		+'<li id="menuItempath4" onclick="emu_con_up()">修改</li>'
		+'<li id="menuItempath5" onclick="emu_open_intro()">简介</li>'
		+'</ul></div>';
web_obj.innerHTML = web_txt;

set_emu_value(emu_id);

upemu_div();

emu_config_set();

}

//取消按钮
function emu_cancel(){
	var emu_set_form = document.getElementById('emu_set_form');
	emu_set_form.style.display = 'none';
	var emu_div = document.getElementById('emu_div');
	emu_div.style.height = '95%';
}
//菜单选择修改模拟器
function emu_con_up(){

	var emu_set_form = document.getElementById('emu_set_form');
	emu_set_form.style.display = 'block';
	var emu_set_form = document.getElementById('button_add');
	emu_set_form.style.display = 'none';
	var emu_set_form = document.getElementById('button_up');
	emu_set_form.style.display = 'block';
	var emu_div = document.getElementById('emu_div');
	emu_div.style.height = '73%';
	
	var customMenu = document.getElementById('customContextMenu');
	customMenu.style.display = 'none';	
}
//菜单选择添加模拟器
function emu_con_add(){
	var emu_set_form = document.getElementById('emu_set_form');
	emu_set_form.style.display = 'block';
	var emu_set_form = document.getElementById('button_add');
	emu_set_form.style.display = 'block';
	var emu_set_form = document.getElementById('button_up');
	emu_set_form.style.display = 'none';
	var emu_div = document.getElementById('emu_div');
	emu_div.style.height = '73%';
	
	var customMenu = document.getElementById('emu_ContextMenu');
	customMenu.style.display = 'none';
}

//修改成小图标
async function emu_ico_small(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.emu_ico_size('0');
	if (result !== ""){
		emu_config_set();
	}
	var customMenu = document.getElementById('emu_ContextMenu');
	customMenu.style.display = 'none';
	}
//修改成中图标
async function emu_ico_mid(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.emu_ico_size('1');
	if (result !== ""){
		emu_config_set();
	}
	var customMenu = document.getElementById('emu_ContextMenu');
	customMenu.style.display = 'none';
	}
//修改成大图标
async function emu_ico_big(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.emu_ico_size('2');
	if (result !== ""){
		emu_config_set();
	}
	var customMenu = document.getElementById('emu_ContextMenu');
	customMenu.style.display = 'none';
	}
//'更换背景图片
async function emu_set_bj(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.emu_img_replace();
	const emu_bj_img=document.getElementById('emu_div');
	if (result !== ""){
		emu_bj_img.style.backgroundImage='url('+ispath(result)+')';
	}
	var customMenu = document.getElementById('emu_ContextMenu');
	customMenu.style.display = 'none';

}
//模拟器外观初始化
function emu_config_set(){
	const emu_bj_img=document.getElementById('emu_div');
	emu_bj_img.style.backgroundImage='url('+ispath(mtn_emu_config_list[0]['emu_bg_img'])+')';
	var imgElements = document.querySelectorAll('.emu_div_item_img > img');
// 遍历选择的元素
for (var i = 0; i < imgElements.length; i++) {
    // 修改元素的样式
	switch (mtn_emu_config_list[0]['emu_ico_size']) {
		case '0':
			imgElements[i].style.width = '32px'; 
			imgElements[i].style.height = '32px'; 
			break;
		case '1':
			imgElements[i].style.width = '60px'; 
			imgElements[i].style.height = '60px'; 
			break;
		case '2':
			imgElements[i].style.width = '100px'; 
			imgElements[i].style.height = '100px'; 
			break;
		default:
			imgElements[i].style.width = '60px'; 
			imgElements[i].style.height = '60px'; 
			break;
	}

}

}
//创建模拟器图标
function upemu_div(){

	//添加模拟器图标
	var listdiv = document.getElementById('emu_div');
	listdiv.innerHTML="";
	for (var i = 0; i < mtn_emu_list.length; i++) {
		
		var itemDiv = document.createElement('div');
		var imgDiv = document.createElement('div');
		var txtDiv = document.createElement('div');
		
		itemDiv.className = 'emu_div_item';
		itemDiv.setAttribute('value',mtn_emu_list[i]['id']);
		imgDiv.className = 'emu_div_item_img';
		
		txtDiv.className = 'emu_div_item_txt';
		var imgElement = document.createElement('img');	

		imgElement.src =ispath(mtn_emu_list[i]['emu_ico']);
		imgDiv.appendChild(imgElement);
		var nameDiv = document.createElement('div');
		nameDiv.textContent = mtn_emu_list[i]['emu_name'];
		itemDiv.appendChild(imgDiv);		
		txtDiv.appendChild(nameDiv);
		itemDiv.appendChild(txtDiv);
		listdiv.appendChild(itemDiv);
		//鼠标点击事件
		itemDiv.addEventListener('click', function() {
			var selectedItem = this;
			var value = selectedItem.getAttribute('value');
			emu_id=value;
			set_emu_value(Number(value));
		});
		itemDiv.addEventListener('dblclick', function() {
			var selectedItem = this;
			var value = selectedItem.getAttribute('value');
			emu_id=value;
			set_emu_value(Number(value));
			emu_run();
		});

		//给每个图标鼠标右键事件
		itemDiv.addEventListener('contextmenu', function(event) {
			event.preventDefault();	
			var customMenu = document.getElementById('customContextMenu');
			customMenu.style.display = 'block';
			customMenu.style.top = event.clientY + 'px';
			customMenu.style.left = event.clientX+10 + 'px';	
			var emulatorId = this.getAttribute('value');
			emu_id=emulatorId;
			set_emu_value(Number(emulatorId));

			// 添加关闭菜单的全局监听
			document.addEventListener('click', function closeCustomMenu(e) {
				if (e.target !== customMenu && !customMenu.contains(e.target)) {
								customMenu.style.display = 'none';
				document.removeEventListener('click', closeCustomMenu);
				}
			});
			});			
}
		//模拟器展示页添加右键菜单
		listdiv.addEventListener('contextmenu', function(event) {
			if (event.target === listdiv) {
				var selectedItem = this;
				var customMenu = document.getElementById('emu_ContextMenu');
				customMenu.style.display = 'block';
				customMenu.style.top = event.clientY + 'px';
				customMenu.style.left = event.clientX+10 + 'px';	
				// 在这里处理 listDiv 的右键事件逻辑
				document.addEventListener('click', function closeCustomMenu(e) {
					if (e.target !== customMenu && !customMenu.contains(e.target)) {
									customMenu.style.display = 'none';
					document.removeEventListener('click', closeCustomMenu);
					}
				});
			} 	
		});
}
//设置默认值
function set_emu_value(emulatorId) {
    // 查找具有指定ID的模拟器
    var emulator = mtn_emu_list.find(item => item.id === emulatorId);
    if (emulator) {
        // 设置模拟器路径
        var emu_path = document.getElementById('emu_path');
        emu_path.value = emulator['emu_path'];

        // 设置模拟器别名
        var emu_name = document.getElementById('emu_name');
        emu_name.value = emulator['emu_name'];

        // 设置模拟器icon
        var emu_ico = document.getElementById('emu_ico');
        emu_ico.value = emulator['emu_ico'];

        // 设置模拟器core
        var emu_core = document.getElementById('emu_core');
        emu_core.value = emulator['emu_core'];

        // 设置模拟器img
        var emu_img = document.getElementById('emu_img');
        emu_img.value = emulator['emu_img'];

        // 设置模拟器txt
        var emu_txt = document.getElementById('emu_txt');
        emu_txt.value = emulator['emu_txt'];

        // 设置模拟器版本
        var emu_ver = document.getElementById('emu_ver');
        emu_ver.value = emulator['emu_ver'];
		//模拟器选中效果
		var emu_div_item = document.querySelectorAll(".emu_div_item");
		for (var i = 0; i < emu_div_item.length; i++) {
			emu_div_item[i].classList.remove("selected");
		}
		// 找到对应值的图标元素并添加选中类
		var selectedEmuItem = Array.from(emu_div_item).find((item) => {
				return Number(item.getAttribute('value')) === emulatorId;
		});
		if (selectedEmuItem) {
				selectedEmuItem.classList.add("selected");
		}
    } else {
       
    }


}
//获取选中的模拟器路径
async function emu_path_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.file_path('emu/ico');
	var emu_path = document.getElementById('emu_path');
	var emu_ico = document.getElementById('emu_ico');
	var emu_name = document.getElementById('emu_name');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
emu_path.value=result.split(';')[0];
emu_ico.value=result.split(';')[1];
emu_name.value=result.split(';')[2];
} 
return result; 
}

//获取选中的模拟器icon路径
async function emu_ico_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.file_path();
	var emu_ico = document.getElementById('emu_ico');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
emu_ico.value=result;
} 
return result; 
}
//获取选中的模拟器core路径
async function emu_core_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.file_path();
	var emu_core = document.getElementById('emu_core');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
emu_core.value=result;
} 
return result; 
}
//获取选中的模拟器img路径
async function emu_img_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	var emu_img = document.getElementById('emu_img');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
emu_img.value=result;
}
return result;
}
//获取选中的模拟器txt路径
async function emu_txt_flie(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	var emu_txt = document.getElementById('emu_txt');
	if (result !== "") {
// 文件夹路径不为空的处理逻辑
emu_txt.value=result;
}
return result;
}

//添加模拟器
async function emu_add() { 
	var form = document.getElementById('settingsForm');
	var formData = new FormData(form);
		// 转换表单数据为普通对象
	  var formDataObject = {};
	  formData.forEach(function(value, key){
		  formDataObject[key] = value;
	  });
		  await CefSharp.BindObjectAsync('indexViewBinding'); 	
		  const result=await window.indexViewBinding.emu_add(formDataObject);
		  if (result !== "") {
			  upemu_div();
		  }
		  var emu_set_form = document.getElementById('emu_set_form');
		  emu_set_form.style.display = 'none';
		  var emu_div = document.getElementById('emu_div');
		  emu_div.style.height = '95%';
	  return result; 
   } 
//修改模拟器
   async function emu_up() { 
	var form = document.getElementById('settingsForm');
	var formData = new FormData(form);
		// 转换表单数据为普通对象
	  var formDataObject = {};
	  formDataObject['emu_id'] = emu_id;
	  formData.forEach(function(value, key){
		  formDataObject[key] = value;
	  });
		  await CefSharp.BindObjectAsync('indexViewBinding'); 	
		  const result=await window.indexViewBinding.emu_up(formDataObject);
		  if (result !== "") {
			  upemu_div();
		  }
		  var emu_set_form = document.getElementById('emu_set_form');
		  emu_set_form.style.display = 'none';
		  var emu_div = document.getElementById('emu_div');
		  emu_div.style.height = '95%';
	  return result; 
   } 
//删除模拟器
async function emu_del() { 
		  await CefSharp.BindObjectAsync('indexViewBinding'); 	
		  const result=await window.indexViewBinding.emu_del(emu_id);
		  if (result !== "") {
			  upemu_div();
		  }
		  var customMenu = document.getElementById('customContextMenu');
		  customMenu.style.display = 'none';
	  return result; 
   } 
//运行模拟器
async function emu_run() {
	var emu_path = document.getElementById('emu_path');
	const emu_path_value = emu_path.value;
	var customMenu = document.getElementById('customContextMenu');
	customMenu.style.display = 'none';
	if (emu_path_value === "") {
		alert("请选择模拟器路径");
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_run(emu_path_value);	
   }
   //打开文件夹
   async function emu_find_flie() { 
	var emu_path = document.getElementById('emu_path');
	const emu_path_value = emu_path.value;
	var customMenu = document.getElementById('customContextMenu');
	customMenu.style.display = 'none';
	if (emu_path_value === "") {
		alert("请选择模拟器路径");
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.open_file_path(emu_path_value);	

   }
   //打开简介
   async function emu_open_intro() { 
	var emu_path = document.getElementById('emu_txt');
	const emu_path_value = emu_path.value;
	var customMenu = document.getElementById('customContextMenu');
	customMenu.style.display = 'none';
	if (emu_path_value === "") {
		alert("未添加简介");
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_run(emu_path_value);	

   }
   