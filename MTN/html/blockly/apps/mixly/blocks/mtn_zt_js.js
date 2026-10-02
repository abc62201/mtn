'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');

goog.require('Blockly.Blocks');
//自定义颜色值




//js
Blockly.Blocks.mtn_make_js= {
  init: function() { 
  this.appendDummyInput()
      .appendField("js脚本");
  this.appendStatementInput("value_js")
      .setCheck(null);
  this.setColour(50);
  this.setTooltip("aaa");
  this.setHelpUrl("bbb");
  }
};

//初始脚本
Blockly.Blocks.js_make_init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("打开主题后运行")       
  this.appendStatementInput("js_make_init_value")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(50);
  this.setTooltip("梦童年软件启动后调用的函数内容");
  this.setHelpUrl("bbb");
  },
};
//初始脚本
Blockly.Blocks.js_make_click= {
  init: function() { 
  this.appendDummyInput()
      .appendField("鼠标点击")       
  this.appendStatementInput("js_make_click_value")
	.appendField("鼠标点击后运行")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(50);
  this.setTooltip("aaa");
  this.setHelpUrl("bbb");
  },
};
//重载init函数
Blockly.Blocks.mtn_make_js_init= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("刷新");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("cc");
      this.setHelpUrl("bbb");
  },
};
//连接文本
Blockly.Blocks['text_join'] = {
  init: function() {
    this.setColour(50);
    this.appendValueInput('A')
    .setCheck([String,Number]);
    this.appendValueInput('B')
    .setCheck([String,Number])
    .appendField("jkhjh");
    this.setInputsInline(true);
    this.setOutput(true, String);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_TEXT_JOIN);
  }
};

//执行函数
Blockly.Blocks['async_then_catch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("异步调用");
    this.appendValueInput("FUNCTION_NAME")
        .setCheck("String")
        .appendField("函数名");
    this.appendStatementInput("THEN_CALLBACK")
        .setCheck(null)
        .appendField(".then((返回值) => {");
    this.appendStatementInput("CATCH_CALLBACK")
        .setCheck(null)
        .appendField("}).catch((错误) => {");
    this.appendDummyInput()
        .appendField("})");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("用于处理异步函数的成功和失败情况");
    this.setHelpUrl("");
  }
};

