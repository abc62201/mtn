goog.require('Blockly.Blocks');

// 图片
Blockly.Arduino.file_img = function() {
    var file_img_paht = Blockly.Arduino.valueToCode(this, 'file_img_paht', Blockly.Arduino.ORDER_ATOMIC);
   
    var code =file_img_paht;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 图片base64码
Blockly.Arduino.file_img_base64 = function() {
  var img_base64 = Blockly.Arduino.valueToCode(this, 'img_base64', Blockly.Arduino.ORDER_ATOMIC);
 
  var code =`"data:image/*;base64,${img_base64}"`;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 视频
Blockly.Arduino.file_video = function() {
    var file_video_paht = Blockly.Arduino.valueToCode(this, 'file_video_paht', Blockly.Arduino.ORDER_ATOMIC);
   
    var code =file_video_paht;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 音乐
Blockly.Arduino.file_music = function() {
    var file_music_paht = Blockly.Arduino.valueToCode(this, 'file_music_paht', Blockly.Arduino.ORDER_ATOMIC);  
    var code =file_music_paht;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//引用外部脚本
Blockly.Arduino.file_script = function() {
  var file_script_paht = Blockly.Arduino.valueToCode(this, 'file_script_paht', Blockly.Arduino.ORDER_ATOMIC);
  var code =file_script_paht;
  return code;
}
// 字体
Blockly.Arduino.file_font = function() {
  var file_font_paht = Blockly.Arduino.valueToCode(this, 'file_font_paht', Blockly.Arduino.ORDER_ATOMIC);


  var code =file_font_paht;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//class_obj
Blockly.Arduino.file_class_name = function() {
    var file_class_obj = this.getFieldValue('file_class_obj');
    var code = file_class_obj;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//obj_id
Blockly.Arduino.file_obj_id = function() {
    var file_obj_id_mame = this.getFieldValue('file_obj_id_mame');
    var code = file_obj_id_mame;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
// 插入文本
Blockly.Arduino.file_text = function() {
    var file_text_value = Blockly.Arduino.valueToCode(this, 'file_text_value', Blockly.Arduino.ORDER_ATOMIC);
   
    var code =file_text_value;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//插入像素
Blockly.Arduino.file_value_px = function() {
    var vafile_value_px_value = this.getFieldValue('vafile_value_px_value');
    var code = vafile_value_px_value+'px';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//插入%
Blockly.Arduino.file_value_percent = function() {
    var file_value_percent_value = this.getFieldValue('file_value_percent_value');
    var code = file_value_percent_value+'%';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//插入pt
Blockly.Arduino.file_value_pt = function() {
    var file_value_pt_value = this.getFieldValue('file_value_pt_value');
    var code = file_value_pt_value+'pt';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//插入数字
Blockly.Arduino.file_value_number = function() {
    var file_value_number_value = this.getFieldValue('file_value_number_value');
    var code = file_value_number_value;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//插入文本
Blockly.Arduino.file_value_text = function() {
    var file_value_text_value = this.getFieldValue('file_value_text_value');
    var code = '"'+file_value_text_value+'"';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//事件函数对象event
Blockly.Arduino.file_value_event = function() {
  var code = 'event';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//插入颜色
Blockly.Arduino.file_value_color = function() {
    var file_value_color_value = this.getFieldValue('file_value_color_value');
    var code = file_value_color_value;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//读取数组值
Blockly.Arduino.file_array_item = function() {
  var array_name = Blockly.Arduino.valueToCode(this, 'array_name', Blockly.Arduino.ORDER_ATOMIC);
  var array_item = Blockly.Arduino.valueToCode(this, 'array_item', Blockly.Arduino.ORDER_ATOMIC);
  var code = array_name+'['+array_item+']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//当前分类id
Blockly.Arduino.file_value_webno = function() {
  var code = 'webno';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//自定义字典
Blockly.Arduino.file_set_dict = function() {
  var dict_key = Blockly.Arduino.valueToCode(this, 'dict_key', Blockly.Arduino.ORDER_ATOMIC);
  var dict_value = Blockly.Arduino.valueToCode(this, 'dict_value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await set_custom_dict('+dict_key+','+dict_value+');\n';
  return code;
};

//插入颜色
Blockly.Arduino.file_get_dict = function() {
  var dict_key = Blockly.Arduino.valueToCode(this, 'dict_key', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await get_custom_dict('+dict_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//游戏运行状态
Blockly.Arduino.flie_run_value = function() {
  var code='mtn_game_run_value';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};