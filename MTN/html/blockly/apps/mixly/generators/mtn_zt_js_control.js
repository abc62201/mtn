'use strict';

goog.provide('Blockly.Arduino.loops');

goog.require('Blockly.Arduino');



Blockly.Arduino.controls_if = function () {
    // If/elseif/else condition.
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'false';
    var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
    var code = 'if (' + argument + ') {\n' + branch + '\n}';
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
          Blockly.Arduino.ORDER_NONE) || 'false';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += ' else if (' + argument + ') {\n' + branch + '}';
    }
    if (this.elseCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'ELSE');
        code += ' else {\n' + branch + '\n}';
    }
    return code + '\n';
};

Blockly.Arduino.controls_switch_case = function () {
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
        Blockly.Arduino.ORDER_NONE) || 'NULL';
    var branch = '';
    var code = 'switch (' + argument + ') {\n';
    for (n = 1; n <= this.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + n,
          Blockly.Arduino.ORDER_NONE) || 'NULL';
        branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
        code += ' case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (this.elseCount_) {
        branch = Blockly.Arduino.statementToCode(this, 'ELSE');
        code += ' default:\n' + branch + '  break;\n';
    }
    code += '}';
    return code + '\n';
};

Blockly.Arduino.controls_for = function () {
    // For loop.
    var variable0 = Blockly.Arduino.variableDB_.getName(
        this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(this, 'FROM',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var step = Blockly.Arduino.valueToCode(this, 'STEP',
        Blockly.Arduino.ORDER_ASSIGNMENT) || '1';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + branch;
    }
    var code;
    var down = 0;
    if (argument0.match(/^-?\d+(\.\d+)?$/) &&
        argument1.match(/^-?\d+(\.\d+)?$/)) {
        //起止数是常量
    down = (argument1 - argument0 < 0);
    code = 'for (var ' + variable0 + ' = ' + argument0 + '; ' +
    variable0 + (down ? ' >= ' : ' <= ') + argument1 + '; ' +
    variable0 + ' = ' + variable0 + ' + (' + step + ')) {\n' +
    branch + '}\n';
} else {
        //起止数有变量
        if (step.match(/^-?\d+(\.\d+)?$/)) {
            //步长是常量
            down = step < 0;
            code = 'for (var ' + variable0 + ' = (' + argument0 + '); ' +
            variable0 + (down ? ' >= ' : ' <= ') + '(' + argument1 + '); ' +
            variable0 + ' = ' + variable0 + ' + (' + step + ')) {\n' +
            branch + '}\n';
        } else {
            //步长是变量
            code = 'for (var ' + variable0 + ' = (' + argument0 + '); ' +
            '(' + argument1 + '>=' + argument0 + ')?(' + variable0 + '<=' + argument1 + '):(' + variable0 + '>=' + argument1 + '); ' +
            variable0 + ' = ' + variable0 + ' + (' + step + ')) {\n' +
            branch + '}\n';
        }

    }
    return code;
};

Blockly.Arduino.controls_whileUntil = function () {
    // Do while/until loop.
    var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL',
        Blockly.Arduino.ORDER_NONE) || 'false';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + this.id + '\'') + branch;
    }
    if (this.getFieldValue('MODE') == 'UNTIL') {
        if (!argument0.match(/^\w+$/)) {
            argument0 = '(' + argument0 + ')';
        }
        argument0 = '!' + argument0;
    }
    return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.Arduino.controls_flow_statements = function () {
    // Flow statements: continue, break.
    switch (this.getFieldValue('FLOW')) {
        case 'BREAK':
        return 'break;\n';
        case 'CONTINUE':
        return 'continue;\n';
    }
    throw 'Unknown flow statement.';
};

//延时
Blockly.Arduino.controls_delay = function () {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
    var code = 'await new Promise(resolve => setTimeout(resolve, '+delay_time+'));\n';
    return code;
};

