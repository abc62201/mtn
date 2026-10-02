'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');
//NRF2401发送
Blockly.Arduino.nrf24l01_f = function() {
 var ftext = Blockly.Arduino.valueToCode(this, 'ftext',Blockly.Arduino.ORDER_ATOMIC);
  var SERVER = Blockly.Arduino.quote_(this.getFieldValue('stext'));
 // var password = Blockly.Arduino.valueToCode(this, 'password', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_mdrobot'] = '#include <SPI.h>\n'+'#include <Mirf.h>\n'+'#include <nRF24L01.h>\n'+'#include <MirfHardwareSpiDriver.h>\n';
 Blockly.Arduino.setups_['define_mdrobot'] ='Serial.begin(9600);\n'
 +'Mirf.spi = &MirfHardwareSpi;\n'
 +'Mirf.init();\n'
 +'Mirf.setRADDR((byte *)'+'"'+'clie1'+'"'+');\n'
 +'Mirf.payload = 5;\n'
 +'Mirf.channel = 3;\n'
 +'Mirf.config();\n'
 +'unsigned long time = millis();\n'
  ;
 
  var code = 'Mirf.setTADDR((byte *)+'+SERVER+');\n'
  +'delay(10);\n'
  +"Sends(" + ftext+ ");\n";
  var funcName='Sends';
   var code2='void '+funcName+'(String str) {\n' 
   +'int lens;\n'
   +'lens=String(str).length();\n'
   +'char msg[lens];'
   +'int i;\n'
   +'for (i=0;i<lens;i++){\n'
   +'msg[i]= int(str[i]);}\n'
   +'Mirf.send((byte *)&msg);\n'
   +'while(Mirf.isSending()){}\n'
   +'}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
  return code;
};
//NRF2401接收
Blockly.Arduino.nrf24l01_j = function() {
	var SERVER = Blockly.Arduino.quote_(this.getFieldValue('stext'));
  Blockly.Arduino.definitions_['define_mdrobot'] = '#include <SPI.h>\n'+'#include <Mirf.h>\n'+'#include <nRF24L01.h>\n'+'#include <MirfHardwareSpiDriver.h>\n'+'    String Temp;';
   Blockly.Arduino.setups_['define_mdrobot'] ="Serial.begin(9600);\n"+"Mirf.spi = &MirfHardwareSpi;\n"+"Mirf.init();\n"+"Mirf.payload = 5;\n"+"Mirf.channel = 3;\n"+"Mirf.config();";
  
  var code ="nrf("+SERVER+")";
  //var code = "if(Mirf.dataReady())    {";
  //var code = "Mirf.getData(data); ";
 // var code = "}";
 var funcName='nrf';
  var code2='String '+funcName+'(String a) {\n'
	+ 'Mirf.setTADDR((byte *)+'+SERVER+');\n'
	+ '  byte data[Mirf.payload];\n'
	+ '  if(!Mirf.isSending() && Mirf.dataReady()){\n'
	+ '  Mirf.getData(data);\n'
	+ '  int i;\n'
	+ ' Temp="";\n'
	+ '  for (i = 0; i < Mirf.payload; i++){\n'
	+ '  Temp += char(data[i]);\n'
	+ '   }\n'
	+ '  }\n'
	+ '  delay(10);'
	+ '  return Temp;\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//马达A
Blockly.Arduino.mdbot_motor_A= function() {
 var adr=this.getFieldValue('Dr');
 if(adr=="1"){
  var SPEED_PIN = '5';
 var DIR_PIN = '7';}
 else{var SPEED_PIN = '6';
 var DIR_PIN = '8';}
  var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var code = 'setMotor(' + SPEED_PIN + ', '+DIR_PIN+',' + speed + ');\n';
  Blockly.Arduino.setups_['setup_output_'+SPEED_PIN+DIR_PIN+'_S'] = 'pinMode('+SPEED_PIN+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+SPEED_PIN+DIR_PIN+'_D'] = 'pinMode('+DIR_PIN+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+SPEED_PIN+DIR_PIN+'_S_W'] = 'digitalWrite('+SPEED_PIN+', LOW);';
  Blockly.Arduino.setups_['setup_output_'+SPEED_PIN+DIR_PIN+'_D_W'] = 'digitalWrite('+DIR_PIN+', LOW);';
  var funcName= 'setMotor';
  var code2 =' void '+funcName+'(int speedpin,int dirpin, int speed)\n {\nif (speed==0)\n{\n   analogWrite(speedpin, speed);\n  digitalWrite(dirpin, LOW);\n  } \n else if (speed > 0)\n{\n   digitalWrite(dirpin, HIGH);\nanalogWrite(speedpin, speed);\n  } \nelse \n{\n digitalWrite(dirpin, LOW);\n   analogWrite(speedpin, speed*-1);  \n}\n}\n';
  Blockly.Arduino.definitions_[funcName] = code2;
  return code;
};
//舵机
Blockly.Arduino.mdbot_servo_move_A = function() {
 var servo_adr=this.getFieldValue('servo_Dr');
 if(servo_adr=="1"){
  var dropdown_pin = '15';}
 else{var dropdown_pin = '14';}
  
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  Blockly.Arduino.definitions_['include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_declare_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};
//灯
Blockly.Arduino.mdbot_led = function () {
	var led_adr=this.getFieldValue('led_Dr');
 if(led_adr=="1"){
  var dropdown_pin = '6';}
  else if(led_adr=="2")
	  {var dropdown_pin = '7';}
 else{var dropdown_pin = '8';}
	
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = "";
    if (window.isNaN(dropdown_pin)) {
        code = code + 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    } else {
        if (Blockly.Arduino.setups_['setup_input_' + dropdown_pin])
            delete Blockly.Arduino.setups_['setup_input_' + dropdown_pin];
        Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';

    }
    code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};
//灯颜色
Blockly.Arduino.mdbot_RGB = function() {
 var RGB_value1 = Blockly.Arduino.valueToCode(this, 'RGB_value1',Blockly.Arduino.ORDER_ATOMIC);
 var RGB_value2 = Blockly.Arduino.valueToCode(this, 'RGB_value2',Blockly.Arduino.ORDER_ATOMIC);
 var RGB_value3 = Blockly.Arduino.valueToCode(this, 'RGB_value3',Blockly.Arduino.ORDER_ATOMIC);
 // var password = Blockly.Arduino.valueToCode(this, 'password', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['define_mdrobot'] ='pinMode(9,INPUT);\n'
 +'pinMode(10,INPUT);\n'
 +'pinMode(11,INPUT);\n'
  ;
 
  var code = 'analogWrite(9,'+RGB_value1+');\n'
 
  +'analogWrite(10,'+RGB_value2+');\n'
 
  +'analogWrite(11,'+RGB_value3+');\n'
 
 ;
 
  return code;
};
//陀螺仪
Blockly.Arduino.mdbot_tuoluo = function () {
	var tuoluo_adr=this.getFieldValue('tuoluo_Dr');
	Blockly.Arduino.definitions_['define_mdrobot_tuoluo'] ='#include <TroykaAccelerometer.h>\n'
													+'#define PIN_X A6\n'
													+'#define PIN_Y A7\n'
													+'#define PIN_Z A3\n'
													+'#define MIN_X   1.20\n'
													+'#define MAX_X   1.80\n'
													+'#define MIN_Y   1.20\n'
													+'#define MAX_Y   1.80\n'
													+'#define MIN_Z   1.25\n'
													+'#define MAX_Z   1.85\n'
													+'TroykaAccelerometer accel(PIN_X, PIN_Y, PIN_Z);\n';
Blockly.Arduino.setups_['define_mdrobot_tuoluo'] ='accel.calibrate(MIN_X, MAX_X, MIN_Y, MAX_Y, MIN_Z, MAX_Z);\n';
var code =tuoluo_adr;
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//蜂鸣器播放
Blockly.Arduino.mdbot_tone_notes = function () {
	var tone_pin_adr=this.getFieldValue('tone_Dr_pin');
	var tone_adr=Blockly.Arduino.valueToCode(this, 'FREQUENCY',
    Blockly.Arduino.ORDER_ASSIGNMENT) || '0';

var code = "";
    if (window.isNaN(tone_pin_adr)) {
        code = code + 'pinMode(' + tone_pin_adr + ', OUTPUT);\n';
    } else {
        if (Blockly.Arduino.setups_['setup_input_' + tone_pin_adr])
            delete Blockly.Arduino.setups_['setup_input_' + tone_pin_adr];
        Blockly.Arduino.setups_['setup_output_' + tone_pin_adr] = 'pinMode(' + tone_pin_adr + ', OUTPUT);';

    }
    code += 'tone(' + tone_pin_adr + ',' + tone_adr + ');\n'
	return code;
};
//蜂鸣器停止
Blockly.Arduino.mdbot_tone_not = function () {
	var not_pin_adr=this.getFieldValue('not_Dr_pin');
	
var code = "";
    if (window.isNaN(not_pin_adr)) {
        code = code + 'pinMode(' + not_pin_adr + ', OUTPUT);\n';
    } else {
        if (Blockly.Arduino.setups_['setup_input_' + not_pin_adr])
            delete Blockly.Arduino.setups_['setup_input_' + not_pin_adr];
        Blockly.Arduino.setups_['setup_output_' + not_pin_adr] = 'pinMode(' + not_pin_adr + ', OUTPUT);';

    }
    code += 'noTone(' + not_pin_adr + ');\n'
	return code;
};
//超声波
Blockly.Arduino.mdbot_chaoshengbo = function () {
	 var chao_adr_pin = this.getFieldValue('chao_Dr_pin');
	 if(chao_adr_pin =="1"){
  var Trig = '7';
	 var Echo = '6';}
	 else{
		 var Trig = '10';
	 var Echo = '9';}
	 
  Blockly.Arduino.setups_['setup_output_' + Trig] = 'pinMode(' + Trig + ', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_' + Echo] = 'pinMode(' + Echo + ', INPUT);';
  var funcName = 'checkdistance_' + Trig + '_' + Echo;
  var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(' + Trig + ', LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(' + Trig + ', HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(' + Trig + ', LOW);\n'
  + '  float distance = pulseIn(' + Echo + ', HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName] = code;
  return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};
//电位器
Blockly.Arduino.mdbot_dianweiqi = function () {
	var dianweiqi_adr_pin=this.getFieldValue('dianweiqi_Dr_pin');
	 if(dianweiqi_adr_pin =="1"){
  var  dianweiqi_pin= 'A7';
  Blockly.Arduino.setups_['define_mdrobot_pin_A7'] ='pinMode('+dianweiqi_pin+', INPUT);\n';
	 }
	 else if(dianweiqi_adr_pin =="2"){
		var  dianweiqi_pin= 'A5';
		Blockly.Arduino.setups_['define_mdrobot_pin_A4'] ='pinMode('+dianweiqi_pin+', INPUT);\n';
	 }
	  else{
		var  dianweiqi_pin= 'A2';
		Blockly.Arduino.setups_['define_mdrobot_pin_A2'] ='pinMode('+dianweiqi_pin+', INPUT);\n';
	 }

var code ='analogRead('+dianweiqi_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//摇杆
Blockly.Arduino.mdbot_yaogan = function () {
	var yaogan_adr_pin=this.getFieldValue('yaogan_Dr_pin');
	 if(yaogan_adr_pin =="A7"){
  var  yaogan_pin= 'A7';
  Blockly.Arduino.setups_['define_mdrobot_pin_A7'] ='pinMode('+yaogan_pin+', INPUT);\n';
	 }
	 else{
		var  yaogan_pin= 'A3';
		Blockly.Arduino.setups_['define_mdrobot_pin_A3'] ='pinMode('+yaogan_pin+', INPUT);\n';
	 }
var code ='analogRead('+yaogan_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//红外传感器
Blockly.Arduino.mdbot_hongwai = function () {
	var hongwai_adr_pin=this.getFieldValue('hongwai_Dr_pin');
	 if(hongwai_adr_pin =="1"){
  var  hongwai_pin= 'A7';
  Blockly.Arduino.setups_['define_mdrobot_pin_A7'] ='pinMode('+hongwai_pin+', INPUT);\n';
	 }
	 else if(hongwai_adr_pin =="2"){
		var  hongwai_pin= 'A5';
		Blockly.Arduino.setups_['define_mdrobot_pin_A4'] ='pinMode('+hongwai_pin+', INPUT);\n';
	 }
	  else{
		var  hongwai_pin= 'A2';
		Blockly.Arduino.setups_['define_mdrobot_pin_A2'] ='pinMode('+hongwai_pin+', INPUT);\n';
	 }

var code ='analogRead('+hongwai_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//声音传感器
Blockly.Arduino.mdbot_shengyin = function () {
	var shengyin_adr_pin=this.getFieldValue('shengyin_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+shengyin_adr_pin] ='pinMode('+shengyin_adr_pin+', INPUT);\n';
	  if(shengyin_adr_pin =="6"||shengyin_adr_pin =="9"||shengyin_adr_pin =="A4"){
  var code =' digitalRead('+shengyin_adr_pin+')';
	  }
	 else{
		 var code ='analogRead('+shengyin_adr_pin+')';
	  }

//var code ='analogRead('+shengyin_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//按钮1
Blockly.Arduino.mdbot_anniu1 = function () {
	var anniu1_adr_pin=this.getFieldValue('anniu1_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+anniu1_adr_pin] ='pinMode('+anniu1_adr_pin+', INPUT);\n';
	  
  var code =' digitalRead('+anniu1_adr_pin+')';
	
//var code ='analogRead('+shengyin_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//按钮2
Blockly.Arduino.mdbot_anniu2 = function () {
	var anniu2_adr_pin=this.getFieldValue('anniu2_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+anniu2_adr_pin] ='pinMode('+anniu2_adr_pin+', INPUT);\n';
	  
  var code =' digitalRead('+anniu2_adr_pin+')';
	
//var code ='analogRead('+shengyin_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//光敏电阻
Blockly.Arduino.mdbot_guangmin = function () {
	var guangmin_adr_pin=this.getFieldValue('guangmin_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+guangmin_adr_pin] ='pinMode('+guangmin_adr_pin+', INPUT);\n';
	  
  //var code =' digitalRead('+guangmin_adr_pin+')';
	
var code ='analogRead('+guangmin_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//土壤湿度传感器
Blockly.Arduino.mdbot_turang = function () {
	var turang_adr_pin=this.getFieldValue('turang_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+turang_adr_pin] ='pinMode('+turang_adr_pin+', INPUT);\n';
	  
  //var code =' digitalRead('+guangmin_adr_pin+')';
	
var code ='analogRead('+turang_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//温湿度传感器
Blockly.Arduino.mdbot_wendu = function () {
	var wendu_adr_pin=this.getFieldValue('wendu_Dr_pin');
	var wendu_adr_ws=this.getFieldValue('wendu_Dr_ws');
	Blockly.Arduino.definitions_['include_DHT'] ='#include <DHT.h>\n';
	Blockly.Arduino.definitions_['var_declare_dht'+wendu_adr_pin] ='DHT dht'+wendu_adr_pin+'('+wendu_adr_pin+', 11);\n';
	Blockly.Arduino.setups_['DHT_SETUP'+wendu_adr_pin] ='dht'+wendu_adr_pin+'.begin();\n';
	  
  //var code =' digitalRead('+guangmin_adr_pin+')';
	
var code ='dht'+wendu_adr_pin+wendu_adr_ws;
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//lcd1602显示
Blockly.Arduino.mdbot_lcd1602_xianshi = function() {
  var varName = 'mylcd';
var TYPE = '16,2';
  var SCL = 'A5';
  var SDA = 'A4'
  var device = '0x27';  
 if(SDA=="SDA"&&SCL=="SCL")
  {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  }
  else
  {
	    //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
  }
  Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
  Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';    
  Blockly.Arduino.setups_['setup_lcd_clear_' + varName] = varName + '.clear();'; 
  //初始化LCD1602
  var str = Blockly.Arduino.valueToCode(this, 'lcd_TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
  var row = Blockly.Arduino.valueToCode(this, 'lcd_row', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var column = Blockly.Arduino.valueToCode(this, 'lcd_column', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var code = varName+'.setCursor('+column+'-1, '+row+'-1);\n'
  code+=varName+'.print('+str+');\n';
  return code;
  
};
//lcd1602图案显示
Blockly.Arduino.mdbot_lcd_print2 = function() {
  
 // var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
  var row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var column = Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var bianhao = Blockly.Arduino.valueToCode(this, 'bianhao', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var varName = 'mylcd';
var TYPE = '16,2';
  var SCL = 'A5';
  var SDA = 'A4'
  var device = '0x27';  
 if(SDA=="SDA"&&SCL=="SCL")
  {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  }
  else
  {
	  //  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
  }
  Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
  Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';    
  Blockly.Arduino.setups_['setup_lcd_clear_' + varName] = varName + '.clear();'; 
  //初始化LCD1602
   Blockly.Arduino.definitions_['lcd_tu']='#if defined(ARDUINO) && ARDUINO >= 100\n'
										+'#define printByte(args)  write(args);\n'
										+'#else\n'
										+'#define printByte(args)  print(args,BYTE);\n'
										+'#endif';
  var code = varName+'.setCursor('+column+'-1, '+row+'-1);\n'
  code+=varName+'.printByte('+bianhao+');\n';
  return code;
};
//lcd1602画图
Blockly.Arduino.mdbot_Matrix_LedArray = function() {
  var varName = this.getFieldValue('VAR');
  var varhao = this.getFieldValue('lcd_tuan_bianhao');
  var lcd_name = 'mylcd';
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][9-j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  Blockly.Arduino.setups_['setup_lcd1602_'+varhao] = lcd_name+'.createChar('+varhao+','+varName+');';
 // Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[8] PROGMEM =" + code;
  return ;
};
//lcd1602清屏
Blockly.Arduino.mdbot_lcd1602_qingping = function() {
	
	  var varName = 'mylcd';
var TYPE = '16,2';
  var SCL = 'A5';
  var SDA = 'A4'
  var device = '0x27'; 
 

  
   if(SDA=="SDA"&&SCL=="SCL")
  {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  }
  else
  {
    Blockly.Arduino.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
  }
  Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
  Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';    
  Blockly.Arduino.setups_['setup_lcd_clear_' + varName] = varName + '.clear();'; 
  //初始化LCD1602
    var dropdown_stat = this.getFieldValue('STAT');
  var code = varName+'.'+dropdown_stat+'();\n'
  return code;
};
 //点阵屏画点
 Blockly.Arduino.mdbot_dianzhen_xianshi1 = function() {
	    var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
     //初始化点阵灯
    var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
  var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
 
  var dropdown_type = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  if(matrixType=="HT16K33")
  {
    var code = matrixName + '.drawPixel('+pos_x+',7-'+pos_y+','+dropdown_type+');\n'
  }
  else
  {
    var code =matrixName+ '.drawPixel('+pos_x+','+pos_y+','+dropdown_type+');\n'
  }
  code+= matrixName +'.write();\n';
  return code;
};
//点阵屏旋转
Blockly.Arduino.mdbot_dianzhen_xuanzhuan = function() {
	var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
//初始化点阵灯
  var dropdown_type = this.getFieldValue('Rotation_TYPE');
  var code = matrixName + '.setRotation(4-'+dropdown_type+');\n'
  return code;
};
//点阵屏滚动显示文本
Blockly.Arduino.mdbot_dianzhen_gundong = function() {

  var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
   //初始化点阵灯
  var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
  var speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
  if(matrixType=="HT16K33")
  {
   var code = matrixName + '.scrollMessage('+textString+','+speed+');\n'
 }
 else
 {
  var code = matrixName + '.scrollMessage('+textString+','+speed+');\n'
}
return code;
};
//点阵屏显示_显示图案
Blockly.Arduino.mdbot_dianzhen_tuan = function() {
 
   var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
   //初始化点阵灯
  var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.definitions_['var_declare_LEDArray'] = 'uint8_t  LEDArray[8];';
  var code='';
  code+= 'memcpy_P (&LEDArray, &'+ dotMatrixArray + ', 8);\n';
  code+='for(int index_i=0; index_i<8; index_i++)\n';
  code+='{\n'
//code+='  LEDArray[index_i]='+dotMatrixArray+'[index_i];\n';
code+='  for(int index_j='+(NO)+'*8; index_j<'+ (NO)+'*8+8; index_j++)\n'
  //code+='  for(int index_j=7; index_j>=0; index_j--)\n'
  code+='  {\n'
  code+='    if((LEDArray[index_i]&0x01)>0)\n';
  if(matrixType=="HT16K33")
  {
   code+='      '+  matrixName +'.drawPixel(index_j, index_i,1);\n';
   code+='else\n'+  matrixName +'.drawPixel(index_j, index_i,0);\n';
 }
 else
 {
  code+='     '+  matrixName +'.drawPixel(index_j, 7-index_i,1);\n';
  code+='else\n'+  matrixName +'.drawPixel(index_j, 7-index_i,0);\n';
}
code+='     LEDArray[index_i] = LEDArray[index_i]>>1;\n';
code+='  }  \n'
code+='}\n'
code+= matrixName+'.write();\n'
return code;
};

//点阵屏显示_点阵数组
Blockly.Arduino.mdbot_dianzhen_shuzu = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][9-j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[8] PROGMEM =" + code;
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};
//点阵屏预设图案
Blockly.Arduino.mdbot_dianzhen_img = function() {
  var dropdown_img_ = this.getFieldValue('img_');
  var code = '"' + dropdown_img_ + '"';
  code = '{';
  for (var i = 0; i < 15; i += 2) {
    code += '0x' + dropdown_img_.substr(i, 2) + ((i != 14) ? ',' : '');
  }
  code += '};\n';
  Blockly.Arduino.definitions_['matrix_img_' + dropdown_img_] = "const uint8_t " + 'matrix_img_' + dropdown_img_ + "[8] PROGMEM=" + code;
  return ['matrix_img_' + dropdown_img_, Blockly.Arduino.ORDER_ATOMIC];
};
//点阵 全亮/全灭/关闭/开启
Blockly.Arduino.mdbot_display_Matrix_fillScreen = function() {
	  var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
   //初始化点阵灯
  //var matrixType = 'HT16K33';
  //var matrixName = this.getFieldValue('matrixName');
  var matrixName = "myMatrix";
  var FILLSCREEN_TYPE = this.getFieldValue('FILLSCREEN_TYPE');
  var code = matrixName+'.'+FILLSCREEN_TYPE+';\n'
  code+= matrixName+'.write();\n';
  return code;
};
//点阵设置亮度

Blockly.Arduino.mdbot_dianzhen_liangdu = function () {

   var SDA = 'A4';
   var SCL = 'A5';
   var matrixName ='myMatrix' ;
  var matrixType = 'HT16K33';
 Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
   Blockly.Arduino.definitions_['var_declare'+matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
   Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
   Blockly.Arduino.setups_['mdbot_dianzhen_xianshi1']=matrixName+'.clear();\n';
   //初始化点阵灯
 var BRIGHTNESS = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
 if(matrixType=="HT16K33")
 {
  var code = matrixName +'.setBrightness(' + BRIGHTNESS + ');\n';
}
else
{
  var code = matrixName +'.setIntensity(' + BRIGHTNESS + ');\n';
}
return code;
};
//传感器-实时时钟块_获取时间
Blockly.Arduino.mdbot_d1302_get = function () {
	var RTCName = 'myRTC';
  var dropdown_rst = '4';
  var dropdown_dat = '3';
  var dropdown_clk = '2';
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <DS1302.h>';
  Blockly.Arduino.definitions_['var_declare_DS1302'+RTCName] = 'DS1302 '+ RTCName +'(' + dropdown_rst + ',' + dropdown_dat + ',' + dropdown_clk + ');';
	//初始化d1302
	var hour = '8';
  var minute = '0';
  var second = '0';
  var year = '2001';
  var month = '1';
  var day = '1';
 

  Blockly.Arduino.setups_['mdbot_d1302_nyr']=RTCName + '.setDate('+ year + ','+ month + ','+ day +');\n'
											+RTCName + '.setDOW('+ year + ','+ month + ','+ day +');';
  Blockly.Arduino.setups_['mdbot_d1302_fms']=RTCName + '.setTime('+ hour + ','+ minute + ','+ second +');\n';
  
  var timeType = this.getFieldValue('TIME_TYPE');
  var code = RTCName + '.' + timeType +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//传感器-实时时钟块_设置时间
Blockly.Arduino.mdbot_d1302_fms = function () {
		var RTCName = 'myRTC';
  var dropdown_rst = '4';
  var dropdown_dat = '3';
  var dropdown_clk = '2';
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <DS1302.h>';
  Blockly.Arduino.definitions_['var_declare_DS1302'+RTCName] = 'DS1302 '+ RTCName +'(' + dropdown_rst + ',' + dropdown_dat + ',' + dropdown_clk + ');';
	//初始化d1302
  
  var hour = Blockly.Arduino.valueToCode(this, "hour", Blockly.Arduino.ORDER_ATOMIC);
  var minute = Blockly.Arduino.valueToCode(this, "minute", Blockly.Arduino.ORDER_ATOMIC);
  var second = Blockly.Arduino.valueToCode(this, "second", Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['mdbot_d1302_fms']=RTCName + '.setTime('+ hour + ','+ minute + ','+ second +');\n';
  var code = RTCName + '.setTime('+ hour + ','+ minute + ','+ second +');\n';
  return code;
};
//传感器-实时时钟块_设置日期
Blockly.Arduino.mdbot_d1302_nyr = function () {
		var RTCName = 'myRTC';
  var dropdown_rst = '4';
  var dropdown_dat = '3';
  var dropdown_clk = '2';
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <DS1302.h>';
  Blockly.Arduino.definitions_['var_declare_DS1302'+RTCName] = 'DS1302 '+ RTCName +'(' + dropdown_rst + ',' + dropdown_dat + ',' + dropdown_clk + ');';
	//初始化d1302
  
  var year = Blockly.Arduino.valueToCode(this, "year", Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, "month", Blockly.Arduino.ORDER_ATOMIC);
  var day = Blockly.Arduino.valueToCode(this, "day", Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['mdbot_d1302_nyr']=RTCName + '.setDate('+ year + ','+ month + ','+ day +');\n'
											+RTCName + '.setDOW('+ year + ','+ month + ','+ day +');';
  var code = RTCName + '.setDate('+ year + ','+ month + ','+ day +');\n';
  code += RTCName + '.setDOW('+ year + ','+ month + ','+ day +');\n';
  return code;
};
//红外接收模块
Blockly.Arduino.mdbot_ir_recv = function () {
  var variable = 'ir_item';
  Blockly.Arduino.definitions_['var_declare' + variable] = '';
  var dropdown_pin = '6';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
  var varName = 'ir_item';
  Blockly.Arduino.definitions_['include_IRremote'] = '\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    
    Blockly.Arduino.setups_['setup_ir_recv_' + dropdown_pin] = '';
    var code = '<div>梦童年</div>'
    return code;
  };
  //红外发射模块（NEC）
  Blockly.Arduino.ir_recv_raw = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['var_declare_ir_recv' + dropdown_pin] = 'IRrecv irrecv_' + dropdown_pin + '(' + dropdown_pin + ');\ndecode_results results_' + dropdown_pin + ';\n';
  if (Blockly.Arduino.setups_['setup_serial_Serial' + profile.default.serial]) {
  } else {
    Blockly.Arduino.setups_['setup_serial_Serial' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');';
  }
  Blockly.Arduino.setups_['setup_ir_recv_' + dropdown_pin] = 'irrecv_' + dropdown_pin + '.enableIRIn();\n';
  var code = "if (irrecv_" + dropdown_pin + ".decode(&results_" + dropdown_pin + ")) {\n"
  code += '  ' + 'dumpRaw(&results_' + dropdown_pin + ');\n';
  code += '  irrecv_' + dropdown_pin + '.resume();\n'
  code += '}\n';
  var funcode = 'void dumpRaw(decode_results *results) {\n'
  + '  int count = results->rawlen;\n'
  + '  Serial.print("RawData (");\n'
  + '  Serial.print(count, DEC);\n'
  + '  Serial.print("): ");\n'
  + '  for (int i = 0; i < count; i++) {\n'
  + '    Serial.print(results->rawbuf[i]*USECPERTICK, DEC);\n'
  + '    if(i!=count-1){\n'
  + '      Serial.print(",");\n'
  + '    }\n'
  + '  }\n'
  + '  Serial.println("");\n'
  + '}\n';
  Blockly.Arduino.definitions_['dumpRaw'] = funcode;
  return code;
};
//初始化计时器
Blockly.Arduino.mdbot_jishiqi_chushi = function () {
	var jishi_adr_pin=this.getFieldValue('jishi_Dr_pin');
	Blockly.Arduino.definitions_['define_mdrobot_jishi_'+jishi_adr_pin] = 'volatile float mdbot_jishiqi_'+jishi_adr_pin+';\n';
	Blockly.Arduino.setups_['define_mdrobot_jishi_'+jishi_adr_pin] ='mdbot_jishiqi_'+jishi_adr_pin+'=0;\n'
	+'mdbot_jishiqi_'+jishi_adr_pin+'=millis();\n';
	  
 
var code ='mdbot_jishiqi_'+jishi_adr_pin+'=millis();';
return code;
};
//计时器
Blockly.Arduino.mdbot_jishiqi_jishi = function () {
	var jishi_adr_pin=this.getFieldValue('jishi_Dr_pin');
	Blockly.Arduino.definitions_['define_mdrobot_jishi_'+jishi_adr_pin] = 'volatile float mdbot_jishiqi_'+jishi_adr_pin+';\n';
	Blockly.Arduino.setups_['define_mdrobot_jishi_'+jishi_adr_pin] ='mdbot_jishiqi_'+jishi_adr_pin+'=0;\n'
	+'mdbot_jishiqi_'+jishi_adr_pin+'=millis();\n';
	  

var code ='(millis()-mdbot_jishiqi_'+jishi_adr_pin+')';

return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//激光发射
Blockly.Arduino.mdbot_jiguangf = function () {
	var dropdown_pin=this.getFieldValue('jiguangf_Dr_pin');
 
	
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = "";
    if (window.isNaN(dropdown_pin)) {
        code = code + 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
    } else {
        if (Blockly.Arduino.setups_['setup_input_' + dropdown_pin])
            delete Blockly.Arduino.setups_['setup_input_' + dropdown_pin];
        Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';

    }
    code += 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};
//激光接收
Blockly.Arduino.mdbot_jiguangj = function () {
	var jiguangj_adr_pin=this.getFieldValue('jiguangj_Dr_pin');
	Blockly.Arduino.setups_['define_mdrobot_pin_'+jiguangj_adr_pin] ='pinMode('+jiguangj_adr_pin+', INPUT);\n';
	  
  var code =' digitalRead('+jiguangj_adr_pin+')';
	
//var code ='analogRead('+shengyin_adr_pin+')';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//手柄按键
Blockly.Arduino.mdbot_yaogan_anjian = function() {

  var dropdown_yaogan_anjian = this.getFieldValue('yaogan_anjian');
Blockly.Arduino.setups_['define_mdrobot_pin_'+dropdown_yaogan_anjian] ='pinMode('+dropdown_yaogan_anjian+', INPUT);\n';
  var code = 'digitalRead('+dropdown_yaogan_anjian+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];

};

//手柄摇杆
Blockly.Arduino.mdbot_shoubing_yaogan = function() {

  var dropdown_shoubing_yaogan = this.getFieldValue('shoubing_yaogan');
Blockly.Arduino.setups_['define_mdrobot_pin_'+dropdown_shoubing_yaogan] ='pinMode('+dropdown_shoubing_yaogan+', INPUT);\n';
  var code = 'analogRead('+dropdown_shoubing_yaogan+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];

};