'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');

goog.require('Blockly.Blocks');
//自定义颜色值


// 元素
Blockly.Blocks.js_make_getElementById= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_getElementById_id')
      .setCheck([String,Number])
      .appendField("元素");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("通过id获取元素");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_getElementById.html");
  }
};
// 获取元素属性的值
Blockly.Blocks.js_make_in_Element= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_in_Element_value')
      .setCheck([String,Number])
      .appendField("元素(变量)");
      this.appendValueInput('js_make_in_obj_value')
      .setCheck([String,Number])
      .appendField("属性(样式)");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("对象.属性");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_in_Element.html");
  }
};
// 获取赋值
Blockly.Blocks.js_make_value= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_value1')
      .setCheck([String,Number])
      .appendField("给元素(变量)");
      this.appendValueInput('js_make_value2')
      .setCheck([String,Number,Boolean])
      .appendField("赋值");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("这个模块就是一个=（赋值）模块。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_value.html");
  }
};
// 获取赋值
Blockly.Blocks.js_make_style_value= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_style_value1')
      .setCheck([String,Number])
      .appendField("元素(变量)样式");
      this.appendValueInput('js_make_style_value2')
      .setCheck([String,Number,Boolean])
      .appendField("赋值");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("这个模块就是一个=（赋值）模块。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_style_value.html");
  }
};
//元素常用属性
Blockly.Blocks['js_make_getElementById_obj'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("元素常用属性")
      .appendField(new Blockly.FieldDropdown([
        ["元素的内容", "innerHTML"],
        ["元素的本内容", "innerText"],
        ["元素的纯本内容", "textContent"],
        ["元素的value的值", "value"],
        ["src(图片地址等)", "src"],
        ["href(链接地址)", "href"],
        ["元素的自定义数据", "dataset"],
        ["元素的宽度", "offsetWidth"],
        ["元素的高度", "offsetHeight"],
        ["不包括滚动条的宽度", "clientWidth"],
        ["不包括滚动条的高度", "clientHeight"],
        ["元素的左侧偏移量", "offsetLeft"],
        ["元素的顶端侧偏移量", "offsetTop"],
        ["滚动条当前位置(高)", "scrollTop"],
        ["滚动条当前位置(宽)", "scrollLeft"],
        ["滚动条高度", "scrollHeight"],
        ["元素的底部距离", "bottom"],
        ["元素的顶端距离", "top"],
        ["元素的左距离", "left"],
        ["静音", "muted"],
        ["样式名", "className"],
        ["鼠标滚轮动值","deltaY"],
        ["阻止事件的默认行为","preventDefault()"],
        ["阻止事件冒泡","stopPropagation()"],
      ]), "js_make_getElementById_obj_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("常用的元素属性，如果没有的可以手写到给元素块的值里。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_getElementById_obj.html");
  },
};

// 元素样式
Blockly.Blocks.js_make_getElementById_style= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_getElementById_style_value')
      .setCheck([String,Number])
      .appendField("元素样式");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("元素样式");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_getElementById_style.html");
  }
};

