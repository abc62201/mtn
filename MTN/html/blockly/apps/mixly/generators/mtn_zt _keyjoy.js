'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');


//是否启用摇杆
Blockly.Arduino.mtn_make_js_joy_enable = function() {
    var  mtn_make_js_joy_enable_value=this.getFieldValue('mtn_make_js_joy_enable_value'); 
    var code = mtn_make_js_joy_enable_value+';\n';
    return code;
  };
  //获取用户设置键盘摇杆值
Blockly.Arduino.mtn_make_js_get_joy_table = function() {
  var code = 'get_joytokey()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取键盘输入值
  Blockly.Arduino.mtn_make_js_get_key_value = function() {
    var code = 'mtn_key_value';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//获取摇杆输入值
Blockly.Arduino.mtn_make_js_get_joy_value = function() {
    var code = 'mtn_joy_value';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
  //获取键盘输入值为空值
Blockly.Arduino.mtn_make_js_key_value_kong = function() {
  var code = '"kong"';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//获取摇杆输入值为空值
Blockly.Arduino.mtn_make_js_joy_value_kong = function() {
  var code = '"kong"';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//键盘值设置为空
Blockly.Arduino.mtn_make_js_key_set_kong = function() {
  var code = 'mtn_key_value="kong";\n';
  return code;
};
//摇杆值设置为空
Blockly.Arduino.mtn_make_js_joy_set_kong = function() {
  var code = 'mtn_joy_value="kong";\n';
  return code;
};
//获取键盘摇杆的值
Blockly.Arduino.mtn_make_js_get_parse_keyjoy_value = function() {
  var parse_keyjoy_value1 = Blockly.Arduino.valueToCode(this, 'parse_keyjoy_value1', Blockly.Arduino.ORDER_ATOMIC);
  var gparse_keyjoy_value2 = Blockly.Arduino.valueToCode(this, 'gparse_keyjoy_value2', Blockly.Arduino.ORDER_ATOMIC);
  var code = parse_keyjoy_value1+'.'+gparse_keyjoy_value2;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//键盘按键名
Blockly.Arduino.mtn_make_js_get_keyboard_keyname = function() {
  var  mtn_make_js_get_keyboard_keyname_value=this.getFieldValue('mtn_make_js_get_keyboard_keyname_value'); 
  var code = mtn_make_js_get_keyboard_keyname_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//摇杆按键名
Blockly.Arduino.mtn_make_js_get_rocker_keyname = function() {
  var  mtn_make_js_get_rocker_keyname_value=this.getFieldValue('mtn_make_js_get_rocker_keyname_value'); 
  var code = mtn_make_js_get_rocker_keyname_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};