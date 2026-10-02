'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');

//红外接收模块
Blockly.Arduino.mdbot_ir_recv = function () {
  var statements_zt_ml = Blockly.Arduino.statementToCode(this, 'zt_ml');
  Blockly.Arduino.definitions_['html_style'] = '<style>\n'+statements_zt_ml+'</style>\n';
  Blockly.Arduino.style_['html_js'] = '<script>\n</script>\n';
    var code = '';
    return code;
  };
  

  Blockly.Arduino.make_class = function() {
    var text_classname = this.getFieldValue('classname');
    var statements_zt_ml = Blockly.Arduino.statementToCode(this, 'zt_ml');
    var code = '.'+text_classname+'{\n'+statements_zt_ml+'}\n';
    return code;
  };