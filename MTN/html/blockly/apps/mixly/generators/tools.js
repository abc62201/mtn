'use strict';

goog.provide('Blockly.Arduino.tools');
goog.require('Blockly.Arduino');

Blockly.Arduino.factory_notes = function(){
 var content = this.getFieldValue('VALUE');
 //console.log(content);
 if(content){
  var content2arr = content.split('\n');
  var code = '';
  for (var eachElement in content2arr){
   // console.log(content2arr[eachElement]);
    content2arr[eachElement] =  content2arr[eachElement] +'\n';
    //console.log(content2arr[eachElement]);
  }
  for (var eachElement of content2arr){
    code += eachElement;
  }
  return code;
}
else{
  return '\n';
}
}

