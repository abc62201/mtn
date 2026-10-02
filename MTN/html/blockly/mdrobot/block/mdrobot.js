'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.require('Blockly.Blocks');
//自定义颜色值
Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.esp8266wifi.HUE1 = 20;
//NRF2401发送
Blockly.Blocks['nrf24l01_f'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput('serv1'), 'stext')
        .appendField(Blockly.nrf24l01_f);
	
		
	     
     this.appendValueInput("ftext")
		
	     .setCheck(String);
       //appendField(Blockly.nrf24l01_f)
         
    // this.appendValueInput("password")
        // .appendField(Blockly.MIXLY_ESP8266WIFI_PASSWORD)
		// .setAlign(Blockly.ALIGN_RIGHT)
        // .setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};
//NRF2401接收
Blockly.Blocks['nrf24l01_j'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput('serv1'), 'stext')
        .appendField(Blockly.nrf24l01_j);
    this.setOutput(true, String);
  }
};







//马达


var motor_Dropdown=[["MB", "1"],["MA", "2"]];
Blockly.Blocks.mdbot_motor_A = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_motor_A);
	this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(motor_Dropdown), 'Dr');
    this.appendValueInput('speed').setCheck(Number).appendField(Blockly.MIXLY_MOTOR_SPEED);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//舵机
var servo_Dropdown=[["端口9", "1"],["端口3", "2"]];
Blockly.Blocks.mdbot_servo_move_A = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
	this.appendDummyInput("").appendField(Blockly.mdbot_servo_move_A).appendField(new Blockly.FieldDropdown(servo_Dropdown), 'servo_Dr');
	
        
        // .appendField(Blockly.MIXLY_PIN)
        // .setCheck(Number);
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("DELAY_TIME", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};
//灯
var led_Dropdown=[["红灯", "1"],["蓝灯", "2"],["绿灯", "3"]];
Blockly.Blocks.mdbot_led = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_led_pin);
    this.appendDummyInput("").appendField(Blockly.mdbot_led_mame)
	      .appendField(new Blockly.FieldDropdown(led_Dropdown), 'led_Dr');
	this.appendDummyInput("").appendField(Blockly.mdbot_led_value);	
  this.appendValueInput("STAT")
  .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
  }
};

//灯颜色
Blockly.Blocks.mdbot_RGB = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_RGB_pin);
    this.appendDummyInput("").appendField(Blockly.mdbot_RGB_mame);
	
	
  this.appendValueInput('RGB_value1').setCheck(Number).appendField(Blockly.mdbot_RGB_value1);
 this.appendValueInput('RGB_value2').setCheck(Number).appendField(Blockly.mdbot_RGB_value2);
 this.appendValueInput('RGB_value3').setCheck(Number).appendField(Blockly.mdbot_RGB_value3);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//陀螺仪
var tuoluo_Dropdown=[["X轴角度", "accel.getPitch()"],["Y轴角度", "accel.getRoll()"],["X轴加速度", "accel.readGX()"],["Y轴加速度", "accel.readGY()"],["Z轴加速度", "accel.readGZ()"],["X轴原始值", "analogRead(A6)"],["Y轴原始值", "analogRead(A7)"],["Z轴原始值", "analogRead(A3)"]];
Blockly.Blocks['mdbot_tuoluo'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
	this.appendDummyInput().appendField(Blockly.mdbot_tuoluo_duankou);
    this.appendDummyInput().appendField(Blockly.mdbot_tuoluo)
	
        .appendField(new Blockly.FieldDropdown(tuoluo_Dropdown), 'tuoluo_Dr');
    this.setOutput(true,Number);
  }
};




//蜂鸣器播放

var tone_Dropdown_pin=[["端口5", "17"],["端口6", "18"],["端口7", "6"],["端口13", "9"],["端口12", "12"]];
Blockly.Blocks.mdbot_tone_notes = {
  init: function () {
    this.setColour(Blockly.Blocks.actuator.HUE);
	
    this.appendDummyInput("")
	.appendField(Blockly.mdbot_tone_notes)
	.appendField(new Blockly.FieldDropdown(tone_Dropdown_pin), 'tone_Dr_pin');
	

    this.appendValueInput('FREQUENCY')
    .setCheck(Number)
 .appendField(Blockly.mdbot_tone_notes_yin)
      .appendField(Blockly.MIXLY_FREQUENCY);
      this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_TONE_NOTE);
  }
};

