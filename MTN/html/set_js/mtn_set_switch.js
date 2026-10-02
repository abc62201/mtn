
async function set_switch(value){
	await joy_start(0);
	switch (value) {
    case '1':
        mtn_init();
        break;
    case '2':
        mtn_classify_set();
        break;
    case '3':
        window.location.href='set_js/gamehtml/game_index.html';
        break;
    case '4':
        mtn_ui_init();
        break;
    case '5':
        window.location.href='set_js/gamehtml/user_bookmarks.html';
        //open_help_ui('http://192.168.0.107:8083/');
        break;
    case '6':
        //mtn_load_collect_web();      
        break;
    case '7':
        mtn_joytokey_set();
        //window.location.href='set_js/gamehtml/game_index.html';
        break;
    case '8':
        //if(ipv4_is_ok=="ipv4"){
         //   var luntan='http://112.126.69.199:23003:8890/pic/upload/forum.php'
        //}else if(ipv4_is_ok=="ipv6"){
        //    var luntan='http://ipv6.mtnhome.top:8890/pic/upload/forum.php'
       // }else{
         //   var luntan='http://192.168.0.107:8890/pic/upload/forum.php'
       // }
        
        //open_help_ui(luntan);
        break;
    case '9':
        //open_help_ui('/html/help/build/html/index.html');
        break;
    case '11':
        start_web();
        break;
    case '12':
        set_emu_web();
        break;
    case '13':
        set_args_web();
        break;
    case '14':
            meu_dw_web();
        break;
    case '15':
        meu_up_web();
        break;
    case '16':
    mtn_user_web();
    break;
    case '17':
        mtn_dw_list_web();
        break;
    case '18':
        mtn_repeat_game();
        break;
    case '19':
        mtn_set_ai();
        break;
    case '21':
        
        classify_set_web();
        break;
    case '22':
        gamepath_set_web();
        break;
    case '23':
        file_set_web();
        break;
    case '41':
        mtn_ui_init();
        break;
    case '42':
        open_help_ui('/html/blockly/apps/mixly/index.html');
        //window.location.href='blockly/apps/mixly/index.html';
        break;
    case '100':
        location_index();
        break;
    default:
        // 当 value 不等于 11 和 12 时执行的代码（可选）
        break;
}	
}

async function mtn_load_collect_web(){
    await CefSharp.BindObjectAsync('indexViewBinding');
    const result=await indexViewBinding.mtn_load_collect();
    if (result == "ok") {
        window.location.href='http://ipv6.mtnhome.top:71/abc.html';
    }else if(result == "ok1"){
        window.location.href='http://ipv4.mtnhome.top:23002/abc.html';
    }else if(result == "ok2"){
        window.location.href='http://ipv4.mtnhome.top:23002';
    }
    else if(result == "ok3"){
        window.location.href='http://192.168.0.107:71';
    }
    else{
        window.location.href='http://ipv6.mtnhome.top:71';
    }
}
async function location_index(){
    await CefSharp.BindObjectAsync('indexViewBinding');
    const result=await indexViewBinding.location_index();
    if (result=="ok"){
    }else{
        alert('你还没有选择游戏主题');
    }
}