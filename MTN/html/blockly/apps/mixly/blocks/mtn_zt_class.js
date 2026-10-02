'use strict';

goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;

//css

Blockly.Blocks.mtn_make_style= {
  init: function() { 
  this.appendDummyInput()
      .appendField("全部样式");
  this.appendStatementInput("value_css")
      .setCheck(null);
  this.setColour(90);
  this.setTooltip("将所有和样式相关的块放入其中");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_style.html");
  }
};
//body
Blockly.Blocks.mtn_make_body= {
  init: function() { 
  this.appendDummyInput()
      .appendField("网页整体样式");
  this.appendStatementInput("body_value_css")
      .setCheck(null);
  this.setColour(90);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip("放在这个块中的样式将作用整个ui页面，例如背景颜色等。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/mtn_make_body.html");
  },
    onchange: function(e) {
    seterror(this,'mtn_make_style','此模块必须放在全部样式中');
  }
};
//class
Blockly.Blocks.make_class= {
  init: function() { 
  this.appendValueInput('make_class_name')
    .setCheck([String,Number])
    .appendField("样式名");
  this.appendStatementInput("class_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("放在这个块中的样式将改变指定元素的名的外观。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/make_class.html");
  },
  onchange: function(e) {
    seterror(this,'mtn_make_style','此模块必须放在全部样式中');
  }
};
//hover
Blockly.Blocks.make_hover= {
  init: function() { 
  this.appendValueInput('make_hover_name')
    .setCheck([String,Number])
    .appendField("鼠标经过 样式名");
  this.appendStatementInput("hover_value")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("鼠标经过这个元素时将改变指定元素的名的外观。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/make_hover.html");
  },
    onchange: function(e) {
    seterror(this,'mtn_make_style','此模块必须放在全部样式中');
  }
};
//自定义字体
Blockly.Blocks.mtn_make_fonts= {
  init: function() {
  this.appendDummyInput()
      .appendField("自定义字体块里只能定义一个新字体");
  this.appendStatementInput("fonts_value_css")
      .setCheck(null);
  this.setColour(90);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip("自定义的字体文件要放在这个块里面");
  this.setHelpUrl("");
  },
    onchange: function(e) {
    seterror(this,'mtn_make_style','此模块必须放在全部样式中');
  }
};
  //background-color
Blockly.Blocks['css_malke_bgcolor'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
        .appendField('背景颜色')
        .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_bgcolor_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的背景颜色。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgcolor.html");
  },
};
// 背景渐变色块
Blockly.Blocks['css_malke_gradient_background'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
        .appendField("背景渐变");
    this.appendDummyInput()
        .appendField("类型")
        .appendField(new Blockly.FieldDropdown([
            ["线性渐变", "linear"],
            ["径向渐变", "radial"]
        ]), "GRADIENT_TYPE");
    this.appendDummyInput()
        .appendField("起始颜色")
        .appendField(new Blockly.FieldColour("#ff0000"), "START_COLOR");
    this.appendDummyInput()
        .appendField("结束颜色")
        .appendField(new Blockly.FieldColour("#0000ff"), "END_COLOR");
    this.appendDummyInput()
        .appendField("角度 (仅线性)")
        .appendField(new Blockly.FieldAngle(0), "ANGLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip("设置元素的背景渐变效果");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_gradient_background.html");
  }
};
// 透明度渐变块
Blockly.Blocks['css_malke_gradient_opacity'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
        .appendField("透明度渐变");
    this.appendDummyInput()
        .appendField("起始透明度 (0-1)")
        .appendField(new Blockly.FieldNumber(1, 0, 1, 0.1), "START_OPACITY");
    this.appendDummyInput()
        .appendField("结束透明度 (0-1)")
        .appendField(new Blockly.FieldNumber(0, 0, 1, 0.1), "END_OPACITY");
    this.appendDummyInput()
        .appendField("方向")
        .appendField(new Blockly.FieldDropdown([
            ["从上到下", "to bottom"],
            ["从左到右", "to right"],
            ["从左上到右下", "to bottom right"],
            ["从右上到左下", "to bottom left"]
        ]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip("设置元素的透明度渐变效果");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_gradient_opacity.html");
  }
};
// 合并后的背景渐变块
Blockly.Blocks['css_malke_gradient_combined'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
        .appendField("背景渐变");
    this.appendDummyInput()
        .appendField("类型")
        .appendField(new Blockly.FieldDropdown([
            ["线性渐变", "linear"],
            ["径向渐变", "radial"]
        ]), "GRADIENT_TYPE");
    this.appendDummyInput()
        .appendField("起始颜色")
        .appendField(new Blockly.FieldColour("#ff0000"), "START_COLOR");
    this.appendDummyInput()
        .appendField("结束颜色")
        .appendField(new Blockly.FieldColour("#0000ff"), "END_COLOR");
    this.appendDummyInput()
        .appendField("角度 (仅线性)")
        .appendField(new Blockly.FieldAngle(0), "ANGLE");
    this.appendDummyInput()
        .appendField("启用透明度渐变")
        .appendField(new Blockly.FieldCheckbox(false), "ENABLE_OPACITY");
    this.appendDummyInput()
        .appendField("起始透明度 (0-1)")
        .appendField(new Blockly.FieldNumber(1, 0, 1, 0.1), "START_OPACITY");
    this.appendDummyInput()
        .appendField("结束透明度 (0-1)")
        .appendField(new Blockly.FieldNumber(0, 0, 1, 0.1), "END_OPACITY");
    this.appendDummyInput()
        .appendField("方向")
        .appendField(new Blockly.FieldDropdown([
            ["从上到下", "to bottom"],
            ["从左到右", "to right"],
            ["从左上到右下", "to bottom right"],
            ["从右上到左下", "to bottom left"]
        ]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip("设置元素的背景渐变和透明度渐变效果");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_gradient_combined.html");
  }
};
//width
Blockly.Blocks['css_malke_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("宽度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_width_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的宽度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//max_width
Blockly.Blocks['css_malke_max_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("最大宽度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_max_width_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的最大宽度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//min_width
Blockly.Blocks['css_malke_min_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("最小宽度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_min_width_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的最小宽度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//height
Blockly.Blocks['css_malke_height'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("高度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_height_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的高度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//max_height
Blockly.Blocks['css_malke_max_height'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("最大高度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_max_height_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的最大高度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//min_height
Blockly.Blocks['css_malke_min_height'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("最小高度")
    .appendField(new Blockly.FieldTextInput("500px"), "css_malke_min_height_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素或者网页的最小高度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_width.html");
  },
};
//position
Blockly.Blocks.css_make_position= {
  init: function() { 
  this.appendDummyInput()
      .appendField("位置属性")
      .appendField(new Blockly.FieldDropdown([["静态定位","static"],["绝对定位","absolute"],["相对定位","relative"],["固定定位","fixed"],["粘性定位","sticky"]]), "css_make_position_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("改变元素再网页内的位置属性。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_position.html");
  }
};

//top
Blockly.Blocks['css_malke_top'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("顶端距离")
    .appendField(new Blockly.FieldTextInput("0px"), "css_malke_top_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素距离的顶端");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_top.html");
  },
};

//left
Blockly.Blocks['css_malke_left'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("左侧距离")
    .appendField(new Blockly.FieldTextInput("0px"), "css_malke_left_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素距离的左侧的距离");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_top.html");
  },
};

//z-index
Blockly.Blocks['css_malke_z_index'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("层叠顺序")
    .appendField(new Blockly.FieldTextInput("0"), "css_malke_z_index_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("层叠顺序决定哪个元素显示在上面");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_z_index.html");
  },
};
//overflow
Blockly.Blocks.css_malke_overflow= {
  init: function() { 
  this.appendDummyInput()
      .appendField("内容溢出")
      .appendField(new Blockly.FieldDropdown([["不会修剪","visible"],["会被修剪","hidden"],["显示滚动条","scroll"],["自动添加滚动条","auto"]]), "css_malke_overflow_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("当有内容溢出时元素的显示方法。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_overflow.html");
  }
};

//bgimage
Blockly.Blocks['css_malke_bgimage'] = {
  init: function() {
    this.setColour(90);
    this.appendValueInput('make_class_bgimage')
    .setCheck([String,Number])
    .appendField("背景图片");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("给元素添加背景图片。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgimage.html");
  },
};
//bgattachment
Blockly.Blocks.css_malke_bgattachment= {
  init: function() { 
  this.appendDummyInput()
      .appendField("固定的背景图像")
      .appendField(new Blockly.FieldDropdown([["背景图片随页面滚动","scroll"],["背景图片不随页面滚动","fixed"],["背景图片随元素滚动","local"]]), "css_malke_bgattachment_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("如何指定一个固定的背景图像");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgattachment.html");
  }
};

//bgrepeat
Blockly.Blocks.css_malke_bgrepeat= {
  init: function() { 
  this.appendDummyInput()
      .appendField("背景图像重复")
      .appendField(new Blockly.FieldDropdown([["垂直和水平方向重复","repeat"],["水平位置重复","repeat-x"],["垂直位置重复","repeat-y"],["不会重复","no-repeat"]]), "css_malke_bgrepeat_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("背景图像重复样式。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgrepeat.html");
  }
};

//bgsize
Blockly.Blocks['css_malke_bgsize'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("背景图像大小");
	this.appendDummyInput()
	.appendField("宽度")
    .appendField(new Blockly.FieldTextInput("100%"), "css_malke_bgwidth_value");
	this.appendDummyInput()
	.appendField("高度")
	.appendField(new Blockly.FieldTextInput("100%"), "css_malke_bgheight_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("背景图像在元素中的大小。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgsize.html");
  },
};

//bgposition
Blockly.Blocks.css_malke_bgposition= {
  init: function() { 
  this.appendDummyInput()
      .appendField("背景图像位置")
      .appendField(new Blockly.FieldDropdown([
	  ["上","top center"],
	  ["左","left center"],
	  ["中","center center"],
	  ["右","right center"],
	  ["下","bottom center"],
	  ["左上","left top"],
	  ["右上","right top"],
	  ["左下","left bottom"],
	  ["右下","right bottom"],
	  ]), "css_malke_bgposition_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("背景图像在元素中的位置。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_bgposition.html");
  }
};

//Text
Blockly.Blocks['css_malke_color'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
        .appendField('字体颜色')
        .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_color_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素中的字体颜色。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_color.html");
  },
};

//direction
Blockly.Blocks.css_malke_direction= {
  init: function() { 
  this.appendDummyInput()
      .appendField("文本方向")
      .appendField(new Blockly.FieldDropdown([
	  ["从左到右","ltr"],
	  ["从右到左","rtl"]
	  ]), "css_malke_direction_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素中的文本方向。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_direction.html");
  }
};

//letter_spacing
Blockly.Blocks['css_malke_letter_spacing'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("字符间距")
    .appendField(new Blockly.FieldTextInput("0px"), "css_malke_letter_spacing_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素中的文本字符间距。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_letter_spacing.html");
  },
};

//line_height
Blockly.Blocks['css_malke_line_height'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("行间距")
    .appendField(new Blockly.FieldTextInput("100%"), "css_malke_line_height_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素中的段落的行间距。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_line_height.html");
  },
};
//text_wrap
Blockly.Blocks.css_malke_text_wrap= {
  init: function() { 
  this.appendDummyInput()
      .appendField("文本是否自动换行")
      .appendField(new Blockly.FieldDropdown([
	  ["换行","normal"],
	  ["不换行","nowrap"],
	  ["保留空白不换行","pre"],
	  ["保留空白换行","pre-wrap"],
    ["换行并删除行尾空格","pre-line"],
    ["全部保留换行","break-spaces"]
	  ]), "css_malke_text_wrap_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素中的文本是否自动换行。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_wrap.html");
  }
};
//text_align
Blockly.Blocks.css_malke_text_align= {
  init: function() { 
  this.appendDummyInput()
      .appendField("文本对齐方式")
      .appendField(new Blockly.FieldDropdown([
	  ["左对齐","left"],
	  ["右对齐","right"],
	  ["中间对齐","center"],
	  ["两端对齐","justify"]
	  ]), "css_malke_text_align_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素中的文本对齐方式。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_align.html");
  }
};
//decoration_line
Blockly.Blocks.css_malke_text_decoration_line= {
  init: function() { 
  this.appendDummyInput()
      .appendField("文本修饰")
      .appendField(new Blockly.FieldDropdown([
	  ["无修饰","none"],
	  ["文本下的一条线","underline"],
	  ["文本上的一条线","overline"],
	  ["穿过文本下的一条线","line-through"]
	  ]), "css_malke_text_decoration_line_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对元素中的文本文本进行修饰。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_decoration_line.html");
  }
};

//text_indent
Blockly.Blocks['css_malke_text_indent'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("首行缩进")
    .appendField(new Blockly.FieldTextInput("50px"), "css_malke_text_indent_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("对元素中的文本首行缩进。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_indent.html");
  },
};
//text_shadow
Blockly.Blocks.css_malke_text_shadow= {
  init: function() { 
  this.appendDummyInput()
      .appendField("文本阴影")
      .appendField("水平阴影")
      .appendField(new Blockly.FieldTextInput("5px"), "css_malke_text_shadow_video_h")
      .appendField("垂直阴影")
      .appendField(new Blockly.FieldTextInput("5px"), "css_malke_text_shadow_video_v")
      .appendField("模糊的距离")
      .appendField(new Blockly.FieldTextInput("0px"), "css_malke_text_shadow_video_b")
      .appendField("阴影的颜色")
      .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_text_shadow_video_c");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对元素中的文本添加阴影效果。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_shadow.html");
  }
};

//text_transform
Blockly.Blocks.css_malke_text_transform= {
  init: function() { 
  this.appendDummyInput()
      .appendField("元素中的字母")
      .appendField(new Blockly.FieldDropdown([
	  ["无修饰","none"],
	  ["大写字母开头","capitalize"],
	  ["仅有大写字母","uppercase"],
	  ["仅有小写字母","lowercase"]
	  ]), "css_malke_text_transform_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对元素中的文本字母英文大小写效果。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_text_transform.html");
  }
};

//font_family
Blockly.Blocks['css_malke_font_family'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("字体")
    .appendField(new Blockly.FieldTextInput("微软雅黑"), "css_malke_font_family_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("对元素中的文本字体进行设置。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_font_family.html");
  },
};

//font_style
Blockly.Blocks.css_malke_font_style= {
  init: function() { 
  this.appendDummyInput()
      .appendField("斜体")
      .appendField(new Blockly.FieldDropdown([
	  ["正常","none"],
	  ["斜体","italic"]
	  ]), "css_malke_font_style_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对元素中的文本字体斜体设置。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_font_style.html");
  }
};

//font_size
Blockly.Blocks['css_malke_font_size'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("字体大小")
    .appendField(new Blockly.FieldTextInput("16pt"), "css_malke_font_size_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("对元素中的文本大小设置。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_font_size.html");
  },
};

//font_weight
Blockly.Blocks.css_malke_font_weight= {
  init: function() { 
  this.appendDummyInput()
      .appendField("字体粗细")
      .appendField(new Blockly.FieldDropdown([
	  ["正常","normal"],
	  ["变细","lighter"],
    ["变粗","bold"]
	  ]), "css_malke_font_weight_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对元素中的文本字体粗体设置。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_font_style.html");
  }
};

//list_style_type
Blockly.Blocks.css_malke_list_style_type= {
  init: function() { 
  this.appendDummyInput()
      .appendField("列表标记")
      .appendField(new Blockly.FieldDropdown([
	  ["无标记","none"],
	  ["实心圆","disc"],
    ["空心圆","circle"],
    ["实心方块","square"],
    ["数字","decimal"],
    ["小写罗马数字","lower-roman"],
    ["大写罗马数字","upper-roman"],
    ["小写英文字母","lower-alpha"],
    ["大写英文字母","upper-alpha"],
    ["小写希腊字母","lower-greek"],
    ["小写拉丁字母","lower-latin"],
    ["大写拉丁字母","upper-latin"],
    ["传统的希伯来编号","hebrew"],
    ["传统的亚美尼亚编号","armenian"],
    ["传统的乔治亚编号","georgian"],
    ["简单的表意数字","cjk-ideographic"],
    ["日文平假名字符","hiragana"],
    ["日文片假名字符","katakana"],
    ["日文平假名序号","hiragana-iroha"],
    ["日文片假名序号","katakana-iroha"]
	  ]), "css_malke_list_style_type_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("对列表中的标记设置。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_list_style_type.html");
  }
};

//list_style_position
Blockly.Blocks.css_malke_list_style_position= {
  init: function() { 
  this.appendDummyInput()
      .appendField("列表标记位置")
      .appendField(new Blockly.FieldDropdown([
	  ["文本不根据标记对齐","outside"],
	  ["文本根据标记对齐","inside"]
	  ]), "css_malke_list_style_position_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("规定列表中列表项目标记的位置。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_list_style_position.html");
  }
};

//list_style_image
Blockly.Blocks['css_malke_list_style_image'] = {
  init: function() {
    this.setColour(90);
    this.appendValueInput('malke_list_image')
    .setCheck([String,Number])
    .appendField("列表标记的图像");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置列表中列表项标记的图像。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_list_style_image.html");
  },
};

//border_style
Blockly.Blocks.css_malke_border_style= {
  init: function() { 
  this.appendDummyInput()
      .appendField("边框 上")
      .appendField(new Blockly.FieldDropdown([
	  ["无边框","none"],
	  ["点状","dotted"],
    ["虚线","dashed"],
    ["实线","solid"],
    ["双线","double"],
    ["3D 凹槽","groove"],
    ["3D 垄状","ridge"],
    ["3D 嵌入","inset"],
    ["3D 外凸","outset"]
	  ]), "css_malke_border_style_up")
      .appendField("下")
      .appendField(new Blockly.FieldDropdown([
	  ["无边框","none"],
	  ["点状","dotted"],
    ["虚线","dashed"],
    ["实线","solid"],
    ["双线","double"],
    ["3D 凹槽","groove"],
    ["3D 垄状","ridge"],
    ["3D 嵌入","inset"],
    ["3D 外凸","outset"]
	  ]), "css_malke_border_style_down")
      .appendField("左")
      .appendField(new Blockly.FieldDropdown([
	  ["无边框","none"],
	  ["点状","dotted"],
    ["虚线","dashed"],
    ["实线","solid"],
    ["双线","double"],
    ["3D 凹槽","groove"],
    ["3D 垄状","ridge"],
    ["3D 嵌入","inset"],
    ["3D 外凸","outset"]
	  ]), "css_malke_border_style_left")
      .appendField("右")
      .appendField(new Blockly.FieldDropdown([
	  ["无边框","none"],
	  ["点状","dotted"],
    ["虚线","dashed"],
    ["实线","solid"],
    ["双线","double"],
    ["3D 凹槽","groove"],
    ["3D 垄状","ridge"],
    ["3D 嵌入","inset"],
    ["3D 外凸","outset"]
	  ]), "css_malke_border_style_right");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("为元素设置边框样式。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_border_style.html");
  }
};

//border_width
Blockly.Blocks['css_malke_border_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("边框宽度 上")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_width_up")
    .appendField("下")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_width_down")
    .appendField("左")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_width_left")
    .appendField("右")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_width_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置边框宽度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_border_width.html");
  },
};
//border_color
Blockly.Blocks['css_malke_border_color'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("边框颜色 上")
    .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_border_color_up")
    .appendField("下")
    .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_border_color_down")
    .appendField("左")
    .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_border_color_left")
    .appendField("右")
    .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_border_color_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置边框颜色。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_border_color.html");
  },
};

//border_radius
Blockly.Blocks['css_malke_border_radius'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("边框圆角 左上角")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_radius_up")
    .appendField("右上角")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_radius_down")
    .appendField("左下角")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_radius_left")
    .appendField("右下角")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_border_radius_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置边框圆角弧度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_border_radius.html");
  },
};
//margin
Blockly.Blocks['css_malke_margin'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("边距 上")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_margin_up")
    .appendField("下")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_margin_down")
    .appendField("左")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_margin_left")
    .appendField("右")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_margin_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素间的边距。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_margin.html");
  },
};
//padding
Blockly.Blocks['css_malke_padding'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("内边距 上")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_padding_up")
    .appendField("下")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_padding_down")
    .appendField("左")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_padding_left")
    .appendField("右")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_padding_right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素的内边距。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_padding.html");
  },
};
//display
Blockly.Blocks.css_malke_display= {
  init: function() { 
  this.appendDummyInput()
      .appendField("显示")
      .appendField(new Blockly.FieldDropdown([
	  ["显示为块","block"],
	  ["不显示","none"],
    ["内联元素","inline"],
    ["弹性容器","flex"],
    ["内联块","inline-block"],
    ["内联表格","inline-table"],
    ["列表","list-item"],
    ["表格","table"],
    ["网格","grid"]
	  ]), "css_malke_display_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素的显示方式。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_display.html");
  }
};

//visibility
Blockly.Blocks.css_malke_visibility= {
  init: function() { 
  this.appendDummyInput()
      .appendField("可见性")
      .appendField(new Blockly.FieldDropdown([
	  ["不可见","hidden"],
	  ["可见","visible"]
	  ]), "css_malke_visibility_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素的可见性。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_visibility.html");
  }
};
//float
Blockly.Blocks.css_malke_float= {
  init: function() { 
  this.appendDummyInput()
      .appendField("浮动")
      .appendField(new Blockly.FieldDropdown([
    ["不浮动","none"],  
	  ["向左浮动","left"],
	  ["向右浮动","right"]
	  ]), "css_malke_float_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素内的浮动性。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_float.html");
  }
};
//clear
Blockly.Blocks.css_malke_clear= {
  init: function() { 
  this.appendDummyInput()
      .appendField("不许浮动")
      .appendField(new Blockly.FieldDropdown([
    ["允许浮动","none"],  
	  ["左侧不允许浮动","left"],
	  ["右侧不允许浮动","right"],
    ["左右不允许浮动","both"]
	  ]), "css_malke_clear_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素内的清除浮动。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_clear.html");
  }
};

//opacity
Blockly.Blocks['css_malke_opacity'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("透明度(1-0.0)")
    .appendField(new Blockly.FieldTextInput("0.8"), "css_malke_opacity_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素的透明度。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_opacity.html");
  },
};
//box_shadow
Blockly.Blocks.css_malke_box_shadow= {
  init: function() { 
  this.appendDummyInput()
      .appendField("添加阴影")
      .appendField("水平阴影")
      .appendField(new Blockly.FieldTextInput("10px"), "css_malke_box_shadow_video_h")
      .appendField("垂直阴影")
      .appendField(new Blockly.FieldTextInput("10px"), "css_malke_box_shadow_video_v")
      .appendField("模糊的距离")
      .appendField(new Blockly.FieldTextInput("5px"), "css_malke_box_shadow_video_b")
      .appendField("阴影的颜色")
      .appendField(new Blockly.FieldColour("#888888"), "css_malke_box_shadow_video_c");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置元素的添加阴影效果。");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_box_shadow.html");
  }
};

