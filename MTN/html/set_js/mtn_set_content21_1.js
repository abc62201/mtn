var fenlie_daohang_id = 0;
function classify_add_web(){
	joy_start(0);
	var web_obj = document.getElementById('main_content');
	var web_txt='';
	web_txt+='<h2>当前选择：基础设置-添加分类</h2>'
			+'<form id="settingsForm" class="classify_form">'
			+'<div class="setting-label">尽量使用英文分类保证所有游戏模拟器都能正常运行，不要添加除了_之外的特殊字符</div>'

			+'<div class="inline-radio-group">'
			+'<label for="classify_order">排列序号</label>'
			+'<input type="text" class="form-control" id="classify_order" name="classify_order" placeholder="排列序号">'
			+'</div>'
			
			+'<div class="inline-radio-group">'
			+'<label for="classify">分类</label>'
			+'<input type="text" class="form-control" id="classify" name="classify" placeholder="请输入分类">'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="daohang_name">导航名称</label>'
			+'<input type="text" class="form-control" id="daohang_name" name="daohang_name" placeholder="请输入导航名称">'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="daohang_ico">导航图标</label></div>'

			+'<div class="inline-radio-group">'
			+'<img id="daohang_ico_img" src="" style="width: 32px;height: 32px;"/></div>'

			+'<div class="inline-radio-group">'
			+'<input type="text" class="form-control" id="daohang_ico" name="daohang_ico" placeholder="请选择文件">'
			+'<button type="button" onclick="daohang_add_ico()">选择文件</button>'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="daohang_bg">导航背景图片</label></div>'

			+'<div class="inline-radio-group">'
			+'<img id="daohang_bg_img" src="" style="width: 100px;height: 60px;"/></div>'

			+'<div class="inline-radio-group">'
			+'<input type="text" class="form-control" id="daohang_bg" name="daohang_bg" placeholder="请选择文件">'
			+'<button type="button" onclick="daohang_add_bg()">选择文件</button>'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="daohang_img">导航图片</label></div>'

			+'<div class="inline-radio-group">'
			+'<img id="daohang_img_img" src="" style="width: 60px;height: 60px;"/></div>'

			+'<div class="inline-radio-group">'
			+'<input type="text" class="form-control" id="daohang_img" name="daohang_img" placeholder="请选择文件">'
			+'<button type="button" onclick="daohang_add_img()">选择文件</button>'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="other_img">其他图片</label></div>'

			+'<div class="inline-radio-group">'
			+'<img id="other_img_img" src="" style="width: 60px;height: 60px;"/></div>'

			+'<div class="inline-radio-group" >'
			+'<input type="text" class="form-control" id="other_img"  name="other_img" placeholder="请选择文件">'
			+'<button type="button" onclick="daohang_add_other()">选择文件</button>'
			+'</div>'

			+'<div id="classify_emu_ico" class="classify_emu_ico"></div>'

			+'<div class="inline-radio-group">'
			+'<label for="game_emu_id">选择模拟器</label>'
			+'<input type="text" style="display: none;" id="game_emu_id" name="game_emu_id">'
			+'<button type="button" onclick="classify_select_emu()">选择模拟器</button>'
			+'</div>'

			+'<div id="classify_core_ico" class="classify_core_ico"></div>'

			+'<div class="inline-radio-group">'
			+'<label for="emu_core_id">选择模拟器核心</label>'
			+'<input type="text" style="display: none;" id="emu_core_id" name="emu_core_id">'
			+'<button type="button" onclick="classify_select_core()">选择核心</button>'
			+'</div>'

			+'<div class="inline-radio-group">'
			+'<label for="emu_core_id">添加启动参数</label></div>'

			+'<div class="inline-radio-group">'
			+'<label for="emu_core_id">选择</label>'
			+'<select id="country" name="country"></select></div>'

			+'<div class="inline-radio-group">'
			+'<input type="text" id="emu_args"  name="emu_args" style="width: 50%;">'			
			+'</div>'

			+'<div id="classify_ui_img" class="classify_ui_img"></div>'

			+'<div class="inline-radio-group">'
			+'<label for="ui_name_id">选择主题</label>'
			+'<input type="text" style="display: none;" id="ui_name_id" name="ui_name_id">'
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
			+'<input type="text" style="display: none;" id="classify_level" name="classify_level" value="0">'
			+'<input type="text" style="display: none;" id="classify_id" name="classify_id">'
			+'<div id="classify_level_name" class="classify_level_name"></div>'


			+'<div class="inline-radio-group">'
			+'<button type="button"  class="classify_add_button" onclick="classify_add_entr()">确定</button>'
			+'<button type="button"  class="classify_add_button" onclick="classify_add_esc()">取消</button>'
			+'</div>'
			+'<div class="classify_down"></div>'
			+'</form>';
			
	web_obj.innerHTML = web_txt;
	classify_args_select();
//classify_web_table();
}
function classify_add_esc(){
	classify_set_web();
}

