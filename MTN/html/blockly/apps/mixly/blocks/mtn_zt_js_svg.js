'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;

//创建svg图片
Blockly.Blocks.mtn_make_js_svg_create= {
    init: function() { 
    this.appendValueInput('svg_width_value')
        .setCheck([String,Number])
        .appendField("创建svg画布 宽度");
    this.appendValueInput('svg_height_value')
        .setCheck([String,Number])
        .appendField("高度");
    this.appendStatementInput("mtn_make_js_svg_create_value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };
  //设置svg背景颜色
Blockly.Blocks.mtn_make_js_svg_bgcolor= {
    init: function() { 
        this.setColour(50);
        this.appendValueInput('svg_bgcolor_value')
        .setCheck([String,Number])
        .appendField("svg背景颜色");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  //svg特效
Blockly.Blocks.mtn_make_js_svg_effects= {
    init: function() { 
    this.appendValueInput('svg_effects_value1')
        .setCheck([String,Number])
        .appendField("svg特效 旋转角度");
    this.appendStatementInput("svg_effects_value2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

    //设置svg文本
Blockly.Blocks.mtn_make_js_svg_text= {
    init: function() { 
        this.setColour(50);
        this.appendValueInput('svg_text_x')
        .setCheck([String,Number])
        .appendField("svg文本 x坐标");
        this.appendValueInput('svg_text_y')
        .setCheck([String,Number])
        .appendField("y坐标");
        this.appendValueInput('svg_text_color')
        .setCheck([String,Number])
        .appendField("文本颜色");
        this.appendValueInput('svg_text_size')
        .setCheck([String,Number])
        .appendField("文本大小");
        this.appendDummyInput()
        .appendField("字体")
        .appendField(new Blockly.FieldDropdown([
          ["微软雅黑", "Microsoft YaHei"],
          ["宋体", "SimSun"],
          ["黑体", "SimHei"],
          ["楷体", "KaiTi"],
          ["仿宋", "FangSong"],
          ["新宋体", "NSimSun"],     
        ]), "svg_text_font");
        this.appendValueInput('svg_text_value')
        .setCheck([String,Number])
        .appendField("文本内容");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };