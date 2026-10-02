//启动设置页
function classify_set_web(){
	
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';

web_txt+='<h2>当前选择：基础设置-分类设置</h2>'
		+'<div id="弹窗" class="弹窗" >'
		+'<ul id="弹窗表" class="弹窗表" >'
		+'</ul>'
		+'<button class="close-btn" onclick="隐藏弹窗()">关闭</button>'
		+'</div>'
		+'<div class="classify_table">'
		+'<table class="styled-table"><thead><tr>'
		+'<th>序号</th>'
		+'<th>导航名称</th>'
		+'<th>模拟器</th>'
		+'<th>模拟器核心</th>'
		+'<th>模拟器参数</th>'
		+'<th>自动添加模拟器</th>'
		+'<th>主题UI</th>'
		+'<th>操作</th>'
		+'</tr></thead>'
		+'<tbody id="classify_table_body"></tbody>'
		+'</table></div>';
web_txt+='<h2>被隐藏的分类</h2>'
		+'<div class="classify_table">'
		+'<table class="styled-table"><thead><tr>'
		+'<th>序号</th>'
		+'<th>分类</th>'
		+'<th>导航名称</th>'
		+'<th>分类图标</th>'
		+'<th>模拟器</th>'
		+'<th>启动参数</th>'
		+'<th>分类等级</th>'
		+'<th>操作</th>'
		+'</tr></thead>'
		+'<tbody id="classify_order_table"></tbody>'
		+'</table></div>';
web_obj.innerHTML = web_txt;

classify_web_table();
order_web_table();

}
async function order_web_table(){
	var classify_order_table = document.getElementById('classify_order_table');
	classify_order_table.innerHTML='';
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_orde_table();
	if (result !== "") {
		const parsedResult = JSON.parse(result);
		for (var i = 0; i < parsedResult.length; i++) {
			var row = document.createElement('tr');
			row.className="classify_table_row"+parsedResult[i].classify_level;
			var cell0 = document.createElement('td');
			cell0.textContent = parsedResult[i].classify_order;
			var cell1 = document.createElement('td');
			cell1.textContent = parsedResult[i].classify;
			var cell2 = document.createElement('td');
			cell2.textContent = parsedResult[i].daohang_name;
			var cell3 = document.createElement('td');
			cell3.textContent = parsedResult[i].daohang_ico;
			var cell4 = document.createElement('td');
			var emulator = mtn_emu_list.find(item => item.id === parsedResult[i].game_emu_id);
			if (emulator) {
				cell4.textContent = emulator['emu_name'];
			}else{
				cell4.textContent = '无';
			}			
			var cell5 = document.createElement('td');
			cell5.textContent = parsedResult[i].emu_args;
			var cell6 = document.createElement('td');
			cell6.textContent = parsedResult[i].classify_level;
			var cell7 = document.createElement('td');
			var button1 = document.createElement("button");
			button1.className = "classify_up_button";
			var button2 = document.createElement("button");
			button2.className = "classify_up_button";
			button2.onclick = (function(id) {
				return function() {
					classify_recover_web(id);
				};
			  })(parsedResult[i].id);
			button2.textContent = "恢复";
			cell7.appendChild(button2);
			row.appendChild(cell0);
			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
			row.appendChild(cell4);
			row.appendChild(cell5);
			row.appendChild(cell6);
			row.appendChild(cell7);
			classify_order_table.appendChild(row);
		}
	}
}
async function classify_web_table(){
	var classify_table_body = document.getElementById('classify_table_body');
	classify_table_body.innerHTML='';
	
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.get_classify_table();
	var mtn_ui=await get_ui_table();
	var ui_list=JSON.parse(mtn_ui);
	if (result !== "") {
		const parsedResult = JSON.parse(result);
		for (var i = 0; i < parsedResult.length; i++) {
			var row = document.createElement('tr');
			row.className="classify_table_row"+parsedResult[i].classify_level;
			var cell0 = document.createElement('td');
			var div0 = document.createElement('div');
			div0.textContent = parsedResult[i].classify_order;
			div0.className = "order_number";
			div0.contentEditable="true";
			div0.style.height="30px";
			div0.value=parsedResult[i].id;
      // 添加失去焦点的事件处理程序
      div0.addEventListener('blur', async function() {
        try {
          const content = this.textContent.trim();
          if (!isNaN(content)) {
            await CefSharp.BindObjectAsync('indexViewBinding'); 
            await window.indexViewBinding.uporder_danghang_table(this.value, content);
          }
        } catch (ex) {
          console.error("Error updating order:", ex);
        }
      });
			cell0.appendChild(div0);


			
			var emu_core=mtn_emu_list.find(item => item.id ===parsedResult [i].emu_core_id);
			var cell1 = document.createElement('td');
			
			if (emu_core) {
				cell1.textContent = emu_core['emu_core'];
			}else{
				cell1.textContent = '无';
			}	
			cell1.value=parsedResult[i].id;
			cell1.id='cell1_'+i;
			cell1.addEventListener('click', async function() {	
				显示模拟器核心弹窗(this.value,this.id);
			  });


			
			//cell1.textContent = parsedResult[i].classify;
			var cell2 = document.createElement('td');
			var div2 = document.createElement('div');
			div2.textContent = parsedResult[i].daohang_name;
			div2.contentEditable="true";
			div2.style.height="30px";
			div2.value=parsedResult[i].id;
			div2.addEventListener('blur',async function() {
				await CefSharp.BindObjectAsync('indexViewBinding');
				await window.indexViewBinding.upname_danghang_table(this.value,this.textContent);
			});
			cell2.appendChild(div2);
			var cell3 = document.createElement('td');
			var div3 = document.createElement('div');
			div3.textContent = parsedResult[i].emu_args;
			div3.className = "emu_args";
			div3.contentEditable="true";
			div3.style.height="30px";
			div3.value=parsedResult[i].id;
			div3.addEventListener('click', function() {
				event.stopPropagation(); // 阻止事件冒泡
                const dropdown = document.getElementById('myDropdown');
                dropdown.style.display = "block";
                createDropdownMenu(this,this.value);
            });
			div3.addEventListener('blur', async function() {
				//const dropdown = document.getElementById('myDropdown');
				await CefSharp.BindObjectAsync('indexViewBinding');
				await window.indexViewBinding.upemu_args_danghang_table(this.value,this.textContent);
				//dropdown.style.display = "none";
			  });
			cell3.appendChild(div3);
			var cell4 = document.createElement('td');
			var img4 = document.createElement('img');
			img4.id='img4_'+i;
			img4.className="emu_img";
			var emu_search = mtn_emu_list.find(item => item.id ===parsedResult [i].game_emu_id);
			if (emu_search) {
				img4_path = emu_search['emu_ico'];
				img4.src =ispath(img4_path);
			}
			cell4.value=parsedResult[i].id;
			cell4.alt='img4_'+i;
			cell4.addEventListener('click', async function() {	
				显示模拟器弹窗(this.value,this.alt);
			  });
			cell4.appendChild(img4);
			
      // 创建复选框单元格
      var cell5 = document.createElement('td');
      var checkbox5 = document.createElement('input');
      checkbox5.type = 'checkbox';
      checkbox5.className = 'checkbox_cell';
      checkbox5.style.height = '30px';
      checkbox5.value = parsedResult[i].id;

      // 根据 dw_emu 的值设置复选框的初始状态
      if (parsedResult[i].dw_emu == "1") {
        checkbox5.checked = true;
      } else {
        checkbox5.checked = false;
      }

      // 添加改变状态的事件处理程序
      checkbox5.addEventListener('change', async function() {
        try {
          await CefSharp.BindObjectAsync('indexViewBinding'); 
          await window.indexViewBinding.updwemu_danghang_table(this.value, this.checked ? "1" : "0");
        } catch (ex) {
          console.error("Error updating dw_emu:", ex);
        }
      });

      cell5.appendChild(checkbox5);

			var cell6 = document.createElement('td');
			var img6 = document.createElement('img');
			img6.id='img6_'+i;
			img6.className="ui_img";
			var ui_search = ui_list.find(item => item.id ===parsedResult [i].ui_name_id);
			if (ui_search) {
				img6_path = ui_search['ui_img'];
				img6.src =ispath(img6_path);
			}	
			img6.style.width="32px";
			img6.style.height="32px";
			cell6.value=parsedResult[i].id;
			cell6.alt='img6_'+i;
			cell6.addEventListener('click', async function() {
				显示ui弹窗(this.value,this.alt);
			  });
			cell6.appendChild(img6);

			var cell7 = document.createElement('td');
			var button1 = document.createElement("button");
			button1.className = "classify_up_button";
			button1.onclick = (function(id) {
				return function() {
					fenlie_daohang_id=Number(id);
				  classify_up_web(id);
				};
			  })(parsedResult[i].id);
			button1.textContent = "修改";
			cell7.appendChild(button1);
			var button2 = document.createElement("button");
			button2.className = "classify_up_button";
			button2.onclick = (function(id) {
				return function() {
					classify_del_web(id);
				};
			  })(parsedResult[i].id);
			button2.textContent = "隐藏";
			cell7.appendChild(button2);
			row.appendChild(cell0);
			row.appendChild(cell2);
			row.appendChild(cell4);
			row.appendChild(cell1);
			row.appendChild(cell3);
			row.appendChild(cell5);
			row.appendChild(cell6);
			row.appendChild(cell7);
			classify_table_body.appendChild(row);
		}
	}
	var row1 = document.createElement('tr');
		var cell8 = document.createElement('td');
		cell8.className = "classify_add";
		var button = document.createElement("button");
		button.className = "classify_add_button";
		button.onclick=classify_add_web;
		button.textContent = "添加分类";
		cell8.appendChild(button);
		row1.appendChild(cell8);
	
	
	classify_table_body.appendChild(row1);
}