//定时器
Blockly.Arduino.controls_timer = function () {
    var timer_count = Blockly.Arduino.valueToCode(this, 'timer_count', Blockly.Arduino.ORDER_ATOMIC) || '1000';
    var controls_timer_pro = Blockly.Arduino.valueToCode(this, 'controls_timer_pro', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'setInterval(function(){'+controls_timer_pro+'}, '+timer_count+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//清除定时器
Blockly.Arduino.controls_timer_stop = function () {
    var controls_timer_stop_pro = Blockly.Arduino.valueToCode(this, 'controls_timer_stop_pro', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'clearInterval('+controls_timer_stop_pro+');\n';
    return code;
};

//窗口全屏
Blockly.Arduino.controls_window_fullscreen = function() {
    var  controls_window_fullscreen_value=this.getFieldValue('controls_window_fullscreen_value'); 
    var code = 'await '+controls_window_fullscreen_value+';\n';
    return code;
  };
Blockly.Arduino.controls_millis = function () {
    var unit = this.getFieldValue('UNIT');
    var code = unit + "()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.controls_mstimer2 = function () {
    Blockly.Arduino.definitions_['include_MsTimer2'] = '#include <MsTimer2.h>';
    var time = Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
    var funcName = 'msTimer2_func';
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var code = 'void' + ' ' + funcName + '() {\n' + branch + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return 'MsTimer2::set(' + time + ', ' + funcName + ');\n';
};

Blockly.Arduino.controls_mstimer2_start = function () {
    Blockly.Arduino.definitions_['include_MsTimer2'] = '#include <MsTimer2.h>';
    return 'MsTimer2::start();\n';
};

Blockly.Arduino.controls_mstimer2_stop = function () {
    Blockly.Arduino.definitions_['include_MsTimer2'] = '#include <MsTimer2.h>';
    return 'MsTimer2::stop();\n';
};

Blockly.Arduino.controls_end_program = function () {
    var board_type = JSFuncs.getPlatform();
    if (board_type.match(RegExp(/ESP8266/)))
        return 'while(true) delay(1000);\n';
    else
        return 'while(true);\n';
};
Blockly.Arduino.controls_soft_reset = function () {
  var funcName = 'resetFunc';
  var code = 'void(* resetFunc) (void) = 0;\n';
  Blockly.Arduino.definitions_[funcName] = code;
  return 'resetFunc();\n';
};
Blockly.Arduino.controls_interrupts = function () {
    return 'interrupts();\n';
};

Blockly.Arduino.controls_nointerrupts = function () {
    return 'noInterrupts();\n';
};
Blockly.Arduino.base_delay=Blockly.Arduino.controls_delay;
//简单定时器
Blockly.Arduino.simple_timer = function () {
    var NO = this.getFieldValue('NO');
    var timein = Blockly.Arduino.valueToCode(this, 'timein', Blockly.Arduino.ORDER_ATOMIC);
    var funcName = 'Simple_timer_'+NO;
    var branch = Blockly.Arduino.statementToCode(this, 'zxhs');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    var code = 'void' + ' ' + funcName + '() {\n  ' + branch + '\n}\n';
    Blockly.Arduino.definitions_[funcName]  = code;
    Blockly.Arduino.definitions_['include_dsqk'] ='#include <SimpleTimer.h>\n';
    Blockly.Arduino.definitions_['var_declare_Timer'] = 'SimpleTimer timer;';
    Blockly.Arduino.setups_[funcName] = 'timer.setInterval('+ timein+'L, '+funcName+');\n';
    return 'timer.run();\n';
};

//do-while循环
Blockly.Arduino.do_while = function() {
    var statements_input_data = Blockly.Arduino.statementToCode(this, 'input_data');  
    var value_select_data = Blockly.Arduino.valueToCode(this, 'select_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');
    if(dropdown_type == 'false')
    {
        var code = 'do{\n'
        +statements_input_data
        +'}while(!('+value_select_data+'));\n';
    }
    else
    {
        var code = 'do{\n'
        +statements_input_data
        +'}while('+value_select_data+');\n';
    }
    return code;
};

//注册超级延时函数
Blockly.Arduino.super_delay_function1 = function () {
    var number = this.getFieldValue('number');
    var timein = Blockly.Arduino.valueToCode(this, 'timein', Blockly.Arduino.ORDER_ATOMIC);
    var funcName = 'super_delay_function'+number;
    var branch = Blockly.Arduino.statementToCode(this, 'delay_function');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    var code = 'void' + ' ' + funcName + '() {\n  ' + branch + '\n}\n';
    Blockly.Arduino.definitions_[funcName]  = code;
    Blockly.Arduino.definitions_['include_dsqk'] ='#include <SimpleTimer.h>\n';
    Blockly.Arduino.definitions_['var_declare_Timer'] = 'SimpleTimer timer;';
    return 'timer.run();\n';
};

//执行超级延时函数
Blockly.Arduino.execute_super_delay_function1 = function() {
    var number= this.getFieldValue('number');
    var time_interval= Blockly.Arduino.valueToCode(this, 'time_interval', Blockly.Arduino.ORDER_ATOMIC);
    var frequency= Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
    var code='timer.setTimer('+ time_interval+', super_delay_function'+ number+', '+ frequency+');\n';
    return code;
};

// 播放音乐
Blockly.Arduino.js_make_audio_play = function () {
    var js_make_audio_play_file = Blockly.Arduino.valueToCode(this, 'js_make_audio_play_file', Blockly.Arduino.ORDER_ATOMIC);
    var js_make_audio_play_time = Blockly.Arduino.valueToCode(this, 'js_make_audio_play_time', Blockly.Arduino.ORDER_ATOMIC); 
    var code = '';
    code+= "var audio_file = new Audio("+js_make_audio_play_file+");\n";
    if (js_make_audio_play_time==0){
    code+= "audio_file.play();\n";
    }else{
        code+= "audio_file.play();\n";
        code+= "setTimeout(function(){\naudio_file.pause();\n";
        code+= "audio_file.currentTime = 0;\n},"+js_make_audio_play_time+");\n";
    }
    
    return code;
};

  //css渲染完成后执行
  Blockly.Arduino.mtn_request_css = function () {
    var body_value_css = Blockly.Arduino.statementToCode(this, 'mtn_request_css_value');
      //var code = 'html, body{\n'+body_value_css+'\n}\n';
      var code=`requestAnimationFrame(() => {\n     requestAnimationFrame(() => {\n
        ${body_value_css}\n
    });\n
});\n`;
      return code;
    };
//拖拽图层
    Blockly.Arduino.divdrag = function () {
        var js_make_div_id = Blockly.Arduino.valueToCode(this, 'div_id', Blockly.Arduino.ORDER_ATOMIC); 
        
        return 'divelemdrag('+js_make_div_id+');\n';
    };

    Blockly.Arduino['digital_clock_create'] = function() {
        // 获取输入值
        var elementId = Blockly.Arduino.valueToCode(this, 'ELEMENT_ID', Blockly.Arduino.ORDER_ATOMIC) || "'clock'";
        var color = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC) || "'#00ffcc'";
        var bgColor = Blockly.Arduino.valueToCode(this, 'BG_COLOR', Blockly.Arduino.ORDER_ATOMIC) || '""';
        var fontRatio = Blockly.Arduino.valueToCode(this, 'FONT_RATIO', Blockly.Arduino.ORDER_ATOMIC) || "0.5";
        var showDate = this.getFieldValue('SHOW_DATE') === 'TRUE' ? 'true' : 'false';
        if (!containsQuotedText(elementId)){
            elementId='"'+elementId+'"';
          }
        if (!containsQuotedText(color)){
            color='"'+color+'"';
        }
        if (!containsQuotedText(bgColor)){
            bgColor='"'+bgColor+'"';
          }
        if (containsQuotedText(fontRatio)){
            fontRatio=getQuotedText(fontRatio);
          }
        // 生成 JavaScript 代码
        const code = `
      new DigitalClock(${elementId}, {
        color: ${color},
        bgColor: ${bgColor},
        fontRatio: ${fontRatio},
        showDate: ${showDate}
      });
      `;
      
        return code;
      };

