'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');

//等待执行完成
Blockly.Blocks.mtn_make_js_get_wait= {
    init: function() { 
    this.appendValueInput("js_get_wait")
        .setCheck(null)
        .appendField("等待执行完成");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("等待执行完成");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_wait.html");
    }
  };
//解析获取的数据
Blockly.Blocks.mtn_make_js_get_json_parse= {
    init: function() { 
    this.appendValueInput("get_json_parse")
        .setCheck(null)
        .appendField("解析获取的表数据");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("字符串转为json数据");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_json_parse.html");
    }
  };
  //获取的数据长度
Blockly.Blocks.mtn_make_js_get_json_length= {
    init: function() { 
    this.appendValueInput("get_json_length")
        .setCheck(null)
        .appendField("获取解析后的数据长度");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("获取解析后的数据长度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_json_length.html");
    }
  };
//获取分类列表
Blockly.Blocks.mtn_make_js_get_classify_table= {
    init: function() { 
    this.appendDummyInput()
        .appendField("获取分类列表");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("获取分类列表");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_classify_table.html");
    }
  };
  //获取主题列表
Blockly.Blocks.mtn_make_js_get_ui_table= {
  init: function() { 
  this.appendDummyInput()
      .appendField("获取主题列表");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("获取主题列表");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_ui_table.html");
  }
};
  //获取收藏分类表
  Blockly.Blocks.mtn_make_js_get_fav_menu= {
    init: function() { 
    this.appendDummyInput()
        .appendField("获取收藏分类表");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("获取收藏分类表");
    this.setHelpUrl("");
    }
  };
  //获取游戏列表
Blockly.Blocks.mtn_make_js_get_game_table= {
  init: function() { 
  this.appendDummyInput()
      .appendField("获取游戏列表");
  this.appendValueInput('sql_value')
      .setCheck([String,Number])
      .appendField("数据库命令");
  this.appendValueInput('tab_page1')
      .setCheck([Number])
      .appendField("数量");
  this.appendValueInput('tab_page2')
      .setCheck([Number])
      .appendField("开始行");
  this.appendValueInput('ORDER_BY')
      .setCheck([String,Number])
      .appendField("排序");
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setColour(50);
  this.setTooltip("获取游戏列表");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_game_table.html");
  }
};
  //获取收藏列表
  Blockly.Blocks.mtn_make_js_get_bookmarks_table= {
    init: function() { 
    this.appendDummyInput()
        .appendField("获取收藏列表");
    this.appendValueInput('sql_value')
        .setCheck([String,Number])
        .appendField("数据库命令");
    this.appendValueInput('tab_page1')
        .setCheck([Number])
        .appendField("数量");
    this.appendValueInput('tab_page2')
        .setCheck([Number])
        .appendField("开始行");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(50);
    this.setTooltip("获取收藏列表");
    this.setHelpUrl("");
    }
  };
  // 获取解析后分类数据的值
Blockly.Blocks.mtn_make_js_get_parse_value= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('get_parse_value1')
      .setCheck([String,Number])
      .appendField("获取解析表的值");
      this.appendValueInput('get_parse_value2')
      .setCheck([String,Number])
      .appendField("位置");
      this.appendValueInput('get_parse_value3')
      .setCheck([String,Number])
      .appendField("字段名");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("通过解析后的json表获取指定字段的值。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_parse_value.html");
  }
};
//分类表字段名
Blockly.Blocks.mtn_make_js_get_classify_field= {
    init: function() {
      this.setColour(50);
      this.appendDummyInput()
        .appendField("分类表字段名")
        .appendField(new Blockly.FieldDropdown([
          ["id", "id"],
          ["分类名", "classify"],
          ["分类别名", "daohang_name"],
          ["分类图标", "daohang_ico"],
          ["分类背景图", "daohang_bg"],
          ["分类图片", "daohang_img"],
          //["元素的自定义数据", "dataset"],
          ["其他图片", "other_img"],
          ["模拟器id", "game_emu_id"],
          ["核心id", "emu_core_id"],
          ["启动参数", "emu_args"],
          ["主题id", "ui_name_id"],
          ["分类级别", "classify_level"],
          ["上级分类的id", "classify_id"],
        ]), "mtn_make_js_get_classify_field_value");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("分类表字段名");
        this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_classify_field.html");
    },
  };