async function classify_del_web(classify_id){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.classify_del_web(classify_id);
	if(result=="ok"){
		classify_web_table();
		order_web_table();
	}
}
async function classify_recover_web(classify_id){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.classify_recover_web(classify_id);
	if(result=="ok"){
		classify_web_table();
		order_web_table();
	}
}

async function 显示ui弹窗(导航id,图片id) {
	const 弹窗 = document.getElementById('弹窗');
	const 弹窗表 = document.getElementById('弹窗表');
	弹窗表.innerHTML = '';
	var mtn_ui=await get_ui_table();
	if (mtn_ui !== "") {
		var ui_list=JSON.parse(mtn_ui);
		for (var i = 0; i < ui_list.length; i++) {
			var ui_li = document.createElement('li');
			var ui_name_div = document.createElement('div');
			var ui_img_div = document.createElement('div');
			var ui_div = document.createElement('div');
			var ui_li_img = document.createElement('img');
			ui_li.className = '弹窗表项';
			ui_li_img.className = '弹窗表图标';
			ui_li_img.src = ispath(ui_list[i].ui_img);
			ui_li.value = ui_list[i].id;
			ui_li.alt=ispath(ui_list[i].ui_img);
			ui_name_div.textContent=ui_list[i].ui_name;
			ui_li.addEventListener('click',async function() {
				await CefSharp.BindObjectAsync('indexViewBinding'); 
				await window.indexViewBinding.upui_danghang_table(导航id,this.value);
				const ui_图片 = document.getElementById(图片id);
				ui_图片.src=this.alt;
				隐藏弹窗();
			});
			ui_img_div.appendChild(ui_li_img);
			ui_div.appendChild(ui_name_div);
			ui_div.appendChild(ui_img_div);
			ui_li.appendChild(ui_div);
			弹窗表.appendChild(ui_li);			
		}
	}
	弹窗.classList.add('show');
}
async function 显示模拟器弹窗(导航id,图片id) {
	const 弹窗 = document.getElementById('弹窗');
	const 弹窗表 = document.getElementById('弹窗表');
	弹窗表.innerHTML = '';
		//添加新的模拟器
		var emu_li = document.createElement('li');
		var emu_name_div = document.createElement('div');
		var emu_img_div = document.createElement('div');
		var emu_div = document.createElement('div');
		var emu_li_img = document.createElement('img');
		emu_li.className = '弹窗模拟器表项';
		emu_li_img.className = '弹窗模拟器图标';
		emu_li_img.src ='set_js/addIco.png';
		emu_name_div.textContent = '添加模拟器';
		emu_li.addEventListener('click',async function() {	
			var eum_id=await classify_emu_add();
			显示模拟器弹窗(导航id,图片id);
		});
		emu_img_div.appendChild(emu_li_img);
		emu_div.appendChild(emu_name_div);
		emu_div.appendChild(emu_img_div);
		emu_li.appendChild(emu_div);
		弹窗表.appendChild(emu_li);

	for (var i = 0; i < mtn_emu_list.length; i++) {
		if(mtn_emu_list[i].emu_path !==""){
		var emu_li = document.createElement('li');
		var emu_name_div = document.createElement('div');
		var emu_img_div = document.createElement('div');
		var emu_div = document.createElement('div');
		var emu_li_img = document.createElement('img');
		emu_li.className = '弹窗模拟器表项';
		emu_li_img.className = '弹窗模拟器图标';
		emu_li_img.src = ispath(mtn_emu_list[i].emu_ico);
		emu_li.value = mtn_emu_list[i].id;
		emu_li.alt=ispath(mtn_emu_list[i].emu_ico);
		emu_name_div.textContent=mtn_emu_list[i].emu_name;
		emu_li.addEventListener('click',async function() {
			await CefSharp.BindObjectAsync('indexViewBinding'); 
			await window.indexViewBinding.upemu_danghang_table(导航id,this.value);
			const ui_图片 = document.getElementById(图片id);
			ui_图片.src=this.alt;
			隐藏弹窗();
		});
		emu_img_div.appendChild(emu_li_img);
		emu_div.appendChild(emu_name_div);
		emu_div.appendChild(emu_img_div);
		emu_li.appendChild(emu_div);
		弹窗表.appendChild(emu_li);
	}
	}
	//取消模拟器
	var emu_li = document.createElement('li');
	var emu_name_div = document.createElement('div');
	var emu_img_div = document.createElement('div');
	var emu_div = document.createElement('div');
	var emu_li_img = document.createElement('img');
	emu_li.className = '弹窗表项';
	emu_li_img.className = '弹窗表图标';
	emu_li_img.src ='set_js/del.png';
	emu_name_div.textContent = '取消模拟器';
	emu_li.addEventListener('click',async function() {	
		await CefSharp.BindObjectAsync('indexViewBinding'); 
		await window.indexViewBinding.upemu_danghang_table(导航id,'0');
		const ui_图片 = document.getElementById(图片id);
		ui_图片.src='';
		隐藏弹窗();
	});
	emu_img_div.appendChild(emu_li_img);
	emu_div.appendChild(emu_name_div);
	emu_div.appendChild(emu_img_div);
	emu_li.appendChild(emu_div);
	弹窗表.appendChild(emu_li);
	弹窗.classList.add('show');
}

