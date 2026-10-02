'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');



//css
Blockly.Arduino.mtn_make_style = function () {
  var statements_value_css = Blockly.Arduino.statementToCode(this, 'value_css');
  Blockly.Arduino.definitions_['html_style'] = '<style>\n'+statements_value_css+'</style>\n';
    var code = '';
    return code;
  };
  //body
Blockly.Arduino.mtn_make_body = function () {
  var body_value_css = Blockly.Arduino.statementToCode(this, 'body_value_css');
    var code = 'html, body{\n'+body_value_css+'\n}\n';
    return code;
  };
//class
  Blockly.Arduino.make_class = function() {
    var classNameCode = Blockly.Arduino.valueToCode(this, 'make_class_name', Blockly.Arduino.ORDER_ATOMIC);
    var statements_class_value = Blockly.Arduino.statementToCode(this, 'class_value');
    var code = '.'+classNameCode+'{\n'+statements_class_value+'}\n';
    return code;
  };
//hover
Blockly.Arduino.make_hover = function() {
  var make_hover_name = Blockly.Arduino.valueToCode(this, 'make_hover_name', Blockly.Arduino.ORDER_ATOMIC);
  var hover_value = Blockly.Arduino.statementToCode(this, 'hover_value');
  var code = '.'+make_hover_name+':hover{\n'+hover_value+'}\n';
  return code;
};

  //自定义字体
  Blockly.Arduino.mtn_make_fonts = function () {
    var fonts_value_css = Blockly.Arduino.statementToCode(this, 'fonts_value_css');
      var code = '@font-face{\n'+fonts_value_css+'\n}\n';
      return code;
    };
  //background-color
  Blockly.Arduino.css_malke_bgcolor = function() {
    var css_malke_bgcolor_value = this.getFieldValue('css_malke_bgcolor_value');
    var code ='background-color:'+css_malke_bgcolor_value+';\n';
    return code;
  };
  //背景颜色
  Blockly.Arduino['css_malke_gradient_background'] = function() {
    var gradientType = this.getFieldValue('GRADIENT_TYPE');
    var startColor = this.getFieldValue('START_COLOR');
    var endColor = this.getFieldValue('END_COLOR');
    var angle = this.getFieldValue('ANGLE');
  
    var code;
    if (gradientType === 'linear') {
      code = `background: linear-gradient(${angle}deg, ${startColor}, ${endColor});\n`;
    } else {
      code = `background: radial-gradient(${startColor}, ${endColor});\n`;
    }
  
    return code;
  };
  //渐变透明度
  Blockly.Arduino['css_malke_gradient_opacity'] = function() {
    var startOpacity = this.getFieldValue('START_OPACITY');
    var endOpacity = this.getFieldValue('END_OPACITY');
    var direction = this.getFieldValue('DIRECTION');
  
    // 使用 RGBA 颜色模拟透明度渐变
    var startRgba = `rgba(255, 255, 255, ${startOpacity})`;
    var endRgba = `rgba(255, 255, 255, ${endOpacity})`;
  
    var code = `background: linear-gradient(${direction}, ${startRgba}, ${endRgba});\n`;
    return code;
  };
  Blockly.Arduino['css_malke_gradient_combined'] = function() {
    var gradientType = this.getFieldValue('GRADIENT_TYPE');
    var startColor = this.getFieldValue('START_COLOR');
    var endColor = this.getFieldValue('END_COLOR');
    var angle = this.getFieldValue('ANGLE');
    var enableOpacity = this.getFieldValue('ENABLE_OPACITY') === 'TRUE';
    var startOpacity = this.getFieldValue('START_OPACITY');
    var endOpacity = this.getFieldValue('END_OPACITY');
    var direction = this.getFieldValue('DIRECTION');
  
    var code;
  
    if (enableOpacity) {
      // 启用透明度渐变
      var startRgba = `rgba(${hexToRgb(startColor)}, ${startOpacity})`;
      var endRgba = `rgba(${hexToRgb(endColor)}, ${endOpacity})`;
      code = `background: linear-gradient(${direction}, ${startRgba}, ${endRgba});\n`;
    } else {
      // 仅启用颜色渐变
      if (gradientType === 'linear') {
        code = `background: linear-gradient(${angle}deg, ${startColor}, ${endColor});\n`;
      } else {
        code = `background: radial-gradient(${startColor}, ${endColor});\n`;
      }
    }
  
    return code;
  };
  
  // 辅助函数：将十六进制颜色转换为 RGB
  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
    //width
    Blockly.Arduino.css_malke_width = function() {
      var css_malke_width_value = this.getFieldValue('css_malke_width_value');
      var code ='width:'+css_malke_width_value+';\n';
      return code;
    };
    //max_width
    Blockly.Arduino.css_malke_max_width = function() {
      var css_malke_max_width_value = this.getFieldValue('css_malke_max_width_value');
      var code ='max-width:'+css_malke_max_width_value+';\n';
      return code;
    };    
    //min_width
    Blockly.Arduino.css_malke_min_width = function() {
      var css_malke_max_width_value = this.getFieldValue('css_malke_min_width_value');
      var code ='min-width:'+css_malke_max_width_value+';\n';
      return code;
    };        
    //height
    Blockly.Arduino.css_malke_height = function() {
      var css_malke_height_value = this.getFieldValue('css_malke_height_value');
      var code ='height:'+css_malke_height_value+';\n';
      return code;
    };
    //max_height
    Blockly.Arduino.css_malke_max_height = function() {
      var css_malke_max_height_value = this.getFieldValue('css_malke_max_height_value');
      var code ='max-height:'+css_malke_max_height_value+';\n';
      return code;  
    };
   //min_height
    Blockly.Arduino.css_malke_min_height = function() {
      var css_malke_min_height_value = this.getFieldValue('css_malke_min_height_value');
      var code ='min-height:'+css_malke_min_height_value+';\n';
      return code;
    };        
    //position
    Blockly.Arduino.css_make_position = function() {
      var css_make_position_value = this.getFieldValue('css_make_position_value');
      var code = 'position:'+css_make_position_value+';\n';
      return code;
    };

   //top
    Blockly.Arduino.css_malke_top = function() {
      var css_malke_top_value = this.getFieldValue('css_malke_top_value');
      var code ='top:'+css_malke_top_value+';\n';
      return code;
    };
    //left
    Blockly.Arduino.css_malke_left = function() {
      var css_malke_left_value = this.getFieldValue('css_malke_left_value');
      var code ='left:'+css_malke_left_value+';\n';
      return code;
    };
    //z-index
    Blockly.Arduino.css_malke_z_index = function() {
      var css_malke_z_index_value = this.getFieldValue('css_malke_z_index_value');
      var code ='z-index:'+css_malke_z_index_value+';\n';
      return code;
    };
    //overflow
    Blockly.Arduino.css_malke_overflow = function() {
      var css_malke_overflow_value = this.getFieldValue('css_malke_overflow_value');
      var code = 'overflow:'+css_malke_overflow_value+';\n';
      return code;
    };
    //bgimage
    Blockly.Arduino.css_malke_bgimage = function() {
      var css_malke_bgimage_value = Blockly.Arduino.valueToCode(this, 'make_class_bgimage', Blockly.Arduino.ORDER_ATOMIC);
      var code ='background-image:url('+css_malke_bgimage_value+');\n';
      return code;
    };
    //bgattachment
    Blockly.Arduino.css_malke_bgattachment = function() {
      var css_malke_bgattachment_value = this.getFieldValue('css_malke_bgattachment_value');
      var code = 'background-attachment:'+css_malke_bgattachment_value+';\n';
      return code;
    };
	//bgrepeat
    Blockly.Arduino.css_malke_bgrepeat = function() {
      var css_malke_bgrepeat_value = this.getFieldValue('css_malke_bgrepeat_value');
      var code = 'background-repeat:'+css_malke_bgrepeat_value+';\n';
      return code;
    };
	
	//width
    Blockly.Arduino.css_malke_bgsize = function() {
      var css_malke_bgwidth_value = this.getFieldValue('css_malke_bgwidth_value');
      var css_malke_bgheight_value = this.getFieldValue('css_malke_bgheight_value');	  
	  var code ='background-size:'+css_malke_bgwidth_value+' '+css_malke_bgheight_value+';\n';
      return code;
    };
	
	//bgrepeat
    Blockly.Arduino.css_malke_bgposition = function() {
      var css_malke_bgposition_value = this.getFieldValue('css_malke_bgposition_value');
      var code = 'background-position:'+css_malke_bgposition_value+';\n';
      return code;
    };
	//color
    Blockly.Arduino.css_malke_color = function() {
    var css_malke_color_value = this.getFieldValue('css_malke_color_value');
    var code ='color:'+css_malke_color_value+';\n';
    return code;
  };
  	//bgrepeat
	Blockly.Arduino.css_malke_direction = function() {
      var css_malke_direction_value = this.getFieldValue('css_malke_direction_value');
      var code = 'direction:'+css_malke_direction_value+';\n';
      return code;
    };
	
    //letter_spacing
    Blockly.Arduino.css_malke_letter_spacing = function() {
      var css_malke_letter_spacing_value = this.getFieldValue('css_malke_letter_spacing_value');
      var code ='letter-spacing:'+css_malke_letter_spacing_value+';\n';
      return code;
    };	
	//line_height
    Blockly.Arduino.css_malke_line_height = function() {
      var css_malke_line_height_value = this.getFieldValue('css_malke_line_height_value');
      var code ='line-height:'+css_malke_line_height_value+';\n';
      return code;
    };
    //text_wrap
    Blockly.Arduino.css_malke_text_wrap = function() {
      var css_malke_text_wrap_value = this.getFieldValue('css_malke_text_wrap_value');
      var code ='white-space:'+css_malke_text_wrap_value+';\n';
      return code;
    };
    //align
    Blockly.Arduino.css_malke_text_align = function() {
      var css_malke_text_align_value = this.getFieldValue('css_malke_text_align_value');
      var code ='text-align:'+css_malke_text_align_value+';\n';
      return code;
    };
	//decoration_line
    Blockly.Arduino.css_malke_text_decoration_line = function() {
      var css_malke_text_decoration_line_value = this.getFieldValue('css_malke_text_decoration_line_value');
      var code ='text-decoration:'+css_malke_text_decoration_line_value+';\n';
      return code;
    };
	//text_indent
  Blockly.Arduino.css_malke_text_indent = function() {
    var css_malke_text_indent_value = this.getFieldValue('css_malke_text_indent_value');
    var code ='text-indent:'+css_malke_text_indent_value+';\n';
    return code;
  };
  //text_shadow
  Blockly.Arduino.css_malke_text_shadow = function() {
    var text_css_malke_text_shadow_video_h = this.getFieldValue('css_malke_text_shadow_video_h');
    var text_css_malke_text_shadow_video_v = this.getFieldValue('css_malke_text_shadow_video_v');
    var text_css_malke_text_shadow_video_b = this.getFieldValue('css_malke_text_shadow_video_b');
    var colour_css_malke_text_shadow_video_c = this.getFieldValue('css_malke_text_shadow_video_c');
    var code = 'text-shadow:'+text_css_malke_text_shadow_video_h
              +' '+text_css_malke_text_shadow_video_v
              +' '+text_css_malke_text_shadow_video_b
              +' '+colour_css_malke_text_shadow_video_c+';\n';
    return code;
  };
  	//text_transform
    Blockly.Arduino.css_malke_text_transform = function() {
      var css_malke_text_transform_value = this.getFieldValue('css_malke_text_transform_value');
      var code ='text-transform:'+css_malke_text_transform_value+';\n';
      return code;
    };

  //font_family
  Blockly.Arduino.css_malke_font_family = function() {
    var css_malke_font_family_value = this.getFieldValue('css_malke_font_family_value');
    var code ='font-family:"'+css_malke_font_family_value+'";\n';
    return code;
  };	

 //font_style
  Blockly.Arduino.css_malke_font_style = function() {
     var css_malke_font_style_value = this.getFieldValue('css_malke_font_style_value');
    var code ='font-style:'+css_malke_font_style_value+';\n';
    return code;
};

  //font_size
  Blockly.Arduino.css_malke_font_size = function() {
    var css_malke_font_size_value = this.getFieldValue('css_malke_font_size_value');
    var code ='font-size:'+css_malke_font_size_value+';\n';
    return code;
  };	

   //font_weight
   Blockly.Arduino.css_malke_font_weight = function() {
    var css_malke_font_weight_value = this.getFieldValue('css_malke_font_weight_value');
   var code ='font-weight:'+css_malke_font_weight_value+';\n';
   return code;
};
   //list_style_type
   Blockly.Arduino.css_malke_list_style_type = function() {
    var css_malke_list_style_type_value = this.getFieldValue('css_malke_list_style_type_value');
   var code ='list-style-type:'+css_malke_list_style_type_value+';\n';
   return code;
};
  //list_style_position
   Blockly.Arduino.css_malke_list_style_position = function() {
    var css_malke_list_style_position_value = this.getFieldValue('css_malke_list_style_position_value');
   var code ='list-style-position:'+css_malke_list_style_position_value+';\n';
   return code;
};

  //list_style_image
  Blockly.Arduino.css_malke_list_style_image = function() {
    var malke_list_image = Blockly.Arduino.valueToCode(this, 'malke_list_image', Blockly.Arduino.ORDER_ATOMIC);    
    var code ='list-style-image:url('+malke_list_image+');\n';
    return code;
  };
  //border_style
  Blockly.Arduino.css_malke_border_style = function() {
    var css_malke_border_style_up = this.getFieldValue('css_malke_border_style_up');
    var css_malke_border_style_down = this.getFieldValue('css_malke_border_style_down');
    var css_malke_border_style_left = this.getFieldValue('css_malke_border_style_left');
    var css_malke_border_style_right = this.getFieldValue('css_malke_border_style_right');
    var code ='border-style:'+css_malke_border_style_up+' '+css_malke_border_style_right+' '+css_malke_border_style_down+' '+css_malke_border_style_left+';\n';
    return code;
  };
    //border_width
    Blockly.Arduino.css_malke_border_width = function() {
      var css_malke_border_width_up = this.getFieldValue('css_malke_border_width_up');
      var css_malke_border_width_down = this.getFieldValue('css_malke_border_width_down');
      var css_malke_border_width_left = this.getFieldValue('css_malke_border_width_left');
      var css_malke_border_width_right = this.getFieldValue('css_malke_border_width_right');
      var code ='border-width:'+css_malke_border_width_up+' '+css_malke_border_width_right+' '+css_malke_border_width_down+' '+css_malke_border_width_left+';\n';
      return code;
    };
  //border_color
  Blockly.Arduino.css_malke_border_color = function() {
      var css_malke_border_color_up = this.getFieldValue('css_malke_border_color_up');
      var css_malke_border_color_down = this.getFieldValue('css_malke_border_color_down');
      var css_malke_border_color_left = this.getFieldValue('css_malke_border_color_left');
      var css_malke_border_color_right = this.getFieldValue('css_malke_border_color_right');
      var code ='border-color:'+css_malke_border_color_up+' '+css_malke_border_color_right+' '+css_malke_border_color_down+' '+css_malke_border_color_left+';\n';
      return code;
  };
  //border_radius
  Blockly.Arduino.css_malke_border_radius = function() {
    var css_malke_border_radius_up = this.getFieldValue('css_malke_border_radius_up');
    var css_malke_border_radius_down = this.getFieldValue('css_malke_border_radius_down');
    var css_malke_border_radius_left = this.getFieldValue('css_malke_border_radius_left');
    var css_malke_border_radius_right = this.getFieldValue('css_malke_border_radius_right');
    var code ='border-radius:'+css_malke_border_radius_up+' '+css_malke_border_radius_down+' '+css_malke_border_radius_right+' '+css_malke_border_radius_left+';\n';
    return code;
  };
  //margin
  Blockly.Arduino.css_malke_margin = function() {
    var css_malke_margin_up = this.getFieldValue('css_malke_margin_up');
    var css_malke_margin_down = this.getFieldValue('css_malke_margin_down');
    var css_malke_margin_left = this.getFieldValue('css_malke_margin_left');
    var css_malke_margin_right = this.getFieldValue('css_malke_margin_right');
    var code ='margin:'+css_malke_margin_up+' '+css_malke_margin_right+' '+css_malke_margin_down+' '+css_malke_margin_left+';\n';
    return code;
    };
  //padding
  Blockly.Arduino.css_malke_padding = function() {
    var css_malke_padding_up = this.getFieldValue('css_malke_padding_up');
    var css_malke_padding_down = this.getFieldValue('css_malke_padding_down');
    var css_malke_padding_left = this.getFieldValue('css_malke_padding_left');
    var css_malke_padding_right = this.getFieldValue('css_malke_padding_right');
    var code ='padding:'+css_malke_padding_up+' '+css_malke_padding_right+' '+css_malke_padding_down+' '+css_malke_padding_left+';\n';
    return code;
    };
  //display
  Blockly.Arduino.css_malke_display = function() {
    var css_malke_display_value = this.getFieldValue('css_malke_display_value');
    var code ='display:'+css_malke_display_value+';\n';
    return code;
    };
  //visibility 
  Blockly.Arduino.css_malke_visibility = function() {
    var css_malke_visibility_value = this.getFieldValue('css_malke_visibility_value');
    var code ='visibility:'+css_malke_visibility_value+';\n';
    return code;
    };
  //float 
  Blockly.Arduino.css_malke_float = function() {
    var css_malke_float_value = this.getFieldValue('css_malke_float_value');
    var code ='float:'+css_malke_float_value+';\n';
    return code;
    };
  //clear
  Blockly.Arduino.css_malke_clear = function() {
    var css_malke_clear_value = this.getFieldValue('css_malke_clear_value');
    var code ='clear:'+css_malke_clear_value+';\n';
    return code;
    };
	
  //opacity
  Blockly.Arduino.css_malke_opacity = function() {
    var css_malke_opacity_value = this.getFieldValue('css_malke_opacity_value');
    var code ='opacity:'+css_malke_opacity_value+';\n';
    return code;
    };
	//box_shadow
  Blockly.Arduino.css_malke_box_shadow = function() {
    var css_malke_box_shadow_video_h = this.getFieldValue('css_malke_box_shadow_video_h');
    var css_malke_box_shadow_video_v = this.getFieldValue('css_malke_box_shadow_video_v');
    var css_malke_box_shadow_video_b = this.getFieldValue('css_malke_box_shadow_video_b');
    var css_malke_box_shadow_video_c = this.getFieldValue('css_malke_box_shadow_video_c');
    var code = 'box-shadow:'+css_malke_box_shadow_video_h
              +' '+css_malke_box_shadow_video_v
              +' '+css_malke_box_shadow_video_b
              +' '+css_malke_box_shadow_video_c+';\n';
    return code;
  };
    //transform
  Blockly.Arduino.css_malke_transform = function() {
	var css_malke_transform_value = Blockly.Arduino.statementToCode(this, 'css_malke_transform_value');
    var code ='transform: \n'
	+css_malke_transform_value
	+';\n';
    return code;
    };
	//translate
	Blockly.Arduino.css_malke_translate = function () {
	var css_malke_translate_x = this.getFieldValue('css_malke_translate_x');
	var css_malke_translate_y = this.getFieldValue('css_malke_translate_y');
    var code = 'translate('
				+css_malke_translate_x+','
				+css_malke_translate_y+')\n';
    return code;
  };
  	//scale
	Blockly.Arduino.css_malke_scale = function () {
	var css_malke_scale_w = this.getFieldValue('css_malke_scale_w');
	var css_malke_scale_h = this.getFieldValue('css_malke_scale_h');
    var code = 'scale('
				+css_malke_scale_w+','
				+css_malke_scale_h+')\n';
    return code;
  };
   //skew
	Blockly.Arduino.css_malke_skew = function () {
	var css_malke_skew_x = this.getFieldValue('css_malke_skew_x');
	var css_malke_skew_y = this.getFieldValue('css_malke_skew_y');
    var code = 'skew('
				+css_malke_skew_x+'deg,'
				+css_malke_skew_y+'deg)\n';
    return code;
  };  
	//translate3d
	Blockly.Arduino.css_malke_translate3d = function () {
	var css_malke_translate3d_x = this.getFieldValue('css_malke_translate3d_x');
	var css_malke_translate3d_y = this.getFieldValue('css_malke_translate3d_y');
	var css_malke_translate3d_z = this.getFieldValue('css_malke_translate3d_z');
    var code = 'translate3d('
				+css_malke_translate3d_x+','
				+css_malke_translate3d_y+','
				+css_malke_translate3d_z+')\n';
    return code;
  };
  	//scale3d
	Blockly.Arduino.css_malke_scale3d = function () {
	var css_malke_scale3d_x = this.getFieldValue('css_malke_scale3d_x');
	var css_malke_scale3d_y = this.getFieldValue('css_malke_scale3d_y');
	var css_malke_scale3d_z = this.getFieldValue('css_malke_scale3d_z');
    var code = 'scale3d('
				+css_malke_scale3d_x+','
				+css_malke_scale3d_y+','
				+css_malke_scale3d_z+')\n';
    return code;
  };
   //rotate3d
	Blockly.Arduino.css_malke_rotate3d = function () {
	var css_malke_rotate3d_x = this.getFieldValue('css_malke_rotate3d_x');
	var css_malke_rotate3d_y = this.getFieldValue('css_malke_rotate3d_y');
	var css_malke_rotate3d_z = this.getFieldValue('css_malke_rotate3d_z');
    var code = 'rotateX('
				+css_malke_rotate3d_x+'deg)\n'
				+'rotateY('+css_malke_rotate3d_y+'deg)\n'
				+'rotateZ('+css_malke_rotate3d_z+'deg)\n';
    return code;
  };
  //transition
  Blockly.Arduino.css_malke_transition = function() {
	var css_malke_transition_value = Blockly.Arduino.statementToCode(this, 'css_malke_transition_value');
  var code ='transition: \n'
	+css_malke_transition_value.replace(/,\s*$/, '')
	+';\n';
    return code;
    };

  //transition_value
	Blockly.Arduino.css_transition_value = function () {
    var css_transition_value_value = this.getFieldValue('css_transition_value_value');
    var css_transition_value_time = this.getFieldValue('css_transition_value_time');
    var css_transition_value_effect = this.getFieldValue('css_transition_value_effect');
      var code = css_transition_value_value+' '+css_transition_value_time+'s '+css_transition_value_effect+',\n';
      return code;
    };
  //animation_name
  Blockly.Arduino.css_make_animation_name = function() {
    var css_make_animation_name_value = Blockly.Arduino.valueToCode(this, 'css_make_animation_name_value', Blockly.Arduino.ORDER_ATOMIC);
        
    var code ='animation-name:'+css_make_animation_name_value+';\n';
     return code;
    };
  //animation_duration
  Blockly.Arduino.css_make_animation_duration = function() {
    var css_make_animation_duration_value = this.getFieldValue('css_make_animation_duration_value');
    var code ='animation-duration:'+css_make_animation_duration_value+'s;\n';
      return code;
  };
  //animation_timing_function
  Blockly.Arduino.css_make_animation_timing_function = function() {
    var css_make_animation_timing_function_value = this.getFieldValue('css_make_animation_timing_function_value');
    var code ='animation-timing-function:'+css_make_animation_timing_function_value+';\n';
    return code;
  };
  //animation_timing_function
  Blockly.Arduino.css_make_animation_iteration_count = function() {
    var css_make_animation_iteration_count_value = this.getFieldValue('css_make_animation_iteration_count_value');
    var checkbox_NAME = this.getFieldValue('css_make_animation_iteration_count_ft') == 'TRUE';
    if(checkbox_NAME){
      var code ='animation-iteration-count:infinite;\n';
    }else{
    var code ='animation-iteration-count:'+css_make_animation_iteration_count_value+';\n';
    }
    return code;
  };
  //animation_delay
  Blockly.Arduino.css_make_animation_delay = function() {
    var css_make_animation_delay_value = this.getFieldValue('css_make_animation_delay_value');
    var code ='animation-delay:'+css_make_animation_delay_value+'s;\n';
    return code;
  };

  // animation
  Blockly.Arduino.css_make_animation = function() {
    var css_make_animation_value = Blockly.Arduino.valueToCode(this, 'css_make_animation_value', Blockly.Arduino.ORDER_ATOMIC);
    var css_make_animation_value_1 = Blockly.Arduino.statementToCode(this, 'css_make_animation_value_1');
    var code = '@keyframes '+css_make_animation_value+'{\n'+css_make_animation_value_1+'}\n';
    return code;
  };
  // animation_key
  Blockly.Arduino.css_make_animation_key = function() {
    var keyframeValues = []; // 存储关键帧百分比
    var keyframeStyles = []; // 存储每个关键帧的样式代码
    var css_make_animation_key_value = this.getFieldValue('css_make_animation_key_value');
    var css_make_animation_key_s = Blockly.Arduino.statementToCode(this, 'css_make_animation_key_s');
    // 遍历所有关键帧输入
    for (var i = 0; i < this.itemCount_; i++) {
      // 获取关键帧的百分比值
      var keyframePercentage = this.getFieldValue('css_make_add_keyframes_value_' + i);
  
      // 获取并生成每个关键帧对应的样式代码
      var styleBlock = this.getInputTargetBlock('css_make_keyframes_value_' + i);
      if (styleBlock) {
        var styleCode = Blockly.Arduino.blockToCode(styleBlock); // 递归生成子块代码
        keyframeStyles.push(styleCode.trim()); // 移除前导和尾随空白
      }
      // 存储关键帧数据
      keyframeValues.push(keyframePercentage);
    }
  
    // 生成CSS关键帧动画代码
    var cssCode = css_make_animation_key_value +'%{\n'+css_make_animation_key_s+'}\n';
    for (var i = 0; i < keyframeValues.length; i++) {
      if(keyframeStyles[i]==undefined){
        var keyframe_Styles = '';
      }else{
        var keyframe_Styles = keyframeStyles[i];
      }
      cssCode += keyframeValues[i] + '% {\n';
      cssCode += keyframe_Styles;
      cssCode += '}\n';
    }
  
    // 返回生成的CSS代码
    return cssCode;
  };

 // column_count
  Blockly.Arduino.css_malke_column_count = function() {
    var css_malke_column_count_value = this.getFieldValue('css_malke_column_count_value');
    var code = 'column-count: '+css_malke_column_count_value+';\n';
    return code;
  };
   // column_width
   Blockly.Arduino.css_malke_column_width = function() {
    var css_malke_column_width_value = this.getFieldValue('css_malke_column_width_value');
    var code = 'column-width: '+css_malke_column_width_value+';\n';
    return code;
  };
 // column_gap
 Blockly.Arduino.css_malke_column_gap = function() {
  var css_malke_column_gap_value = this.getFieldValue('css_malke_column_gap_value');
  var code = 'column-gap: '+css_malke_column_gap_value+';\n';
  return code;
};
 // column_style
 Blockly.Arduino.css_malke_column_rule_style = function() {
  var css_malke_column_rule_style_value = this.getFieldValue('css_malke_column_rule_style_value');
  var code = 'column-rule-style: '+css_malke_column_rule_style_value+';\n';
  return code;
};
 // column_rule_width
 Blockly.Arduino.css_malke_column_rule_width = function() {
  var css_malke_column_rule_width_value = this.getFieldValue('css_malke_column_rule_width_value');
  var code = 'column-rule-width: '+css_malke_column_rule_width_value+';\n';
  return code;
};
 // column_rule_color
 Blockly.Arduino.css_malke_column_rule_color = function() {
  var css_malke_column_rule_color_value = this.getFieldValue('css_malke_column_rule_color_value');
  var code = 'column-rule-color: '+css_malke_column_rule_color_value+';\n';
  return code;
};

  //filter
  Blockly.Arduino.css_malke_filter = function() {
	var css_malke_filter_value = Blockly.Arduino.statementToCode(this, 'css_malke_filter_value');
    var code ='filter: \n'
	+css_malke_filter_value
	+';\n';
    return code;
  };
   //filter_blur
 Blockly.Arduino.css_malke_filter_blur = function() {
  var css_malke_filter_blur_value = this.getFieldValue('css_malke_filter_blur_value');
  var code = 'blur('+css_malke_filter_blur_value+'px)\n';
  return code;
};
   //filter_brightness
   Blockly.Arduino.css_malke_filter_brightness = function() {
    var css_malke_filter_brightness_value = this.getFieldValue('css_malke_filter_brightness_value');
    var code = 'brightness('+css_malke_filter_brightness_value+'%)\n';
    return code;
  };
   //filter_brightness
   Blockly.Arduino.css_malke_filter_contrast = function() {
    var css_malke_filter_contrast_value = this.getFieldValue('css_malke_filter_contrast_value');
    var code = 'contrast('+css_malke_filter_contrast_value+'%)\n';
    return code;
  };
   //filter_brightness
   Blockly.Arduino.css_malke_filter_grayscale = function() {
    var css_malke_filter_grayscale_value = this.getFieldValue('css_malke_filter_grayscale_value');
    var code = 'grayscale('+css_malke_filter_grayscale_value+'%)\n';
    return code;
  };
   //filter_hue_rotate
   Blockly.Arduino.css_malke_filter_hue_rotate = function() {
    var css_malke_filter_hue_rotate_value = this.getFieldValue('css_malke_filter_hue_rotate_value');
    var code = 'hue-rotate('+css_malke_filter_hue_rotate_value+'deg)\n';
    return code;
  };
   //filter_invert
   Blockly.Arduino.css_malke_filter_invert = function() {
    var css_malke_filter_invert_value = this.getFieldValue('css_malke_filter_invert_value');
    var code = 'invert('+css_malke_filter_invert_value+'%)\n';
    return code;
  };
  //filter_opacity
  Blockly.Arduino.css_malke_filter_opacity = function() {
  var css_malke_filter_opacity_value = this.getFieldValue('css_malke_filter_opacity_value');
  var code = 'opacity('+css_malke_filter_opacity_value+'%)\n';
  return code;
};
  //filter_saturate
  Blockly.Arduino.css_malke_filter_saturate = function() {
    var css_malke_filter_saturate_value = this.getFieldValue('css_malke_filter_saturate_value');
    var code = 'saturate('+css_malke_filter_saturate_value+'%)\n';
    return code;
  };
  //filter_sepia
  Blockly.Arduino.css_malke_filter_sepia = function() {
    var css_malke_filter_sepia_value = this.getFieldValue('css_malke_filter_sepia_value');
    var code = 'sepia('+css_malke_filter_sepia_value+'%)\n';
    return code;
  };
  //flex_direction
  Blockly.Arduino.css_make_flex_direction = function() {
    var css_make_flex_direction_value = this.getFieldValue('css_make_flex_direction_value');
    var code = 'flex-direction:'+css_make_flex_direction_value+';\n';
    return code;
  };
  //justify_content 
  Blockly.Arduino.css_malke_justify_content = function() {
    var css_malke_justify_content_value = this.getFieldValue('css_malke_justify_content_value');
    var code = 'justify-content:'+css_malke_justify_content_value+';\n';
    return code;
  };
  //align_items
  Blockly.Arduino.css_malke_align_items = function() {
    var css_malke_align_items_value = this.getFieldValue('css_malke_align_items_value');
    var code = 'align-items:'+css_malke_align_items_value+';\n';
    return code;
  };
  //flex_wrap
  Blockly.Arduino.css_malke_flex_wrap = function() {
    var css_malke_flex_wrap_value = this.getFieldValue('css_malke_flex_wrap_value');
    var code = 'flex-wrap:'+css_malke_flex_wrap_value+';\n';
    return code;
  };
  //align_content
  Blockly.Arduino.css_malke_align_content = function() {
    var css_malke_align_content_value = this.getFieldValue('css_malke_align_content_value');
    var code = 'align-content:'+css_malke_align_content_value+';\n';
    return code;
  };
  //flex_grow
  Blockly.Arduino.css_malke_flex_grow = function() {
    var css_malke_flex_grow_value = this.getFieldValue('css_malke_flex_grow_value');
    var code = 'flex-grow:'+css_malke_flex_grow_value+';\n';
    return code;
  };
  //flex_order
  Blockly.Arduino.css_malke_flex_order = function() {
    var css_malke_flex_order_value = this.getFieldValue('css_malke_flex_order_value');
    var code = 'order:'+css_malke_flex_order_value+';\n';
    return code;
  };
  //align_self
  Blockly.Arduino.css_malke_align_self = function() {
    var css_malke_align_self_value = this.getFieldValue('css_malke_align_self_value');
    var code = 'align-self:'+css_malke_align_self_value+';\n';
    return code;
  };
  //cursor
  Blockly.Arduino.css_malke_cursor = function() {
    var css_malke_cursor_value = this.getFieldValue('css_malke_cursor_value');
    var code = 'cursor:'+css_malke_cursor_value+';\n';
    return code;
  };
  //resize
  Blockly.Arduino.css_malke_resize = function() {
    var css_malke_resize_value = this.getFieldValue('css_malke_resize_value');
    var code = 'resize:'+css_malke_resize_value+';\n';
    return code;
  };
  //diy_css_class
  Blockly.Arduino.make_diy_css_class = function () {
    var make_diy_css_class_value = Blockly.Arduino.valueToCode(this, 'make_diy_css_class_value', Blockly.Arduino.ORDER_ATOMIC);
    var code =make_diy_css_class_value+'\n';
      return code;
    };
    //添加新字体
  Blockly.Arduino.make_add_font_class = function () {
    var make_add_font_class_value1 = Blockly.Arduino.valueToCode(this, 'make_add_font_class_value1', Blockly.Arduino.ORDER_ATOMIC);
    var make_add_font_class_value2 = Blockly.Arduino.valueToCode(this, 'make_add_font_class_value2', Blockly.Arduino.ORDER_ATOMIC);
    var make_add_font_class_value3 = this.getFieldValue('make_add_font_class_value3');
    var code =`font-family:${make_add_font_class_value1};
src: url(${make_add_font_class_value2}) format('${make_add_font_class_value3}');\n`;
      return code;
    };