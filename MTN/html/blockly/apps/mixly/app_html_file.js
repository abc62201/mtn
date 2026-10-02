
async function apphtmlfile(){
  var classify_table=await get_classify_table();
  var up_ui_file=document.getElementById("up_ui_file");
  up_ui_file.style.display='block';
  up_ui_file.innerHTML='';
  form_apphtml=document.createElement("form");
  form_apphtml.id="form_apphtml";
  form_apphtml.className="form_apphtml";
  form_apphtml.innerHTML="";
  var form_apphtml_html='' ;
  form_apphtml_html+='<div class="card">';
  form_apphtml_html+='<div class="card-header">';
  form_apphtml_html+='应用主题';
  form_apphtml_html+='<div><img id="thumbnail" class="card-img-top"></div>';
  form_apphtml_html+='</div">';
  form_apphtml_html+='<div class="card-body">';
  form_apphtml_html+='<div class="input-group mb-3">';
  form_apphtml_html+='<label for="name" class="form-label">选择分类:&nbsp;&nbsp;</label>';
  form_apphtml_html+='<select id="apphtml_select" class="form-select" aria-label="Default select example"></select>'; 
  form_apphtml_html+='</div>'; 
  form_apphtml_html+='<div class="input-group mb-3">';
  form_apphtml_html+='<label for="name" class="form-label">主题名称:&nbsp;&nbsp;</label>';
  form_apphtml_html+='<input type="text" id="name" name="name" class="form-control" placeholder="请输入主题名称">' ;
  form_apphtml_html+='</div>'; 
  form_apphtml_html+='<div class="input-group mb-3">';
  form_apphtml_html+='<label for="name" class="form-label">文件名:&nbsp;&nbsp;</label>';
  form_apphtml_html+='<input type="text" id="file_name" name="file_name" class="form-control" placeholder="请输入文件名">' ;
  form_apphtml_html+='</div>';
  form_apphtml_html+='<div class="input-group mb-3">';
  form_apphtml_html+='<label for="name" class="form-label">缩略图:&nbsp;&nbsp;</label>';
  form_apphtml_html+='<input type="text" id="file_img" name="file_img" class="form-control">';
  form_apphtml_html+='<button class="btn btn-outline-secondary" type="button" onclick="file_img_file()">选择</button>' ;
  form_apphtml_html+='</div>';
  form_apphtml_html+='<div>';
  form_apphtml_html+='<button style="margin: 10px;" type="button" class="btn btn-default btn-lg bg-primary text-white" onclick="apphtml_file_ok()">确定</button>' ;
  form_apphtml_html+='<button style="margin: 10px;" type="button" class="btn btn-default btn-lg bg-primary text-white" onclick="apphtml_file_cancel()">取消</button>' ;
  form_apphtml_html+='</div>';
  form_apphtml_html+='</div">';
  form_apphtml_html+='</div>';
  form_apphtml_html+='</form>';
  form_apphtml.innerHTML=form_apphtml_html;
  up_ui_file.appendChild(form_apphtml);
  creat_serverclassify_list(classify_table);
}
// 创建分类
function creat_serverclassify_list(serverclassify_table) {
  if (serverclassify_table === "") {
    return;
}
const parsedResult = JSON.parse(serverclassify_table);
var server_select = document.getElementById('apphtml_select');
server_select.innerHTML = '';
var default_option = document.createElement('option');
default_option.value = 0;
default_option.text = "请选择分类";
server_select.appendChild(default_option);
for (const item of parsedResult) {
var server_option = document.createElement('option'); // 每次循环创建一个新的 option
server_option.value = item.id;
server_option.text = item.daohang_name;
server_select.appendChild(server_option);
}
}

async function file_img_file() {
  var file_paht= await gei_file_path();
  if (file_paht === "") {
    return;
  }
  var file_img = document.getElementById('file_img');
  file_img.value=file_paht;
  var up_thumbnail = document.getElementById('thumbnail');
  up_thumbnail.src=ispath(file_paht);
}
async function apphtml_file_cancel() {
  var up_ui_file = document.getElementById('up_ui_file');
  up_ui_file.style.display='none';
}

async function apphtml_file_ok() {
  var form_rom_Object = {};
  var apphtml_select = document.getElementById('apphtml_select');
  if (apphtml_select.value === "0") {
    alert("请选择分类");
    return;
  }
  form_rom_Object['classify_id']=apphtml_select.value;
  var name = document.getElementById('name');
  if (name.value === "") {
    alert("请输入主题名称");
    return;
  }
  form_rom_Object['name']=name.value;
  var file_name = document.getElementById('file_name');
  if (file_name.value === "") {
    alert("请输入文件名");
    return;
  }
  form_rom_Object['file_name']=file_name.value;
  var file_img = document.getElementById('file_img');
  if (file_img.value === "") {
    alert("请选择缩略图");
    return;
  }
  form_rom_Object['file_img']=file_img.value;
  var code = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace) || '';
  var chinese_code = code.replace(/(_[0-9A-F]{2}_[0-9A-F]{2}_[0-9A-F]{2})+/g, function (s) { return decodeURIComponent(s.replace(/_/g, '%')); });
  form_rom_Object['chinese_code']=chinese_code;
  const result = await add_make_ui(form_rom_Object);
  if (result === "ok" ){
    alert("添加成功");
    var up_ui_file = document.getElementById('up_ui_file');
    up_ui_file.style.display='none';
  } else {
    alert("添加失败");
  }
}

async function add_make_ui(ui_data) {
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=window.indexViewBinding.add_make_ui(ui_data);
  return result;
}