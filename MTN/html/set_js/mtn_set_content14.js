//启动设置页
async function meu_dw_web(){
	await joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-下载模拟器</h2>';
web_txt='<div class="emu_dw_div" id="emu_dw_div"></div>';
web_obj.innerHTML = web_txt;
emu_dw_div_init();
core_dw_div_init();
}

//初始化下载模拟器
async function emu_dw_div_init() {

	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.emu_dw_div_init();
	if(result !== ""){
		const parsedResult = JSON.parse(result);
		var web_obj = document.getElementById('emu_dw_div');
		 web_obj.innerHTML='';
		for (var i = 0; i < parsedResult.length; i++) {
			var itemDiv = document.createElement('div');
			itemDiv.className = 'emu_dw_div_item';
			itemDiv.setAttribute('value',parsedResult[i]['id']);
			itemDiv.setAttribute('dw_tpye','emu');
			var imgDiv = document.createElement('div');
			imgDiv.className = 'emu_dw_div_item_img';
			var imgElement = document.createElement('img');
			imgElement.src = emu_img_replace(parsedResult[i]['emu_img']);
			imgDiv.appendChild(imgElement);
			var txtDiv = document.createElement('div');
			txtDiv.className = 'emu_dw_div_item_txt';
			var nameDiv = document.createElement('div');
			nameDiv.textContent = parsedResult[i]['emu_name'];
			txtDiv.appendChild(nameDiv);			
			itemDiv.appendChild(imgDiv);
			itemDiv.appendChild(txtDiv);
			web_obj.appendChild(itemDiv);
					//鼠标点击事件
		itemDiv.addEventListener('click', function() {
			var selectedItem = this;
			var value = selectedItem.getAttribute('value');
			var dw_tpye = selectedItem.getAttribute('dw_tpye');
			emu_dw_file(value,dw_tpye);
		});
		}

	}
}
//初始化核心文件
async function core_dw_div_init() {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.core_dw_div_init();
	if(result !== ""){
		
		const parsedResult = JSON.parse(result);
		var web_obj = document.getElementById('emu_dw_div');
		// web_obj.innerHTML='';
		for (var i = 0; i < parsedResult.length; i++) {
			var itemDiv = document.createElement('div');
			itemDiv.className = 'emu_dw_div_item';
			itemDiv.setAttribute('value',parsedResult[i]['id']);
			itemDiv.setAttribute('dw_tpye','core');
			var imgDiv = document.createElement('div');
			imgDiv.className = 'emu_dw_div_item_img';
			var imgElement = document.createElement('img');
			imgElement.src = emu_img_replace(parsedResult[i]['core_img']);
			imgDiv.appendChild(imgElement);
			var txtDiv = document.createElement('div');
			txtDiv.className = 'emu_dw_div_item_txt';
			var nameDiv = document.createElement('div');
			nameDiv.textContent = parsedResult[i]['core_name'];
			txtDiv.appendChild(nameDiv);			
			itemDiv.appendChild(imgDiv);
			itemDiv.appendChild(txtDiv);
			web_obj.appendChild(itemDiv);
					//鼠标点击事件
					
		itemDiv.addEventListener('click', function() {
			var selectedItem = this;
			var value = selectedItem.getAttribute('value');
			var dw_tpye = selectedItem.getAttribute('dw_tpye');
			emu_dw_file(value,dw_tpye);
		});
		}
	}
}

//下载文件
//dw_id 下载文件id
//dw_type 下载类型
async function emu_dw_file(dw_id,dw_type) {
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.dw_file(dw_id,dw_type);
	if (result !== "") {

	}
}

//替换模拟器图片地址
function emu_img_replace(ip_img_path) {
	if (ipv4_is_ok=="ipv4"){
		ip_img_path=ip_img_path.replace("ipv6.mtnhome.top:8889", "112.126.69.199:23008");
		ip_img_path=ip_img_path.replace("ipv6.mtnhome.top:8890", "112.126.69.199:23003");
	}else if(ipv4_is_ok=="本地"){
		ip_img_path=ip_img_path.replace("ipv6.mtnhome.top:8889", "192.168.0.107:8889");
		ip_img_path=ip_img_path.replace("ipv6.mtnhome.top:8890", "192.168.0.107:8889");
	}
	return ip_img_path;	
}

