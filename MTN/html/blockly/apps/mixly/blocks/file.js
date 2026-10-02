goog.require('Blockly.Blocks');

// 图片
Blockly.Blocks.file_img= {
    init: function() { 
        this.setColour(225);
        this.appendValueInput('file_img_paht')
        .setCheck([String,Number])
        .appendField("图片");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("cc");
        this.setHelpUrl("");
    }
};
// 图片base64码
Blockly.Blocks.file_img_base64= {
  init: function() { 
      this.setColour(225);
      this.appendValueInput('img_base64')
      .setCheck([String,Number])
      .appendField("图片base64");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("cc");
      this.setHelpUrl("");
  }
};
// 视频
Blockly.Blocks.file_video= {
    init: function() { 
        this.setColour(225);
        this.appendValueInput('file_video_paht')
        .setCheck([String,Number])
        .appendField("视频");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("cc");
        this.setHelpUrl("");
    }
};
// 音乐
Blockly.Blocks.file_music= {
    init: function() { 
        this.setColour(225);
        this.appendValueInput('file_music_paht')
        .setCheck([String,Number])
        .appendField("音乐");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("cc");
        this.setHelpUrl("");
    }
};
//引用外部脚本
Blockly.Blocks.file_script= {
  init: function() {
    this.setColour(225);
    this.appendValueInput('file_script_paht')
    .setCheck([String,Number])
    .appendField("外部脚本");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("cc");
    this.setHelpUrl("");
  }
};

// 字体
Blockly.Blocks.file_font= {
  init: function() {
      this.setColour(225);
      this.appendValueInput('file_font_paht')
      .setCheck([String,Number])
      .appendField("字体");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("cc");
      this.setHelpUrl("");
  }
};
//class_obj
Blockly.Blocks.file_class_name= {
    init: function() {
    this.appendDummyInput()
        .appendField("样式")
        .appendField(new Blockly.FieldTextInput("classname"), "file_class_obj");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };

  //obj_id
Blockly.Blocks.file_obj_id= {
    init: function() {
    this.appendDummyInput()
        .appendField("id名")
        .appendField(new Blockly.FieldTextInput("id_name"), "file_obj_id_mame");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
// 插入文本
Blockly.Blocks.file_text= {
    init: function() { 
        this.setColour(225);
        this.appendValueInput('file_text_value')
        .setCheck([String,Number])
        .appendField("插入自定义值");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip("cc");
        this.setHelpUrl("");
    }
};
  //插入像素
  Blockly.Blocks.file_value_px= {
    init: function() {
    this.appendDummyInput()
        .appendField("像素px")
        .appendField(new Blockly.FieldTextInput("0"), "vafile_value_px_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
  //插入%
  Blockly.Blocks.file_value_percent= {
    init: function() {
    this.appendDummyInput()
        .appendField("百分比%")
        .appendField(new Blockly.FieldTextInput("0"), "file_value_percent_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
  //插入pt
  Blockly.Blocks.file_value_pt= {
    init: function() {
    this.appendDummyInput()
        .appendField("字体pt")
        .appendField(new Blockly.FieldTextInput("0"), "file_value_pt_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
  //插入数字
  Blockly.Blocks.file_value_number= {
    init: function() {
    this.appendDummyInput()
        .appendField("数字")
        .appendField(new Blockly.FieldTextInput("0"), "file_value_number_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
  //插入文本
  Blockly.Blocks.file_value_text= {
    init: function() {
    this.appendDummyInput()
        .appendField("文本")
        .appendField(new Blockly.FieldTextInput("text"), "file_value_text_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
    //事件函数对象event
  Blockly.Blocks.file_value_event= {
    init: function() {
    this.appendDummyInput()
        .appendField("事件函数对象event")
        //.appendField(new Blockly.FieldTextInput("0"), "file_value_event_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
    };
  //插入颜色
  Blockly.Blocks.file_value_color= {
    init: function() {
    this.appendDummyInput()
        .appendField("颜色")
        .appendField(new Blockly.FieldColour("#ff0000"), "file_value_color_value");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
  //一个数组的项
Blockly.Blocks['file_array_item'] = {
  init: function() {
    this.setColour(225);
    this.appendValueInput("array_name")
    .setCheck([String,Number])
    .appendField('数组');
    this.appendValueInput("array_item")
    .setCheck([Number])
    .appendField('第几项');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip("cc");
    this.setHelpUrl("");
  }
};
//当前分类id
Blockly.Blocks.file_value_webno= {
  init: function() {
    this.appendDummyInput()
        .appendField("当前分类id");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
    }
  };
    //自定义字典
Blockly.Blocks['file_set_dict'] = {
  init: function() {
    this.setColour(225);
    this.appendValueInput("dict_key")
    .setCheck([String,Number])
    .appendField('设置UI_字典 键名');
    this.appendValueInput("dict_value")
    .setCheck([String,Number])
    .appendField('值');
    //this.setOutput(true);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("cc");
    this.setHelpUrl("");
  }
};

//读取自定义字典
Blockly.Blocks['file_get_dict'] = {
  init: function() {
    this.setColour(225);
    this.appendValueInput("dict_key")
    .setCheck([String,Number])
    .appendField('读取UI_字典 键名');
    this.setOutput(true);
    this.setInputsInline(true);     
    this.setTooltip("cc");
    this.setHelpUrl("");
  }
};

//游戏运行状态
Blockly.Blocks.flie_run_value= {
  init: function() {
    this.appendDummyInput()
        .appendField("是否成功运行了游戏")
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("cc");
    this.setHelpUrl("");
      }
  };