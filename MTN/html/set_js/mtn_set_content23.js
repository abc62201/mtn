// 启动设置页
async function file_set_web() {
    await joy_start(0);
    var web_obj = document.getElementById('main_content');
    var web_txt = '';

    web_txt += '<h2>当前选择：基础设置-设置扫描设置</h2>'
        + '<p>文件大小单位kb，扫描时只扫描大于只能大小的文件，忽略的文件类型这里填写的文件类型则不被扫描填写方法和要扫描的文件规则一样但优先级为最高</p>'
        + '<div class="mtn_gamepath_buttons" id="mtn_gamepath_buttons"></div>'
        + '<div class="mtn_gamepath_set_div" id="mtn_gamepath_set_div"></div>'
        + '<div class="classify_down"></div>';

    web_obj.innerHTML = web_txt;
    game_file_set_init();
}

async function game_file_set_init() {
    var gamepath_buttons = document.getElementById('mtn_gamepath_buttons');
    var gamepath_set_div = document.getElementById('mtn_gamepath_set_div');

    gamepath_buttons.innerHTML = '';

    await CefSharp.BindObjectAsync('indexViewBinding'); 
    const result = await window.indexViewBinding.get_classify_table();
    if (result !== "") {
        const parsedResult = JSON.parse(result);
        let firstButton = null;

        for (let i = 0; i < parsedResult.length; i++) {
            const item = parsedResult[i];
            const button = document.createElement('button');
            button.className = 'gamepath_button';
            button.dataset.value = item.id;
            button.textContent = item.daohang_name;
            button.addEventListener('click', function() {
                // 移除所有按钮的 active 类
                const buttons = document.querySelectorAll('.gamepath_button');
                buttons.forEach(btn => btn.classList.remove('active'));

                // 为当前按钮添加 active 类
                this.classList.add('active');

                const classify_id = this.dataset.value;
                if (classify_id == 0) {
                    gamepath_set_div.innerHTML = '';
                } else {
                    game_file_set_web_value(classify_id);
                }
            });

            gamepath_buttons.appendChild(button);

            // 默认选中第一个按钮
            if (i === 0) {
                firstButton = button;
            }
        }

        if (firstButton) {
            firstButton.click(); // 触发第一个按钮的点击事件
        }
    }
}
async function game_file_set_web_value(classify_id){
	var gamepath_set_div = document.getElementById('mtn_gamepath_set_div');
	gamepath_set_div.innerHTML=''
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_path_table(classify_id);
	if (result !== "") {
       
    const parsedResult = JSON.parse(result);
    for (let i = 0; i < parsedResult.length; i++) {
        const item = parsedResult[i];
        var row_div = document.createElement('div');
        row_div.className = 'group-row';

        var col_div1 = document.createElement('div');
        col_div1.className = 'group-col';

        var path_label1 = document.createElement('label');
        path_label1.for = "filetype" + i.toString();
        path_label1.textContent = item.path_name+'：扫描的文件大小';
        col_div1.appendChild(path_label1);

        var input_div1 = document.createElement('div');
        input_div1.className = 'input-group';
        var path_input1 = document.createElement('input');
        path_input1.type = "text";
        path_input1.id = item.rom_column_name + '1';
        path_input1.className = "input-field";
        path_input1.value = item.rom_size;
        input_div1.appendChild(path_input1);
        col_div1.appendChild(input_div1);

		var col_div2 = document.createElement('div');
        col_div2.className = 'group-col';

        var path_label2 = document.createElement('label');
        path_label2.for = "gamepath" + i.toString();
        path_label2.textContent = '要忽略的文件类型';
        col_div2.appendChild(path_label2);

        var input_div2 = document.createElement('div');
        input_div2.className = 'input-group';
        var path_input2 = document.createElement('input');
        path_input2.type = "text";
        path_input2.id = item.rom_column_name + '2';
        path_input2.className = "input-field";
        path_input2.value = item.file_str;
		input_div2.appendChild(path_input2);
        col_div2.appendChild(input_div2);

        row_div.appendChild(col_div1);
		row_div.appendChild(col_div2);
        gamepath_set_div.appendChild(row_div);

    }
    var button_div = document.createElement('div');
    button_div.className = 'input-group';
    var en_Button = document.createElement('button');
    en_Button.className = 'input-button';
    en_Button.onclick = function() { game_file_up_config_path(parsedResult,classify_id); };
    en_Button.textContent = '确定';
    button_div.appendChild(en_Button);
    var exc_Button = document.createElement('button');
    exc_Button.className = 'input-button';
    exc_Button.onclick = function() { classify_add_esc(); };
    exc_Button.textContent = '取消';
    button_div.appendChild(exc_Button);
    gamepath_set_div.appendChild(button_div);
}
}
async function game_file_up_config_path(parsedResult){
    for (let i = 0; i < parsedResult.length; i++) {
        const item = parsedResult[i];
        var input_rom_size= document.getElementById(item.rom_column_name + '1');
        var input_file_str = document.getElementById(item.rom_column_name + '2');
        parsedResult[i].rom_size=input_rom_size.value;
        parsedResult[i].file_str=input_file_str.value;
    }
    await CefSharp.BindObjectAsync('indexViewBinding');
    const result=await window.indexViewBinding.game_file_up_config_path(JSON.stringify(parsedResult));
    if (result == "ok") {
        classify_add_esc(); 
    }
    }

