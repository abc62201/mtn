var parsedResult={};
var classify_path="";
const params = getUrlVars();
async function mtn_init(){
  // 使用示例
  await joy_start(0);
var game_sql="id = "+params.game_id;
var game_table= await get_game_table(game_sql,0,1);
if (game_table !== "") {
   parsedResult = JSON.parse(game_table);
   add_file_path('ui_bj',parsedResult[0].ui_bj);
   add_file_path('img_title',parsedResult[0].game_title_path);
   add_file_path('img_cover',parsedResult[0].game_cover_path);
   add_file_path('img_thumbnail',parsedResult[0].game_thumb_path);
   add_file_path('img_screenshot',parsedResult[0].game_screenshot_path);
   add_file_path('img_logo',parsedResult[0].game_logo_path);
   add_file_path('videoPreview',parsedResult[0].game_video_path);
   add_file_path('pdf_magazine',parsedResult[0].game_magazine);
   create_classfly();
   add_text_str('game_name',parsedResult[0].game_name);
   add_text_str('game_ver',parsedResult[0].game_ver);
   add_file_path('flagImage',parsedResult[0].national_flag);
   add_text_str('game_score',parsedResult[0].game_score);
   add_text_str('game_players',parsedResult[0].game_players);
   add_text_str('game_issuing_date',parsedResult[0].game_issuing_date);
   add_text_str('game_developer',parsedResult[0].game_developer);
   add_text_str('game_publisher',parsedResult[0].game_publisher);
   add_text_str('game_language',parsedResult[0].game_language);
   create_emu();
   add_text_str('game_type',parsedResult[0].game_type);
   add_text_str('emu_args',parsedResult[0].emu_args);
   add_text_str('game_md5',parsedResult[0].game_md5);
   get_roast_table(parsedResult[0].game_md5);
   add_text_str('game_intro_path',parsedResult[0].game_intro_path);
   add_file_path('img_cassette',parsedResult[0].game_cassette_path);
   add_file_path('img_circuit',parsedResult[0].game_circuit_path);
   add_file_path('img_box',parsedResult[0].game_box_path);
   add_file_path('img_poster',parsedResult[0].game_poster_path);
   add_file_path('img_role',parsedResult[0].game_role_paht);
   add_file_path('game_ico',parsedResult[0].game_ico);
   add_file_path('game_rom_path',parsedResult[0].game_rom_path);
   add_file_path('game_ips_path',parsedResult[0].game_ips_path);
   add_gameset_txt();
}else{
window.location.href = "game_index.html";
}
}