async function classify_add_entr(){
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
	const result=await window.indexViewBinding.classify_add_entr(formDataObject);
	if(result=="ok"){
		classify_set_web();
	}else{
		alert(result);
	}
}
//初始化菜单
function classify_args_select(){
	var args_set_option = document.getElementById('country');
	var emu_args = document.getElementById('emu_args');
	args_set_option.innerHTML = '';
	args_set_option.innerHTML='<option value="0" value_args="">未选择</option>';
	for(var i=0;i<mtn_args_list.length;i++){
		var args_set_option_item = document.createElement('option');
		args_set_option_item.value = mtn_args_list[i]['id'];
		args_set_option_item.text = mtn_args_list[i]['args_name'];
		args_set_option_item.value_args = mtn_args_list[i]['args'];
		args_set_option.appendChild(args_set_option_item);
		args_set_option.addEventListener('change', function() {
			var selectedItem = this.options[this.selectedIndex];
			var value_args = selectedItem.value_args;
			if(selectedItem.value==0){
				emu_args.value = '';
			}else{emu_args.value = value_args;}
			
		});
	}
}
async function classify_level_set(){
	var classify_level = document.getElementById('classify_level');
	var classify_id = document.getElementById('classify_id');
	var classify_level_0 = document.getElementById('classify_level_0');
	var classify_level_z = document.getElementById('classify_level_z');
	var classify_level_name = document.getElementById('classify_level_name');
	classify_level_name.innerHTML='';
	if(classify_level_0.checked){
		classify_level_z.style.display = 'none';
		classify_level_name.style.display = 'none';
		classify_level.value="0";
		classify_id.value="";
	}
		else{
			classify_level_name.style.display = 'block';
			classify_level_z.style.display = 'block';
			await CefSharp.BindObjectAsync('indexViewBinding'); 
			const result=await window.indexViewBinding.get_classify_table();
			if (result !== "") {
				const parsedResult = JSON.parse(result);
				for (var i = 0; i < parsedResult.length; i++) {
					var itemDiv = document.createElement('div');
					itemDiv.className = 'classify_level_name_item';
					itemDiv.textContent = parsedResult[i]['daohang_name'];
					classify_level_name.appendChild(itemDiv);
  // 确保数据类型是字符串
  const idStr = String(parsedResult[i]['id']);
  const classifyLevelStr = String(parsedResult[i]['classify_level']);
    // 设置属性值
	itemDiv.setAttribute('value', idStr);
	itemDiv.setAttribute('classify_level', classifyLevelStr);
					itemDiv.addEventListener('click', function() {
						    // 首先，清除所有同类元素的背景色
							
    var allItems = document.querySelectorAll('.classify_level_name_item');
    for (var j = 0; j < allItems.length; j++) {
        allItems[j].style.backgroundColor = '#45a049'; // 重置背景色
    }
						var selectedItem = this;
						if(fenlie_daohang_id==selectedItem.getAttribute('value')){						
							alert('不能选择自己为父分类');
							return;
						}
						
						var value = selectedItem.getAttribute('value');
						var classify_level_value = selectedItem.getAttribute('classify_level');
						classify_level.value=Number(classify_level_value)+1;
						classify_id.value=value;
						selectedItem.style.backgroundColor = '#000000';
						
					});	
				
				}
			}
		}
}
async function daohang_add_ico(){
	var daohang_ico_img = document.getElementById('daohang_ico_img');
	var daohang_ico = document.getElementById('daohang_ico');
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	if (result !== "") {
		daohang_ico_img.src = ispath(result);
		daohang_ico.value = result;
	}
}

async function daohang_add_bg(){
	var daohang_bg_img = document.getElementById('daohang_bg_img');
	var daohang_bg = document.getElementById('daohang_bg');
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	if (result !== "") {
		daohang_bg_img.src = ispath(result);
		daohang_bg.value = result;
	}
}

