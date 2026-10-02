function mtn_repeat_game(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-查看重复文件</h2>'
+'<p>注意这里只会删除单个文件如需删除多个文件需要手动删除</p>'
+'<div class="classify_table">'
+'<table class="styled-table"><thead><tr>'
+'<th>id</th>'
+'<th>已添加的文件位置</th>'
+'<th>重复的文件位置</th>'
+'<th>文件的MD5值</th>'
+'<th>操作</th>'
+'</tr></thead>'
+'<tbody id="repeat_table_body"></tbody>'
+'</table></div>';
web_obj.innerHTML = web_txt;
add_repeat_game();
}
async function add_repeat_game(){
    var repeat_table_body = document.getElementById('repeat_table_body');
	repeat_table_body.innerHTML='';
    var repeat_game_list = await get_rom_column();
    if (repeat_game_list !== "") {
        const parsedResult=JSON.parse(repeat_game_list);
        for (var i = 0; i < parsedResult.length; i++) {
            var row = document.createElement('tr');
            row.className="classify_table_row0";
            var cell0 = document.createElement('td');
            cell0.textContent = parsedResult[i].id;
            var cell1 = document.createElement('td');
			cell1.textContent = parsedResult[i].rom_path;
            var cell2 = document.createElement('td');
			cell2.textContent = parsedResult[i].repeat_path;
            var cell3 = document.createElement('td');
			cell3.textContent = parsedResult[i].file_md5;
            var cell4 = document.createElement('td');
            var button1 = document.createElement("button");
			button1.className = "classify_up_button";
			button1.onclick = (function(id,currentRow,file_paht) {
				return function() {
					//fenlie_daohang_id=Number(id);
				  del_repeat_id(id,file_paht);
                  repeat_table_body.removeChild(currentRow);
				};
			  })(parsedResult[i].id,row,parsedResult[i].repeat_path);
			button1.textContent = "删除";
			cell4.appendChild(button1);

            var button2 = document.createElement("button");
            button2.className = "classify_up_button";
            button2.onclick = (function(file_paht) {
				return function() {
					//fenlie_daohang_id=Number(id);
                    open_file_path(file_paht);
				};
			  })(parsedResult[i].repeat_path);
			button2.textContent = "查看";
			cell4.appendChild(button2);
            row.appendChild(cell0);
			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
            row.appendChild(cell4);
            repeat_table_body.appendChild(row);
        }
    }
    

}
