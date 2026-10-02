'use strict';

goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');


//column_count
Blockly.Blocks['css_malke_column_count'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("要分割的列数")
    .appendField(new Blockly.FieldTextInput("2"), "css_malke_column_count_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("指定某个元素应分为的列数");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_count.html");
  },
};
//column_width
Blockly.Blocks['css_malke_column_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("多列按宽度分")
    .appendField(new Blockly.FieldTextInput("200px"), "css_malke_column_width_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("指定某个元素分列按宽度分");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_width.html");
  },
};
//column_gap
Blockly.Blocks['css_malke_column_gap'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("列与列间的间隙")
    .appendField(new Blockly.FieldTextInput("5px"), "css_malke_column_gap_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置分裂的间距");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_gap.html");
  },
};

//column_rule_style
Blockly.Blocks.css_malke_column_rule_style= {
  init: function() { 
  this.appendDummyInput()
      .appendField("列边框样式")
      .appendField(new Blockly.FieldDropdown([
	  ["无","none"],
	  ["点状","dotted"],
	  ["虚线","dashed"],
	  ["实线","solid"],
	  ["双线","double"]
	  ]), "css_malke_column_rule_style_value");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("设置分裂的添加边框的样式");
  this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_rule_style.html");
  }
};
//column_rule_width
Blockly.Blocks['css_malke_column_rule_width'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("多列边框宽度")
    .appendField(new Blockly.FieldTextInput("2px"), "css_malke_column_rule_width_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置多列边框宽度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_rule_style.html");
  },
};

  //column_rule_color
  Blockly.Blocks['css_malke_column_rule_color'] = {
    init: function() {
      this.setColour(90);
      this.appendDummyInput()
          .appendField('多列边框颜色')
          .appendField(new Blockly.FieldColour("#ff0000"), "css_malke_column_rule_color_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip("设置多列边框颜色");
      this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_column_rule_style.html");
    },
  };

  //filter
Blockly.Blocks['css_malke_filter'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图片滤镜")
	this.appendStatementInput("css_malke_filter_value")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置图片滤镜的样式");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
};
//filter_blur
Blockly.Blocks['css_malke_filter_blur'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("高斯模糊")
    .appendField(new Blockly.FieldTextInput("2"), "css_malke_filter_blur_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜高斯模糊");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_brightness
Blockly.Blocks['css_malke_filter_brightness'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图片变亮")
    .appendField(new Blockly.FieldTextInput("200"), "css_malke_filter_brightness_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜变亮");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_contrast
Blockly.Blocks['css_malke_filter_contrast'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图像的对比度")
    .appendField(new Blockly.FieldTextInput("200"), "css_malke_filter_contrast_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜对比度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_contrast
Blockly.Blocks['css_malke_filter_grayscale'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图像转换为灰度图像")
    .appendField(new Blockly.FieldTextInput("50"), "css_malke_filter_grayscale_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜灰度化");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_hue_rotate
Blockly.Blocks['css_malke_filter_hue_rotate'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("色相旋转")
    .appendField(new Blockly.FieldTextInput("50"), "css_malke_filter_hue_rotate_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜色相旋转");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_invert
Blockly.Blocks['css_malke_filter_invert'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("反转输入图像")
    .appendField(new Blockly.FieldTextInput("100"), "css_malke_filter_invert_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜反转输入图像");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_opacity
Blockly.Blocks['css_malke_filter_opacity'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("透明程度")
    .appendField(new Blockly.FieldTextInput("50"), "css_malke_filter_opacity_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜透明度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_saturate
Blockly.Blocks['css_malke_filter_saturate'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图像饱和度")
    .appendField(new Blockly.FieldTextInput("500"), "css_malke_filter_saturate_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜饱和度");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
//filter_saturate
Blockly.Blocks['css_malke_filter_sepia'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("图像转换为深褐色")
    .appendField(new Blockly.FieldTextInput("100"), "css_malke_filter_sepia_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("图片滤镜深褐色");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_filter.html");
  },
  onchange: function(e) {
    seterror(this,'css_malke_filter','此模块必须放在2d3d变换');
  }
};
// flex_direction
Blockly.Blocks['css_make_flex_direction'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子方向对齐")
      .appendField(new Blockly.FieldDropdown([
        ["正常", "row"],
        ["反向", "row-reverse"],
        ["竖直", "column"],
        ["竖直反向", "column-reverse"]
      ]), "css_make_flex_direction_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("弹性盒子方向对齐");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_make_flex_direction.html");
  },
};
// justify_content
Blockly.Blocks['css_malke_justify_content'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子主轴（横轴）方向对齐")
      .appendField(new Blockly.FieldDropdown([
        ["行首起始位置开始排列", "flex-start"],
        ["从行尾位置开始排列", "flex-end"],
        ["居中排列", "center"],
        ["均匀排列", "space-between"],
        ["均匀排列，每个元素之间有空白", "space-around"],
        ["从行首位置开始排列，每个元素之间有空白", "space-evenly"]
      ]), "css_malke_justify_content_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("弹性盒子主轴（x）方向对齐");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_justify_content.html");
  },
};
// align_items
Blockly.Blocks['css_malke_align_items'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子侧轴（纵轴）方向对齐")
      .appendField(new Blockly.FieldDropdown([
        ["元素被拉伸以适应容器", "stretch"],
        ["元素位于容器的中心", "center"],
        ["元素位于容器的开头", "flex-start"],
        ["元素位于容器的结尾", "flex-end"],
        ["元素位于容器的基线上", "baseline"]
      ]), "css_malke_align_items_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("弹性盒子侧轴（y轴）方向对齐");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_align_items.html");
  },
};
// flex_wrap
Blockly.Blocks['css_malke_flex_wrap'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子子元素超出父容器时是否换行")
      .appendField(new Blockly.FieldDropdown([
        ["不换行", "nowrap"],
        ["自动换到下一行", "wrap"],
        ["从结尾换行", "wrap-reverse"]
      ]), "css_malke_flex_wrap_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("使用弹性盒子需要先将显示设置位弹性盒子");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_flex_wrap.html");
  },
};
// align_content
Blockly.Blocks['css_malke_align_content'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子设置行对齐")
      .appendField(new Blockly.FieldDropdown([
        ["元素被拉伸以适应容器", "stretch"],
        ["元素位于容器的中心", "center"],
        ["元素位于容器的开头", "flex-start"],
        ["元素位于容器的结尾", "flex-end"],
        ["元素位于各行之间留有空白的容器内", "space-between"],
        ["元素位于各行之前、之间、之后都留有空白的容器内", "space-around"]
      ]), "css_malke_align_content_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("使用弹性盒子需要先将显示设置位弹性盒子");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_align_content.html");
  },
};
//flex_grow
Blockly.Blocks['css_malke_flex_grow'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("弹性盒子子元素宽度是其他子元素多少倍")
    .appendField(new Blockly.FieldTextInput("0"), "css_malke_flex_grow_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置或检索弹性盒子的扩展比率");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_flex_grow.html");
  },
};
//flex_order
Blockly.Blocks['css_malke_flex_order'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
    .appendField("弹性盒子的子元素排列顺序")
    .appendField(new Blockly.FieldTextInput("1"), "css_malke_flex_order_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("设置或检索弹性盒模型对象的子元素出现的順序");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_flex_order.html");
  },
};
// align_self
Blockly.Blocks['css_malke_align_self'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("弹性盒子子元素覆盖容器的样式")
      .appendField(new Blockly.FieldDropdown([
        ["默认值", "auto"],
        ["元素被拉伸以适应容器", "stretch"],
        ["元素位于容器的中心", "center"],
        ["元素位于容器的开头", "flex-start"],
        ["元素位于容器的结尾", "flex-end"],
        ["元素位于容器的基线上", "baseline"]
      ]), "css_malke_align_self_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("使用弹性盒子需要先将显示设置位弹性盒子");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_align_self.html");
  },
};
// cursor
Blockly.Blocks['css_malke_cursor'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("鼠标移动到元素上的形状")
      .appendField(new Blockly.FieldDropdown([
        ["默认值", "default"],
        ["十字线", "crosshair"],
        ["一只手", "pointer"],
        ["可被移动", "move"],
        ["向右（东）移动", "e-resize"],
        ["向右移动（北/东）", "ne-resize"],
        ["向右移动（南/东）", "se-resize"],
        ["向右移动（北/西）", "nw-resize"],
        ["向右移动（南/西）", "sw-resize"],
        ["向左（西）移动", "w-resize"],
        ["向左移动（北/西）", "nw-resize"],
        ["向左移动（南/西）", "sw-resize"],
        ["向上（北）移动", "n-resize"],
       ["向上移动（北/东）", "ne-resize"],
       ["向上移动（北/西）", "nw-resize"],
       ["向下（南）移动", "s-resize"],
       ["向下移动（南/东）", "se-resize"],
       ["向下移动（南/西）", "sw-resize"],
       ["不可被移动", "no-drop"],
       ["不可被选中", "not-allowed"],
       ["指示文本","text"],
       ["程序正忙","wait"],
       ["帮助","help"]
      ]), "css_malke_cursor_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("鼠标移动到元素上的形状");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_cursor.html");
  },
};
// resize
Blockly.Blocks['css_malke_resize'] = {
  init: function() {
    this.setColour(90);
    this.appendDummyInput()
      .appendField("允许户调整大小")
      .appendField(new Blockly.FieldDropdown([
        ["用户无法调整尺寸", "none"],
        ["户可调整高度和宽度", "both"],
        ["用户可调整宽度", "horizontal"],
        ["用户可调整高度", "vertical"]
      ]), "css_malke_resize_value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    this.setTooltip("元素是否是由用户调整大小的");
    this.setHelpUrl("/html/help/build/html/uihelp/uimake/css_malke_resize.html");
  },
};
//diy_css_class
Blockly.Blocks.make_diy_css_class= {
  init: function() {
    this.appendValueInput('make_diy_css_class_value')
    .setCheck([String,Number])
    .appendField("自定css样式"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("自定css样式");
    this.setHelpUrl(""); 
  }
};

//添加新字体
Blockly.Blocks.make_add_font_class= {
  init: function() {
    this.appendValueInput('make_add_font_class_value1')
    .setCheck([String,Number])
    .appendField("添加字体名");
    this.appendValueInput('make_add_font_class_value2')
    .setCheck([String,Number])
    .appendField("字体文件路径");
    this.appendDummyInput()
    .appendField("文件类型")
    .appendField(new Blockly.FieldDropdown([
        ["ttf类型", "truetype"],
        ["otf类型", "opentype"],
        ["woff类型", "woff"],
        ["woff2类型", "woff2"],
        ["svg类型", "svg"],
        ["eot类型", "embedded-opentype"]
      ]), "make_add_font_class_value3");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("添加新字体");
    this.setHelpUrl("");
  },
    onchange: function(e) {
    seterror(this,'mtn_make_fonts','此模块必须放在自定义字体模块中');
  }
};