//元素常用样式
Blockly.Blocks['js_make_getElementById_stylec'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("元素常用样式")
      .appendField(new Blockly.FieldDropdown([
        ["元素顶边距", "top"],
        ["元素左边距", "left"],
        ["字体颜色", "color"],
        ["字体大小", "fontSize"],        
        ["元素的高度", "height"],
        ["元素的宽度", "width"],
        ["元素的透明度", "opacity"],
        ["元素的背景图片", "backgroundImage"],
        ["元素的背景颜色", "backgroundColor"], 
        ["元素显示属性", "display"],      
      ]), "js_make_getElementById_stylec_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("获取部分css样式的值。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_in_getComputedStyle.html");
  },
};
// 在元素中创建元素
Blockly.Blocks['js_make_createElement'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("创造元素")
      .appendField(new Blockly.FieldDropdown([
        ["图层", "div"],
        ["列表", "ul"],
        ["列表项", "li"],
        ["标题", "h1"],        
        ["段落", "p"],
        ["按钮", "button"],
        ["链接", "a"],
        ["图片", "img"],
        ["下拉菜单", "select"],
        ["下拉菜单项", "option"],  
      ]), "js_make_createElement_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("通过脚本来创建一个元素");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_createElement.html");
  },
};
//  
Blockly.Blocks.js_make_in_getComputedStyle= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_in_getComputedStyle_value')
      .setCheck([String,Number])
      .appendField("获取样式的值");
      this.appendDummyInput()
      .appendField("样式")
      .appendField(new Blockly.FieldDropdown([
        ["元素顶边距", "top"],
        ["元素左边距", "left"],
        ["字体颜色", "color"],
        ["字体大小", "fontSize"],        
        ["元素的高度", "Height"],
        ["元素的宽度", "Width"],
        ["元素的背景图片", "background-image"],
        ["元素的背景颜色", "background-color"],       
      ]), "js_make_in_getComputedStyle_select");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("获取部分css样式的值。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_getElementById_stylec.html");
  }
};
//将创建的元素添加到某个元素中
Blockly.Blocks.js_make_add_element= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_add_element_value1')
      .setCheck([String,Number])
      .appendField("元素");
      this.appendValueInput('js_make_add_element_value2')
      .setCheck([String,Number])
      .appendField("添加到");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("添加创建的元素脚本");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_add_element.html");
  }
};

//创建元素时添加事件
Blockly.Blocks.js_make_add_event= {
  init: function() { 
    this.appendValueInput('js_make_add_element_name')
    .setCheck([String,Number])
    .appendField("添加的元素"); 
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([
      ["点击", "click"],
      ["鼠标移入", "mouseover"],
      ["鼠标移出", "mouseout"],
      ["鼠标按下", "mousedown"],
      ["鼠标抬起", "mouseup"],
      ["鼠标移动", "mousemove"],
      ["鼠标滚轮", "mousewheel"],
      ["鼠标双击", "dblclick"],
      ["鼠标右键", "contextmenu"],
      ["鼠标拖拽", "drag"],
      ["鼠标拖拽结束", "dragend"],
      ["鼠标拖拽中", "dragenter"],
      ["鼠标拖拽中结束", "dragleave"],
      ["值改变","change"],
      ["失去焦点","blur"],
      ["获得焦点","focus"],
      ["滚动条滚动","scroll"],
      ["窗口大小改变","resize"],
      ["面加载完成","load"],
      ["面即将卸载","unload"],
      ["加载失败","error"],
    ]), "js_make_add_event_select");
  this.appendStatementInput("js_make_add_event_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(50);
  this.setTooltip("添加的元素事件");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_add_event.html");
  },
};

//获取全部样式的标签
Blockly.Blocks.js_make_get_all_style= {
  init: function() { 
    this.appendValueInput('style_name')
    .setCheck([String,Number])
    .appendField("获取全部样式的元素");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(50);
    this.setTooltip("通过样式名称获取元素");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_get_all_style.html");
  },
};

//搜索全部元素中第一个匹配的数值
Blockly.Blocks['math_search_array'] = {
  init: function() {
    this.setColour(50);
    this.appendValueInput("array")
    .setCheck([String,Number])
    .appendField('全部元素');
    this.appendValueInput("Attribute_name")
    .setCheck([String,Number])
    .appendField('元素属性');
    this.appendValueInput("value")
    .setCheck([String,Number])
    .appendField('第一个匹配的数值');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip("方法返回数组中第一个满足条件的元素");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/math_search_array.html");
  }
};
//获取标签属性
Blockly.Blocks['js_make_get_Attribute'] = {
  init: function() {
    this.setColour(50);
    this.appendValueInput("element_name")
    .setCheck([String,Number])
    .appendField('元素');
    this.appendValueInput("Attribute_name")
    .setCheck([String,Number])
    .appendField('元素属性');
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip("获取元素标签的属性");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_get_Attribute.html");
  }
};