async function 显示模拟器核心弹窗(导航id,图片id) {
	const 弹窗 = document.getElementById('弹窗');
	const 弹窗表 = document.getElementById('弹窗表');
	弹窗表.innerHTML = '';
		//添加新的模拟器
		var core_li = document.createElement('li');
		var core_name_div = document.createElement('div');
		var core_img_div = document.createElement('div');
		var core_div = document.createElement('div');
		var core_li_img = document.createElement('img');
		core_li.className = '弹窗表项';
		core_li_img.className = '弹窗表图标';
		core_li_img.src ='set_js/addIco.png';
		core_name_div.textContent = '添加核心';
		core_li.addEventListener('click',async function() {	
			var eum_id=await classify_core_add();
			显示模拟器核心弹窗(导航id,图片id);
		});
		core_img_div.appendChild(core_li_img);
		core_div.appendChild(core_name_div);
		core_div.appendChild(core_img_div);
		core_li.appendChild(core_div);
		弹窗表.appendChild(core_li);

	for (var i = 0; i < mtn_emu_list.length; i++) {
		if(mtn_emu_list[i].emu_core !==""){
		var core_li = document.createElement('li');
		var core_name_div = document.createElement('div');
		var core_img_div = document.createElement('div');
		var core_div = document.createElement('div');
		var core_li_img = document.createElement('img');
		core_li.className = '弹窗表项';
		core_li_img.className = '弹窗表图标';
		if(mtn_emu_list[i].emu_ico !==""){
			core_li_img.src = ispath(mtn_emu_list[i].emu_ico);
		}
		core_li.value = mtn_emu_list[i].id;
		core_li.alt=mtn_emu_list[i].emu_name;
		core_name_div.textContent=mtn_emu_list[i].emu_name;
		core_li.addEventListener('click',async function() {
			await CefSharp.BindObjectAsync('indexViewBinding'); 
			await window.indexViewBinding.upcore_danghang_table(导航id,this.value);
			const ui_图片 = document.getElementById(图片id);
			ui_图片.textContent=this.alt;
			隐藏弹窗();
		});
		core_img_div.appendChild(core_li_img);
		core_div.appendChild(core_name_div);
		core_div.appendChild(core_img_div);
		core_li.appendChild(core_div);
		弹窗表.appendChild(core_li);
	}
	}
	//取消模拟器
	var emu_li = document.createElement('li');
	var emu_name_div = document.createElement('div');
	var emu_img_div = document.createElement('div');
	var emu_div = document.createElement('div');
	var emu_li_img = document.createElement('img');
	emu_li.className = '弹窗表项';
	emu_li_img.className = '弹窗表图标';
	emu_li_img.src ='set_js/del.png';
	emu_name_div.textContent = '取消模拟器';
	emu_li.addEventListener('click',async function() {	
		await CefSharp.BindObjectAsync('indexViewBinding'); 
		await window.indexViewBinding.upcore_danghang_table(导航id,'0');
		const ui_图片 = document.getElementById(图片id);
		ui_图片.textContent='无';
		隐藏弹窗();
	});
	emu_img_div.appendChild(emu_li_img);
	emu_div.appendChild(emu_name_div);
	emu_div.appendChild(emu_img_div);
	emu_li.appendChild(emu_div);
	弹窗表.appendChild(emu_li);
	弹窗.classList.add('show');
}

function 隐藏弹窗() {
	const 弹窗 = document.getElementById('弹窗');
	弹窗.classList.remove('show');
  }