//transform
Blockly.Blocks['css_malke_transform'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("2d3d变换")
	this.appendStatementInput("css_malke_transform_value")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置元素的2d3d形状变换。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_transform.html");
  },
};

//translate
Blockly.Blocks['css_malke_translate'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("2d位置变化 x轴")
    .appendField(new Blockly.FieldTextInput("50px"), "css_malke_translate_x")
	.appendField("y轴")
	.appendField(new Blockly.FieldTextInput("50px"), "css_malke_translate_y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素内的位置");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};

//translate
Blockly.Blocks['css_malke_scale'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("2d缩放 宽度(倍)")
    .appendField(new Blockly.FieldTextInput("2"), "css_malke_scale_w")
	.appendField("高度")
	.appendField(new Blockly.FieldTextInput("3"), "css_malke_scale_h");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("放大缩小元素");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};

//skew
Blockly.Blocks['css_malke_skew'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("2d旋转 x轴")
    .appendField(new Blockly.FieldTextInput("20"), "css_malke_skew_x")
	.appendField("y轴")
	.appendField(new Blockly.FieldTextInput("20"), "css_malke_skew_y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("旋转元素的角度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};
//translate3d
Blockly.Blocks['css_malke_translate3d'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("3d位置变化 x轴")
    .appendField(new Blockly.FieldTextInput("20px"), "css_malke_translate3d_x")
	.appendField("y轴")
	.appendField(new Blockly.FieldTextInput("20px"), "css_malke_translate3d_y")
	.appendField("z轴")
	.appendField(new Blockly.FieldTextInput("0px"), "css_malke_translate3d_z");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("改变元素内的位置");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};
//translate3d
Blockly.Blocks['css_malke_scale3d'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("3d缩放 x轴(倍)")
    .appendField(new Blockly.FieldTextInput("2"), "css_malke_scale3d_x")
	.appendField("y轴")
	.appendField(new Blockly.FieldTextInput("2"), "css_malke_scale3d_y")
	.appendField("z轴")
	.appendField(new Blockly.FieldTextInput("1"), "css_malke_scale3d_z");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("放大缩小元素");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};
//rotate3d
Blockly.Blocks['css_malke_rotate3d'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("3d旋转 x轴")
    .appendField(new Blockly.FieldTextInput("20"), "css_malke_rotate3d_x")
	.appendField("y轴")
	.appendField(new Blockly.FieldTextInput("20"), "css_malke_rotate3d_y")
	.appendField("z轴")
	.appendField(new Blockly.FieldTextInput("20"), "css_malke_rotate3d_z");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("旋转元素的角度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_translate.html");
  },
    onchange: function(e) {
    seterror(this,'css_malke_transform','此模块必须放在2d3d变换');
  }
};
//transform
Blockly.Blocks['css_malke_transition'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("过度动画")
	this.appendStatementInput("css_malke_transition_value")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("逐步改变元素的样式。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_transition.html");
  },
  onchange: function(e) {
  seterror(this,'make_class','此模块必须放在样式模块');
  }
};

