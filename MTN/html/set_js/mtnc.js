
//初始化变量，getpath当前路径，webno当前网页的id，mtn_navigation导航列表，mtn_joy键盘摇杆列表，mtn_gamelist游戏列表，mtn_config基础设置列表
var getpath="";
var webno=-1;
var mtn_navigation= {};
var mtn_joy= {};
var mtn_gamelist= {};
var mtn_config= {};
var mtn_emu_list= {};
var mtn_args_list= {};
var mtn_text= {};
var mtn_emu_config_list={};
var ipv4_is_ok="";
var mtn_key_value="kong";
var mtn_joy_value="kong";
//获取当前ip模式
function mtn_ip_mode(ip_mode){
	ipv4_is_ok=ip_mode;
}
//获得当前路径和网页的id
   function	 mtn_path(value,No) {
    getpath=value;
	webno=Number(No);
	}
//获取导航列表
function mtn_navigation_ini(value){
mtn_navigation=value;
}
//获取摇杆键盘列表
function mtn_joy_ini(value){
mtn_joy=value;
}
//获取游戏列表
function mtn_gamelist_toc(value){
mtn_gamelist=value;
}
//获取基础设置列表
function mtn_config_ini(value){
mtn_config=value;
}
//添加翻译列表
function mtn_text_ini(value){
mtn_text=value;
}
// 获取主题列表
async function get_ui_table(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_ui_table();
  return result;
}
//修改主题
async function replace_ui_data(ui_table){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.replace_ui_data(ui_table);
  return result;
}
//删除主题
async function delete_ui_data(id){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.delete_ui_data(id);
  return result;
}
// 获取添加主题
async function add_ui_data(ui_table){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.add_ui_data(ui_table);
  return result;
}
// 获取选择的文件
async function gei_file_path(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.file_path();
  return result;
}
//设置摇杆驱动形式
async function set_joy_drive(drive_type){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.set_joy_drive(drive_type);
  return result;
}
//获取dx摇杆驱动
async function set_joy_select(drive_NO){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.set_joy_select(drive_NO);
  return result;
}
//是否启用摇杆
async function joy_start(start_no) {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	await window.indexViewBinding.joy_start(start_no);
}
//写入键盘设置
async function key_set_write(value1,value2) {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.key_set_write(value1,value2);
	return result;
}
//写入摇杆设置
async function joy_set_write(value1,value2) {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.joy_set_write(value1,value2);
	return result;
}
//获取模拟器列表
function mtn_emu_list_ini(value){
mtn_emu_list=value;
}
//获取模拟器列表与核心列表
async function get_emu_table(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_emu_table();
  return result;
}
//通过分类添加模拟器
async function classify_emu_add(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.classify_emu_add();
  return result;
}
//通过分类添加核心
async function classify_core_add(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.classify_core_add();
  return result;
}
//获取模拟器参数列表
function mtn_args_list_ini(value){
mtn_args_list=value;
}
//获取模拟器配置文件
function mtn_emu_config_ini(value){
mtn_emu_config_list=value;
}

//刷新游戏列表，会重新获得该分类的全部列表
async function game_list_reset() { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.game_list_reset();
	return result; 
 } 
 //打开设置窗口1，设置窗口是否全屏2
 async function game_shezhi(n) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.game_shezhi(n);
	return result; 
 } 
 //搜索游戏列表，输入游戏名或首个大写字母返回搜索结果到游戏列表
async function game_list_Search(s) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.game_list_Search(s);
	return result; 
 } 
//启动视频声音
async function video_muted() { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.video_muted();
	return result; 
 } 
//通过game_id打开游戏
async function openf(f) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.openf(f);
	return result; 
 } 
 //打开文件所在路径
async function open_file_path(file_path){
	await CefSharp.BindObjectAsync('indexViewBinding');
	  const result=await window.indexViewBinding.open_file_path(file_path);	
  }
   //删除重复列表文件