//向元素添加一个样式名
Blockly.Blocks.js_make_add_classList= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('element_name')
      .setCheck([String,Number])
      .appendField("添加一个样式名 元素");
      this.appendValueInput('class_name')
      .setCheck([String,Number])
      .appendField("样式名");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("给元素添加一个样式名");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_add_classList.html");
  }
};
//元素删除一个样式名
Blockly.Blocks.js_make_del_classList= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('element_name')
      .setCheck([String,Number])
      .appendField("删除一个样式名 元素");
      this.appendValueInput('class_name')
      .setCheck([String,Number])
      .appendField("样式名");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("删除一个样式名");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_del_classList.html");
  }
};
//设置一个元素属性值
Blockly.Blocks.js_make_setAttribute= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('element_name')
      .setCheck([String,Number])
      .appendField("设置一个元素属性 元素");
      this.appendValueInput('Attribute_name')
      .setCheck([String,Number])
      .appendField("属性");
      this.appendValueInput('value')
      .setCheck([String,Number])
      .appendField("值");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("修改一个元素的属性值");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_setAttribute.html");
  }
};
//清除一个元素下的所有子元素
Blockly.Blocks.js_make_removeChild= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('element_name')
      .setCheck([String,Number])
      .appendField("清除所有子元素 元素");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("清楚一个元素中的全部子元素。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_removeChild.html");
  }
};

// 获取鼠标位置
Blockly.Blocks['js_make_mousexy'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
      .appendField("获取鼠标位置")
      .appendField(new Blockly.FieldDropdown([
        ["横坐标", "clientX"],
        ["纵坐标", "clientY"], 
      ]), "js_make_mousexy_value");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("获取网页（UI）内鼠标的位置。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_mousexy.html");
  },
};

//进入游戏设置
Blockly.Blocks.js_make_game_alter_web= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('game_id')
      .setCheck([String,Number])
      .appendField("设置游戏 游戏id");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("通过游戏ROM的ID进入游戏设置页面。");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_game_alter_web.html");
  }
};

// 背景图片
Blockly.Blocks.js_make_bg_img= {
  init: function() { 
      this.setColour(50);
      this.appendValueInput('js_make_bg_img_value')
      .setCheck([String,Number])
      .appendField("背景图片 地址");
      this.setOutput(true, null);
      this.setInputsInline(true);
      this.setTooltip("向元素添加背景图片不能直接添加图片地址，需要使用url");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/js_make_bg_img.html");
  }
};
// B站PC端播放器
Blockly.Blocks['bilibili_pc_player'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
        .appendField("B站PC端播放器");
    this.appendValueInput('iframe_id')
        .setCheck([String, Number])
        .appendField("框架ID");
    this.appendValueInput('bvid_id')
        .setCheck([String, Number])
        .appendField("视频BV号");
    this.appendDummyInput()
        .appendField("参数设置")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "autoplay")
        .appendField("自动播放")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "muted")
        .appendField("静音")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "danmaku")
        .appendField("显示弹幕")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "poster")
        .appendField("展示封面");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip("嵌入B站PC端播放器，支持自定义参数");
    this.setHelpUrl("");
  }
};
// B站移动端播放器
Blockly.Blocks['bilibili_mobile_player'] = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
        .appendField("B站移动端播放器");
    this.appendValueInput('iframe_id')
        .setCheck([String, Number])
        .appendField("框架ID");
    this.appendValueInput('bvid_id')
        .setCheck([String, Number])
        .appendField("视频BV号");
    this.appendDummyInput()
        .appendField("参数设置")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "autoplay")
        .appendField("自动播放")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "danmaku")
        .appendField("显示弹幕")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "poster")
        .appendField("展示封面");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip("嵌入B站移动端播放器，支持自定义参数");
    this.setHelpUrl("");
  }
};