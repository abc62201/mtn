
async function mtn_user_web(){
	joy_start(0);
var web_obj = document.getElementById('main_content');
var web_txt='';
web_obj.innerHTML='';
await CefSharp.BindObjectAsync('indexViewBinding'); 
const result=await window.indexViewBinding.user_set_web();

if (result !== "") {
	const value = JSON.parse(result);
	web_txt+='<h2>当前选择：基础设置-用户登录设置</h2>'
	+'<h2>欢迎您的到来-'   
	+value['user_nickname']+'-'
	+value['user_audit']+'先生'	
	+'您剩余的童年币是:'+value['user_integral']
	+'</h2>'
	+'<div class="emu_button">'
	+'<button type="button"  onclick="user_change_pwd()">修改密码</button>'
	+'<button type="button" onclick="user_recharge_mtnb()">充值童年币</button>'
	+'<button type="button"  onclick="qiut_login()">退出登录</button></div>'
	+'<p>用1000童年币兑换vip服务，自动匹配已收集的游戏资料。感谢支持！给作者努力的找资料修复bug动力</p>'
	+'<div class="emu_button">'
	+'<button type="button"  onclick="mtn_vip()">1000B兑换vip</button></div>'
web_obj.innerHTML = web_txt;
}else{
	user_login_web();
}
}
//充值服务
async function user_recharge_mtnb(){
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.user_recharge_mtnb();
}
//修改密码
async function user_change_pwd(){
	var web_obj = document.getElementById('main_content');
	var web_txt='';
	web_txt+='<h2>当前选择：基础设置-修改用户密码</h2>'
		   +'<div class="emu_args_form">'
		   + '<form id="settingsForm">'
		   + '<div style="margin: 10px 10px 10px 10px;">'
		   +'<label for="country">用户名：</label>'
		   +'<input type="text"  id="user_name" name="user_name" style="margin: 0 10px 0 10px;"></div>'
		   + '<div style="margin: 10px 10px 10px 10px;">'
		   +'<label for="start_t">密码：</label>'
		   +'<input type="text"  id="user_pwd" name="user_pwd" style="margin: 0 10px 0 10px;"></div>'
		   + '<div style="margin: 10px 10px 10px 10px;">'
		   +'<label for="start_t">新密码：</label>'
		   +'<input type="text"  id="user_new_pwd" name="user_new_pwd" style="margin: 0 10px 0 10px;"></div>'
		   +'<div class="emu_button">'
		   +'<button type="button"  onclick="change_pwd()">确定</button>'
		   +'<button type="button" onclick="mtn_user_web()">取消</button></div>'
		   +'</form></div>';			
	web_obj.innerHTML = web_txt;
}
//修改密码
async function change_pwd(){
	
	var formDataObject = {};
	var user_name = document.getElementById("user_name").value;
	var user_pwd = document.getElementById("user_pwd").value;
	var user_pwd_new = document.getElementById("user_new_pwd").value;
	formDataObject['user_name'] = user_name;
	formDataObject['user_pwd'] = user_pwd;
	formDataObject['user_pwd_new'] = user_pwd_new;
	if(user_name == "" || user_pwd == ""|| user_pwd_new == ""){
		alert("请正确填写内容");
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.change_pwd(formDataObject);
	if(result == "ok"){
		alert("修改成功");
		mtn_user_web();
	}else{
		alert("修改失败");
	}
}
//退出登录
async function qiut_login(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.qiut_login();
	if(result=="ok"){
		user_login_web();
	}
}
//兑换vip
async function mtn_vip(){
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.mtn_vip();
	if(result=="ok"){
		alert("兑换成功");
	}else{
		alert(result);
	}
}
//用户登录
function user_login_web(){
	var web_obj = document.getElementById('main_content');
	var web_txt='';
	web_txt+='<h2>当前选择：基础设置-用户登录设置</h2>'
		   +'<div class="emu_args_form">'
		   + '<form id="settingsForm">'
		   + '<div style="margin: 10px 10px 10px 10px;">'
		   +'<label for="country">用户名：</label>'
		   +'<input type="text"  id="user_name" name="user_name" style="margin: 0 10px 0 10px;"></div>'
		   + '<div style="margin: 10px 10px 10px 10px;">'
		   +'<label for="start_t">密码：</label>'
		   +'<input type="password"  id="user_pwd" name="user_pwd" style="margin: 0 10px 0 10px;"></div>'
		   +'<div class="emu_button">'
		   +'<button type="button"  onclick="user_login()">登录</button>'
		   +'<button type="button" onclick="user_register_web()">注册</button></div>'
		   +'</form></div>';
	web_obj.innerHTML = web_txt;
	user_set_config();
	}
//获取用户名密码
async function user_set_config(){
	var user_name= document.getElementById('user_name');
	var user_pwd= document.getElementById('user_pwd');
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.user_set_config();
	if (result !== "") {
		user_name.value=result.split(';')[0];
		user_pwd.value=result.split(';')[1];
	}
}
//用户登录
async function user_login(){
	var user_name= document.getElementById('user_name').value;
	var user_pwd= document.getElementById('user_pwd').value;
	if(user_name==''||user_pwd==''){
		alert('请输入用户名密码');
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding'); 
	const result=await window.indexViewBinding.user_login(user_name,user_pwd);
	if (result == "ok") {
		mtn_user_web();				
	}else{
		alert(result);
	}
}
//用户注册
function user_register_web(){
	var web_obj = document.getElementById('main_content');
var web_txt='';
web_txt+='<h2>当前选择：基础设置-用户注册</h2>'
	   +'<div class="emu_args_form">'
	   + '<form id="settingsForm">'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="country">用户名：</label>'
	   +'<input type="text"  id="user_name" name="user_name" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="country">密码</label>'
	   +'<input type="text"  id="user_passwode" name="user_passwode" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">昵称：</label>'
	   +'<input type="text"  id="user_nickname" name="user_nickname" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">联系电话：</label>'
	   +'<input type="text"  id="user_phone" name="user_phone" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">邮箱：</label>'
	   +'<input type="text"  id="user_email" name="user_email" style="margin: 0 10px 0 10px;"></div>'
	   + '<div style="margin: 10px 10px 10px 10px;">'
	   +'<label for="start_t">QQ：</label>'
	   +'<input type="text"  id="user_qq" name="user_qq" style="margin: 0 10px 0 10px;"></div>'
	   +'<div class="emu_button">'
	   +'<button type="button"  onclick="user_register()">确定</button>'
	   +'<button type="button" onclick="mtn_user_web()">取消</button></div>'
	   +'</form></div>';
web_obj.innerHTML = web_txt;
}
// 用户注册
async function user_register(){
	var formDataObject = {};
	var user_name= document.getElementById('user_name').value;
	var user_passwode= document.getElementById('user_passwode').value;
	var user_nickname= document.getElementById('user_nickname').value;
	var user_phone= document.getElementById('user_phone').value;
	var user_email= document.getElementById('user_email').value;
	var user_qq= document.getElementById('user_qq').value;
	formDataObject['user_name']=user_name;
	formDataObject['user_passwode']=user_passwode;
	formDataObject['user_nickname']=user_nickname;
	formDataObject['user_phone']=user_phone;
	formDataObject['user_email']=user_email;
	formDataObject['user_qq']=user_qq;
	if(user_name==''||user_nickname==''||user_phone==''||user_email==''||user_qq==''||user_passwode==''){
		alert('请填全信息方便以后修改密码和找回');
		return;
	}
	await CefSharp.BindObjectAsync('indexViewBinding');
	const result=await window.indexViewBinding.user_register(formDataObject);
	if (result == "ok") {
		mtn_user_web();	
		alert('注册成功');			
	}
}