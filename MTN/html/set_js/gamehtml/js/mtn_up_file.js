var form_rom_Object = {};
async function mtn_init(){
    
    var toolclassify_table= await get_server_tool_classfy();
    var user_intro= await get_user_intro();
    if (user_intro === "") {
        alert("请先登录");
        history.back();
        return;
    }
    const user_json = JSON.parse(user_intro);
    creat_serverclassify_list(toolclassify_table);
    add_author(user_json.user_nickname);
}

//添加作者昵称
function add_author(user_name) {
    var author = document.getElementById('author');
    author.innerHTML = user_name;  
    form_rom_Object['author']=user_name;
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
//选择文件
async function get_up_flie() {
    var file_paht= await gei_file_path();
    if (file_paht === "") {
      return;
    }
    var up_file_path = document.getElementById('up_file');
    up_file_path.value=file_paht;
    game_name=await getFileNamenoext(file_paht);
    var file_name = document.getElementById('file_name');
    file_name.value = game_name;
  }
  //选择缩略图
  async function get_up_thumbnail() {
    var file_paht= await gei_file_path();
    if (file_paht === "") {
      return;
    }
    var up_thumbnail = document.getElementById('up_thumbnail');
    up_thumbnail.value=file_paht;
  }
  //上传文件
 async function up_file() {
  //文件分类
  var server_select = document.getElementById('server_select');
  if(server_select.value==0){
    alert('请选择服务游戏分类');
    return;
  }
//下载费用
  var pay_f = document.getElementById('pay_f');
  if(pay_f.value==''){
    alert('请选输入费用');
    return;
  }
  form_rom_Object['pay_f']=pay_f.value;
//文件中文名
  var file_name = document.getElementById('file_name');
  if(file_name.value==''){
    alert('请选输入文件名');
    return;
  }
  form_rom_Object['ch_name']=file_name.value;
//文件路径
  var up_file_p = document.getElementById('up_file');
  if(up_file_p.value==''){
    alert('请选选择上传的文件');
    return;
  }
  form_rom_Object['up_file_p']=up_file_p.value;
//运行首页
  var ui_name = document.getElementById('ui_name');
  if(ui_name.value=='' &&   form_rom_Object['classification']=="皮肤"){
    alert('请选主题皮肤必须输入运行的首页');
    return;
  }
  form_rom_Object['ui_path']=ui_name.value;
//缩略图
  var up_thumbnail = document.getElementById('up_thumbnail');
  if(up_thumbnail.value==''){
    alert('请选择缩略图');
    return;
  }
  form_rom_Object['thumbnail']=up_thumbnail.value;

  var author_intro = document.getElementById('author_intro');
  form_rom_Object['intro']=author_intro.value;
  var up_result=await up_mtn_file(form_rom_Object);
  if (up_result=="ok"){
    alert("上传成功");
    document.getElementById('progress').style.display = 'none';
  }else{
    alert(up_result);
  }
  } 