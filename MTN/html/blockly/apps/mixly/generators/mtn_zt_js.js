'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');

//js
Blockly.Arduino.mtn_make_js = function () {
  var statements_value_js = Blockly.Arduino.statementToCode(this, 'value_js');
  Blockly.Arduino.style_['html_js'] = '<script>\n'+statements_value_js+'</script>\n';
    var code = '';
    return code;
  };
  
//初始函数
Blockly.Arduino.js_make_init = function () {
  var js_make_init_value = Blockly.Arduino.statementToCode(this, 'js_make_init_value');
      var code = 'function   mtn_init(){\n'+js_make_init_value+'\n}\n';
    return code;
  };
  
  Blockly.Arduino.text_join = function() {
    // Text value.
    var a = 'String(' + Blockly.Arduino.valueToCode(this, 'A', 0) + ')';
    var b = 'String(' + Blockly.Arduino.valueToCode(this, 'B', 0) + ')';
    return [a  + ' + ' + b , 0];
  };
  
    //重载init函数
Blockly.Arduino.mtn_make_js_init = function() {
  var code = 'await mtn_init();\n';
  return code;
};