//transition_value
Blockly.Blocks['css_transition_value'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("过度动画属性 ")
    .appendField(new Blockly.FieldDropdown([
      ["宽度","width"],  
      ["高度","height"],
      ["顶端距离","top"],
      ["左边距离","left"],
      ["透明度","opacity"], 
      ["背景颜色","background-color"],
      ["颜色","color"],
      ["变换","transform"],
      ["字体大小","font-size"],
      ["外边距","margin"],
      ["内边距","padding"],
      ["阴影","box-shadow"],
      ["图像效果","filter"],
      ["边框的宽度","border-width"],
      ["边框的颜色","border-color"]
      ]), "css_transition_value_value")
      .appendField("动画时间")
      .appendField(new Blockly.FieldTextInput("0.5"), "css_transition_value_time")
      .appendField("过度动画变换")
      .appendField(new Blockly.FieldDropdown([
        ["匀速","linear"],
        ["逐渐变快","ease"],
        ["慢速开始","ease-in"],
        ["慢速结束","ease-out"],     
        ["加速开始加速结束","ease-in-out"]
      ]), "css_transition_value_effect")
      ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("逐步改变元素的样式。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_transition.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_transition','此模块必须放在过度动画模块中');
    }
};
//animation_name
Blockly.Blocks['css_make_animation_name'] = {
  init: function() {
    this.setColour(90);
    this.appendValueInput('css_make_animation_name_value')
    .setCheck([String,Number])
    .appendField("动画名称");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("指定元素的动画名称。");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
  onchange: function(e) {
    seterror(this,'make_class','此模块必须放在样式模块');
    }
};
//animation_duration
Blockly.Blocks['css_make_animation_duration'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("动画周期时间")
    .appendField(new Blockly.FieldTextInput("2"), "css_make_animation_duration_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("从0%到100%之间动画的播放时间");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
    onchange: function(e) {
    seterror(this,'make_class','此模块必须放在样式模块');
  }
};

//animation_timing_function
Blockly.Blocks['css_make_animation_timing_function'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("动画变换 ")
    .appendField(new Blockly.FieldDropdown([
      ["匀速","linear"],
      ["慢速开始","ease"],
      ["慢速开始","ease-in"],
      ["慢速结束","ease-out"],
      ["慢速开始慢速结束","ease-in-out"]
      ]), "css_make_animation_timing_function_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置动画变化效果");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
  onchange: function(e) {
    seterror(this,'make_class','此模块必须放在样式模块');
    }
};

Blockly.Blocks.css_make_animation_iteration_count= {
  init: function() { 
  this.appendDummyInput()
      .appendField("动画播放次数")
      .appendField(new Blockly.FieldTextInput("1"), "css_make_animation_iteration_count_value")
      .appendField("循环播放")
      .appendField(new Blockly.FieldCheckbox("false"), "css_make_animation_iteration_count_ft");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置动画播放次数");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
  onchange: function(e) {
    seterror(this,'make_class','此模块必须放在样式模块');
    }
};
Blockly.Blocks.css_make_animation_delay= {
  init: function() { 
  this.appendDummyInput()
      .appendField("动画延时播放")
      .appendField(new Blockly.FieldTextInput("1"), "css_make_animation_delay_value");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置动画延时播放时间");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
  onchange: function(e) {
    seterror(this,'make_class','此模块必须放在样式模块');
    }
};

// animation
Blockly.Blocks.css_make_animation= {
  init: function() { 
  this.appendValueInput('css_make_animation_value')
    .setCheck([String,Number])
    .appendField("动画名称");
  this.appendStatementInput("css_make_animation_value_1")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("创建动画名称");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },
  onchange: function(e) {
    seterror(this,'mtn_make_style','此模块必须放在全部样式中');
  }
};







Blockly.Blocks.css_make_animation_key = {
   init: function() {
    this.setColour(90);
    this.appendDummyInput("")
    .appendField("添加关键帧")
    .appendField(new Blockly.FieldTextInput("0"), "css_make_animation_key_value")
    .appendField("%(0-100之间，可以有两位小数)");
    this.appendStatementInput("css_make_animation_key_s")
    .setCheck(null);
    this.itemCount_ = 0;
    this.addkey_class_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['css_add_keyframe']));
    this.setTooltip("添加动画的关键帧");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_animation_name.html");
  },

   mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },

   domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.addkey_class_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock =
    Blockly.Block.obtain(workspace, 'css_animation_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'css_add_keyframe');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.addkey_class_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    //while (itemBlock) {
    //  var input = this.getInput('ADD' + i);
    //  itemBlock.valueConnection_ = input && input.connection.targetConnection;
    //  i++;
    //  itemBlock = itemBlock.nextConnection &&
    //  itemBlock.nextConnection.targetBlock();
   // }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  addkey_class_: function() {
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        this.removeInput('css_make_keyframes_value_' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
     // this.appendDummyInput('EMPTY')
     // .appendField("无需要连接的字符串");
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        this.appendDummyInput('ADD' + i)
        .appendField("关键帧")
        .appendField(new Blockly.FieldTextInput("0"), "css_make_add_keyframes_value_" + i)
        .appendField("%");
      // 添加对应的操作输入
      this.appendStatementInput('css_make_keyframes_value_' + i)
        .setCheck(null);
        
      }
    }
  },
  onchange: function(e) {
    seterror(this,'css_make_animation','此模块必须放在全部样式中');
  }
};


Blockly.Blocks['css_add_keyframe'] = {
  init: function() {
    this.setColour(90); // 与动画积木相同的颜色保持视觉一致性
    this.appendDummyInput()
      .appendField("添加关键帧");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("点击以向动画添加一个新的关键帧");
    this.contextMenu = false; // 禁止右键菜单
  }
};

Blockly.Blocks['css_animation_container'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("动画关键帧");
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
 };