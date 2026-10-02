var label_key_id = '';
var label_joy_id = '';
// 启动设置页
async function mtn_joytokey_set() {
    await joy_start(0);
    var joytokey_row_value =await get_joytokey() ;
    var parsedResult = JSON.parse(joytokey_row_value);
    var submenu_list = document.getElementById('NavList_submenu');
    submenu_list.innerHTML = '';
    var web_obj = document.getElementById('main_content');
    var web_txt = `
        <h2>当前选择：基础设置-设置键盘摇杆</h2>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">摇杆选择</label>
            </div>
            <div class="joytokey_row">
                <select id="joystick_drive" class="joystick_select" onchange="joystick_select_drive()">
                    <option value="0">选择摇杆驱动</option>
                    <option value="1">视觉头盔</option>
                    <option value="2">十字轴</option>
                    <option value="3">dx_input</option>
                </select>
            </div>
            <div class="joytokey_row">
                <select id="joystick_select" class="joystick_select" onchange="joystick_select_change()">
                    <option value="0">选择摇杆</option>
                </select>
            </div>
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按键名称</label>
            </div>
            <div class="joytokey_row">
                <label class="ui_label">键盘按键</label>
            </div>
            <div class="joytokey_row">
                <label class="ui_label">摇杆按键</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">上</label>
            </div>
            <div id="key_up_row" class="joytokey_row" onclick="label_key_set('key_up')">
                <label id="key_up_label" class="ui_label" >${parsedResult.keyboard_up}</label>
            </div>
            <div id="joy_up_row" class="joytokey_row" onclick="label_joy_set('joy_up')">
                <label id="joy_up_label" class="ui_label">${parsedResult.rocker_up}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">下</label>
            </div>
            <div id="key_down_row" class="joytokey_row" onclick="label_key_set('key_down')">
                <label id="key_down_label" class="ui_label">${parsedResult.keyboard_down}</label>
            </div>
            <div id="joy_down_row" class="joytokey_row" onclick="label_joy_set('joy_down')">
                <label id="joy_down_label" class="ui_label" >${parsedResult.rocker_down}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">左</label>
            </div>
            <div id="key_left_row" class="joytokey_row" onclick="label_key_set('key_left')">
                <label id="key_left_label" class="ui_label">${parsedResult.keyboard_left}</label>
            </div>
            <div id="joy_left_row" class="joytokey_row" onclick="label_joy_set('joy_left')">
                <label id="joy_left_label" class="ui_label" >${parsedResult.rocker_left}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">右</label>
            </div>
            <div id="key_right_row" class="joytokey_row" onclick="label_key_set('key_right')">
                <label id="key_right_label" class="ui_label">${parsedResult.keyboard_right}</label>
            </div>
            <div id="joy_right_row" class="joytokey_row" onclick="label_joy_set('joy_right')">
                <label id="joy_right_label" class="ui_label" >${parsedResult.rocker_right}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">确定</label>
            </div>
            <div id="key_determine_row" class="joytokey_row" onclick="label_key_set('key_determine')">
                <label id="key_determine_label" class="ui_label">${parsedResult.keyboard_determine}</label>
            </div>
            <div id="joy_determine_row" class="joytokey_row" onclick="label_joy_set('joy_determine')">
                <label id="joy_determine_label" class="ui_label" >${parsedResult.rocker_determine}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮1</label>
            </div>
            <div id="key_button1_row" class="joytokey_row" onclick="label_key_set('key_button1')">
                <label id="key_button1_label" class="ui_label">${parsedResult.keyboard_button1}</label>
            </div>
            <div id="joy_button1_row" class="joytokey_row" onclick="label_joy_set('joy_button1')">
                <label id="joy_button1_label" class="ui_label" >${parsedResult.rocker_button1}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮2</label>
            </div>
            <div id="key_button2_row" class="joytokey_row" onclick="label_key_set('key_button2')">
                <label id="key_button2_label" class="ui_label">${parsedResult.keyboard_button2}</label>
            </div>
            <div id="joy_button2_row" class="joytokey_row" onclick="label_joy_set('joy_button2')">
                <label id="joy_button2_label" class="ui_label" >${parsedResult.rocker_button2}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮3</label>
            </div>
            <div id="key_button3_row" class="joytokey_row" onclick="label_key_set('key_button3')">
                <label id="key_button3_label" class="ui_label">${parsedResult.keyboard_button3}</label>
            </div>
            <div id="joy_button3_row" class="joytokey_row" onclick="label_joy_set('joy_button3')">
                <label id="joy_button3_label" class="ui_label" >${parsedResult.rocker_button3}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮4</label>
            </div>
            <div id="key_button4_row" class="joytokey_row" onclick="label_key_set('key_button4')">
                <label id="key_button4_label" class="ui_label">${parsedResult.keyboard_button4}</label>
            </div>
            <div id="joy_button4_row" class="joytokey_row" onclick="label_joy_set('joy_button4')">
                <label id="joy_button4_label" class="ui_label" >${parsedResult.rocker_button4}</label>
            </div>      
        </div>  
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮5</label>
            </div>
            <div id="key_button5_row" class="joytokey_row" onclick="label_key_set('key_button5')">
                <label id="key_button5_label" class="ui_label">${parsedResult.keyboard_button5}</label>
            </div>
            <div id="joy_button5_row" class="joytokey_row" onclick="label_joy_set('joy_button5')">
                <label id="joy_button5_label" class="ui_label" >${parsedResult.rocker_button5}</label>
            </div>      
        </div>
        <div class="joytokey">
            <div class="joytokey_row">
                <label class="ui_label">按钮6</label>
            </div>
            <div id="key_button6_row" class="joytokey_row" onclick="label_key_set('key_button6')">
                <label id="key_button6_label" class="ui_label">${parsedResult.keyboard_button6}</label>
            </div>
            <div id="joy_button6_row" class="joytokey_row" onclick="label_joy_set('joy_button6')">
                <label id="joy_button6_label" class="ui_label" >${parsedResult.rocker_button6}</label>
            </div>      
        </div>                                              
    `;
    web_obj.innerHTML = web_txt;
    web_obj.addEventListener("click",function(){
     
        if(label_key_id!=''){
            var key_div = document.getElementById(label_key_id+'_row');
            key_div.classList.remove('active');
            key_set_write("kong",label_key_id);
            label_key_id='';
            mtn_key_value="kong"          
        }
        if(label_joy_id!=''){
            var key_div = document.getElementById(label_joy_id+'_row');
            key_div.classList.remove('active');
            joy_set_write("kong",label_joy_id);
            label_joy_id='';    
            mtn_joy_value="kong" 
        }
        
    });
}
//设置按键
function label_key_set(label_id){
    event.stopPropagation(); // 阻止事件冒泡
    if(label_key_id!=''){
        var key_div = document.getElementById(label_key_id+'_row');
        key_div.classList.remove('active');
        key_set_write("kong",label_key_id);
        mtn_key_value="kong"
        label_key_id='';
    }
    if(label_joy_id!=''){
        var joy_div = document.getElementById(label_joy_id+'_row');
        joy_div.classList.remove('active');
        joy_set_write("kong",label_joy_id);
        label_joy_id='';    
        mtn_joy_value="kong" 
    }
    label_key_id=label_id;
    var key_div = document.getElementById(label_key_id+'_row');
    key_div.classList.add('active');
    var key_label = document.getElementById(label_key_id+'_label');
    mtn_key_value='kong';
    key_label.innerText='kong';
}
//设置摇杆
function label_joy_set(label_id){
    event.stopPropagation(); // 阻止事件冒泡
    var joystick_select = document.getElementById('joystick_select');
    if(label_key_id!=''){
        var key_div = document.getElementById(label_key_id+'_row');
        key_div.classList.remove('active');
        key_set_write("kong",label_key_id);
        mtn_key_value="kong"
        label_key_id='';
    }
    
    if(label_joy_id!=''){
        var joy_div = document.getElementById(label_joy_id+'_row');
        joy_div.classList.remove('active');
        joy_set_write("kong",label_joy_id);
        label_joy_id='';    
        mtn_joy_value="kong" 
    }
   
    if (joystick_select.value != 0) {  
        label_joy_id=label_id;
        var joy_div = document.getElementById(label_joy_id+'_row');
        joy_div.classList.add('active');
        var joy_label = document.getElementById(label_joy_id+'_label');
        mtn_joy_value='kong';
        joy_label.innerText='kong';
    }
}
//设置摇杆数量
async function joystick_select_drive(){
    var joystick_drive = document.getElementById('joystick_drive').value;
    var joystick_select = document.getElementById('joystick_select');
    joystick_select.innerHTML='<option value="0">选择摇杆</option>';
    var joy_no=await set_joy_drive(joystick_drive);
    
    if(joy_no>0){
        for(var i=1;i<=joy_no;i++){
            var joystick_select_txt = `
                <option value="${i}">${i}p摇杆</option>
            `;
            joystick_select.innerHTML+=joystick_select_txt;
        }
    }
}
//选择摇杆
async function joystick_select_change(){
    var joystick_select = document.getElementById('joystick_select').value;
    await set_joy_select(joystick_select);
    if(joystick_select==0){
        await joy_start(0);
        return;
    }
    await joy_start(1);
}