//主题表字段名
Blockly.Blocks.mtn_make_js_get_ui_field= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("主题表字段名")
      .appendField(new Blockly.FieldDropdown([
        ["id", "id"],
        ["主题名称", "ui_name"],
        ["文件路径", "ui_path"],
        ["缩略图", "ui_img"],
      ]), "mtn_make_js_get_ui_field_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("主题表字段名");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_ui_field.html");
  },
};
//收藏分类表字段名
Blockly.Blocks.mtn_make_js_get_fav_field= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("收藏分类表字段名")
      .appendField(new Blockly.FieldDropdown([
        ["id", "id"],
        ["收藏分类名称", "category_name"],
        ["收藏分类序号", "category_order"],
      ]), "mtn_make_js_get_fav_field_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("收藏分类表字段名");
      this.setHelpUrl("");
  },
};
  //游戏表字段名
  Blockly.Blocks.mtn_make_js_get_game_field1= {
    init: function() {
      this.setColour(50);
      this.appendDummyInput()
        .appendField("游戏列表段名1")
        .appendField(new Blockly.FieldDropdown([
          ["id", "id"],
          ["分类的id", "classify_id"],
          ["游戏名", "game_name"],
          ["游戏路径", "game_rom_path"],
          ["缩略图", "game_thumb_path"],
          ["视频", "game_video_path"],
          ["卡带", "game_cassette_path"],
          ["信息", "game_intro_path"],          
          ["游戏补丁", "game_ips_path"],
          ["模拟器id", "game_emu_id"],
          ["核心id", "emu_core_id"],
          ["启动参数", "emu_args"],
          ["启动参数", "emu_args"],
          ["背景图片", "ui_bj"],
          ["启动次数", "game_startsNO"],
          ["游戏时间", "game_playtime"],
        ]), "mtn_make_js_get_game_field1_value");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("游戏列表段名1");
        this.setHelpUrl("");
    },
  };
    //游戏表字段名
    Blockly.Blocks.mtn_make_js_get_game_field2= {
      init: function() {
        this.setColour(50);
        this.appendDummyInput()
          .appendField("游戏列表段名2")
          .appendField(new Blockly.FieldDropdown([
            [mtn_text.csv_column_column3, "game_type"],
            [mtn_text.csv_column_column4, "game_ver"],
            [mtn_text.csv_column_column10, "game_score"],
            ["文件MD5", "game_md5"],
            ["标题图片", "game_title_path"],
            ["截图", "game_screenshot_path"],
            ["封面", "game_cover_path"],
            ["电路板", "game_circuit_path"],          
            ["包装盒", "game_box_path"],
            ["宣传海报", "game_poster_path"],
            ["logo", "game_logo_path"],
            ["角色", "game_role_paht"],
            [mtn_text.csv_column_column6, "game_issuing_date"],
            [mtn_text.csv_column_column7, "game_developer"],
            [mtn_text.csv_column_column8, "game_publisher"],
            [mtn_text.csv_column_column5, "game_players"],
            ["图标", "game_ico"],
            ["旗帜", "national_flag"],
            [mtn_text.csv_column_column9, "game_language"],
            ["大小", "file_size"],
            ["拼音", "pinyin"],
            ["拼音首字母", "pinyins"],
          ]), "mtn_make_js_get_game_field2_value");
          this.setOutput(true, null);
          this.setInputsInline(true);
          this.setTooltip("游戏列表段名2");
          this.setHelpUrl("");
      },
    };