//蜂鸣器停止

var not_Dropdown_pin=[["端口5", "17"],["端口6", "18"],["端口7", "6"],["端口13", "9"],["端口12", "12"]];
Blockly.Blocks.mdbot_tone_not = {
  init: function () {
    this.setColour(Blockly.Blocks.actuator.HUE);
	
    this.appendDummyInput("")
	.appendField(Blockly.mdbot_tone_not)
	.appendField(new Blockly.FieldDropdown(not_Dropdown_pin), 'not_Dr_pin');
	
   
      this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
  }
};
//超声波
var chao_Dropdown_pin=[["端口7", "1"],["端口13", "2"]];
Blockly.Blocks.mdbot_chaoshengbo = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_chaoshengbo);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(chao_Dropdown_pin), "chao_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//电位器
var dianweiqi_Dropdown_pin=[["端口5", "1"],["端口6", "2"],["端口12", "3"]];
Blockly.Blocks.mdbot_dianweiqi = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_dianweiqi);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(dianweiqi_Dropdown_pin), "dianweiqi_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//摇杆
var yaogan_Dropdown_pin=[["X轴", "A3"],["Y轴", "A7"]];
Blockly.Blocks.mdbot_yaogan = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_yaogan_pin);
    this.appendDummyInput("").appendField(Blockly.mdbot_yaogan);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(yaogan_Dropdown_pin), "yaogan_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//红外传感器
var hongwai_Dropdown_pin=[["端口5", "1"],["端口6", "2"],["端口12", "3"]];
Blockly.Blocks.mdbot_hongwai = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_hongwai);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(hongwai_Dropdown_pin), "hongwai_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//声音传感器
var shengyin_Dropdown_pin=[["端口7数字值", "6"],["端口5模拟值", "A7"],["端口13数字值", "9"],["端口12模拟值", "A2"],["端口6数字值", "A4"],["端口6模拟值", "A5"]];
Blockly.Blocks.mdbot_shengyin = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_shengyin);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(shengyin_Dropdown_pin), "shengyin_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//按钮1
var anniu1_Dropdown_pin=[["端口7", "6"],["端口13", "9"]];
Blockly.Blocks.mdbot_anniu1 = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_anniu1);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(anniu1_Dropdown_pin), "anniu1_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//按钮2
var anniu2_Dropdown_pin=[["端口7", "7"],["端口13", "10"]];
Blockly.Blocks.mdbot_anniu2 = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_anniu2);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(anniu2_Dropdown_pin), "anniu2_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//光敏电阻
var guangmin_Dropdown_pin=[["端口5", "A7"],["端口6", "A5"],["端口12", "A2"]];
Blockly.Blocks.mdbot_guangmin = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_guangmin);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(guangmin_Dropdown_pin), "guangmin_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//土壤湿度传感器
var turang_Dropdown_pin=[["端口5", "A7"],["端口6", "A5"],["端口12", "A2"]];
Blockly.Blocks.mdbot_turang = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_turang);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(turang_Dropdown_pin), "turang_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//温度传感器
var wendu_Dropdown_pin=[["端口7", "6"],["端口13", "9"],["端口6", "A4"]];
var wendu_Dropdown_ws=[["获取温度", ".readTemperature()"],["获取湿度", ".readHumidity()"]];
Blockly.Blocks.mdbot_wendu = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_wendu);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(wendu_Dropdown_pin), "wendu_Dr_pin")
	.appendField(new Blockly.FieldDropdown(wendu_Dropdown_ws), "wendu_Dr_ws");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};
//lcd1602显示
Blockly.Blocks.mdbot_lcd1602_xianshi = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_lcd_pin);
    this.appendValueInput("lcd_row", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DF_LCD)
      .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("lcd_column", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("lcd_TEXT", String)
      .setCheck([String, Number])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT2.replace('%1', Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC)).replace('%2', Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC)));
  }
};

