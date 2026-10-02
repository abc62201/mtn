// 启动设置页
async function mtn_ui_set() {
    await joy_start(0);

    var web_obj = document.getElementById('main_content');
    var web_txt = `
        <h2>当前选择：基础设置-主题管理</h2>
        <div class="ui_set">
            <div><img id="add_ui_thumb" class="ui_thumb" src=""></img></div>
            <div class="ui_input"><label class="ui_label" for="add_ui_name">主题名称</label>
                <input type="text" class="form-control ui_txt" id="add_ui_name" name="add_ui_name" value=""></div>
            <div class="ui_input"><label class="ui_label" for="add_ui_path">文件路径</label>
                <input  type="text" class="form-control ui_path ui_txt" id="add_ui_path" name="add_ui_path" value="">
                <button class="ui_button" type="button" onclick="ui_path_flie('add_ui_path')">选择</button></div>
            <div class="ui_input"><label class="ui_label" for="add_ui_img">缩略图</label>
                <input type="text" class="form-control ui_path ui_txt" id="add_ui_img" name="add_ui_img" value="">
                <button class="ui_button" type="button" onclick="ui_thumb_flie('add_ui_img', 'add_ui_thumb')">选择</button>
                <button class="ui_button" type="button" onclick="add_ui()">添加主题</button></div>
        </div>
        <div id="set_ui"></div>
    `;
    web_obj.innerHTML = web_txt;
    create_ui_list();
}

async function create_ui_list() {
    var ui_list = await get_ui_table();
	if (ui_list === "") {
        return;
    }
    var parsedResult = JSON.parse(ui_list);
    var web_obj = document.getElementById('set_ui');
    web_obj.innerHTML = '';
    var web_txt = '';

    for (const item of parsedResult) {
        var img_id = 'ui_img_' + item.id;
        var ui_name_id = 'ui_name_' + item.id;
        var ui_path_id = 'ui_path_' + item.id;
        var ui_thumb_id = 'ui_thumb_' + item.id;

        web_txt += `
            <div class="ui_set">
                <div><img id="${img_id}" class="ui_thumb" src="${ispath(item.ui_img)}"></img></div>
                <div class="ui_input"><label class="ui_label" for="${ui_name_id}">主题名称</label>
                    <input type="text" class="form-control ui_txt" id="${ui_name_id}" name="${ui_name_id}" value="${item.ui_name}"></div>
                <div class="ui_input"><label class="ui_label" for="${ui_path_id}">文件路径</label>
                    <input type="text" class="form-control ui_path ui_txt" id="${ui_path_id}" name="${ui_path_id}" value="${item.ui_path}">
                    <button class="ui_button" type="button" onclick="ui_path_flie('${ui_path_id}')">选择</button></div>
                <div class="ui_input"><label class="ui_label" for="${ui_thumb_id}">缩略图</label>
                    <input class="form-control ui_path ui_txt" type="text" class="form-control ui_path" id="${ui_thumb_id}" name="${ui_thumb_id}" value="${item.ui_img}">
                    <button class="ui_button" type="button" onclick="ui_thumb_flie('${ui_thumb_id}', '${img_id}')">选择</button>
                    <button class="ui_button" type="button" style="margin:5px;" onclick="replace_ui(${item.id})">修改主题</button>
                    <button class="ui_button" type="button" onclick="delete_ui(${item.id})">删除主题</button></div>
            </div>
        `;
        web_obj.innerHTML = web_txt;
    }
}
// 修改主题
async function replace_ui(id){
    var form_rom_Object = {};
    var ui_name_id = 'ui_name_' + id;
    var ui_path_id = 'ui_path_' + id;
    var ui_thumb_id = 'ui_thumb_' + id;
    form_rom_Object['id']=id;
    var ui_name = document.getElementById(ui_name_id);
    if (ui_name.value==""){alert('主题名称不能为空'); return;}
    form_rom_Object['ui_name']=ui_name.value;
    var ui_path = document.getElementById(ui_path_id);
    if (ui_path.value==""){alert('文件路径不能为空'); return;}
    form_rom_Object['ui_path']=ui_path.value;
    var ui_thumb = document.getElementById(ui_thumb_id);
    form_rom_Object['ui_img']=ui_thumb.value;
    var result=await replace_ui_data(form_rom_Object);
    if (result === "ok"){
        alert("修改成功");
        create_ui_list();
    } else {
        alert(result);
    }
}
//删除主题
async function delete_ui(id){
    var result=await delete_ui_data(id);
    if (result === "ok"){
        alert("删除成功");
        create_ui_list();
    } else {
        alert(result);
    }
}
//添加主题
async function add_ui(){
    var form_rom_Object = {};
    var add_ui_name = document.getElementById('add_ui_name');
    if (add_ui_name.value==""){alert('主题名称不能为空'); return;}
    form_rom_Object['ui_name']=add_ui_name.value;
    var add_ui_path = document.getElementById('add_ui_path');
    if (add_ui_path.value==""){alert('文件路径不能为空'); return;}
    form_rom_Object['ui_path']=add_ui_path.value;
    var add_ui_img = document.getElementById('add_ui_img');
    if (add_ui_img.value==""){alert('缩略图不能为空'); return;}
    form_rom_Object['ui_img']=add_ui_img.value;
    var result=await add_ui_data(form_rom_Object);
    if (result === "ok"){
        alert("添加成功");
        create_ui_list();
    } else {
        alert(result);
    }
}
async function ui_path_flie(input_id) {
    var ui_path_txt = document.getElementById(input_id);
    ui_path_txt.value = await gei_file_path();
}

async function ui_thumb_flie(input_id, img_id) {
    var ui_thumb_txt = document.getElementById(input_id);
    var ui_ithumb_img = document.getElementById(img_id);
    var img_path = await gei_file_path();
    ui_thumb_txt.value = img_path;
    ui_ithumb_img.src = ispath(img_path);
}