async function daohang_add_img(){
	var daohang_img_img = document.getElementById('daohang_img_img');
	var daohang_img = document.getElementById('daohang_img');
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	if (result !== "") {
		daohang_img_img.src = ispath(result);
		daohang_img.value = result;
	}
}

async function daohang_add_other(){
	var other_img_img = document.getElementById('other_img_img');
	var other_img = document.getElementById('other_img');
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.file_path();
	if (result !== "") {
		other_img_img.src = ispath(result);
		other_img.value = result;
	}
}
 function classify_select_emu(){
	var classify_emu_ico = document.getElementById('classify_emu_ico');
	var game_emu_id = document.getElementById('game_emu_id');
	classify_emu_ico.innerHTML = '';
	classify_emu_ico.style.display = 'block';
	//添加新的模拟器
	var additemDiv = document.createElement('div');
	var addimgDiv = document.createElement('div');
	var addtxtDiv = document.createElement('div');
	additemDiv.className = 'emu_div_item';
	addimgDiv.className = 'emu_div_item_img';
	addtxtDiv.className = 'emu_div_item_txt';
	var addimgElement = document.createElement('img');
	addimgElement.src ='set_js/addIco.png';
	addimgDiv.appendChild(addimgElement);
	var addnameDiv = document.createElement('div');
	addnameDiv.textContent = '添加模拟器';
	additemDiv.addEventListener('click',async function() {	
		var eum_id=await classify_emu_add();
		classify_select_emu();
	});
	additemDiv.appendChild(addimgDiv);		
	addtxtDiv.appendChild(addnameDiv);
	additemDiv.appendChild(addtxtDiv);
	classify_emu_ico.appendChild(additemDiv);


	for (var i = 0; i < mtn_emu_list.length; i++) {
		if(mtn_emu_list[i]['emu_md5']==''){
			continue;
		}
		var itemDiv = document.createElement('div');
		var imgDiv = document.createElement('div');
		var txtDiv = document.createElement('div');
		itemDiv.className = 'emu_div_item';
		itemDiv.setAttribute('value',mtn_emu_list[i]['id']);
		itemDiv.setAttribute('index',i);
		imgDiv.className = 'emu_div_item_img';
		txtDiv.className = 'emu_div_item_txt';
		var imgElement = document.createElement('img');	

		imgElement.src =ispath(mtn_emu_list[i]['emu_ico']);
		imgDiv.appendChild(imgElement);
		var nameDiv = document.createElement('div');
		nameDiv.textContent = mtn_emu_list[i]['emu_name'];
				//鼠标点击事件
		itemDiv.addEventListener('click', function() {
		var selectedItem = this;
		var value = selectedItem.getAttribute('value');
		var index = selectedItem.getAttribute('index');
		game_emu_id.value=value;
		var classify_emu_ico_img = document.createElement('img');
		classify_emu_ico_img.className='classify_emu_ico_img'	
		classify_emu_ico_img.src =ispath(mtn_emu_list[index]['emu_ico']);		
		classify_emu_ico.innerHTML = '';
		classify_emu_ico.appendChild(classify_emu_ico_img);
		});
		itemDiv.appendChild(imgDiv);		
		txtDiv.appendChild(nameDiv);
		itemDiv.appendChild(txtDiv);
		classify_emu_ico.appendChild(itemDiv);
	}
	var exclude_btn = document.createElement('button');
	exclude_btn.textContent = '取消';
	exclude_btn.addEventListener('click', function() {
		classify_emu_ico.innerHTML = '';
		game_emu_id.value="";
	});
	classify_emu_ico.appendChild(exclude_btn);
}