//lcd1602图案显示
Blockly.Blocks.mdbot_lcd_print2 = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendValueInput("row", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DF_LCD)
      // .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
      .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_LCD_COLUMN);
	  
   this.appendValueInput("bianhao", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.mdbot_lcd1602_bianhao);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT2.replace('%1', Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC)).replace('%2', Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC)));
  }
};
//lcd1602画图
Blockly.Blocks.mdbot_Matrix_LedArray = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
	  this.appendDummyInput("")
      .appendField(Blockly.mdbot_lcd1602_bianhao)
      .appendField(new Blockly.FieldTextInput("0"), "lcd_tuan_bianhao");
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_lcd1602_name)
      .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
	   // this.appendDummyInput("")
	   // .appendField(Blockly.MIXLY_DF_LCD)
      // .appendField(new Blockly.FieldTextInput('mylcd'), 'mdbot_lcd_name');
    this.appendDummyInput("")
      
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a18")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
	   .appendField(new Blockly.FieldCheckbox("FALSE"), "a11");
    this.appendDummyInput("")
     //  .appendField(new Blockly.FieldCheckbox("FALSE"), "a28")
    //  .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
    // .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a21");
    this.appendDummyInput("")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a38")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a31");
    this.appendDummyInput("")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a48")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a41");
    this.appendDummyInput("")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a58")
    //  .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
    //  .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a51");
    this.appendDummyInput("")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a68")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a61");
    this.appendDummyInput("")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a78")
    //  .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a71");
    this.appendDummyInput("")
      //.appendField(new Blockly.FieldCheckbox("FALSE"), "a88")
      //.appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
     // .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a81");
	  //   this.setPreviousStatement(true, null);
   // this.setInputsInline(true);
   // this.setNextStatement(true, null);
    //this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
  }
};

//lcd1602清屏
Blockly.Blocks.mdbot_lcd1602_qingping = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
      .appendField(Blockly.MIXLY_DF_LCD)
      
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "display"], [Blockly.MIXLY_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_POWER);
  }
};
//8*8点阵屏幕显示
Blockly.Blocks.mdbot_dianzhen_xianshi1 = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_lcd_pin);
    // this.appendDummyInput("")
      // .appendField(Blockly.MIXLY_MATRIX_TYPE)
      // .appendField(new Blockly.FieldDropdown([['HT16K33', 'HT16K33'], ['MAX7219', 'MAX7219']]), 'TYPE');
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_dianzhen_xianshi1)
      // .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendValueInput('XVALUE')
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_X);
    this.appendValueInput("YVALUE")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_Y);
    this.appendValueInput("STAT")
      .appendField(Blockly.MIXLY_STAT)
      .setCheck([Number, Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip();
  }
};
//点阵屏旋转
Blockly.Blocks.mdbot_dianzhen_xuanzhuan = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
   
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_dianzhen_xianshi1);
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ROTATE)
      .appendField(new Blockly.FieldDropdown(display_Rotation_NUM), "Rotation_TYPE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_ROTATION);
  }
};
//点阵屏滚动显示字符
Blockly.Blocks.mdbot_dianzhen_gundong = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_lcd_pin);
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_dianzhen_xianshi1);
      
    this.appendValueInput("TEXT", String)
      .setCheck([Number, String])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.mdbot_dianzhen_text);
    this.appendValueInput("Speed")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_SPEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_TEXT);
  }
};
//点阵屏显示_显示图案
Blockly.Blocks.mdbot_dianzhen_tuan = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_lcd_pin);
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_dianzhen_xianshi1);
      
 
    this.appendValueInput("NO")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_MAX7219_NO);
    this.appendValueInput("LEDArray")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
  }
};
//点阵屏显示_图案数组
Blockly.Blocks.mdbot_dianzhen_shuzu = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
      .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
  }
};
//点阵屏预设图案
Blockly.Blocks.mdbot_dianzhen_img = {
  init: function () {
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_MAX7219_IMG)
      .appendField(new Blockly.FieldDropdown([
        ["↑", "18181818db7e3c18"],
        ["↓", "183c7edb18181818"],
        ["←", "080c06ffff060c08"],
        ["→", "103060ffff603010"],
        ["♥", "183c7effffffe742"],
        ["▲", "00000000ff7e3c18"],
        ["▼", "183c7eff00000000"],
        ["◄", "080c0e0f0f0e0c08"],
        ["►", "103070f0f0703010"],
        ["△", "00000000ff422418"],
        ["▽", "182442ff00000000"],
        ["☺", "3c4299a581a5423c"],
        ["○", "3c4281818181423c"],
        ["◑", "3c72f1f1f1f1723c"],
        ["◐", "3c4e8f8f8f8f4e3c"],
        ["￥", "101010ff10ff2442"],
        ["Χ", "8142241818244281"],
        ["√", "0000010204885020"],
        ["□", "007e424242427e00"],
        ["▣", "007e425a5a427e00"],
        ["◇", "1824428181422418"],
        ["♀", "083e081c2222221c"],
        ["♂", "0e1b111b9ea0c0f0"],
        ["♪", "061f1e1010d07030"],
        ["✈", "203098ffff983020"],
        ["卍", "00f21212fe90909e"],
        ["卐", "009e9090fe1212f2"],
        ["|", "1010101010101010"],
        ["—", "000000ff00000000"],
        ["╱", "0102040810204080"],
        ["＼", "8040201008040201"],
        ["大", "41221408087f0808"],
        ["中", "1010fe9292fe1010"],
        ["小", "0e08492a2a080808"],
        ["米", "00925438fe385492"],
        ["正", "7f0a0a3a08087f00"],
        ["囧", "ffa5a5bdc3a5a5ff"]
      ]), "img_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_MAX7219_PREDEFARR);
    this.setHelpUrl('');
  }
};