//收藏表字段名
Blockly.Blocks.mtn_make_js_get_bookmarks_field= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("收藏表字段名")
      .appendField(new Blockly.FieldDropdown([
        ["id", "id"],
        ["收藏名称", "bookmarks_name"],
        ["收藏路径(网址)", "bookmarks_path"],
        ["收藏类型0文件夹,1文件,2网址", "bookmarks_type"],
        ["收藏分类id", "category_id"],
        ["收藏图标", "bookmarks_img"],
        ["收藏标签", "bookmarks_Label"],
        ["收藏简介", "bookmarks_explain"],
      ]), "mtn_make_js_get_bookmarks_field_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("收藏表字段名");
      this.setHelpUrl("");
  },
};
//数据库命令
Blockly.Blocks.mtn_make_js_get_sql_command= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('get_sql_command_value1')
      .setCheck([String,Number])
      .appendField("数据库命令");
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["是否相等", "="],
        ["大于", ">"],
        ["小于", "<"],
        ["是否包含", "LIKE"],
      ]), "get_sql_command_value2");
      this.appendValueInput('get_sql_command_value3')
      .setCheck([String,Number])
      .appendField("值");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("数据库命令");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_sql_command.html");
  }
};
// 全部游戏
Blockly.Blocks.mtn_make_js_get_sql_all= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('get_sql_command_value1')
      .setCheck([String,Number])
      .appendField("全部游戏");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("cc");
      this.setHelpUrl("bbb");
  }
};

//获取文件绝对路径
Blockly.Blocks.mtn_make_js_get_file_pathfull= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('get_file_pathfull_value')
      .setCheck([String,Number])
      .appendField("获取文件绝对路径");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("获取文件绝对路径");
      this.setHelpUrl("");
  }
};
//切换分类
Blockly.Blocks.mtn_make_js_get_change_theme= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('change_theme_value')
    .setCheck([String,Number])
    .appendField("切换分类 分类id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("切换分类");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_change_theme.html");
  }
};

//切换主题
Blockly.Blocks.mtn_make_js_get_change_ui= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('change_ui_value')
    .setCheck([String,Number])
    .appendField("切换主题 主题id");
    this.appendValueInput('change_theme_value')
    .setCheck([String,Number])
    .appendField("分类id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("切换主题");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_change_ui.html");
  }
};

//运行游戏
Blockly.Blocks.mtn_make_js_get_run_game= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('run_game_value')
    .setCheck([String,Number])
    .appendField("运行游戏 游戏id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("运行游戏");
    this.setHelpUrl("");
  }
};
//打开收藏
Blockly.Blocks.mtn_make_js_open_bookmarks= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('open_bookmarks_value')
    .setCheck([String,Number])
    .appendField("打开收藏 id");
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([
      ["默认方式", "0"],
      ["MTN浏览器", "1"],
    ]), "open_bookmarks_value2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("打开收藏");
    this.setHelpUrl("");
  }
};
//添加收藏
Blockly.Blocks.mtn_make_js_bookmarks_show= {
  init: function() { 
    this.setColour(50);
    this.appendDummyInput()
        .appendField("添加收藏");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("添加收藏");
    this.setHelpUrl("");
  }
};

//让鼠标点击屏幕
Blockly.Blocks.mtn_make_js_mouse_click_ds= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('mouse_click_ds_x')
    .setCheck([String,Number])
    .appendField("点击屏幕 x坐标");
    this.appendValueInput('mouse_click_ds_y')
    .setCheck([String,Number])
    .appendField("y坐标");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("点击屏幕");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_mouse_click_ds.html");
  }
};

