'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');

// 元素
Blockly.Arduino.js_make_getElementById = function() {
  var js_make_getElementById_id = Blockly.Arduino.valueToCode(this, 'js_make_getElementById_id', Blockly.Arduino.ORDER_ATOMIC);  
  var code ='document.getElementById('+js_make_getElementById_id+')';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 获取元素属性的值
Blockly.Arduino.js_make_in_Element = function() {
  var js_make_in_Element_value = Blockly.Arduino.valueToCode(this, 'js_make_in_Element_value', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_in_obj_value = Blockly.Arduino.valueToCode(this, 'js_make_in_obj_value', Blockly.Arduino.ORDER_ATOMIC);   
  var code =js_make_in_Element_value+'.'+js_make_in_obj_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 获取元素样式的值
Blockly.Arduino.js_make_in_getComputedStyle = function() {
  var js_make_in_getComputedStyle_value = Blockly.Arduino.valueToCode(this, 'js_make_in_getComputedStyle_value', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_in_getComputedStyle_select = this.getFieldValue('js_make_in_getComputedStyle_select');  
  var code = `window.getComputedStyle(${js_make_in_getComputedStyle_value}).getPropertyValue("${js_make_in_getComputedStyle_select}")`;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 元素常用属性
Blockly.Arduino.js_make_getElementById_obj = function() {
  var  js_make_getElementById_obj_value=this.getFieldValue('js_make_getElementById_obj_value'); 
  var obj_value='';
  if(js_make_getElementById_obj_value=='top'){
    obj_value='getBoundingClientRect().top';
  }else if(js_make_getElementById_obj_value=='left'){
    obj_value='getBoundingClientRect().left';
  }else{
    obj_value=js_make_getElementById_obj_value;
  }
  var code =obj_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 获取元素属性的值
Blockly.Arduino.js_make_value = function() {
  var js_make_value1 = Blockly.Arduino.valueToCode(this, 'js_make_value1', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_value2 = Blockly.Arduino.valueToCode(this, 'js_make_value2', Blockly.Arduino.ORDER_ATOMIC); 
    
  var code =js_make_value1+'='+js_make_value2+';\n';
  return code;
};
// 获取元素属性的值
Blockly.Arduino.js_make_style_value = function() {
  var js_make_style_value1 = Blockly.Arduino.valueToCode(this, 'js_make_style_value1', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_style_value2 = Blockly.Arduino.valueToCode(this, 'js_make_style_value2', Blockly.Arduino.ORDER_ATOMIC); 
   // 检查js_make_value2是否以双引号或单引号开始和结束
var startsAndEndsWithQuote = (js_make_style_value2.startsWith('"') && js_make_style_value2.endsWith('"')) || (js_make_style_value2.startsWith("'") && js_make_style_value2.endsWith("'"));
// 根据条件添加引号
var quotedValue2 = startsAndEndsWithQuote ? js_make_style_value2 : '"' + js_make_style_value2 + '"'; 
  var code =js_make_style_value1+'='+quotedValue2+';\n';
  return code;
};
// 元素样式
Blockly.Arduino.js_make_getElementById_style = function() {
  var js_make_getElementById_style_value = Blockly.Arduino.valueToCode(this, 'js_make_getElementById_style_value', Blockly.Arduino.ORDER_ATOMIC);  
  var code ='style.'+js_make_getElementById_style_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//元素常用样式
Blockly.Arduino.js_make_getElementById_stylec = function() {
  var js_make_getElementById_stylec_value =this.getFieldValue('js_make_getElementById_stylec_value');   
  var code ='style.'+js_make_getElementById_stylec_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//在元素中创建元素
Blockly.Arduino.js_make_createElement = function() {
  var js_make_createElement_value =this.getFieldValue('js_make_createElement_value');   
  var code ='document.createElement("'+js_make_createElement_value+'")';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 将创建的元素添加到某个元素中
Blockly.Arduino.js_make_add_element = function() {
  var js_make_add_element_value1 = Blockly.Arduino.valueToCode(this, 'js_make_add_element_value1', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_add_element_value2 = Blockly.Arduino.valueToCode(this, 'js_make_add_element_value2', Blockly.Arduino.ORDER_ATOMIC); 
  var code =js_make_add_element_value1+'.appendChild('+js_make_add_element_value2+');\n';
  return code;
};
//创建元素时添加事件
Blockly.Arduino.js_make_add_event = function() {
  var js_make_add_element_name = Blockly.Arduino.valueToCode(this, 'js_make_add_element_name', Blockly.Arduino.ORDER_ATOMIC);
  var js_make_add_event_select = this.getFieldValue('js_make_add_event_select');
  var js_make_add_event_value= Blockly.Arduino.statementToCode(this, 'js_make_add_event_value');
  var code =js_make_add_element_name+'.addEventListener("'+js_make_add_event_select+'",async function(event){\n'+js_make_add_event_value+'\n});\n'
  return code;
}
//创建元素时添加事件
Blockly.Arduino.js_make_get_all_style = function() {
  var style_name = Blockly.Arduino.valueToCode(this, 'style_name', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'document.querySelectorAll('+style_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//搜索全部元素中第一个匹配的数值
Blockly.Arduino.math_search_array = function() {
  var array_all = Blockly.Arduino.valueToCode(this, 'array', Blockly.Arduino.ORDER_ATOMIC);
  var Attribute_name = Blockly.Arduino.valueToCode(this, 'Attribute_name', Blockly.Arduino.ORDER_ATOMIC);
  var value_bijiao = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Array.from('+array_all+').find((item) => {\n';
  code += 'return item.getAttribute('+Attribute_name+')=='+value_bijiao+';\n';
  code += '})';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//获取标签属性
Blockly.Arduino.js_make_get_Attribute = function() {
  var element_name = Blockly.Arduino.valueToCode(this, 'element_name', Blockly.Arduino.ORDER_ATOMIC);
  var Attribute_name = Blockly.Arduino.valueToCode(this, 'Attribute_name', Blockly.Arduino.ORDER_ATOMIC);
  var code = element_name+'.getAttribute('+Attribute_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//向元素添加一个样式名
Blockly.Arduino.js_make_add_classList = function() {
  var element_name = Blockly.Arduino.valueToCode(this, 'element_name', Blockly.Arduino.ORDER_ATOMIC);
  var class_name = Blockly.Arduino.valueToCode(this, 'class_name', Blockly.Arduino.ORDER_ATOMIC);
  var code = element_name+'.classList.add('+class_name+');\n';
  return code;
}
//元素删除一个样式名
Blockly.Arduino.js_make_del_classList = function() {
  var element_name = Blockly.Arduino.valueToCode(this, 'element_name', Blockly.Arduino.ORDER_ATOMIC);
  var class_name = Blockly.Arduino.valueToCode(this, 'class_name', Blockly.Arduino.ORDER_ATOMIC);
  var code = element_name+'.classList.remove('+class_name+');\n';
  return code;
}
//设置一个元素属性值
Blockly.Arduino.js_make_setAttribute = function() {
  var element_name = Blockly.Arduino.valueToCode(this, 'element_name', Blockly.Arduino.ORDER_ATOMIC);
  var Attribute_name = Blockly.Arduino.valueToCode(this, 'Attribute_name', Blockly.Arduino.ORDER_ATOMIC);
  var value_bijiao = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = element_name+'.setAttribute('+Attribute_name+','+value_bijiao+');\n';
  return code;
}
//清除一个元素下的所有子元素
Blockly.Arduino.js_make_removeChild = function() {
  var element_name = Blockly.Arduino.valueToCode(this, 'element_name', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'while ('+element_name+'.firstChild) {\n';
      code += element_name+'.removeChild('+element_name+'.firstChild);\n';
      code += '}\n';
  return code;
}

//获取鼠标位置
Blockly.Arduino.js_make_mousexy = function() {
  var js_make_mousexy_value =this.getFieldValue('js_make_mousexy_value');   
  var code ='window.event.'+js_make_mousexy_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//进入游戏设置
Blockly.Arduino.js_make_game_alter_web = function() {
  var game_id = Blockly.Arduino.valueToCode(this, 'game_id', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await game_alter_web('+game_id+');\n'
  return code;
}

// 背景图片
Blockly.Arduino.js_make_bg_img = function() {
  var js_make_bg_img_value = Blockly.Arduino.valueToCode(this, 'js_make_bg_img_value', Blockly.Arduino.ORDER_ATOMIC); 
  if(containsQuotedText(js_make_bg_img_value)){
    js_make_bg_img_value='url('+js_make_bg_img_value+')';
}else{
  js_make_bg_img_value='`url("${'+js_make_bg_img_value+'}")`';
} 
  var code =js_make_bg_img_value;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// B站PC端播放器
Blockly.Arduino['bilibili_pc_player'] = function() {
  var iframeId = Blockly.Arduino.valueToCode(this, 'iframe_id', Blockly.Arduino.ORDER_ATOMIC);
  var bvidId = Blockly.Arduino.valueToCode(this, 'bvid_id', Blockly.Arduino.ORDER_ATOMIC);
  var autoplay = this.getFieldValue('autoplay') === 'TRUE' ? 1 : 0;
  var muted = this.getFieldValue('muted') === 'TRUE' ? 1 : 0;
  var danmaku = this.getFieldValue('danmaku') === 'TRUE' ? 1 : 0;
  var poster = this.getFieldValue('poster') === 'TRUE' ? 1 : 0;

  var code = `
    var iframe = document.getElementById(${iframeId});
    iframe.src = 'https://player.bilibili.com/player.html?bvid=${bvidId}&page=1&autoplay=${autoplay}&muted=${muted}&danmaku=${danmaku}&poster=${poster}';
  `;
  return code;
};
// B站移动端播放器
Blockly.Arduino['bilibili_mobile_player'] = function() {
  var iframeId = Blockly.Arduino.valueToCode(this, 'iframe_id', Blockly.Arduino.ORDER_ATOMIC);
  var bvidId = Blockly.Arduino.valueToCode(this, 'bvid_id', Blockly.Arduino.ORDER_ATOMIC);
  var autoplay = this.getFieldValue('autoplay') === 'TRUE' ? '&autoplay=1' : '';
  var danmaku = this.getFieldValue('danmaku') === 'TRUE' ? 1 : 0;
  var poster = this.getFieldValue('poster') === 'TRUE' ? 1 : 0;

  var code = `
    var iframe = document.getElementById(${iframeId});
    iframe.src = 'https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=${bvidId}&page=1${autoplay}&danmaku=${danmaku}&poster=${poster}&hasMuteButton=1&fjw=1&hideDanmakuButton=0&noFullScreenButton=1';
  `;
  return code;
};