var MAX7219_FILLSCREEN_SELECT = [
[Blockly.MAX7219_FILLSCREEN_ON, "fillScreen(1)"],
[Blockly.MAX7219_FILLSCREEN_OFF, "fillScreen(0)"],
  //[Blockly.MAX7219_SHUTDOWN_ON, "shutdown(1)"],
  // [Blockly.MAX7219_SHUTDOWN_OFF, "shutdown(0)"]
  ];

//点阵屏 全屏亮灭
Blockly.Blocks.mdbot_display_Matrix_fillScreen = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_dianzhen_xianshi1);
    //.appendField(new Blockly.FieldDropdown(MATRIX_TYPES), 'TYPE');
    // this.appendDummyInput("")
    //   .appendField(Blockly.MIXLY_MATRIX_NAME)
    //   .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    //this.appendDummyInput("")
    //.appendField(Blockly.MIXLY_STAT);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown(MAX7219_FILLSCREEN_SELECT), "FILLSCREEN_TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_POS);
  }
};


//点阵屏亮度
Blockly.Blocks.mdbot_dianzhen_liangdu = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.mdbot_dianzhen_xianshi1);
      
    
    this.appendValueInput("Brightness")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_BRIGHTNESS);
    this.setTooltip(Blockly.MIXLY_MAX7219_BRIGHTNESS_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
[Blockly.MIXLY_YEAR, "getYear"],
[Blockly.MIXLY_MONTH, "getMonth"],
[Blockly.MIXLY_DAY, "getDay"],
[Blockly.MIXLY_HOUR, "getHour"],
[Blockly.MIXLY_MINUTE, "getMinute"],
[Blockly.MIXLY_SECOND, "getSecond"],
[Blockly.MIXLY_WEEK, "getDOW"],
];


