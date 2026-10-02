async function gamepath_set_web() {
    joy_start(0);
    var web_obj = document.getElementById('main_content');
    var web_txt = '';

    web_txt += '<h2>当前选择：基础设置-设置游戏路径</h2>'
        + '<p>文件类型不填则不会自动扫描，*代表添加全部类型的文件</p>'
        + '<div class="mtn_gamepath_buttons" id="mtn_gamepath_buttons"></div>'
        + '<div class="mtn_gamepath_set_div" id="mtn_gamepath_set_div"></div>'
        + '<div class="classify_down"></div>';

    web_obj.innerHTML = web_txt;
    gamepath_init();
}

async function gamepath_init() {
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
                    gamepath_web_value(classify_id);
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
async function gamepath_web_value(classify_id){
	var gamepath_set_div = document.getElementById('mtn_gamepath_set_div');
	gamepath_set_div.innerHTML=''
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_path_table(classify_id);
	if (result !== "") {
        var button_div = document.createElement('div');
        button_div.className = 'input-group';
        // 设置按钮容器的样式为flex布局，并且内容右对齐
        button_div.style.display = 'flex';
        button_div.style.justifyContent = 'flex-end';
        button_div.style.marginRight = '46%'; 
        var en_Button = document.createElement('button');
        en_Button.className = 'input-button';
        en_Button.onclick = function() { up_config_path(parsedResult, classify_id); };
        en_Button.textContent = '确定';
        button_div.appendChild(en_Button);
        
        var exc_Button = document.createElement('button');
        exc_Button.className = 'input-button';
        exc_Button.onclick = function() { classify_add_esc(); };
        exc_Button.textContent = '取消';
        button_div.appendChild(exc_Button);
        
        gamepath_set_div.appendChild(button_div);  
    const parsedResult = JSON.parse(result);
    for (let i = 0; i < parsedResult.length; i++) {
        const item = parsedResult[i];
        var row_div = document.createElement('div');
        row_div.className = 'group-row';

        var col_div1 = document.createElement('div');
        col_div1.className = 'group-col';

        var path_label1 = document.createElement('label');
        path_label1.for = "filetype" + i.toString();
        path_label1.textContent = '文件类型需要用英文分号的隔开';
        col_div1.appendChild(path_label1);

        var input_div1 = document.createElement('div');
        input_div1.className = 'input-group';
        var path_input1 = document.createElement('input');
        path_input1.type = "text";
        path_input1.id = item.rom_column_name + '1';
        path_input1.className = "input-field";
        path_input1.value = item.file_type;
        input_div1.appendChild(path_input1);
        col_div1.appendChild(input_div1);

		var col_div2 = document.createElement('div');
        col_div2.className = 'group-col';

        var path_label2 = document.createElement('label');
        path_label2.for = "gamepath" + i.toString();
        path_label2.textContent = item.path_name;
        col_div2.appendChild(path_label2);

        var input_div2 = document.createElement('div');
        input_div2.className = 'input-group';
        var path_input2 = document.createElement('input');
        path_input2.type = "text";
        path_input2.id = item.rom_column_name + '2';
        path_input2.className = "input-field";
        path_input2.value = item.mtn_path;
		input_div2.appendChild(path_input2);
        // 添加按钮并绑定事件
        var chooseButton = document.createElement('button');
        chooseButton.className = 'input-button';
        chooseButton.onclick = function() { chooseFile(item.rom_column_name + '2'); };
        chooseButton.textContent = '选择';
        input_div2.appendChild(chooseButton);

        
        col_div2.appendChild(input_div2);

        row_div.appendChild(col_div1);
		row_div.appendChild(col_div2);
        gamepath_set_div.appendChild(row_div);

    }

}
}
async function up_config_path(parsedResult){
    for (let i = 0; i < parsedResult.length; i++) {
        const item = parsedResult[i];
        var input_path_type = document.getElementById(item.rom_column_name + '1');
        var input_mtn_path = document.getElementById(item.rom_column_name + '2');
        parsedResult[i].file_type=input_path_type.value.replace(/；/g, ';');;
        parsedResult[i].mtn_path=input_mtn_path.value.replace(/；/g, ';');;
    }
    await CefSharp.BindObjectAsync('indexViewBinding');
    const result=await window.indexViewBinding.up_config_path(JSON.stringify(parsedResult));
    if (result == "ok") {
        alert('更新成功');
        //classify_add_esc(); 
    }
    }
async function chooseFile(input_id){
var input_obj = document.getElementById(input_id);
await CefSharp.BindObjectAsync('indexViewBinding'); 
const result=await window.indexViewBinding.path_sl();
if (result !== "") {
	input_obj.value = result;
}
}
