'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');

//html
Blockly.Arduino.mtn_make_html = function () {
  var statements_value_html = Blockly.Arduino.statementToCode(this, 'value_html');
    var code = statements_value_html+'\n';
    return code;
  };
//div
  Blockly.Arduino.html_make_div = function () {
    var statements_div_classname = Blockly.Arduino.valueToCode(this, 'html_class_div_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_id_div_name = Blockly.Arduino.valueToCode(this, 'html_id_div_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_make_div_obj = Blockly.Arduino.valueToCode(this, 'html_make_div_obj', Blockly.Arduino.ORDER_ATOMIC);
    var statements_div_value= Blockly.Arduino.statementToCode(this, 'div_value');
    if(html_id_div_name !==''){
      html_id_div_name= ' id="'+html_id_div_name+'"';
    }
    if(statements_div_classname !==''){
      statements_div_classname= ' class="'+statements_div_classname+'"';
    }
      var code = '<div'+html_id_div_name+statements_div_classname+' '+html_make_div_obj+'>\n'+statements_div_value+'</div>\n';
      return code;
    };
//text
 Blockly.Arduino.html_namke_text = function () {
      var html_namke_text_value= this.getFieldValue('html_namke_text_value');
        var code = html_namke_text_value+'\n';
        return code;
      };
//html_make_obj
Blockly.Arduino.html_make_obj = function() {
    var html_make_obj_value= Blockly.Arduino.statementToCode(this, 'html_make_obj_value');
    var code = html_make_obj_value;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
//draggable
Blockly.Arduino.html_make_obj_draggable = function() {
  var html_make_obj_draggable_value = this.getFieldValue('html_make_obj_draggable_value') == 'TRUE';
  if(html_make_obj_draggable_value){
	  var code = 'draggable="true" ';
  }else{
	 var code = 'draggable="false" '; 
  }
  return code;
};
//contenteditable
Blockly.Arduino.html_make_obj_contenteditable = function() {
  var html_make_obj_contenteditable_value = this.getFieldValue('html_make_obj_contenteditable_value') == 'TRUE';
  if(html_make_obj_contenteditable_value){
	  var code = 'contenteditable="true" ';
  }else{
	 var code = 'contenteditable="false" '; 
  }
  return code;
};
//event
Blockly.Arduino.html_make_obj_event = function() {
  var html_make_obj_event_value = Blockly.Arduino.valueToCode(this, 'html_make_obj_event_value', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_obj_event_select = this.getFieldValue('html_make_obj_event_select');
  var code = html_make_obj_event_select+'="'+html_make_obj_event_value.replace(/"/g, "'")+'"\n';
  return code;
};
//h
Blockly.Arduino.html_make_h = function () {
  var html_class_h_name = Blockly.Arduino.valueToCode(this, 'html_class_h_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_h_name = Blockly.Arduino.valueToCode(this, 'html_id_h_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_h_select = this.getFieldValue('html_make_h_select');
  var html_make_h_value= Blockly.Arduino.statementToCode(this, 'html_make_h_value');
  if(html_id_h_name !==''){
    html_id_h_name= ' id="'+html_id_h_name+'"';
  }
  if(html_class_h_name !==''){
    html_class_h_name= ' class="'+html_class_h_name+'"';
  }
    var code = '<'+html_make_h_select
            +html_id_h_name
            +html_class_h_name
            +'>\n'+html_make_h_value
            +'</'+html_make_h_select+'>\n';
    return code;
  };
//p
Blockly.Arduino.html_make_p = function () {
  var html_class_p_name = Blockly.Arduino.valueToCode(this, 'html_class_p_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_p_name = Blockly.Arduino.valueToCode(this, 'html_id_p_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_p_value= Blockly.Arduino.statementToCode(this, 'html_make_p_value');
  if(html_id_p_name !==''){
    html_id_p_name= ' id="'+html_id_p_name+'"';
  }
  if(html_class_p_name !==''){
    html_class_p_name= ' class="'+html_class_p_name+'"';
  } 
  var code = '<p'
            +html_id_p_name
            +html_class_p_name
            +'>\n'+html_make_p_value
            +'</p>\n';
    return code;
  };
//a
Blockly.Arduino.html_make_a = function () {
  var html_class_a_name = Blockly.Arduino.valueToCode(this, 'html_class_a_name', Blockly.Arduino.ORDER_ATOMIC) || '';
  var html_id_a_name = Blockly.Arduino.valueToCode(this, 'html_id_a_name', Blockly.Arduino.ORDER_ATOMIC) || '';
  var html_make_a_obj = Blockly.Arduino.valueToCode(this, 'html_make_a_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_a_value= Blockly.Arduino.statementToCode(this, 'html_make_a_value');
  if(html_id_a_name !==''){
    html_id_a_name= ' id="'+html_id_a_name+'"';
  }
  if(html_class_a_name !==''){
    html_class_a_name= ' class="'+html_class_a_name+'"';
  }
    var code = '<a'+html_id_a_name+html_class_a_name+' '+html_make_a_obj+'>\n'+html_make_a_value+'</a>\n';
    return code;
  };
//href
  Blockly.Arduino.html_make_obj_href = function() {
    var html_make_obj_href_url = Blockly.Arduino.valueToCode(this, 'html_make_obj_href_url', Blockly.Arduino.ORDER_ATOMIC);
    var code ='href='+html_make_obj_href_url+' ';
    return code;
  };
//title
Blockly.Arduino.html_make_obj_title = function() {
  var html_make_obj_title_value = Blockly.Arduino.valueToCode(this, 'html_make_obj_title_value', Blockly.Arduino.ORDER_ATOMIC);
  var code ='title='+html_make_obj_title_value+' ';
  return code;
};
//img
Blockly.Arduino.html_make_img = function () {
  var html_class_img_name = Blockly.Arduino.valueToCode(this, 'html_class_img_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_img_name = Blockly.Arduino.valueToCode(this, 'html_id_img_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_img_url = Blockly.Arduino.valueToCode(this, 'html_make_img_url', Blockly.Arduino.ORDER_ATOMIC);
  if(html_id_img_name !==''){
    html_id_img_name= ' id="'+html_id_img_name+'"';
  }
  if(html_class_img_name !==''){
    html_class_img_name= ' class="'+html_class_img_name+'"';
  }
  var code = '<img'+html_id_img_name
    +html_class_img_name
    +' src='+html_make_img_url
    +'></img>\n';
    return code;
  };
//video
Blockly.Arduino.html_make_video = function () {
  var html_class_video_name = Blockly.Arduino.valueToCode(this, 'html_class_video_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_video_name = Blockly.Arduino.valueToCode(this, 'html_id_video_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_video_obj = Blockly.Arduino.valueToCode(this, 'html_make_video_obj', Blockly.Arduino.ORDER_ATOMIC);
  if(html_id_video_name !==''){
    html_id_video_name= ' id="'+html_id_video_name+'"';
  }
  if(html_class_video_name !==''){
    html_class_video_name= ' class="'+html_class_video_name+'"';
  }  
  var code = '<video'+html_id_video_name
    +html_class_video_name
    +' '+html_make_video_obj
    +'></video>\n';
    return code;
  };
//src
Blockly.Arduino.html_make_obj_src = function() {
  var html_make_obj_src_url = Blockly.Arduino.valueToCode(this, 'html_make_obj_src_url', Blockly.Arduino.ORDER_ATOMIC);
  var code ='src='+html_make_obj_src_url+' ';
  return code;
};

//mp3mp4
Blockly.Arduino.html_make_obj_mp3mp4 = function() {
  var html_make_obj_mp3mp4_value = this.getFieldValue('html_make_obj_mp3mp4_value');
  var code =html_make_obj_mp3mp4_value+' ';
  return code;
};

//audio
Blockly.Arduino.html_make_audio = function () {
  var html_class_audio_name = Blockly.Arduino.valueToCode(this, 'html_class_audio_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_audio_name = Blockly.Arduino.valueToCode(this, 'html_id_audio_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_audio_obj = Blockly.Arduino.valueToCode(this, 'html_make_audio_obj', Blockly.Arduino.ORDER_ATOMIC);
  if(html_id_audio_name !==''){
    html_id_audio_name= ' id="'+html_id_audio_name+'"';
  }
  if(html_class_audio_name !==''){
    html_class_audio_name= ' class="'+html_class_audio_name+'"';
  }   
  var code = '<audio'+html_id_audio_name
    +html_class_audio_name
    +' '+html_make_audio_obj
    +'></audio>\n';
    return code;
  };
//ul
Blockly.Arduino.html_make_ul = function () {
  var html_class_ul_name = Blockly.Arduino.valueToCode(this, 'html_class_ul_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_ul_name = Blockly.Arduino.valueToCode(this, 'html_id_ul_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_ul_obj = Blockly.Arduino.valueToCode(this, 'html_make_ul_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_ul_value= Blockly.Arduino.statementToCode(this, 'html_make_ul_value');
  if(html_id_ul_name !==''){
    html_id_ul_name= ' id="'+html_id_ul_name+'"';
  }
  if(html_class_ul_name !==''){
    html_class_ul_name= ' class="'+html_class_ul_name+'"';
  }     
  var code = '<ul'+html_id_ul_name+html_class_ul_name+' '+html_make_ul_obj+'>\n'+html_make_ul_value+'</ul>\n';
    return code;
  };
//li
Blockly.Arduino.html_make_li = function () {
  var html_class_li_name = Blockly.Arduino.valueToCode(this, 'html_class_li_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_li_name = Blockly.Arduino.valueToCode(this, 'html_id_li_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_li_obj = Blockly.Arduino.valueToCode(this, 'html_make_li_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_li_value= Blockly.Arduino.statementToCode(this, 'html_make_li_value');
  if(html_id_li_name !==''){
    html_id_li_name= ' id="'+html_id_li_name+'"';
  }
  if(html_class_li_name !==''){
    html_class_li_name= ' class="'+html_class_li_name+'"';
  }    
    var code = '<li'+html_id_li_name+html_class_li_name+' '+html_make_li_obj+'>\n'+html_make_li_value+'</li>\n';
    return code;
  };
//input
Blockly.Arduino.html_make_input = function () {
  var html_make_input_value=this.getFieldValue('html_make_input_value');
  var html_class_input_name = Blockly.Arduino.valueToCode(this, 'html_class_input_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_input_name = Blockly.Arduino.valueToCode(this, 'html_id_input_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_input_obj = Blockly.Arduino.valueToCode(this, 'html_name_input_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_input_name = Blockly.Arduino.valueToCode(this, 'html_name_input_name', Blockly.Arduino.ORDER_ATOMIC);
  if(html_id_input_name !==''){
    html_id_input_name= ' id="'+html_id_input_name+'"';
  }
  if(html_class_input_name !==''){
    html_class_input_name= ' class="'+html_class_input_name+'"';
  }   
  var code = '<input'+html_id_input_name
    +html_class_input_name
    +' name='+html_name_input_name
    +' type="'+html_make_input_value
    +'" '+html_name_input_obj
    +'></input>\n';
    return code;
  };
//value
Blockly.Arduino.html_make_obj_value = function() {
  var html_make_obj_value_text = Blockly.Arduino.valueToCode(this, 'html_make_obj_value_text', Blockly.Arduino.ORDER_ATOMIC);
  var code ='value='+html_make_obj_value_text+' ';
  return code;
};
//checked
Blockly.Arduino.html_make_obj_checked = function() {
  var html_make_obj_checked_value = this.getFieldValue('html_make_obj_checked_value') == 'TRUE';
  if(html_make_obj_checked_value){
	  var code = 'checked ';
  }else{
	 var code = ' '; 
  }
  return code;
};
//select
Blockly.Arduino.html_make_select = function () {
  var html_class_input_name = Blockly.Arduino.valueToCode(this, 'html_class_select_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_id_input_name = Blockly.Arduino.valueToCode(this, 'html_id_select_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_input_obj = Blockly.Arduino.valueToCode(this, 'html_name_select_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_input_name = Blockly.Arduino.valueToCode(this, 'html_name_select_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_make_select_value= Blockly.Arduino.statementToCode(this, 'html_make_select_value');
  if(html_id_input_name !==''){
    html_id_input_name= ' id="'+html_id_input_name+'"';
  }
  if(html_class_input_name !==''){
    html_class_input_name= ' class="'+html_class_input_name+'"';
  }  
  var code = '<select'+html_id_input_name
    +html_class_input_name
    +'" name='+html_name_input_name
    +' '+html_name_input_obj
    +'>\n'+html_make_select_value
    +'\n</select>\n';
    return code;
  };
  //option
Blockly.Arduino.html_make_option = function () {
  var html_class_option_name = Blockly.Arduino.valueToCode(this, 'html_class_option_name', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_option_obj = Blockly.Arduino.valueToCode(this, 'html_name_option_obj', Blockly.Arduino.ORDER_ATOMIC);
  var html_name_option_text = Blockly.Arduino.valueToCode(this, 'html_name_option_text', Blockly.Arduino.ORDER_ATOMIC);
  if(html_class_option_name !==''){
    html_class_option_name= ' class="'+html_class_option_name+'"';
  }  
  var code = '<option'+html_class_option_name
    +'" '+html_name_option_obj
    +'>'+html_name_option_text
    +'</option>\n';
    return code;
  };
  //button
  Blockly.Arduino.html_make_button = function () {
    var html_class_button_id = Blockly.Arduino.valueToCode(this, 'html_class_button_id', Blockly.Arduino.ORDER_ATOMIC);
    var html_class_button_name = Blockly.Arduino.valueToCode(this, 'html_class_button_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_name_button_obj = Blockly.Arduino.valueToCode(this, 'html_name_button_obj', Blockly.Arduino.ORDER_ATOMIC);
    var html_name_button_text = Blockly.Arduino.valueToCode(this, 'html_name_button_text', Blockly.Arduino.ORDER_ATOMIC);
    if(html_class_button_name !==''){
      html_class_button_name= ' class="'+html_class_button_name+'"';
    }  
    if(html_class_button_id !==''){
      html_class_button_id= ' id="'+html_class_button_id+'"';
    }  
    var code = '<button type="button"'+html_class_button_id+html_class_button_name
      +' '+html_name_button_obj
      +'>'+html_name_button_text
      +'</button>\n';
      return code;
    };
  //diy_obj
  Blockly.Arduino.html_make_diy_obj = function () {
    var html_make_diy_obj_name = Blockly.Arduino.valueToCode(this, 'html_make_diy_obj_name', Blockly.Arduino.ORDER_ATOMIC);
    var code =' '+html_make_diy_obj_name+' ';
      return code;
    };
   //iframe
   Blockly.Arduino.html_make_iframe = function () {
    var html_id_iframe_name = Blockly.Arduino.valueToCode(this, 'html_id_iframe_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_class_iframe_name = Blockly.Arduino.valueToCode(this, 'html_class_iframe_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_name_iframe_src = Blockly.Arduino.valueToCode(this, 'html_name_iframe_src', Blockly.Arduino.ORDER_ATOMIC);
    if(html_id_iframe_name !==''){
      html_id_iframe_name= ' id="'+html_id_iframe_name+'"';
    }
    if(html_class_iframe_name !==''){
      html_class_iframe_name= ' class="'+html_class_iframe_name+'"';
    }  
    var code = '<iframe'
      +html_id_iframe_name
      +html_class_iframe_name
      +' src='+html_name_iframe_src
      +'></iframe>\n';
      return code;
    };
  //diy_html
  Blockly.Arduino.make_diy_html = function () {
    var make_diy_html_value = Blockly.Arduino.valueToCode(this, 'make_diy_html_value', Blockly.Arduino.ORDER_ATOMIC);
    var code =make_diy_html_value+'\n';
      return code;
    };


  //html_make_diy_label
  Blockly.Arduino.html_make_diy_label = function () {
    var html_make_diy_label_name = Blockly.Arduino.valueToCode(this, 'html_make_diy_label_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_make_diy_label_class_name = Blockly.Arduino.valueToCode(this, 'html_make_diy_label_class_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_make_diy_label_id_name = Blockly.Arduino.valueToCode(this, 'html_make_diy_label_id_name', Blockly.Arduino.ORDER_ATOMIC);
    var html_make_diy_label_obj = Blockly.Arduino.valueToCode(this, 'html_make_diy_label_obj', Blockly.Arduino.ORDER_ATOMIC);
    var html_make_diy_label_value= Blockly.Arduino.statementToCode(this, 'html_make_diy_label_value');
    if(html_make_diy_label_id_name !==''){
      html_make_diy_label_id_name= ' id="'+html_make_diy_label_id_name+'"';
    }
    if(html_make_diy_label_class_name !==''){
      html_make_diy_label_class_name= ' class="'+html_make_diy_label_class_name+'"';
    }
      var code = '<'+html_make_diy_label_name+html_make_diy_label_id_name+html_make_diy_label_class_name+' '+html_make_diy_label_obj+'>\n'+html_make_diy_label_value+'</'+html_make_diy_label_name+'>\n';
      return code;
    };