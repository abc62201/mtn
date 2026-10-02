'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');


//等待执行完成
Blockly.Arduino.mtn_make_js_get_wait = function() {
  var value_fun_value = Blockly.Arduino.valueToCode(this, 'js_get_wait', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await '+value_fun_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//解析获取的数据
Blockly.Arduino.mtn_make_js_get_json_parse = function() {
  var get_json_parse = Blockly.Arduino.valueToCode(this, 'get_json_parse', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'JSON.parse('+get_json_parse+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//解析获取的数据
Blockly.Arduino.mtn_make_js_get_json_length = function() {
  var get_json_parse = Blockly.Arduino.valueToCode(this, 'get_json_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = get_json_parse+'.length';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取分类列表
Blockly.Arduino.mtn_make_js_get_classify_table = function() {
  var code = 'await get_classify_table()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取主题列表
Blockly.Arduino.mtn_make_js_get_ui_table = function() {
  var code = 'await get_ui_table()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取收藏分类表
Blockly.Arduino.mtn_make_js_get_fav_menu = function() {
  var code = 'await get_fav_menu()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取解析后分类数据的值
Blockly.Arduino.mtn_make_js_get_parse_value = function() {
  var get_parse_value1 = Blockly.Arduino.valueToCode(this, 'get_parse_value1', Blockly.Arduino.ORDER_ATOMIC);
  var get_parse_value2 = Blockly.Arduino.valueToCode(this, 'get_parse_value2', Blockly.Arduino.ORDER_ATOMIC);
  var get_parse_value3 = Blockly.Arduino.valueToCode(this, 'get_parse_value3', Blockly.Arduino.ORDER_ATOMIC);
  var code = get_parse_value1+'['+get_parse_value2+'].'+get_parse_value3;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//分类表字段名
Blockly.Arduino.mtn_make_js_get_classify_field = function() {
  var  mtn_make_js_get_classify_field_value=this.getFieldValue('mtn_make_js_get_classify_field_value'); 
  var code = mtn_make_js_get_classify_field_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//主题表字段名
Blockly.Arduino.mtn_make_js_get_ui_field = function() {
  var  mtn_make_js_get_ui_field_value=this.getFieldValue('mtn_make_js_get_ui_field_value'); 
  var code = mtn_make_js_get_ui_field_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//收藏分类表字段名
Blockly.Arduino.mtn_make_js_get_fav_field = function() {
  var  mtn_make_js_get_fav_field_value=this.getFieldValue('mtn_make_js_get_fav_field_value'); 
  var code = mtn_make_js_get_fav_field_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  //获取游戏列表
Blockly.Arduino.mtn_make_js_get_game_table = function() {
  var sql_value = Blockly.Arduino.valueToCode(this, 'sql_value', Blockly.Arduino.ORDER_ATOMIC);
  var tab_page1 = Blockly.Arduino.valueToCode(this, 'tab_page1', Blockly.Arduino.ORDER_ATOMIC);
  var tab_page2 = Blockly.Arduino.valueToCode(this, 'tab_page2', Blockly.Arduino.ORDER_ATOMIC);
  var ORDER_BY = Blockly.Arduino.valueToCode(this, 'ORDER_BY', Blockly.Arduino.ORDER_ATOMIC) || "ORDER BY id ASC";
  if (containsQuotedText(ORDER_BY)){
    ORDER_BY=getQuotedText(ORDER_BY);
  }
  var code = 'await get_game_table('+sql_value+','+tab_page1+','+tab_page2+',"'+ORDER_BY+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  //获取游戏列表
  Blockly.Arduino.mtn_make_js_get_bookmarks_table = function() {
    var sql_value = Blockly.Arduino.valueToCode(this, 'sql_value', Blockly.Arduino.ORDER_ATOMIC);
    var tab_page1 = Blockly.Arduino.valueToCode(this, 'tab_page1', Blockly.Arduino.ORDER_ATOMIC);
    var tab_page2 = Blockly.Arduino.valueToCode(this, 'tab_page2', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'await get_bookmarks_table('+sql_value+','+tab_page1+','+tab_page2+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//游戏列表字段名1
Blockly.Arduino.mtn_make_js_get_game_field1 = function() {
  var  mtn_make_js_get_game_field1_value=this.getFieldValue('mtn_make_js_get_game_field1_value'); 
  var code = mtn_make_js_get_game_field1_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//游戏列表字段名2
Blockly.Arduino.mtn_make_js_get_game_field2 = function() {
  var  mtn_make_js_get_game_field2_value=this.getFieldValue('mtn_make_js_get_game_field2_value'); 
  var code = mtn_make_js_get_game_field2_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//收藏表字段名
Blockly.Arduino.mtn_make_js_get_bookmarks_field = function() {
  var  mtn_make_js_get_bookmarks_field_value=this.getFieldValue('mtn_make_js_get_bookmarks_field_value'); 
  var code = mtn_make_js_get_bookmarks_field_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//数据库命令
Blockly.Arduino.mtn_make_js_get_sql_command = function() {
  var get_sql_command_value1 = Blockly.Arduino.valueToCode(this, 'get_sql_command_value1', Blockly.Arduino.ORDER_ATOMIC);
  var  get_sql_command_value2=this.getFieldValue('get_sql_command_value2'); 
  var get_sql_command_value3 = Blockly.Arduino.valueToCode(this, 'get_sql_command_value3', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.style_['command_sql']='<script>\n'
                                      +'function get_sql_command(sql_value,sql_command,sql_value2){\n'
                                      +' var name_sql="";\n'
                                      +' if(sql_command=="LIKE"){\n'
                                      +' name_sql=sql_value +" "+ sql_command+ " \'%"+sql_value2+"%\'";\n'
                                      +'  }else{\n'
                                      +'if (typeof sql_value2 === "string") {'
                                      +' name_sql=sql_value+" "+sql_command+" \'"+sql_value2+"\'";\n'
                                      +'}else{\n'
                                      +' name_sql=sql_value+" "+sql_command+" "+sql_value2;\n'
                                      +'}\n'
                                     +'  }\n'
                                     +' return name_sql;\n'
                                     +'}\n'
                                      +'</script>\n';
  var code = 'get_sql_command("'+get_sql_command_value1+'","'+get_sql_command_value2+'",'+get_sql_command_value3+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取绝对路径
Blockly.Arduino.mtn_make_js_get_file_pathfull = function() {
  var get_file_pathfull_value = Blockly.Arduino.valueToCode(this, 'get_file_pathfull_value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ispath('+get_file_pathfull_value+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//切换分类
Blockly.Arduino.mtn_make_js_get_change_theme = function() {
  var change_theme_value = Blockly.Arduino.valueToCode(this, 'change_theme_value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await change_theme('+change_theme_value+');\n';
  return code;
};
//切换主题
Blockly.Arduino.mtn_make_js_get_change_ui = function() {
  var change_ui_value = Blockly.Arduino.valueToCode(this, 'change_ui_value', Blockly.Arduino.ORDER_ATOMIC);
  var change_theme_value = Blockly.Arduino.valueToCode(this, 'change_theme_value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await change_ui('+change_ui_value+','+change_theme_value+');\n';
  return code;
};
//运行游戏
Blockly.Arduino.mtn_make_js_get_run_game = function() {
  var run_game_value = Blockly.Arduino.valueToCode(this, 'run_game_value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await run_game('+run_game_value+');\n';
  return code;
};
//打开收藏
Blockly.Arduino.mtn_make_js_open_bookmarks = function() {
  var open_bookmarks_value = Blockly.Arduino.valueToCode(this, 'open_bookmarks_value', Blockly.Arduino.ORDER_ATOMIC);
  var  open_bookmarks_value2=this.getFieldValue('open_bookmarks_value2'); 
  var code = 'await open_bookmarks('+open_bookmarks_value+','+open_bookmarks_value2+');\n';
  return code;
};
//打开收藏
Blockly.Arduino.mtn_make_js_bookmarks_show = function() {
  var code = 'await bookmarks_show();\n';
  return code;
};
//让鼠标点击屏幕
Blockly.Arduino.mtn_make_js_mouse_click_ds = function() {
  var mouse_click_ds_x = Blockly.Arduino.valueToCode(this, 'mouse_click_ds_x', Blockly.Arduino.ORDER_ATOMIC);
  var mouse_click_ds_y = Blockly.Arduino.valueToCode(this, 'mouse_click_ds_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await mouse_click_ds('+mouse_click_ds_x+','+mouse_click_ds_y+');\n';
  return code;
};

//关闭启动软件后执行
Blockly.Arduino.mtn_make_js_mtn_Started = function () {
  var statements_value_js = Blockly.Arduino.statementToCode(this, 'value_js');
  Blockly.Arduino.style_['js_Started'] = '<script>\nasync function mtn_Started(){\n'+statements_value_js+'}\n</script>\n';
    var code = '';
    return code;
  };
//数据排序
Blockly.Arduino.mtn_make_js_get_data_sort = function () {
  var get_data_sort_value = Blockly.Arduino.valueToCode(this, 'get_data_sort_value', Blockly.Arduino.ORDER_ATOMIC) || "id";
 // var ORDER_BY = Blockly.Arduino.valueToCode(this, 'ORDER_BY', Blockly.Arduino.ORDER_ATOMIC) || "ORDER BY id ASC";
  var  get_data_sort_value2=this.getFieldValue('get_data_sort_value2'); 
  var code = 'ORDER BY '+get_data_sort_value+' '+get_data_sort_value2;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//读取文本文件内容
Blockly.Arduino.mtn_make_js_get_intro_text = function () {
  var get_intro_text_value = Blockly.Arduino.valueToCode(this, 'get_intro_text_value', Blockly.Arduino.ORDER_ATOMIC) || "";
  var replacedPath = get_intro_text_value.replace(/\\/g, '/');
  var code = 'await read_text('+replacedPath+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//打开文件所以在路径
Blockly.Arduino.mtn_make_js_open_file_path = function () {
  var open_file_path_value = Blockly.Arduino.valueToCode(this, 'open_file_path_value', Blockly.Arduino.ORDER_ATOMIC) || "";
  var replacedPath = open_file_path_value.replace(/\\/g, '/');
  var code = 'await open_file_path('+replacedPath+');\n';
  return code;
}
//获取当前分类全部标签
Blockly.Arduino.mtn_make_js_get_game_tags_all = function () {
  var get_game_tags_all_value = Blockly.Arduino.valueToCode(this, 'get_game_tags_all_value', Blockly.Arduino.ORDER_ATOMIC) || "1";
  var code = 'await get_game_tags_all('+get_game_tags_all_value+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//获取指定收藏分类的所有标签数组
Blockly.Arduino.mtn_make_js_get_bookmarks_tags_all = function () {
  var get_bookmarks_tags_all_value = Blockly.Arduino.valueToCode(this, 'get_bookmarks_tags_all_value', Blockly.Arduino.ORDER_ATOMIC) || "1";
  var code = 'await get_game_tags_all('+get_bookmarks_tags_all_value+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//获取分类游戏总数
Blockly.Arduino.mtn_make_js_get_classify_game_no = function () {
  var get_classify_game_no_value = Blockly.Arduino.valueToCode(this, 'get_classify_game_no_value', Blockly.Arduino.ORDER_ATOMIC) || "1";
  var code = 'await get_classify_game_no('+get_classify_game_no_value+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//获取收藏分类总数
Blockly.Arduino.mtn_make_js_get_fav_list_count = function () {
  var get_fav_list_count_value = Blockly.Arduino.valueToCode(this, 'get_fav_list_count_value', Blockly.Arduino.ORDER_ATOMIC) || "1";
  var code = 'await get_fav_list_count('+get_fav_list_count_value+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//打开文件所以在路径
Blockly.Arduino.mtn_make_js_hide_game = function () {
  var hide_game_value = Blockly.Arduino.valueToCode(this, 'hide_game_value', Blockly.Arduino.ORDER_ATOMIC) || "";
  var code = 'await hide_game('+hide_game_value+');\n';
  return code;
}

//检测文件是否存在
Blockly.Arduino.mtn_make_js_check_file_exist = function () {
  var check_file_exist_path = Blockly.Arduino.valueToCode(this, 'check_file_exist_path', Blockly.Arduino.ORDER_ATOMIC) || "";
  var replacedPath = check_file_exist_path.replace(/\\/g, '/');
  var code = 'await check_file_exist('+replacedPath+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//获取文件路径
Blockly.Arduino.mtn_make_js_get_file_paht = function () {
  var code = 'await gei_file_path()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//新窗口打开网页
Blockly.Arduino.mtn_make_js_open_new_window = function () {
  var open_new_window = Blockly.Arduino.valueToCode(this, 'open_new_window', Blockly.Arduino.ORDER_ATOMIC) || "";
  var replacedPath = open_new_window.replace(/\\/g, '/');
  var code = 'await open_help_ui('+replacedPath+');\n';
  return code;
}

  //检测窗口是否获取了焦点
  Blockly.Arduino.mtn_make_js_get_window_Activat=function(){
    var code = 'await get_window_Activat()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  }
  function containsQuotedText(str) {
    // 使用正则表达式检查字符串中是否存在双引号包裹的内容
    return /"[^"]*"/.test(str);
  }

// 获取图片的base64码
Blockly.Arduino.get_img_base64 =function() {
  var file_img_paht = Blockly.Arduino.valueToCode(this, 'file_img_paht', Blockly.Arduino.ORDER_ATOMIC);
  var code = `await fileToBase64(${file_img_paht})`;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//使用MNT评论框
Blockly.Arduino.mtn_make_js_roast_toggle = function() {
  var mtn_make_js_roast_toggle_md5 = Blockly.Arduino.valueToCode(this, 'mtn_make_js_roast_toggle_md5', Blockly.Arduino.ORDER_ATOMIC);
  var code ='';
  Blockly.Arduino.style_['html_roast'] = '<script src="file/js/roast_toggle_btn.js"></script>\n';
  code='await get_roast_table('+mtn_make_js_roast_toggle_md5+');\n';
  return code;
};
  function getQuotedText(str) {
    // 使用正则表达式匹配双引号内的文本
    const match = str.match(/"([^"]*)"/);  
    // 如果匹配成功，则返回匹配到的文本
    if (match) {
      return match[1];
    } else {
      return ""; // 或者返回默认值，如空字符串 ""
    }
  }

