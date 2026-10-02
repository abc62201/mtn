
async function mtn_init(){
	//设置导航
  await joy_start(0);
  int_music();
	var NavList = document.getElementById('NavList');
	var NavItems = NavList.getElementsByTagName('li');
	//清空导航
  NavList.innerHTML='';
  //添加导航
  NavList_add(NavList,mtn_text['NavList_game_index'],100);
	NavList_add(NavList,mtn_text['NavList_Basic_set'],1);
	NavList_add(NavList,mtn_text['NavList_classify_set'],2);
  NavList_add(NavList,mtn_text['NavList_game_set'],3);
  NavList_add(NavList,mtn_text['NavList_ui_set'],4);
  NavList_add(NavList,mtn_text['NavList_joystick_set'],7);
  NavList_add(NavList,mtn_text['NavList_mtn_reader_set'],5);
  //NavList_add(NavList,mtn_text['NavList_mtn_web'],6);
  //NavList_add(NavList,mtn_text['NavList_mtn_luntan'],8);
  //NavList_add(NavList,mtn_text['NavList_mtn_help'],9);
	//设置导航子菜单
	var submenu_list = document.getElementById('NavList_submenu');
	var submenuItems = NavList.getElementsByTagName('li');
	//清空导航子菜单
  submenu_list.innerHTML='';
  //添加导航子菜单
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_start_set'],11);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_set_ai'],19);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_emu_set'],12);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_emu_args'],13);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_emu_dw'],14);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_emu_up'],15);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_user_set'],16);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_dw_set'],17);
  submenu_list_add(submenu_list,mtn_text['submenu_list_mtn_repeat_game'],18);

  start_web();
}

function NavList_add(NavList_obj,NavList_txt,value){
	  //创建li标签
  var listItem = document.createElement('li');
  var listdiv = document.createElement('div');
  //设置标签属性
  listItem.setAttribute('value',value);
  //设置标签的文本值
	listdiv.innerHTML = NavList_txt;
	//添加到ul
	listItem.appendChild(listdiv);
  NavList_obj.appendChild(listItem);
    // 添加鼠标经过动画
  listItem.addEventListener('mouseenter', function() {
    listItem.style.backgroundColor = 'lightblue'; // 鼠标悬停时的背景颜色
  });

  // 移除鼠标经过动画
listItem.addEventListener('mouseleave', function() {
    listItem.style.backgroundColor = ''; // 鼠标离开时恢复原始背景颜色
  });
  //添加点击事件
listItem.addEventListener('click', function () {
	var selectedItem = this;
	var value = selectedItem.getAttribute('value'); 
	  set_switch(value);
	  //alert(value);
  });
}


function submenu_list_add(NavList_obj,NavList_txt,value){
	  //创建li标签
  var listItem = document.createElement('li');
  var listdiv = document.createElement('div');
  //设置标签属性
  listItem.setAttribute('value',value);
  //设置标签的文本值
	listdiv.innerHTML = NavList_txt;
	//添加到ul
	listItem.appendChild(listdiv);
  NavList_obj.appendChild(listItem);
    // 添加鼠标经过动画
  listItem.addEventListener('mouseenter', function() {
    listItem.style.backgroundColor = 'lightblue'; // 鼠标悬停时的背景颜色
  });

  // 移除鼠标经过动画
  listItem.addEventListener('mouseleave', function() {
    listItem.style.backgroundColor = ''; // 鼠标离开时恢复原始背景颜色
  });
  //添加点击事件
  listItem.addEventListener('click', function () {
	var selectedItem = this;
	var value = selectedItem.getAttribute('value');
	set_switch(value);
	  //alert(value);
  });
}

//播放背景音乐
function bg_play_music(music_url) { 
  var audio = document.getElementById('backgroundMusic');  
  audio.src = music_url;
  audio.play();
}
// 暂停背景音乐
function bg_pause_music() {
  var audio = document.getElementById('backgroundMusic');
  audio.pause();
}
function int_music() {
  var audio = document.getElementById('backgroundMusic');
  if (int_music_value==0 && mtn_config[0]["set_music_ft"]=="1") {
    audio.addEventListener('ended', function () {
      gain_play_music();
    });
    gain_play_music();
    //audio.style.display = 'block';
  }
  if (int_music_value==0 && mtn_config[0]["set_music_ft"]=="0") {
   // audio.style.display = 'none';
  }
 int_music_value=2;
}
async function gain_play_music(){
  await CefSharp.BindObjectAsync('indexViewBinding'); 
  const result=await window.indexViewBinding.set_bg_music();
  if (result !== "") {
    bg_play_music(result);
  }
}