//添加文本数据
async function add_text_str(file_type,txt_str){
  switch (file_type) {
    case "game_name":
      document.getElementById(file_type).innerText= txt_str;
      break;
    case "game_ver":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_score":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_players":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_issuing_date":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_developer":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_publisher":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_language":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_type":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "emu_args":
      document.getElementById(file_type).innerText=txt_str;
      break;
    case "game_intro_path":
      var intro_txt=await read_text(txt_str);
      document.getElementById(file_type).innerText=intro_txt;
      break;
      case "game_md5":
        document.getElementById(file_type).innerText=txt_str;
        break;
    default:
      break;

  }
}
//创建模拟器模态框
async function create_emu(){
  var emu_table=await get_emu_table();
  var emu_ico = document.getElementById('emu_ico');
  var emu_row = document.getElementById('emu_row');
  var emu_core = document.getElementById('emu_core');
  var core_row = document.getElementById('core_row');
  emu_row.innerHTML = '';
  emu_core.innerHTML = '';
  if (emu_table !== "") {
    var emu_table_sql = JSON.parse(emu_table);
    for (const item of emu_table_sql) {
      if(item.emu_path != null && item.emu_path.trim() !== ""){       
      var emu_ico_div = document.createElement('div');
      emu_ico_div.className = 'col-md-3';
      var emu_ico_img = document.createElement('img');
      emu_ico_img.src = ispath(item.emu_ico);
      emu_ico_img.className = 'img-thumbnail rounded emu-option';
      emu_ico_img.alt = item.id;
      emu_ico_img.title =item.emu_name;
      emu_ico_img.style.height = '64px';
      emu_ico_div.appendChild(emu_ico_img);
      emu_ico_div.addEventListener('click', function() {
        var emu_ico = document.getElementById('emu_ico');
        emu_ico.src = ispath(item.emu_ico);
        emu_ico.alt = item.id;
        emu_ico.title = item.emu_name;
        parsedResult[0].game_emu_id=item.id;
        var emu_core = document.getElementById('emu_core');
        emu_core.innerHTML = '';
        parsedResult[0].emu_core_id='0';
        var modal = bootstrap.Modal.getInstance(document.getElementById('modal_emu'));  
        if (modal) {  
          modal.hide();  
        } 
      });
      emu_row.appendChild(emu_ico_div);
      if(item.id==parsedResult[0].game_emu_id){
        emu_ico.src=ispath(item.emu_ico);
        emu_ico.alt=parsedResult[0].game_emu_id;
        emu_ico.title=item.emu_name;
      }
    }
    if(item.emu_core != null && item.emu_core.trim() !== ""){       
      var emu_core_div = document.createElement('div');
      emu_core_div.className = 'col-md-4';
      var emu_core_div_card = document.createElement('div');
      emu_core_div_card.className = 'card mb-3';
      var emu_core_div_card_body = document.createElement('div');
      emu_core_div_card_body.className = 'card-body';
      var emu_core_div_card_body_text = document.createElement('div');
      emu_core_div_card_body_text.className = 'card-text rounded core-option';
      emu_core_div_card_body_text.innerText = item.emu_name;
      emu_core_div_card_body_text.value=item.id;
      emu_core_div_card_body.appendChild(emu_core_div_card_body_text);
      emu_core_div_card.appendChild(emu_core_div_card_body);
      emu_core_div.appendChild(emu_core_div_card);
      emu_core_div_card.addEventListener('click', function() {
        var emu_core = document.getElementById('emu_core');
        emu_core.innerText=item.emu_name;
        emu_core.value = item.id;
        parsedResult[0].emu_core_id=item.id;
        var modal = bootstrap.Modal.getInstance(document.getElementById('modal_core'));  
        if (modal) {  
          modal.hide();  
        } 
      });
      core_row.appendChild(emu_core_div);
      if(item.id==parsedResult[0].emu_core_id){
        emu_core.innerText=item.emu_name;
        emu_core.value = item.id;
      }
    }
  }
  }

}
//清空选择的模拟器
function emu_clear(){
  var emu_ico = document.getElementById('emu_ico');
  emu_ico.src = '';
  emu_ico.alt = '';
  emu_ico.title = '';
  parsedResult[0].game_emu_id='0';
  var modal = bootstrap.Modal.getInstance(document.getElementById('modal_emu'));  
  if (modal) {  
    modal.hide();  
  } 
}
//清空选择的核心
function core_clear(){
  var emu_core = document.getElementById('emu_core');
  emu_core.innerHTML = '';
  parsedResult[0].emu_core_id='0';
  var modal = bootstrap.Modal.getInstance(document.getElementById('modal_core'));  
  if (modal) {  
    modal.hide();  
  } 
}
//创造分类菜单
async function create_classfly(){
  var classfly_option = document.getElementById('game_classfly');
  classfly_option.innerHTML = '';
  var classfly_table=await get_classify_table_all();
  if (classfly_table !== "") {
    var result = JSON.parse(classfly_table);
    for (const item of result) {
      var option = document.createElement('option');
      option.value = item.id;
      option.text = item.daohang_name;
      classfly_option.appendChild(option);
      // 如果当前option的value与parsedResult[0].classify_id匹配，则设置为选中状态
      if (option.value == parsedResult[0].classify_id) {
        option.selected = true;
        classify_path=item.classify;
      }
    }
    //选择事件监听
    classfly_option.addEventListener('change', function() {
      var selectedItem = this.options[this.selectedIndex];
      parsedResult[0].classify_id = selectedItem.value;
    });
  }
}
//添加文件数据
async function add_file_path(file_type,file_path){
  var file_allpath = ispath(file_path);
  switch (file_type) {
    case "ui_bj":
      if (file_allpath==""){
        document.body.style.backgroundImage = `url('img/thumbs/no_ui.jpg')`;
      }else{
        document.body.style.backgroundImage = `url('${file_allpath}')`;
      }
      
    break;
    case "img_title":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_cover":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_thumbnail":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_screenshot":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_logo":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "videoPreview":
        document.getElementById(file_type).src= file_allpath;
    break;
    case "pdf_magazine":
       document.getElementById(file_type).data= file_allpath;//'data:application/pdf;base64,' + pdf_data;
    break;
    case "flagImage":
      document.getElementById(file_type).src= file_allpath;
    break;
    case "img_cassette":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_circuit":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_box":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_poster":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "img_role":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "game_ico":
      if (file_allpath==""){
        document.getElementById(file_type).src= 'img/thumbs/no_pic.png';
      }else{
        document.getElementById(file_type).src= file_allpath;
      }
    break;
    case "game_ips_path":
        document.getElementById("game_ips_path").innerText= file_allpath;
    break;
    case "game_rom_path":
      document.getElementById("game_rom_path").innerText= file_path;
    break;

    default:
    break;
  }
}
//运行游戏
async function run_game_rom(){
  run_game(params.game_id);
  var game_video = document.getElementById('videoPreview');
  game_video.muted = true;
}
//选择文件添加
async function open_file(type_str){
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=await window.indexViewBinding.file_path();
  var file_path=result;
  switch (type_str) {
    case "ui_bj":
      parsedResult[0].ui_bj=file_path;
      add_file_path('ui_bj',file_path);
      break;
    case "game_title_path":
      parsedResult[0].game_title_path=file_path;
      add_file_path('img_title',file_path);
      break;
    case "game_cover_path":
      parsedResult[0].game_cover_path=file_path;
      add_file_path('img_cover',file_path);
      break;  
    case "game_thumb_path":
      parsedResult[0].game_thumb_path=file_path;
      add_file_path('img_thumbnail',file_path);
      break;
    case "game_screenshot_path":
      parsedResult[0].game_screenshot_path=file_path;
      add_file_path('img_screenshot',file_path);
      break;
    case "game_logo_path":
      parsedResult[0].game_logo_path=file_path;
      add_file_path('img_logo',file_path);
      break;
    case "game_video_path":
      parsedResult[0].game_video_path=file_path;
      add_file_path('videoPreview',file_path);
      break;
    case "game_magazine":
      parsedResult[0].game_magazine=file_path;
      add_file_path('pdf_magazine',file_path);
      break;
    case "game_cassette_path":
      parsedResult[0].game_cassette_path=file_path;
      add_file_path('img_cassette',file_path);
      break;
    case "game_circuit_path":
      parsedResult[0].game_circuit_path=file_path;
      add_file_path('img_circuit',file_path);
      break;
    case "game_box_path":
      parsedResult[0].game_box_path=file_path;
      add_file_path('img_box',file_path);
      break;
    case "game_poster_path":
      parsedResult[0].game_poster_path=file_path;
      add_file_path('img_poster',file_path);
      break;
    case "game_role_paht":
      parsedResult[0].game_role_paht=file_path;
      add_file_path('img_role',file_path);
      break;
    case "game_ico":
      parsedResult[0].game_ico=file_path;
      add_file_path('game_ico',file_path);
      break;
    case "game_ips_path":
      parsedResult[0].game_ips_path=file_path;
      await add_game_rom_ips(parsedResult[0]);
        break;
    default:
      break;
  }
}
async function open_path_window(type_str){
  var file_path='';
  switch (type_str) {
    case "game_title_path":
      if (parsedResult[0].game_title_path!="" && await check_file_exist(parsedResult[0].game_title_path)){
        file_path=parsedResult[0].game_title_path;
      }else{
        file_path='rom/'+classify_path+'/title';
      }
      break;
    case "game_cover_path":

      if (parsedResult[0].game_cover_path!="" && await check_file_exist(parsedResult[0].game_cover_path)){
        file_path=parsedResult[0].game_cover_path;
      }else{
        file_path='rom/'+classify_path+'/cover';
      }
      
      break;
    case "game_thumb_path":
      if (parsedResult[0].game_thumb_path!="" && await check_file_exist(parsedResult[0].game_thumb_path)){
        file_path=parsedResult[0].game_thumb_path;
      }else{
        file_path='rom/'+classify_path+'/thumb';
      }
      
      break;
    case "game_screenshot_path":
      if (parsedResult[0].game_screenshot_path!="" && await check_file_exist(parsedResult[0].game_screenshot_path)){
        file_path=parsedResult[0].game_screenshot_path;
      }else{
        file_path='rom/'+classify_path+'/screenshot';
      }
      
      break;
    case "game_logo_path":
      if (parsedResult[0].game_logo_path!="" && await check_file_exist(parsedResult[0].game_logo_path)){
        file_path=parsedResult[0].game_logo_path;
      }else{
        file_path='rom/'+classify_path+'/logo';
      }
      
      break;
    case "ui_bj":
      if (parsedResult[0].ui_bj!="" && await check_file_exist(parsedResult[0].ui_bj)){
        file_path=parsedResult[0].ui_bj;
      }else{
        file_path='rom/'+classify_path+'/ui_bj';
      }
      
      break;
    case "game_video_path":
      if (parsedResult[0].game_video_path!="" && await check_file_exist(parsedResult[0].game_video_path)){
        file_path=parsedResult[0].game_video_path;
      }else{
        file_path='rom/'+classify_path+'/video';
      }
      
      break;
    case "game_magazine":
      if (parsedResult[0].game_magazine!="" && await check_file_exist(parsedResult[0].game_magazine)){
        file_path=parsedResult[0].game_magazine;
      }else{
        file_path='rom/'+classify_path+'/magazine';
      }
      
      break;
    case "game_ips_path":
      if (parsedResult[0].game_ips_path!="" && await check_file_exist(parsedResult[0].game_ips_path)){
        file_path=parsedResult[0].game_ips_path;
      }else{
        file_path='rom/'+classify_path+'/ips';
      }
      
      break;
    case "game_cassette_path":
      if (parsedResult[0].game_cassette_path!="" && await check_file_exist(parsedResult[0].game_cassette_path)){
        file_path=parsedResult[0].game_cassette_path;
      }else{
        file_path='rom/'+classify_path+'/cassette';
      }
      
      break;
    case "game_circuit_path":
      if (parsedResult[0].game_circuit_path!="" && await check_file_exist(parsedResult[0].game_circuit_path)){
        file_path=parsedResult[0].game_circuit_path;
      }else{
        file_path='rom/'+classify_path+'/circuit';
      }
      
      break;
    case "game_box_path":
      if (parsedResult[0].game_box_path!="" && await check_file_exist(parsedResult[0].game_box_path)){
        file_path=parsedResult[0].game_box_path;
      }else{
        file_path='rom/'+classify_path+'/box';
      }
      
      break;
    case "game_poster_path":
      if (parsedResult[0].game_poster_path!="" && await check_file_exist(parsedResult[0].game_poster_path)){
        file_path=parsedResult[0].game_poster_path;
      }else{
        file_path='rom/'+classify_path+'/poster';
      }
      
      break;
    case "game_role_paht":
      if (parsedResult[0].game_role_paht!="" && await check_file_exist(parsedResult[0].game_role_paht)){
        file_path=parsedResult[0].game_role_paht;
      }else{
        file_path='rom/'+classify_path+'/role';
      }
      
      break;
    case "game_ico":
      if (parsedResult[0].game_ico!="" && await check_file_exist(parsedResult[0].game_ico)){
        file_path=parsedResult[0].game_ico;
      }else{
        file_path='rom/'+classify_path+'/ico';
      }
      
      break;
    case "game_rom_path":
      file_path=parsedResult[0].game_rom_path;
      break;
    case "game_intro_path":
      if (parsedResult[0].game_intro_path!="" && await check_file_exist(parsedResult[0].game_intro_path)){
        file_path=parsedResult[0].game_intro_path;
      }else{
        file_path='rom/'+classify_path+'/intro';
      }

      break;
    default:
      break;
  }
  await open_file_path(file_path);
}
//添加文本
async function add_table_text(type_str){
  switch (type_str) {
    case "game_name":
      var text_str=document.getElementById('game_name').textContent;
      parsedResult[0].game_name=text_str;
      
      break;
    case "game_ver":
      var text_str=document.getElementById('game_ver').textContent;
      parsedResult[0].game_ver=text_str;
      break;
    case "game_score":
      var text_str = document.getElementById('game_score').textContent;
      var score = Number(text_str);
      if (isNaN(score)) {
        score = 0; // 如果转换失败（即text_str不是数字），则设置score为0
      } else if (score > 5) {
         score = 5; // 如果score大于5，则限制为5
      }
      parsedResult[0].game_score = score;
      document.getElementById('game_score').textContent=score;
      break;
    case "game_players":
      var text_str = document.getElementById('game_players').textContent;
      var score = Number(text_str);
      if (isNaN(score)) {
          score = 0; // 如果转换失败（即text_str不是数字），则设置score为0
      } 
      parsedResult[0].game_players = score;
      document.getElementById('game_players').textContent=score;
      break;
    case "game_issuing_date":
      var text_str=document.getElementById('game_issuing_date').textContent;
      parsedResult[0].game_issuing_date=text_str;
      break;
    case "game_developer":
      var text_str=document.getElementById('game_developer').textContent;
      parsedResult[0].game_developer=text_str;
      break;
    case "game_publisher":
      var text_str=document.getElementById('game_publisher').textContent;
      parsedResult[0].game_publisher=text_str;
      break;
    case "game_language":
      var text_str=document.getElementById('game_language').textContent;
      parsedResult[0].game_language=text_str;
      break;
    case "game_type":
      var text_str=document.getElementById('game_type').textContent;
      text_str = text_str.replace(/；/g, ';');
      parsedResult[0].game_type=text_str;
      document.getElementById('game_type').textContent=text_str;
      break;
    case "emu_args":
      var text_str=document.getElementById('emu_args').textContent;
      parsedResult[0].emu_args=text_str;
      break;

    case "game_intro_path":
      var text_str=document.getElementById('game_intro_path').innerHTML;
      intro_file_path=await write_intro_text(parsedResult[0],text_str);
      parsedResult[0].game_intro_path=intro_file_path;
      //add_text_str('game_intro_path',parsedResult[0].game_intro_path);
      break;
    default:
      break;
  }
}