//传感器-实时时钟块_获取时间
Blockly.Blocks.mdbot_d1302_get = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_led_pin);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCGETTIME);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_RTC_GETTIME.replace('%1',this.getFieldValue("TIME_TYPE")));
  }
};
//传感器-实时时钟块_设置时间
Blockly.Blocks.mdbot_d1302_fms = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_led_pin);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCSETTIME)
   
    this.appendValueInput("hour")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_HOUR);
    this.appendValueInput("minute")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_MINUTE);
    this.appendValueInput("second")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_RTC_SETTIME);
  }
};
//传感器-实时时钟块_设置日期
Blockly.Blocks.mdbot_d1302_nyr = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_led_pin);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_RTCSETDATE)
    
    this.appendValueInput("year")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_YEAR);
    this.appendValueInput("month")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_MONTH);
    this.appendValueInput("day")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("  "+Blockly.MIXLY_DAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_RTC_SETDATE);
  }
};
//红外接收模块
Blockly.Blocks.mdbot_ir_recv = {
    init: function () {
        this.setColour(Blockly.Blocks.esp8266wifi.HUE);
        this.appendDummyInput("").appendField(Blockly.mdbot_led_pin);
        this.appendDummyInput("")
        
        .appendField(Blockly.mdbot_ir_recv);
        
        this.appendStatementInput('DO')
        .appendField(Blockly.MIXLY_IR_RECEIVE_YES);
        this.appendStatementInput('DO2')
        .appendField(Blockly.MIXLY_IR_RECEIVE_NO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};
//红外发射模块（NEC）
Blockly.Blocks.ir_send_nec = {
    init: function () {
        var TYPE = [['NEC', 'NEC'], ['Whynter', 'Whynter'], ['Sony', 'Sony'], ['RC5', 'RC5'], ['RC6', 'RC6'], ['DISH', 'DISH'], ['SharpRaw', 'SharpRaw'], ['SAMSUNG', 'SAMSUNG']];
        this.setColour(Blockly.Blocks.esp8266wifi.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_IR_SEND_NEC1)
        .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
        .appendField(Blockly.MIXLY_IR_SEND_NEC2)
        .appendField(new Blockly.FieldDropdown([["3", "3"]]), "PIN");
        this.appendValueInput('data')
        .setCheck(Number)
        .appendField(' ' + Blockly.MIXLY_DATA);
        this.appendValueInput('bits')
        .setCheck(Number)
        .appendField(' ' + Blockly.MIXLY_BITS);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_SEND_NEC_TOOLTIP);
    }
};
//计时器初始化
var jishiqi_Dropdown_pin=[["1号", "1"],["2号", "2"],["3号", "3"]];
Blockly.Blocks.mdbot_jishiqi_chushi = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("").appendField(Blockly.mdbot_jishiqi_chushi);
    
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(jishiqi_Dropdown_pin), "jishi_Dr_pin")
	.appendField(Blockly.mdbot_jishiqi_jishi);
   
   this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};
//计时器
var jishiqi_Dropdown_pin=[["1号", "1"],["2号", "2"],["3号", "3"]];
Blockly.Blocks.mdbot_jishiqi_jishi= {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
   
    .appendField(new Blockly.FieldDropdown(jishiqi_Dropdown_pin), "jishi_Dr_pin")
	.appendField(Blockly.mdbot_jishiqi_jishi);
    
	
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};

//激光发射
var jiguangf_Dropdown_pin=[["端口6", "18"],["端口7", "6"],["端口13", "9"],["端口12", "12"]];
Blockly.Blocks.mdbot_jiguangf = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_jiguangf);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(jiguangf_Dropdown_pin), "jiguangf_Dr_pin");
		this.appendDummyInput("").appendField(Blockly.mdbot_led_value);	
  this.appendValueInput("STAT")
   .appendField(Blockly.MIXLY_STAT)
         .setCheck([Number, Boolean]);
   this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};


    





//激光接收
var jiguangj_Dropdown_pin=[["端口5", "A3"],["端口6", "A5"],["端口7", "6"],["端口13", "9"],["端口12", "A2"]];
Blockly.Blocks.mdbot_jiguangj = {
  init: function () {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.mdbot_jiguangj);
    this.appendDummyInput("")  
    .appendField(new Blockly.FieldDropdown(jiguangj_Dropdown_pin), "jiguangj_Dr_pin");
    this.setInputsInline(true);
    this.setOutput(true, Number);

  }
};

//手柄按键

Blockly.Blocks.mdbot_yaogan_anjian= {

  init: function() { 

  this.appendDummyInput()

      .appendField(Blockly.MIXLY_mdbot_yaogan_anjian_1)

      .appendField(new Blockly.FieldDropdown([["A","2"],["B","3"],["C","4"],["D","5"],['E',"6"],['F',"7"],['摇杆按下',"8"]]), "yaogan_anjian");

  this.setOutput(true, null);

  this.setColour(90);

  this.setTooltip("");

  this.setHelpUrl("");

  }

};

//手柄摇杆

Blockly.Blocks.mdbot_shoubing_yaogan= {

  init: function() { 

  this.appendDummyInput()

      .appendField(Blockly.MIXLY_mdbot_shoubing_yaogan_1)

      .appendField(new Blockly.FieldDropdown([["上下(Y轴)","A1"],["左右(X轴)","A0"]]), "shoubing_yaogan");

  this.setOutput(true, null);

  this.setColour(90);

  this.setTooltip("");

  this.setHelpUrl("");

  }

};