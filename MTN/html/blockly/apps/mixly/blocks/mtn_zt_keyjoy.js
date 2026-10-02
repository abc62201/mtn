'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;

//是否启用摇杆
Blockly.Blocks.mtn_make_js_joy_enable= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("摇杆状态")
      .appendField(new Blockly.FieldDropdown([
        ["开启摇杆", "joy_start(1)"],
        ["关闭摇杆", "joy_start(0)"],
      ]), "mtn_make_js_joy_enable_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("是否启用摇杆");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_joy_enable.html");
  },
};
//获取键盘输入值
Blockly.Blocks.mtn_make_js_get_key_value= {
  init: function() { 
  this.appendDummyInput()
      .appendField("获取键盘输入值");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("获取键盘输入值");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_key_value.html");
  }
};
//获取摇杆输入值
Blockly.Blocks.mtn_make_js_get_joy_value= {
  init: function() { 
  this.appendDummyInput()
      .appendField("获取摇杆输入值");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("获取摇杆输入值");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_key_value.html");
  }
};
//获取键盘输入值为空值
Blockly.Blocks.mtn_make_js_key_value_kong= {
  init: function() { 
  this.appendDummyInput()
      .appendField("键盘值为空");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("键盘值为空");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_key_value_kong.html");
  }
};
//获取摇杆输入值为空值
Blockly.Blocks.mtn_make_js_joy_value_kong= {
  init: function() { 
  this.appendDummyInput()
      .appendField("摇杆值为空");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("摇杆值为空");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_key_value_kong.html");
  }
};
//键盘值设置为空
Blockly.Blocks.mtn_make_js_key_set_kong= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("键盘值设置为空");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("键盘值设置为空");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_key_value_kong.html");
  },
};
//摇杆值设置为空
Blockly.Blocks.mtn_make_js_joy_set_kong= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("摇杆值设置为空");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("摇杆值设置为空");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_key_value_kong.html");
  },
};
//获取用户设置键盘摇杆值
Blockly.Blocks.mtn_make_js_get_joy_table= {
  init: function() { 
  this.appendDummyInput()
      .appendField("获取用户设置键盘摇杆列表");
  this.setOutput(true, null);
  this.setColour(50);
  this.setTooltip("获取用户设置键盘摇杆列表");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_joy_table.html");
  }
};

//解析键盘摇杆键值
Blockly.Blocks.mtn_make_js_get_parse_keyjoy_value= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('parse_keyjoy_value1')
      .setCheck([String,Number])
      .appendField("获取键盘摇杆的值");
      this.appendValueInput('gparse_keyjoy_value2')
      .setCheck([String,Number])
      .appendField("按键名");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("获取键盘摇杆的值");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_joy_table.html");
  }
};

//键盘按键名
Blockly.Blocks.mtn_make_js_get_keyboard_keyname= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("键盘按键名")
      .appendField(new Blockly.FieldDropdown([
        ["上", "keyboard_up"],
        ["下", "keyboard_down"],
        ["左", "keyboard_left"],
        ["右", "keyboard_right"],
        ["确定", "keyboard_determine"],
        ["按键1", "keyboard_button1"],
        ["按键2", "keyboard_button2"],
        ["按键3", "keyboard_button3"],
        ["按键4", "keyboard_button4"],
        ["按键5", "keyboard_button5"],
        ["按键6", "keyboard_button6"],
      ]), "mtn_make_js_get_keyboard_keyname_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("键盘按键名");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_joy_table.html");
  },
};
//摇杆按键名
Blockly.Blocks.mtn_make_js_get_rocker_keyname= {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("摇杆按键名")
      .appendField(new Blockly.FieldDropdown([
        ["上", "rocker_up"],
        ["下", "rocker_down"],
        ["左", "rocker_left"],
        ["右", "rocker_right"],
        ["确定", "rocker_determine"],
        ["按键1", "rocker_button1"],
        ["按键2", "rocker_button2"],
        ["按键3", "rocker_button3"],
        ["按键4", "rocker_button4"],
        ["按键5", "rocker_button5"],
        ["按键6", "rocker_button6"],
      ]), "mtn_make_js_get_rocker_keyname_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("摇杆按键名");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_js_get_joy_table.html");
  },
};

//模拟按键
Blockly.Blocks.mtn_ui_KeyPress = {
  init: function() {

   this.setColour(50);
   this.appendValueInput("key_name")
   .appendField("模拟按键")
   .setCheck(null);
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setInputsInline(true);
   this.setTooltip("延时一定时间后继续执行后面的程序");
   this.setHelpUrl("/html/help/build/html/uihelp/uimake/controls_delay.html");
 }
};