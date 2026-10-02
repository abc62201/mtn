var form_rom_Object = {};
var mtn_intro_path = "";
async function mtn_init(){
  var classify_table= await get_classify_table();
  var serverclassify_table= await get_server_table_classfy();
  var user_intro= await get_user_intro();
  var serveremu_table= await get_serveremu_table();
  var servercore_table= await get_servercore_table();
  if (user_intro === "") {
    alert("请先登录");
    history.back();
    return;
}
form_rom_Object['emulations']='';
form_rom_Object['core']='';
  const user_json = JSON.parse(user_intro);
  creat_classify_list(classify_table);
  creat_serverclassify_list(serverclassify_table);
  add_author(user_json.user_nickname);
  creat_emuclassify_list(serveremu_table);
  creat_coreclassify_list(servercore_table);
  add_gameset_txt();
}
//创建服务器模拟器核心菜单
function creat_coreclassify_list(servercore_table) {
const parsedResult = JSON.parse(servercore_table);
var server_core = document.getElementById('server_emu_core');
server_core.innerHTML='';
var default_option = document.createElement('option');
default_option.value = 0;
default_option.text = "请选择模拟器";
server_core.appendChild(default_option);
for (const item of parsedResult) {
  var server_option = document.createElement('option'); // 每次循环创建一个新的 option
  server_option.value = item.id;
  server_option.text = item.core_name;
  server_core.appendChild(server_option);
}
  // 选择事件监听
  server_core.addEventListener('change', function () {
    var selectedItem = this.options[this.selectedIndex];
    if (selectedItem.value === "0") {
      form_rom_Object['core']='';
    }else{
      form_rom_Object['core']=selectedItem.text;
    }
});
}
//创建服务器模拟器菜单
function creat_emuclassify_list(serveremu_table) {
const parsedResult = JSON.parse(serveremu_table);
var server_emu = document.getElementById('server_emu');
server_emu.innerHTML='';
var default_option = document.createElement('option');
default_option.value = 0;
default_option.text = "请选择模拟器";
server_emu.appendChild(default_option);
for (const item of parsedResult) {
  var server_option = document.createElement('option'); // 每次循环创建一个新的 option
  server_option.value = item.id;
  server_option.text = item.emulations;
  server_emu.appendChild(server_option);
}
  // 选择事件监听
  server_emu.addEventListener('change', function () {
    var selectedItem = this.options[this.selectedIndex];
    if (selectedItem.value === "0") {
      form_rom_Object['emulations']='';
    }else{
      form_rom_Object['emulations']=selectedItem.text;
    }
});
}
// 创建服务器中的分类
function creat_serverclassify_list(serverclassify_table) {
  if (serverclassify_table === "") {
    return;
}
const parsedResult = JSON.parse(serverclassify_table);
var server_select = document.getElementById('server_select');
server_select.innerHTML = '';
var default_option = document.createElement('option');
default_option.value = 0;
default_option.text = "请选择分类";
server_select.appendChild(default_option);
for (const item of parsedResult) {
  var server_option = document.createElement('option'); // 每次循环创建一个新的 option
  server_option.value = item.id;
  server_option.text = item.classification;
  server_select.appendChild(server_option);
}
  // 选择事件监听
  server_select.addEventListener('change', function () {
    var selectedItem = this.options[this.selectedIndex];
    form_rom_Object['classification']=selectedItem.text;
});
}
// 创建分类
function creat_classify_list(game_select_list) {
  if (game_select_list === "") {
      return;
  }
  const parsedResult = JSON.parse(game_select_list);
  var game_select = document.getElementById('game_select');
  game_select.innerHTML = '';
  // 创建默认选项
  var default_option = document.createElement('option');
  default_option.value = 0;
  default_option.text = "请选择分类";
  game_select.appendChild(default_option);
  // 循环创建选项
  for (const item of parsedResult) {
      var classify_option = document.createElement('option'); // 每次循环创建一个新的 option
      classify_option.value = item.id;
      classify_option.text = item.daohang_name;
      game_select.appendChild(classify_option);
  }
  // 选择事件监听
  game_select.addEventListener('change', function () {
      var selectedItem = this.options[this.selectedIndex];
      creat_game_list(selectedItem.value);
  });

}
async function Search_game(){
  var game_select = document.getElementById('game_select').value;
  if (game_select === "0") {
      return;
  }
  var Search_txt=document.getElementById('Search_gamename').value;
  var Search_game_name=''
  if (Search_txt !=""){
    Search_game_name=" AND game_name like '%"+Search_txt+"%'";
  }
  
  creat_game_list(game_select,Search_game_name);
  //var game_list_table= await get_game_table(sql_str,0,0);
}
async function creat_game_list(id,Search_txt=''){
  add_game_name('');
  add_game_run('');
  add_game_zip('');
  add_game_ips('');
  add_game_emu('');
  add_game_core('');
  add_emu_args('');
  add_game_thumbnail('');
  add_game_cassette('');
  add_game_video('');
  add_game_ui_bj('');
  //add_game_pay_f('0');
  add_game_file_md5('');
  //add_game_author_m('');
  add_game_type('');
  add_game_ver('');
  add_game_score('');
  add_game_players('');
  add_game_issuing_date('');
  add_game_developer('');
  add_game_publisher('');
  add_game_language('');
  add_game_flagImage('');
  add_game_intro('');
  add_game_title('');
  add_game_ico('');
  add_game_screenshot('');
  add_game_cover('');
  add_circuit_path('');
  add_game_box('');
  add_game_poster('');
  add_game_logo('');
  add_game_role('');
  add_game_magazine('');
  var game_list = document.getElementById('game_list_group');
  game_list.innerHTML = '';
  if (id === "0") {
      return;
  }
  var sql_str='classify_id='+id+Search_txt;
  var game_list_table= await get_game_table(sql_str,0,0);
  if (game_list_table === "") {
    return;
}
  const parsedResult = JSON.parse(game_list_table);
  var i=1;
  for(const item of parsedResult) {
    var game_list_li = document.createElement('li');
    game_list_li.className='text-truncate fs-5 shadow rounded m-2';
    var game_list_a = document.createElement('span');
    game_list_a.className='navbar-brand  p-2';
    game_list_a.textContent =i+'.'+ item.game_name;
    i=i+1;
    //添加点击事件
    game_list_a.onclick = (function(game_id) {
    return function() {
      add_game_rom_web(game_id);
      };
    })(item.id);
    game_list_a.ondblclick = (function(game_id) {
    return function() {
      run_game(game_id);
      var game_video = document.getElementById('video');
      game_video.muted = true;
      };
    })(item.id);
    game_list_li.appendChild(game_list_a);
    game_list.appendChild(game_list_li);
  }
}
//填充游戏信息
async function add_game_rom_web(game_id){
  var sql_str='id='+game_id;
  var game_table= await get_game_table(sql_str,0,0);
  if (game_table === "") {
    return;
  }
  const parsedResult = JSON.parse(game_table);
  for(const item of parsedResult) {
    add_game_name(item.game_name);
    add_game_run(item.game_rom_path);
    add_game_ips(item.game_ips_path);
    add_game_zip('');
    add_game_emu(item.game_emu_id);
    add_game_core(item.emu_core_id);
    add_emu_args(item.emu_args);
    add_game_thumbnail(item.game_thumb_path);
    add_game_cassette(item.game_cassette_path);
    add_game_video(item.game_video_path);
    add_game_ui_bj(item.ui_bj);
    add_game_file_md5(item.game_md5);
    add_game_type(item.game_type);
    add_game_ver(item.game_ver);
    add_game_score(item.game_score);
    add_game_players(item.game_players);
    add_game_issuing_date(item.game_issuing_date);
    add_game_developer(item.game_developer);
    add_game_publisher(item.game_publisher);
    add_game_language(item.game_language);
    add_game_flagImage(item.national_flag);
    add_game_intro(item.game_intro_path);
    mtn_intro_path=item.game_intro_path;
    add_game_title(item.game_title_path);
    add_game_ico(item.game_ico);
    add_game_screenshot(item.game_screenshot_path);
    add_game_cover(item.game_cover_path);
    add_circuit_path(item.game_circuit_path);
    add_game_box(item.game_box_path);
    add_game_poster(item.game_poster_path);
    add_game_logo(item.game_logo_path);
    add_game_role(item.game_role_paht);
    add_game_magazine(item.game_magazine);
  }
}
//添加游戏图标
async function add_game_ico(game_ioc_value){
  var game_ico = document.getElementById('game_ico');
  game_ico.src = ispath(game_ioc_value);
  game_ico.alt=game_ioc_value;
}
//添加游戏标题
async function add_game_title(game_title_value){
  var game_title_path = document.getElementById('game_title_path');
  game_title_path.src = ispath(game_title_value);
  game_title_path.alt=game_title_value;
}
//添加游戏杂志
async function add_game_magazine(game_magazine_value){
  var game_magazine = document.getElementById('game_magazine');
  game_magazine.data = ispath(game_magazine_value);
  game_magazine.alt=game_magazine_value;
}
//添加游戏角色
async function add_game_role(game_role_value){
  var game_role_paht = document.getElementById('game_role_paht');
  game_role_paht.src = ispath(game_role_value);
  game_role_paht.alt=game_role_value;
}
//添加游戏logo
async function add_game_logo(game_logo_value){
  var game_logo_path = document.getElementById('game_logo_path');
  game_logo_path.src = ispath(game_logo_value);
  game_logo_path.alt=game_logo_value;
}
//添加游戏宣传海报
async function add_game_poster(game_poster_value){
  var game_poster_path = document.getElementById('game_poster_path');
  game_poster_path.src = ispath(game_poster_value);
  game_poster_path.alt=game_poster_value;
}
//添加游戏包装盒
async function add_game_box(game_box_value){
  var game_box_path = document.getElementById('game_box_path');
  game_box_path.src = ispath(game_box_value);
  game_box_path.alt=game_box_value;
}
//添加游戏电路板
async function add_circuit_path(game_circuit_value){
  var game_circuit_path = document.getElementById('game_circuit_path');
  game_circuit_path.src = ispath(game_circuit_value);
  game_circuit_path.alt=game_circuit_value;
}
//添加游戏封面
async function add_game_cover(game_cover_value){
  var game_cover_path = document.getElementById('game_cover_path');
  game_cover_path.src = ispath(game_cover_value);
  game_cover_path.alt=game_cover_value;
}
//添加游戏截图
async function add_game_screenshot(game_screenshot_path_value){
  var game_screenshot_path = document.getElementById('game_screenshot_path');
  game_screenshot_path.src = ispath(game_screenshot_path_value);
  game_screenshot_path.alt=game_screenshot_path_value;
}
//写入游戏简介
async function write_game_intro(){
  var game_select = document.getElementById('game_select');
  var game_run_file = document.getElementById('game_run_file');
  var game_ips_file = document.getElementById('game_ips_file');
  if (game_select.value === "0" || game_run_file.value === '') {
      return;
  } 
  var mtn_rom_Object = {};
  var game_intro_path = document.getElementById('game_intro_path');
  var game_intro_value = game_intro_path.innerHTML;
  mtn_rom_Object['classify_id']=game_select.value;
  mtn_rom_Object['game_rom_path']=game_run_file.value;
  mtn_rom_Object['game_ips_path']=game_ips_file.value;
  mtn_rom_Object['game_intro_path']=mtn_intro_path;
  
  mtn_intro_path = await write_intro_text(mtn_rom_Object,game_intro_value);
}
//添加游戏简介
async function add_game_intro(game_intro_value){
  var game_intro_path = document.getElementById('game_intro_path');
  game_intro_path.innerHTML = await read_text(game_intro_value);
}
//添加游戏旗帜
async function add_game_flagImage(game_flagImage_value){
  var flagImage = document.getElementById('flagImage');
  flagImage.src = ispath(game_flagImage_value);
  flagImage.alt=game_flagImage_value;
}
//添加游戏语言
async function add_game_language(game_language_value){
  var game_language = document.getElementById('game_language');
  game_language.innerText = game_language_value;
}
//添加游戏发行商
async function add_game_publisher(game_publisher_value){
  var game_publisher = document.getElementById('game_publisher');
  game_publisher.innerText = game_publisher_value;
}
//添加游戏开发商
async function add_game_developer(game_developer_value){
  var game_developer = document.getElementById('game_developer');
  game_developer.innerText = game_developer_value;
}
//添加游戏发售时间
async function add_game_issuing_date(game_issuing_date_value){
  var game_issuing_date = document.getElementById('game_issuing_date');
  game_issuing_date.innerText = game_issuing_date_value;
}
//添加游玩人数
async function add_game_players(game_players_value){
  var game_players = document.getElementById('game_players');
  game_players.innerText = game_players_value;
}
//添加游戏评分
async function add_game_score(game_score_value){
  var game_score = document.getElementById('game_score');
  game_score.innerText = game_score_value;
}
//添加游戏版本
async function add_game_ver(game_ver_value){
  var game_ver = document.getElementById('game_ver');
  game_ver.innerText = game_ver_value;
}
//添加游戏标签
async function add_game_type(game_type_value){
  var game_type = document.getElementById('game_type');
  game_type.innerText = game_type_value;
}
//添加游戏md5值
async function add_game_file_md5(game_md5_value){
  var file_md5 = document.getElementById('file_md5');
  file_md5.value = game_md5_value;
}
//添加游戏背景图
async function add_game_ui_bj(game_ui_bj_path){
  var ui_bj = document.getElementById('ui_bj');
  ui_bj.src = ispath(game_ui_bj_path);
  ui_bj.alt = game_ui_bj_path;
}
//添加视频
async function add_game_video(game_video_path){
  var video = document.getElementById('video');
  video.src = ispath(game_video_path);
  video.alt = game_video_path;
}
//添加卡带图
async function add_game_cassette(game_cassette_path){
  var cassette = document.getElementById('cassette');
  cassette.src = ispath(game_cassette_path);
  cassette.alt = game_cassette_path;
}
//添加缩略图
async function add_game_thumbnail(game_thumbnail_path){
  var thumbnail = document.getElementById('thumbnail');
  thumbnail.src = ispath(game_thumbnail_path);
  thumbnail.alt= game_thumbnail_path;
}
//添加启动参数
async function add_emu_args(emu_args_text){
  var emu_args = document.getElementById('emu_args');
  emu_args.value = emu_args_text;
}
//添加模拟器核心
async function add_game_core(game_core_id){
  var core_table=await get_emu_table();
  const parsedResult = JSON.parse(core_table);
  var server_emu_core = document.getElementById('server_emu_core');
  var local_core = document.getElementById('local_core');
  for(const item of parsedResult) {
    if(game_core_id==item.id){    
      var core_name = await getFileName(item.emu_core);   
      local_core.innerHTML='当前游戏的核心为：'+core_name;
      for (let i = 0; i < server_emu_core.options.length; i++) {
        if (server_emu_core.options[i].text === core_name) {        
          server_emu_core.options[i].selected = true; // 设置为选中状态
          form_rom_Object['core']=server_emu_core.options[i].text;
          return ;
        }     
      }
    }
    else{
      server_emu_core.options[0].selected = true;  
      local_core.innerHTML='当前游戏的核心为：'; 
      form_rom_Object['core']='';
    }
  }
}
//添加模拟器选择
async function add_game_emu(game_emu_id){
  var emu_table=await get_emu_table();
  const parsedResult = JSON.parse(emu_table);
  var server_select = document.getElementById('server_emu');
  var local_emu = document.getElementById('local_emu');
  for(const item of parsedResult) {
    if(game_emu_id==item.id){
      var emu_name = await getFileName(item.emu_path);
      local_emu.innerHTML='当前游戏的模拟器为：'+emu_name;
      for (let i = 0; i < server_select.options.length; i++) {
        if (server_select.options[i].text === emu_name) {        
          server_select.options[i].selected = true; // 设置为选中状态
          form_rom_Object['emulations']=server_select.options[i].text;
          return ;
        }
      }
    } else{
    server_select.options[0].selected = true;  
    local_emu.innerHTML='当前游戏的模拟器为：'; 
    form_rom_Object['emulations']='';
    }
  }
}
//添加游戏名
function add_game_name(game_name) {
  var game_name_input = document.getElementById('ch_name');
  game_name_input.value = game_name;
}
//添加作者昵称
function add_author(user_name) {
  var author = document.getElementById('author');
  author.innerHTML = user_name;
  form_rom_Object['author']=user_name;
}
//添加游戏运行文件路径
function add_game_run(run_file_path) {
  var game_run_file = document.getElementById('game_run_file');
  game_run_file.value=run_file_path;
}
//添加游戏压缩包文件路径
function add_game_zip(zip_file_path) {
  var game_zip_file = document.getElementById('game_zip_file');
  game_zip_file.value=zip_file_path;
}
//添加游戏补丁ips文件路径
function add_game_ips(ips_file_path) {
  var game_ips_file = document.getElementById('game_ips_file');
  game_ips_file.value=ips_file_path;
}
async function get_game_run() {
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_run(file_paht);
  game_name=await getFileNamenoext(file_paht);
  add_game_name(game_name);
  var file_md5= await gei_file_md5(file_paht);
  add_game_file_md5(file_md5);
}
async function get_game_zip() {
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_zip(file_paht);
}
async function get_game_ips() {
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_ips(file_paht);
  game_name=await getFileNamenoext(file_paht);
  add_game_name(game_name);
  var file_md5= await gei_file_md5(file_paht);
  add_game_file_md5(file_md5);
}
async function get_game_thumbnail(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_thumbnail(file_paht);
}
async function get_game_cassette(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_cassette(file_paht);
}
async function get_game_video(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_video(file_paht);
}
async function get_game_ui_bj(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_ui_bj(file_paht);
}
async function get_game_screenshot(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_screenshot(file_paht);
}
async function get_game_cover(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_cover(file_paht);
}
async function get_circuit_path(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_circuit_path(file_paht);
}
async function get_game_box(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_box(file_paht);
}
async function get_game_poster(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_poster(file_paht);
}
async function get_game_poster(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_poster(file_paht);
}
async function get_game_logo(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_logo(file_paht);
}
async function get_game_role(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_role(file_paht);
}
async function get_game_magazine(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_magazine(file_paht);
}
async function get_game_title(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_title(file_paht);
}
async function get_game_ico(){
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  add_game_ico(file_paht);
}