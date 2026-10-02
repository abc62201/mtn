//启动设置页
function mtn_dw_list_web(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-下载列表</h2>'
		+'<div class="progress" id="dw_progress" style="display:block;;width: 30%;margin: 0 10px 0 10px;">'
		+'<span id="dw-progress" class="sr-only">0% 已完成</span>'
		+'<div id="dw_progress-bar"  style="height: 20px;width:0%;background-color: #5cb85c;">'
		+'</div></div>' 
	   	+'<div class="dw_list" id="dw_list"></div>';
web_obj.innerHTML = web_txt;
mtn_dw_list_div();
}

async function mtn_dw_list_div(){
	var dw_list = document.getElementById('dw_list');
	var dw_table = document.createElement('table');
	dw_table.border = '1';
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.mtn_dw_list_div();
	if(result !== ""){	
		const parsedResult = JSON.parse(result);
		dw_list.innerHTML = '';
		dw_table.innerHTML='';
		var row1 = document.createElement('tr');
		var cell1_1 = document.createElement('td');
		var cellText1_1 = document.createTextNode('文件名');
		cell1_1.appendChild(cellText1_1);
		row1.appendChild(cell1_1);
		var cell1_2 = document.createElement('td');
		var cellText1_2 = document.createTextNode('保存路径');
		cell1_2.appendChild(cellText1_2);
		row1.appendChild(cell1_2);
		var cell1_3 = document.createElement('td');
		var cellText1_3 = document.createTextNode('文件md5值');
		cell1_3.appendChild(cellText1_3);
		row1.appendChild(cell1_3);
		var cell1_4 = document.createElement('td');
		var cellText1_4 = document.createTextNode('文件大小');
		cell1_4.appendChild(cellText1_4);
		row1.appendChild(cell1_4);
		dw_table.appendChild(row1);
		for (var i = 0; i < parsedResult.length; i++) {
			var row1 = document.createElement('tr');
			var cell1_1 = document.createElement('td');
			var cellText1_1 = document.createTextNode(parsedResult[i]['dw_name']);
			cell1_1.appendChild(cellText1_1);
			row1.appendChild(cell1_1);
			var cell1_2 = document.createElement('td');
			var cellText1_2 = document.createTextNode(parsedResult[i]['dw_path']);
			cell1_2.appendChild(cellText1_2);
			row1.appendChild(cell1_2);
			var cell1_3 = document.createElement('td');
			var cellText1_3 = document.createTextNode(parsedResult[i]['file_md5']);
			cell1_3.appendChild(cellText1_3);
			row1.appendChild(cell1_3);
			var cell1_4 = document.createElement('td');
			var cellText1_4 = document.createTextNode(parsedResult[i]['file_size']);
			cell1_4.appendChild(cellText1_4);
			row1.appendChild(cell1_4);
			dw_table.appendChild(row1);
		}
		
		dw_list.appendChild(dw_table);
	}else{
		dw_list.innerHTML = '<h2>当前没有下载任务</h2>';
	}
}