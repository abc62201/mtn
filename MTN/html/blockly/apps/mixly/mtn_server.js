var getpath="";
var webno=-1;
var mtn_game_run_value="错误";
//获得当前路径和网页的id
   function	 mtn_path(value,No) {
    getpath=value;
	webno=Number(No);
	}
  //获取模拟器列表与核心列表
  async function get_emu_table(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_emu_table();
  return result;
}
  //获取服务器上模拟器列表
  async function get_serveremu_table(){
    await CefSharp.BindObjectAsync('indexViewBinding'); 
    const result=await window.indexViewBinding.emu_dw_div_init();
    return result;
  }
    //获取服务器上模拟器核心列表
  async function get_servercore_table(){
    await CefSharp.BindObjectAsync('indexViewBinding'); 
    const result=await window.indexViewBinding.core_dw_div_init();
    return result;
  }
 //获取分类列表
 async function get_classify_table(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_classify_table();
  return result;
}
 //获取服务器中游戏分类列表
 async function get_server_table_classfy(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_server_table_classfy();
  return result;
}
 //获取服务器中文件分类列表
 async function get_server_tool_classfy(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_server_tool_classfy();
  return result;
}
//获取游戏列表
async function get_game_table(sql_str,tab_page1,tab_page2){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_game_table(sql_str,tab_page1,tab_page2);
  return result;
}
//获取当前分类全部标签
async function get_game_tags_all(classify_id){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_game_tags_all(classify_id);
  return result;
}
//获取分类列表
async function get_classify_table(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_classify_table();
  return result;
}
//获取游戏列表最大id
async function get_game_max_id(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.rom_max_id();
  return result;
}
//获取游戏列表行数
async function get_game_no(no_sql){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_game_no(no_sql);
  return result;
}
//获取分类游戏数
async function get_classify_game_no(classify_id){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_classify_game_no(classify_id);
  return result;
}
//获取用户昵称
async function get_user_intro(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.user_set_web();
  return result;
}
//判断图片是否存在加载默认图片
function loadSafeImage(element, defaultSrc) {
    element.onload = function() {
        // 图片加载成功时的处理
        this.onerror = null; // 移除错误处理函数
    };
    element.onerror = function() {
        // 图片加载失败时的处理
        this.src = defaultSrc; // 使用默认图片
        this.onerror = null; // 移除错误处理函数
    };
}
// 获取选择的文件
async function gei_file_path(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.file_path();
  return result;
}
//读取文本文件的值
async function read_text(file_path){
  file_path=ispath(file_path);
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.read_text(file_path);
  return result;
}
//写入信息文本
async function write_intro_text(game_table_row,text_str){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.write_intro_text(game_table_row,text_str);
  return result;
}
  //获取摇杆键盘字典
  async function get_joytokey() { 
    await CefSharp.BindObjectAsync('indexViewBinding'); 	
    const result=await window.indexViewBinding.get_joytokey();
  return result; 
  } 
//获取文件转为Base64编码
async function fileToBase64(file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.fileToBase64(file_paht);
  return result;
}
//获取文件MD5值
async function gei_file_md5(file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_flie_md5(file_paht);
  return result;
}
//新窗口打开帮助
async function open_help_ui(file_paht){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.open_help_ui(file_paht);
  return result;
}
 //处理文件链接
 function ispath(url) {
	if (url) {
  const isAbsolute = /^[a-zA-Z]:[\\/|\\\\]/.test(url) || url.startsWith('/');
  const isHttp = /^http:/.test(url);
  const isHttps = /^https:/.test(url);
  return (isAbsolute || (isHttp || isHttps)) ? url : getpath+url;}
  else{return "";}
}
//获取相对路径
function getRelativePath(url) {
  url = url.replace('file:///', '');
  url = decodeURIComponent(url.replace(getpath, '')); 
  return url;
}
//添加游戏rom
async function add_game_rom(game_classify_id) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.add_game_rom(game_classify_id);
  return result;
}
//添加游戏ips
async function add_game_rom_ips(game_table_row) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.add_game_rom_ips(game_table_row);
  return result;
}
//回传数据
async function up_game_table(game_table_row) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.up_game_table(game_table_row);
  return result;
}
//获取get值
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
//上传游戏资料
async function up_game_inrto(game_table_row) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.up_game_inrto(game_table_row);
  return result;
}
//上传游戏rom和资料
async function up_game_rom_fileandinrto(game_table_row) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.up_game_rom(game_table_row);
  return result;
}
//上传文件
//上传游戏rom和资料
async function up_mtn_file(file_table_row) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.up_mtn_file(file_table_row);
  return result;
}
//同步资料
async function sync_data() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.synchronization();
  return result;
}
//进入游戏下载页
async function enter_down_page() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.enter_down_page();
}
//进入文件下载页
async function file_down_page() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.file_down_page();
}
//运行游戏
async function run_game(game_id) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=await window.indexViewBinding.run_game_rom(game_id);
  mtn_game_run_value=result;
  return result;
}
//进入游戏修改页
async function game_alter_web(game_id) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.game_alter_web(game_id);
}
//进入服务器资源修改页面
async function file_make_page() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.file_make_page();
}
//禁止鼠标右键
document.addEventListener("contextmenu", function(e) {
  e.preventDefault(); // 阻止默认右键菜单行为
});
//获取文件名
async function getFileName(path) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.get_flie_name(path);
  return result;
}
//获取文件名不带扩展名
async function getFileNamenoext(path) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.get_flie_name_noext(path);
  return result;
}
async function get_file_size(path) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.get_file_size(path);
  return result;
}
//读取文本字典
async function gitmtn_txt_dict() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result = await window.indexViewBinding.gitmtn_txt_dict();
  return JSON.parse(result);
}
//配置自定义字典
async function set_custom_dict(key,value) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  window.indexViewBinding.set_custom_dict(key,value);
}
//读取自定义字典值
async function get_custom_dict(key) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.get_custom_dict(key);
 
  return result;
}
async function add_back_btn(){
	
}