function classify_select_core(){
	var classify_core_ico = document.getElementById('classify_core_ico');
	var emu_core_id = document.getElementById('emu_core_id');
	classify_core_ico.innerHTML = '';
	classify_core_ico.style.display = 'block';
	//添加新的核心
	var additemDiv = document.createElement('div');
	var addimgDiv = document.createElement('div');
	var addtxtDiv = document.createElement('div');
	additemDiv.className = 'emu_div_item';
	addimgDiv.className = 'emu_div_item_img';
	addtxtDiv.className = 'emu_div_item_txt';
	var addimgElement = document.createElement('img');
	addimgElement.src ='set_js/addIco.png';
	addimgDiv.appendChild(addimgElement);
	var addnameDiv = document.createElement('div');
	addnameDiv.textContent = '添加核心';
	additemDiv.addEventListener('click',async function() {	
		var eum_id=await classify_core_add();
		classify_select_core();
	});
	additemDiv.appendChild(addimgDiv);		
	addtxtDiv.appendChild(addnameDiv);
	additemDiv.appendChild(addtxtDiv);
	classify_core_ico.appendChild(additemDiv);

	for (var i = 0; i < mtn_emu_list.length; i++) {
		if(mtn_emu_list[i]['emu_core_md5']==''){
			continue;
		}
		var itemDiv = document.createElement('div');
		var imgDiv = document.createElement('div');
		var txtDiv = document.createElement('div');
		itemDiv.className = 'emu_div_item';
		itemDiv.setAttribute('value',mtn_emu_list[i]['id']);
		itemDiv.setAttribute('index',i);
		imgDiv.className = 'emu_div_item_img';
		txtDiv.className = 'emu_div_item_txt';
		var imgElement = document.createElement('img');	

		imgElement.src =ispath(mtn_emu_list[i]['emu_ico']);
		imgDiv.appendChild(imgElement);
		var nameDiv = document.createElement('div');
		nameDiv.textContent = mtn_emu_list[i]['emu_name'];
				//鼠标点击事件
		itemDiv.addEventListener('click', function() {
		var selectedItem = this;
		var value = selectedItem.getAttribute('value');
		var index = selectedItem.getAttribute('index');
		emu_core_id.value=value;
		var classify_emu_ico_img = document.createElement('img');
		classify_emu_ico_img.className='classify_emu_ico_img'	
		classify_emu_ico_img.src =ispath(mtn_emu_list[index]['emu_ico']);		
		classify_core_ico.innerHTML = '';
		classify_core_ico.appendChild(classify_emu_ico_img);
		});
		itemDiv.appendChild(imgDiv);		
		txtDiv.appendChild(nameDiv);
		itemDiv.appendChild(txtDiv);
		classify_core_ico.appendChild(itemDiv);
	}
		var exclude_btn = document.createElement('button');
	exclude_btn.textContent = '取消';
	exclude_btn.addEventListener('click', function() {
		classify_core_ico.innerHTML = '';
		emu_core_id.value="";
	});
	classify_core_ico.appendChild(exclude_btn);
}

async function classify_select_ui(){
	var classify_ui_img = document.getElementById('classify_ui_img');
	var ui_name_id=document.getElementById('ui_name_id');
	classify_ui_img.innerHTML = '';
	classify_ui_img.style.display = 'block';
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.get_ui_table();
	if (result !== "") {
		const parsedResult = JSON.parse(result);
		for (var i = 0; i < parsedResult.length; i++) {
			var itemDiv = document.createElement('div');
			var imgDiv = document.createElement('div');
			var txtDiv = document.createElement('div');
			itemDiv.className = 'emu_div_item';
			itemDiv.setAttribute('value',parsedResult[i]['id']);
			itemDiv.setAttribute('index',i);
			imgDiv.className = 'emu_div_item_img';
			txtDiv.className = 'emu_div_item_txt';
			var imgElement = document.createElement('img');	
			imgElement.className='classify_ui_img_img'
			imgElement.src =ispath(parsedResult[i]['ui_img']);
			imgDiv.appendChild(imgElement);
			var nameDiv = document.createElement('div');
			nameDiv.textContent = parsedResult[i]['ui_name'];
					//鼠标点击事件
			itemDiv.addEventListener('click', function() {
			var selectedItem = this;
			var value = selectedItem.getAttribute('value');
			var index = selectedItem.getAttribute('index');
			ui_name_id.value=value;
			var classify_emu_ico_img = document.createElement('img');
			classify_emu_ico_img.className='classify_ui_img_s'	
			classify_emu_ico_img.src =ispath(parsedResult[index]['ui_img']);		
			classify_ui_img.innerHTML = '';
			classify_ui_img.appendChild(classify_emu_ico_img);
			});
			itemDiv.appendChild(imgDiv);		
			txtDiv.appendChild(nameDiv);
			itemDiv.appendChild(txtDiv);
			classify_ui_img.appendChild(itemDiv);
	}
			var exclude_btn = document.createElement('button');
	exclude_btn.textContent = '取消';
	exclude_btn.addEventListener('click', function() {
		classify_ui_img.innerHTML = '';
		ui_name_id.value="";
	});
	classify_ui_img.appendChild(exclude_btn);
}
}