//关闭启动软件后执行
Blockly.Blocks.mtn_make_js_mtn_Started= {
  init: function() { 
  this.appendDummyInput()
      .appendField("关闭启动软件后执行");
  this.appendStatementInput("value_js")
      .setCheck(null);
  this.setColour(50);
  this.setTooltip("关闭启动软件后执行");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_mtn_Started.html");
  }
};
//数据排序
Blockly.Blocks.mtn_make_js_get_data_sort= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_data_sort_value')
    .setCheck([String,Number])
    .appendField("数据排序");
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([
      ["升序", "ASC"],
      ["降序", "DESC"],
    ]), "get_data_sort_value2");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("数据排序");
    this.setHelpUrl("");
  }
};
//读取文本文件内容
Blockly.Blocks.mtn_make_js_get_intro_text= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_intro_text_value')
    .setCheck([String,Number])
    .appendField("读取文本文件内容");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("读取文本文件内容");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_intro_text.html");
  }
};
//打开文件所以在路径
Blockly.Blocks.mtn_make_js_open_file_path= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('open_file_path_value')
    .setCheck([String,Number])
    .appendField("打开文件所以在目录");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("打开文件所以在目录");
    this.setHelpUrl("");
  }
};
//获取指定分类的所有标签数组
Blockly.Blocks.mtn_make_js_get_game_tags_all= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_game_tags_all_value')
    .setCheck([String,Number])
    .appendField("获取分类标签 id");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("获取指定分类的游戏列表在不同的标签");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_game_tags_all.html");
  }
};
//获取指定收藏分类的所有标签数组
Blockly.Blocks.mtn_make_js_get_bookmarks_tags_all= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_bookmarks_tags_all_value')
    .setCheck([String,Number])
    .appendField("获取收藏表标签 id");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("获取指定分类的收藏列表在不同的标签");
    this.setHelpUrl("");
  }
};
//获取分类游戏总数
Blockly.Blocks.mtn_make_js_get_classify_game_no= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_classify_game_no_value')
    .setCheck([String,Number])
    .appendField("获取分类游戏总数 id");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("获取指定分类的游戏列表的总数");
    this.setHelpUrl("");
  }
};
//获取收藏分类总数
Blockly.Blocks.mtn_make_js_get_fav_list_count= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('get_fav_list_count_value')
    .setCheck([String,Number])
    .appendField("获取指定id收藏表总数");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("获取指定收藏列表的分类总数");
    this.setHelpUrl("");
  }
};
//隐藏游戏
Blockly.Blocks.mtn_make_js_hide_game= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('hide_game_value')
    .setCheck([String,Number])
    .appendField("隐藏游戏 id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("将指定id的游戏rom移动到隐藏分类列表里。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_hide_game.html");
  }
};
//检测文件是否存在
Blockly.Blocks.mtn_make_js_check_file_exist= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('check_file_exist_path')
    .setCheck([String,Number])
    .appendField("检测文件是否存在");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("检测文件是否存在");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_check_file_exist.html");
  }
};
//获取文件
Blockly.Blocks.mtn_make_js_get_file_paht= {
  init: function() { 
  this.appendDummyInput()
      .appendField("选择文件");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("获取所选文件路径");
  this.setHelpUrl("");
  }
};
//新窗口打开网页
Blockly.Blocks.mtn_make_js_open_new_window= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('open_new_window')
    .setCheck([String,Number])
    .appendField("新窗口打开网页");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("新窗口打开网页");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_open_new_window.html");
  }
};

  //检测窗口是否获取焦点
  Blockly.Blocks.mtn_make_js_get_window_Activat= {
    init: function() { 
    this.appendDummyInput()
        .appendField("窗口是否获取焦点");
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("检测窗口是否获取焦点");
    this.setHelpUrl("");
    }
  };

  // 获取图片的base64码
Blockly.Blocks.get_img_base64 = {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('file_img_paht')
      .setCheck([String,Number])
      .appendField("获取图片的base64码");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("cc");
      this.setHelpUrl("");
  }
};

//使用MTN评论框
Blockly.Blocks.mtn_make_js_roast_toggle= {
  init: function() { 
    this.setColour(50);
    this.appendValueInput('mtn_make_js_roast_toggle_md5')
    .setCheck([String,Number])
    .appendField("使用评论框 md5值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("使用MTN评论框");
    this.setHelpUrl("");
  }
};