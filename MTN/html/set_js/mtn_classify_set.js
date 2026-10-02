//启动设置页
function mtn_classify_set(){
    joy_start(0);
var submenu_list = document.getElementById('NavList_submenu');
//清空导航子菜单
submenu_list.innerHTML='';
submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_addclassify_set'],21);
submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_gamepath_set'],22);
submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_gamefile_set'],23);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-分类设置</h2>';

web_obj.innerHTML = web_txt;
classify_set_web();
}
function mtn_ui_init(){
    joy_start(0);
    

var submenu_list = document.getElementById('NavList_submenu');
//清空导航子菜单
submenu_list.innerHTML='';

submenu_list_add(submenu_list,mtn_text['NavList_ui_set'],41);
submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_ui_make'],42);
var web_obj = document.getElementById('main_content');
var web_txt='';

web_txt+='<h2>当前选择：基础设置-主题管理</h2>';

web_obj.innerHTML = web_txt;
mtn_ui_set();
}