async function del_repeat_id(repeat_id,file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding');
	  const result=await window.indexViewBinding.del_repeat_id(repeat_id,file_paht);	
  }
 //0选中的当前列表中第几个游戏,1翻页数,2选中的游戏id
   	 async function listNO(NO,value) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.listNO(NO,value);
	return result; 
 } 
 //写入基础设置configw("节","键","值")
   async function configw(value1,value2,value3) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.configw(value1,value2,value3);
	return result; 
 } 
 // 暂时没有作用。
    async function option_id(value) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.option_id(value);
	return result; 
 } 
 //读取txt文件获取一个数组，txt{0}=每一行txt文本内容
 async function lunbo(f) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.lunbo(f);
	return result; 
 } 
 //获取游戏信息
  async function gameintro(f) { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.gameintro(f);
	return result; 
 } 
  //获取摇杆键盘字典
  async function get_joytokey() { 
	await CefSharp.BindObjectAsync('indexViewBinding'); 	
	const result=await window.indexViewBinding.get_joytokey();
return result; 
} 
   async function mtn_Close() { 
		await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.mtn_Close();
	return result; 
 } 
 //处理导航链接
  function ispath(url) {
	if (url) {
  const isAbsolute = /^[a-zA-Z]:[\\/|\\\\]/.test(url) || url.startsWith('/');
  const isHttp = /^http:/.test(url);
  const isHttps = /^https:/.test(url);
  return (isAbsolute || (isHttp || isHttps)) ? url : getpath+url;}
  else{return "";}
}
//使用鼠标右键
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // 阻止默认右键菜单行为
    //mtn_Close();
});
document.onkeydown = function(event) {
    // 检查 keyvalue 是否是一个函数
    if (typeof keyvalue === 'function') {
        keyvalue(event.key); // 使用 event.key
    }
};
//键盘值
async function keyvalue(value){
	mtn_key_value= value.replace(' ','space').toUpperCase();
	var result='失败';
	if(label_key_id!=''){
		var key_label = document.getElementById(label_key_id+'_label');
		key_label.innerText = mtn_key_value;
		result=await key_set_write(mtn_key_value,label_key_id);
		if(result!='ok'){
			alert(result);
		return result;
		} 				
	}
	var key_div = document.getElementById(label_key_id+'_row');
	if (key_div) {
		key_div.classList.remove('active');
		}
	mtn_key_value='kong';
	label_key_id='';
}
	
//摇杆值
async function joyvalue(value){
	mtn_joy_value= value;
	var result='失败';
	if(label_joy_id!=''){
		var joy_label = document.getElementById(label_joy_id+'_label');
		joy_label.innerText = mtn_joy_value;
		result=await joy_set_write(mtn_joy_value,label_joy_id);
		if(result!='ok'){
			alert(result);
		return result;
	 	} 				
	}
	var joy_div = document.getElementById(label_joy_id+'_row');
	if (joy_div) {
		joy_div.classList.remove('active');
		}
	mtn_joy_value='kong';
	label_joy_id='';
}
async function add_back_btn(){
	
	}

//新窗口打开帮助
async function open_help_ui(file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.open_help_ui(file_paht);
  return result;
}
//单开内容页
async function open_help_ui_1(file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.open_help_ui(file_paht);
  return result;
}
//检测下载函数是否存在
async function dw_list_ft(){
    if (typeof mtn_dw_list_div === 'function') {
        var dw_list = document.getElementById('dw_list');
        if(dw_list){
            mtn_dw_list_div();
        }
    }   
}

//下载进度条
async function dw_progress_ft(下载进度条宽度,显示字符串){
    var dw_progress_w = document.getElementById('dw_progress-bar');
    var dw_progress_t = document.getElementById('dw-progress');
    if(dw_progress_w){
        dw_progress_w.style.width = 下载进度条宽度+'%';        
    }
    if(dw_progress_t){      
        dw_progress_t.innerText = 显示字符串;
    }   

}

//获取一个视频地址
async function gei_mtn_video(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.gei_mtn_video();
  return result;
}

// 获取重复文件列表
async function get_rom_column(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_rom_column();
  return result;
}
// 数据上传模拟器参数
async function upload_danghang_args(id,args_text) {
    try {
        await CefSharp.BindObjectAsync('indexViewBinding');
        await window.indexViewBinding.upemu_args_danghang_table(id, args_text);
    } catch (ex) {
        console.error("Error uploading data:", ex);
    }
}
// 创建一个函数来生成下拉菜单
function createDropdownMenu(targetDiv,id) {
    const dropdown = document.getElementById('myDropdown');
    dropdown.innerHTML = ''; // 清空下拉菜单
    mtn_args_list.forEach(function(item) {
        var option = document.createElement('div');
        option.textContent = item.args_name;
        option.value = item.args;
        option.addEventListener('click', function() {
            targetDiv.textContent = this.value;
			upload_danghang_args(id,this.value);
            //targetDiv.value = item.args;
            dropdown.style.display = "none";
			
        });
        dropdown.appendChild(option);
    });

    // 获取鼠标位置
    const mouseX = window.event.clientX;
    const mouseY = window.event.clientY+20;

    // 设置下拉菜单的位置
    dropdown.style.position = "fixed";
    dropdown.style.left = mouseX + "px";
    dropdown.style.top = mouseY + "px";
    dropdown.style.display = "block";
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('myDropdown');
    if (!dropdown.contains(event.target) && event.target !== document.getElementById('myDropdown')) {
        dropdown.style.display = "none";
    }
});