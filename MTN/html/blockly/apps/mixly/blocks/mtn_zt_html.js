'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;

//html

Blockly.Blocks.mtn_make_html= {
  init: function() {    
  this.appendDummyInput()
      .appendField("网页内容");
  this.appendStatementInput("value_html")
      .setCheck(null);
  this.setColour(20);
  this.setTooltip("将所有和元素相关的块放入其中");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_html.html");
  }
};

//div
Blockly.Blocks.html_make_div= {
  init: function() { 
    this.appendValueInput('html_id_div_name')
    .setCheck([String,Number])
    .appendField("图层id"); 
  this.appendValueInput('html_class_div_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_make_div_obj")
    .appendField("属性和事件")
    .setCheck(null);
  this.appendStatementInput("div_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("HTML 文档中的一个分隔区块");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_div.html");
  },
};

//text
Blockly.Blocks['html_namke_text'] = {
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField('文本')
        .appendField(new Blockly.FieldTextInput("梦童年"), "html_namke_text_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("可以使用任何形式的文本输入到body中");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_namke_text.html");
  },
};
//html_make_obj
Blockly.Blocks.html_make_obj= {
  init: function() { 
  this.appendDummyInput()
      .appendField("属性和事件");
  this.appendStatementInput("html_make_obj_value")
      .setCheck(null);
  this.setOutput(true, null);
  this.setColour(20);
  this.setTooltip("网页标签属性和事件");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_obj.html");
  }
};
//draggable
Blockly.Blocks.html_make_obj_draggable= {
  init: function() { 
  this.appendDummyInput()
      .appendField("是否可拖动")
      .appendField(new Blockly.FieldCheckbox("true"), "html_make_obj_draggable_value");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("元素允许鼠标拖拽");
  this.setHelpUrl("");
  },
   onchange: function(e) {
    seterror(this,'html_make_obj','此模块必须放在属性模块中');
  }
};
//contenteditable
Blockly.Blocks.html_make_obj_contenteditable= {
  init: function() { 
  this.appendDummyInput()
      .appendField("是否可编辑文本")
      .appendField(new Blockly.FieldCheckbox("true"), "html_make_obj_contenteditable_value");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("元素是否可编辑文本");
  this.setHelpUrl("");
  },
   onchange: function(e) {
    seterror(this,'html_make_obj','此模块必须放在全部样式中');
  }
};
//event
Blockly.Blocks.html_make_obj_event= {
  init: function() { 
  this.appendValueInput("html_make_obj_event_value")
      .setCheck(null)
      .appendField("事件")
      .appendField(new Blockly.FieldDropdown([
        ["失去焦点时","onblur"],
        ["元素改变时","onchange"],
        ["元素获得焦点时","onfocus"],
        ["选取元素时","onselect"],
        ["单击鼠标时","onclick"],
        ["双击鼠标时","ondblclick"],
        ["按下按键时","onkeydown"],
        ["按下并松开按键时","onkeypress"],
        ["松开按键时","onkeyup"],
        ["拖动元素时","ondrag"],
        ["拖动操作结束时","ondragend"],
        ["元素被拖动至有效的拖放目标时","ondragenter"],
        ["元素离开有效拖放目标时","ondragleave"],
        ["元素被拖动至有效拖放目标上方时","ondragover"],
        ["拖动操作开始时","ondragstart"],
        ["被拖动元素正在被拖放时","ondrop"],
        ["按下鼠标按钮时","onmousedown"],
        ["鼠标指针移动时","onmousemove"],
        ["鼠标指针移出元素时","onmouseout"],
        ["鼠标指针移至元素之上","onmouseover"],
        ["松开鼠标按钮时","onmouseup"],
        ["转动鼠标滚轮时","onmousewheel"],
        ["滚动元素的滚动条时","onscroll"]
      ]), "html_make_obj_event_select")
      .appendField("执行脚本");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("给元素添加相应的事件");
  this.setHelpUrl("");
  }
};
//h
Blockly.Blocks.html_make_h= {
  init: function() { 
    this.appendValueInput('html_id_h_name')
    .setCheck([String,Number])
    .appendField("标题id"); 
  this.appendValueInput('html_class_h_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([
      ["1号标题","h1"],
      ["2号标题","h2"],
      ["3号标题","h3"],
      ["4号标题","h4"],
      ["5号标题","h5"],
      ["6号标题","h6"],
    ]), "html_make_h_select");
  this.appendStatementInput("html_make_h_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("网页标签标题");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_h.html");
  },
};
//p
Blockly.Blocks.html_make_p= {
  init: function() { 
    this.appendValueInput('html_id_p_name')
    .setCheck([String,Number])
    .appendField("段落id"); 
  this.appendValueInput('html_class_p_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
  this.appendStatementInput("html_make_p_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("网页段落");
  this.setHelpUrl("");
  },
};
//a
Blockly.Blocks.html_make_a= {
  init: function() { 
    this.appendValueInput('html_id_a_name')
    .setCheck([String,Number])
    .appendField("链接id"); 
  this.appendValueInput('html_class_a_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_make_a_obj")
    .appendField("属性和事件")
    .setCheck(null);
  this.appendStatementInput("html_make_a_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("网页超链接");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_a.html");
  },
};
//href
Blockly.Blocks['html_make_obj_href'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_make_obj_href_url')
    .setCheck([String,Number])
    .appendField("链接地址");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("链接地址");
    this.setHelpUrl("");
  },
};
//title
Blockly.Blocks['html_make_obj_title'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_make_obj_title_value')
    .setCheck([String,Number])
    .appendField("提示文本");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("提示文本");
    this.setHelpUrl("");
  },
};
//img
Blockly.Blocks['html_make_img'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_id_img_name')
    .setCheck([String,Number])
    .appendField("图片id"); 
  this.appendValueInput('html_class_img_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput('html_make_img_url')
    .setCheck(null)
    .appendField("图片地址");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("网页内添加一副图片");
    this.setHelpUrl("");
  },
};
//video
Blockly.Blocks['html_make_video'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_id_video_name')
    .setCheck([String,Number])
    .appendField("视频id"); 
  this.appendValueInput('html_class_video_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput('html_make_video_obj')
    .setCheck(null)
    .appendField("属性和事件");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("网页内添加一个视频");
    this.setHelpUrl("");
  },
};
//src
Blockly.Blocks['html_make_obj_src'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_make_obj_src_url')
    .setCheck([String,Number])
    .appendField("(src)地址");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片或视频地址");
    this.setHelpUrl("");
  },
};
//mp3mp4
Blockly.Blocks.html_make_obj_mp3mp4= {
  init: function() { 
  this.appendDummyInput()
      .appendField("视频音频播放属性")
      .appendField(new Blockly.FieldDropdown([
	  ["自动播放","autoplay"],
	  ["显示播放按钮","controls"],
	  ["循环播放","loop"],
	  ["静音","muted"]
	  ]), "html_make_obj_mp3mp4_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("视频声音播放属性注意首次载入自动播放需要静音");
  this.setHelpUrl("");
  }
};
//audio
Blockly.Blocks['html_make_audio'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_id_audio_name')
    .setCheck([String,Number])
    .appendField("音频id"); 
  this.appendValueInput('html_class_audio_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput('html_make_audio_obj')
    .setCheck(null)
    .appendField("属性和事件");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("添加一个声音标签");
    this.setHelpUrl("");
  },
};
//ul
Blockly.Blocks.html_make_ul= {
  init: function() { 
    this.appendValueInput('html_id_ul_name')
    .setCheck([String,Number])
    .appendField("列表id"); 
  this.appendValueInput('html_class_ul_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_make_ul_obj")
    .appendField("属性和事件")
    .setCheck(null);
  this.appendStatementInput("html_make_ul_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("网页列表");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_ul.html");
  },
};
//li
Blockly.Blocks.html_make_li= {
  init: function() { 
    this.appendValueInput('html_id_li_name')
    .setCheck([String,Number])
    .appendField("列表项id"); 
  this.appendValueInput('html_class_li_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_make_li_obj")
    .appendField("属性和事件")
    .setCheck(null);
  this.appendStatementInput("html_make_li_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("网页列表项");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_ul.html");
  },
};
//input
Blockly.Blocks.html_make_input= {
  init: function() {
    this.appendDummyInput()
      .appendField("输入框类型")
      .appendField(new Blockly.FieldDropdown([
	  ["文本框","text"],
	  ["密码框","password"],
	  ["单选框","radio"],
	  ["复选框","checkbox"],
    ["颜色","color"],
    ["日期","date"],
      ]), "html_make_input_value");
    this.appendValueInput('html_id_input_name')
    .setCheck([String,Number])
    .appendField("表单输入框id"); 
    this.appendValueInput('html_class_input_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput('html_name_input_name')
    .setCheck([String,Number])
    .appendField("名称"); 
    this.appendValueInput("html_name_input_obj")
    .appendField("属性和事件")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("输入框类型");
    this.setHelpUrl(""); 
  }
};
//value
Blockly.Blocks['html_make_obj_value'] = {
  init: function() {
    this.setColour(20);
    this.appendValueInput('html_make_obj_value_text')
    .setCheck([String,Number])
    .appendField("表单输入的值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("表单输入的值");
    this.setHelpUrl("");
  },
};
//draggable
Blockly.Blocks.html_make_obj_checked= {
  init: function() { 
  this.appendDummyInput()
      .appendField("复选框和单选按钮被选中")
      .appendField(new Blockly.FieldCheckbox("true"), "html_make_obj_checked_value");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("单选按钮或复选框");
  this.setHelpUrl("");
  },
   onchange: function(e) {
    seterror(this,'html_make_obj','此模块必须放在属性模块中');
  }
};

//select
Blockly.Blocks.html_make_select= {
  init: function() {
    this.appendValueInput('html_id_select_name')
    .setCheck([String,Number])
    .appendField("下拉列表id"); 
    this.appendValueInput('html_class_select_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput('html_name_select_name')
    .setCheck([String,Number])
    .appendField("名称"); 
    this.appendValueInput("html_name_select_obj")
    .appendField("属性和事件")
    .setCheck(null);
    this.appendStatementInput("html_make_select_value")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("下拉菜单");
    this.setHelpUrl(""); 
  }
};
//option
Blockly.Blocks.html_make_option= {
  init: function() {
    this.appendValueInput('html_class_option_name')
    .setCheck([String,Number])
    .appendField("下拉列表项样式名"); 
    this.appendValueInput('html_name_option_text')
    .setCheck([String,Number])
    .appendField("文本"); 
    this.appendValueInput("html_name_option_obj")
    .appendField("属性和事件")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("下拉菜单的项");
    this.setHelpUrl(""); 
  }
};
//button
Blockly.Blocks.html_make_button= {
  init: function() {
    this.appendValueInput('html_class_button_id')
    .setCheck([String,Number])
    .appendField("按钮id"); 
    this.appendValueInput('html_class_button_name')
    .setCheck([String,Number])
    .appendField("按钮式名"); 
    this.appendValueInput('html_name_button_text')
    .setCheck([String,Number])
    .appendField("文本"); 
    this.appendValueInput("html_name_button_obj")
    .appendField("属性和事件")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("按钮");
    this.setHelpUrl(""); 
  }
};
//diy_obj
Blockly.Blocks.html_make_diy_obj= {
  init: function() {
    this.appendValueInput('html_make_diy_obj_name')
    .setCheck([String,Number])
    .appendField("自定属性或事件"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl(""); 
  }
};

//iframe
Blockly.Blocks.html_make_iframe= {
  init: function() {
    this.appendValueInput('html_id_iframe_name')
    .setCheck([String,Number])
    .appendField("框架id"); 
    this.appendValueInput('html_class_iframe_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_name_iframe_src")
    .appendField("(src)地址")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("网页框架");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/html_make_iframe.html");
  }
};
//diy_html
Blockly.Blocks.make_diy_html= {
  init: function() {
    this.appendValueInput('make_diy_html_value')
    .setCheck([String,Number])
    .appendField("自定义元素"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl(""); 
  }
};

//html_make_diy_label
Blockly.Blocks.html_make_diy_label= {
  init: function() { 
    this.appendValueInput('html_make_diy_label_name')
    .setCheck([String,Number])
    .appendField("标签名称"); 
    this.appendValueInput('html_make_diy_label_id_name')
    .setCheck([String,Number])
    .appendField("图层id"); 
  this.appendValueInput('html_make_diy_label_class_name')
    .setCheck([String,Number])
    .appendField("样式名"); 
    this.appendValueInput("html_make_diy_label_obj")
    .appendField("属性和事件")
    .setCheck(null);
  this.appendStatementInput("html_make_diy_label_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(20);
  this.setTooltip("");
  this.setHelpUrl("");
  },
};