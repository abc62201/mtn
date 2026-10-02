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
      var code = 'async function mtn_init(){\n'+js_make_init_value+'\n}\n';
    return code;
  }; 
  //键盘输入脚本
Blockly.Arduino.mtn_make_key = function () {
  var statements_value_js_key = Blockly.Arduino.statementToCode(this, 'value_js_key');
  Blockly.Arduino.style_['html_js_key'] = '<script>\n async function keyvalue1(){\n'
                                        +statements_value_js_key+'}\n</script>\n';
    var code = '';
    return code;
  }; 
//键盘输入脚本
Blockly.Arduino.mtn_make_joy = function () {
  var statements_value_js_joy = Blockly.Arduino.statementToCode(this, 'value_js_joy');
  Blockly.Arduino.style_['html_js_joy'] = '<script>\n async function joyvalue1(){\n'
                                        +statements_value_js_joy+'}\n</script>\n';
    var code = '';
    return code;
  }; 
Blockly.Arduino.js_make_Maozi = function() {
  var js_make_Maozi_vlaue = Blockly.Arduino.valueToCode(this, 'js_make_Maozi_vlaue', Blockly.Arduino.ORDER_ATOMIC);
  var code = js_make_Maozi_vlaue+';\n';
  return code;
};

  Blockly.Arduino.text_join = function() {
    // Text value.
    var a = Blockly.Arduino.valueToCode(this, 'A', 0) ;
    var b = Blockly.Arduino.valueToCode(this, 'B', 0) ;
    return [a  + ' + ' + b , 0];
  };
  
  //重载init函数
Blockly.Arduino.mtn_make_js_init = function() {
  var code = 'await mtn_init();\n sync_data();\n';
  return code;
};

Blockly.Arduino['async_then_catch_block'] = function() {
  // 获取函数名
  var functionName = Blockly.Arduino.valueToCode(this, 'FUNCTION_NAME', Blockly.Arduino.ORDER_ATOMIC) || '""';

  // 获取 .then 参数名
  var thenParam = Blockly.Arduino.valueToCode(this, 'THEN_PARAM', Blockly.Arduino.ORDER_ATOMIC) || '"result"';
  thenParam = thenParam.replace(/^["']|["']$/g, ''); // 去掉引号

  // 获取 .catch 参数名
  var catchParam = Blockly.Arduino.valueToCode(this, 'CATCH_PARAM', Blockly.Arduino.ORDER_ATOMIC) || '"error"';
  catchParam = catchParam.replace(/^["']|["']$/g, ''); // 去掉引号

  // 获取回调逻辑
  var thenCallback = Blockly.Arduino.statementToCode(this, 'THEN_CALLBACK');
  var catchCallback = Blockly.Arduino.statementToCode(this, 'CATCH_CALLBACK');

  // 生成代码
  var code = functionName + '.then((' + thenParam + ') => {\n' + thenCallback + '})' +
             '.catch((' + catchParam + ') => {\n' + catchCallback + '});\n';
  return code;
};