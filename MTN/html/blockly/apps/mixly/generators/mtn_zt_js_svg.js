'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');

Blockly.Arduino.mtn_make_js_svg_create = function() {
    var statements_mtn_make_js_svg_create_value = Blockly.Arduino.statementToCode(this, 'mtn_make_js_svg_create_value');
    var svg_width_value = Blockly.Arduino.valueToCode(this, 'svg_width_value', Blockly.Arduino.ORDER_ATOMIC);
    var svg_height_value = Blockly.Arduino.valueToCode(this, 'svg_height_value', Blockly.Arduino.ORDER_ATOMIC);
    if (isNaN(svg_height_value)){
        svg_height_value='"${'+svg_height_value+'}"';
    }else{
        svg_height_value=`"${svg_height_value}"`;
    }
    if (isNaN(svg_width_value)){
        svg_width_value='"${'+svg_width_value+'}"';
    }else{
        svg_width_value=`"${svg_width_value}"`;
    }
    var svg_txt='`'+'<svg width='+svg_width_value+' height='+svg_height_value+' xmlns="http://www.w3.org/2000/svg">'+'\n';
        svg_txt+=statements_mtn_make_js_svg_create_value+'</svg>'+'`';
    var code = svg_txt;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino.mtn_make_js_svg_bgcolor = function() {
    var svg_bgcolor_value = Blockly.Arduino.valueToCode(this, 'svg_bgcolor_value', Blockly.Arduino.ORDER_ATOMIC);
    var svg_txt=`<rect width="100%" height="100%" fill="${svg_bgcolor_value}" />\n`;
    var code = svg_txt+'\n';
    return code;
  };
  
  Blockly.Arduino.mtn_make_js_svg_effects = function() {
    var svg_effects_value2 = Blockly.Arduino.statementToCode(this, 'svg_effects_value2');
    var svg_effects_value1 = Blockly.Arduino.valueToCode(this, 'svg_effects_value1', Blockly.Arduino.ORDER_ATOMIC);
    if (isNaN(svg_effects_value1)){
        svg_effects_value1='${'+svg_effects_value1+'}';
    }

    var svg_txt=`<g transform="rotate(${svg_effects_value1})">\n
    ${svg_effects_value2}\n </g>`;
    var code = svg_txt+'\n';
    return code;
  };

  Blockly.Arduino.mtn_make_js_svg_text = function() {
    var svg_text_x = Blockly.Arduino.valueToCode(this, 'svg_text_x', Blockly.Arduino.ORDER_ATOMIC);
    var svg_text_y = Blockly.Arduino.valueToCode(this, 'svg_text_y', Blockly.Arduino.ORDER_ATOMIC);
    var svg_text_color = Blockly.Arduino.valueToCode(this, 'svg_text_color', Blockly.Arduino.ORDER_ATOMIC);
    var svg_text_size = Blockly.Arduino.valueToCode(this, 'svg_text_size', Blockly.Arduino.ORDER_ATOMIC);
    var svg_text_value = Blockly.Arduino.valueToCode(this, 'svg_text_value', Blockly.Arduino.ORDER_ATOMIC);
    var  svg_text_font=this.getFieldValue('svg_text_font'); 
    if(containsQuotedText(svg_text_value)){
        svg_text_value=getQuotedText(svg_text_value);
    }else{
        svg_text_value='${'+svg_text_value+'}';
    }
    if (isNaN(svg_text_x)){
        svg_text_x='"${'+svg_text_x+'}"';
    }else{
        svg_text_x=`"${svg_text_x}"`;
    }
    if (isNaN(svg_text_y)){
        svg_text_y='"${'+svg_text_y+'}"';
    }else{
        svg_text_y=`"${svg_text_y}"`;
    }
    if (isNaN(svg_text_size)){
        svg_text_size='"${'+svg_text_size+'}"';
    }else{
        svg_text_size=`"${svg_text_size}"`;
    }
    var svg_txt=`<text x=${svg_text_x} y=${svg_text_y} fill="${svg_text_color}" font-size=${svg_text_size} font-family="${svg_text_font}">
    ${svg_text_value}
    </text>`;
    var code = svg_txt+'\n';            
    return code;            
  };

  function containsQuotedText(str) {
    // 使用正则表达式检查字符串中是否存在双引号包裹的内容
    return /"[^"]*"/.test(str);
  }

  function getQuotedText(str) {
    // 使用正则表达式匹配双引号内的文本
    const match = str.match(/"([^"]*)"/);  
    // 如果匹配成功，则返回匹配到的文本
    if (match) {
      return match[1];
    } else {
      return ""; // 或者返回默认值，如空字符串 ""
    }
  }
  