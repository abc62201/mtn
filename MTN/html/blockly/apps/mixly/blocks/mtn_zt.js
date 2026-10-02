'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;


Blockly.Blocks.mdbot_ir_recv= {
  init: function() { 
  this.appendDummyInput()
      .appendField("主题样式");
  this.appendStatementInput("zt_ml")
      .setCheck(null);
  this.setColour(90);
  this.setTooltip("aaa");
  this.setHelpUrl("bbb");
  }
};

Blockly.Blocks.make_class= {
  init: function() { 
  this.appendDummyInput()
      .appendField("样式名")
      .appendField(new Blockly.FieldTextInput("classname"), "classname");
  this.appendStatementInput("zt_ml")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("aaa");
  this.setHelpUrl("bbb");
  }
};