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
  this.setTooltip("js脚本");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js.html");
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
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_init.html");
  },
};
//键盘输入脚本
Blockly.Blocks.mtn_make_key= {
  init: function() { 
  this.appendDummyInput()
      .appendField("键盘输入脚本");
  this.appendStatementInput("value_js_key")
      .setCheck(null);
  this.setColour(50);
  this.setTooltip("键盘输入脚本");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_key.html");
  }
};
//摇杆输入脚本
Blockly.Blocks.mtn_make_joy= {
  init: function() { 
  this.appendDummyInput()
      .appendField("摇杆输入脚本");
  this.appendStatementInput("value_js_joy")
      .setCheck(null);
  this.setColour(50);
  this.setTooltip("摇杆输入脚本");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_key.html");
  }
};
Blockly.Blocks.js_make_Maozi= {
  init: function() { 
  this.appendValueInput("js_make_Maozi_vlaue")
      .setCheck(null)
      .appendField("链接冒");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(50);
  this.setTooltip("将左右链接的块转为上下链接");
  this.setHelpUrl("");
  }
};

//连接文本
Blockly.Blocks['text_join'] = {
  init: function() {
    this.setColour(50);
    this.appendValueInput('A')
    .setCheck([String,Number]);
    this.appendValueInput('B')
    .setCheck([String,Number])
    .appendField("连接文本");
    this.setInputsInline(true);
    this.setOutput(true, String);
    this.setTooltip("连接文本");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/text_join.html");
  }
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
      this.setTooltip("重复执行初始化函数");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_init.html");
  },
};

//执行函数
Blockly.Blocks['async_then_catch_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("链式调用");
    
    // 函数名输入
    this.appendValueInput("FUNCTION_NAME")
        .setCheck("String")
        .appendField("函数");

    // .then 部分
    this.appendDummyInput()
        .appendField(".then((");
    this.appendValueInput("THEN_PARAM")
        .setCheck("String")
        .appendField("参数名");
    this.appendDummyInput()
        .appendField(") => {");
    this.appendStatementInput("THEN_CALLBACK")
        .setCheck(null);

    // .catch 部分
    this.appendDummyInput()
        .appendField("}).catch((");
    this.appendValueInput("CATCH_PARAM")
        .setCheck("String")
        .appendField("参数名");
    this.appendDummyInput()
        .appendField(") => {");
    this.appendStatementInput("CATCH_CALLBACK")
        .setCheck(null);

    // 结束括号
    this.appendDummyInput()
        .appendField("})");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("用于处理异步函数的成功和失败情况");
    this.setHelpUrl("");
  }
};