//是否启用摇杆
async function joy_start(start_no) {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	await window.indexViewBinding.joy_start(start_no);
}
function joyvalue(value){
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
//检测窗口是否获取了焦点
async function get_window_Activat(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_window_Activat();
  return result;
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

function mtn_emu_list_ini(value){
}
function mtn_args_list_ini(value){
}

//复制块
async function mtn_copy_kuai(string_xml) {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	await window.indexViewBinding.mtn_copy_kuai(string_xml);
  
}

//粘贴块
async function mtn_paste_kuai() {
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=window.indexViewBinding.mtn_paste_kuai();
  return result;
}

//模拟按键
function simulateKeyPress(key) {
  if (!key) {
      console.warn('Key value is empty or undefined:', key);
      return;
  }

  // 定义一些特殊按键的 code 值
  const specialKeys = {
      'Enter': 'Enter',
      'Tab': 'Tab',
      'Shift': 'ShiftLeft',
      'Ctrl': 'ControlLeft',
      'Alt': 'AltLeft',
      'Meta': 'MetaLeft', // Command 键（Mac）或 Windows 键（Windows）
      'Backspace': 'Backspace',
      'Delete': 'Delete',
      'ArrowUp': 'ArrowUp',
      'ArrowDown': 'ArrowDown',
      'ArrowLeft': 'ArrowLeft',
      'ArrowRight': 'ArrowRight',
      'F1': 'F1',
      'F2': 'F2',
      'F3': 'F3',
      'F4': 'F4',
      'F5': 'F5',
      'F6': 'F6',
      'F7': 'F7',
      'F8': 'F8',
      'F9': 'F9',
      'F10': 'F10',
      'F11': 'F11',
      'F12': 'F12',
      'Space': 'Space',
      'Esc': 'Escape',
      'PageUp': 'PageUp',
      'PageDown': 'PageDown',
      'Home': 'Home',
      'End': 'End',
      'Insert': 'Insert',
      'CapsLock': 'CapsLock',
      'NumLock': 'NumLock',
      'ScrollLock': 'ScrollLock',
      'Pause': 'Pause',
      'PrintScreen': 'PrintScreen',
      'ContextMenu': 'ContextMenu'
  };

  let keyCode, code;

  if (specialKeys.hasOwnProperty(key)) {
      code = specialKeys[key];
      keyCode = null; // 对于特殊键，keyCode 可以设置为 null 或不设置
  } else {
      code = key.length === 1 ? key.toUpperCase() : key;
      keyCode = key.charCodeAt(0);
  }

  var event = new KeyboardEvent('keydown', {
      key: key,
      code: code,
      keyCode: keyCode,
      charCode: keyCode,
      which: keyCode,
      shiftKey: false, // 是否按住 Shift 键
      ctrlKey: false,  // 是否按住 Ctrl 键
      metaKey: false,  // 是否按住 Command 键（Mac）或 Windows 键（Windows）
      altKey: false    // 是否按住 Alt 键
  });

  document.dispatchEvent(event);
}

//获取收藏菜单
async function get_fav_menu() {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result = await window.indexViewBinding.get_fav_menu();
  return result;
}

//获取收藏列表的数量
async function get_fav_list_count(classify_id) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result = await window.indexViewBinding.get_fav_list_count(classify_id);
  return result;
}

//获取个人收藏列表
async function get_bookmarks_table(sql_str,tab_page1,tab_page2){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_bookmarks_table(sql_str,tab_page1,tab_page2);
  return result;
}

//打开个人收藏
async function open_bookmarks(bookmarks_id,open_type='0'){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.open_bookmarks(bookmarks_id,open_type);
  return result;
}

//显示个人收藏添加窗口
async function bookmarks_show(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	await window.indexViewBinding.bookmarks_show();
}
//个人收藏标签
async function get_bookmarks_tags_all(classify_id){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_bookmarks_tags_all(classify_id);
  return result;
}
//获取个人收藏总数
async function get_bookmarks_no(no_sql){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_bookmarks_no(no_sql);
  return result;
}