//回传数据
async function up_game() {
 var up_result=await up_game_table(parsedResult[0]);
 if (up_result=="ok"){
   alert("更新成功");
 }else{
   alert("更新失败");
 }
}
//回传数据
async function up_game_data() {
  var up_result=await up_game_inrto(parsedResult[0]);
  if (up_result=="ok"){
    alert("上传成功");
    document.getElementById('progress').style.display = 'none';
  }else{
    alert(up_result);
  }
 }


document.addEventListener('DOMContentLoaded', function () {  
  // 为每个国旗图片添加点击事件监听器  
  var flagOptions = document.querySelectorAll('.flag-option');  
  flagOptions.forEach(function (flag) {  
    flag.addEventListener('click', function () {  
      var flagImage = document.getElementById('flagImage');  
      flagImage.src = this.src; 
	  src_str= decodeURIComponent(flagImage.src)
    parsedResult[0].national_flag=getRelativePath(src_str); 
    // 关闭模态框  
    var modal = bootstrap.Modal.getInstance(document.getElementById('modal_flag'));  
    if (modal) {  
       modal.hide();  
    }  
    });  
  });  
});
//上一页
function previous_page(){
  var page_no=Number(parsedResult[0].id);
  if(page_no>1){
    page_no=page_no-1;
    window.location.href = "set_game.html?game_id="+page_no;
  }
}
//下一页
async function next_page(){
  var max_id=Number(await get_game_max_id());
  var page_no=Number(parsedResult[0].id);
  if(page_no<max_id){
    page_no=page_no+1;
    window.location.href = "set_game.html?game_id="+page_no;
  }
}

//双击md5值
async function dblclick_game_md5() { 
  await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.game_md5_setgame(parsedResult[0].game_md5);
  if (result=="ok"){
    //alert("设置成功");
  }else{
    alert("未找到该游戏请先：上传游戏资料");
  }
}