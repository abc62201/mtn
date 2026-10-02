var game_classify_id=0;
var currentPage=1;
var Page_no=24;
var game_classify_name={0:'全部'};
var sql_str='all';
var mtn_config= {};
async function mtn_init(){
  mtn_config=await get_mtn_config();

  mtn_config=JSON.parse(mtn_config);
  await joy_start(0);
  int_music();
  var classify_table= await get_classify_table_all();
  var game_classify_div = document.getElementById('SIDEBAR');
  var game_set_ul = document.getElementById('game_set_ul');
  var gameall_classify_no= await get_classify_game_no('all');
  var add_game_div = document.getElementById('add_game_div');
  var add_game_sample = document.getElementById('add_game_sample');
  
  var mnt_user=await get_user_intro();
  if(mnt_user==""){
    mnt_user = '{"user_audit":"普通用户","software_operation":"0"}';
  }
  mnt_user=JSON.parse(mnt_user);
  add_game_div.style.display = "none";
  add_game_sample.style.display = "block";
  game_classify_div.innerHTML='';
  game_classify_div.innerHTML+='<li class="fa fa-chevron-right" onclick="game_Search(\'classify_id\',0)"><a>全部</a>'
                              +'<span >数量:'+gameall_classify_no+'</span></li>';
  
  if (classify_table !== "") {
    const parsedResult = JSON.parse(classify_table);
    for (const item of parsedResult) {
      var classify_no= await get_classify_game_no(item.id);
      creat_classify_list(game_classify_div,item,classify_no);
      //game_classify_name.push(item.daohang_name);
      game_classify_name[item.id]=item.daohang_name;
    }   
  }
  game_set_ul.innerHTML='';
  
if(mnt_user['user_audit']=='管理员'||mnt_user['user_audit']=='尊敬的vip用户'||mnt_user['software_operation']=='1'){
  game_set_ul.innerHTML=`
  <li><a href="../../mtn_set.html">返回设置</a></li>
  <li><a style="color: #8a6d3b !important;" href="#">本地游戏</a></li>
  <li><a href="" onclick="enter_down_page1()">模拟器游戏下载</a></li>
  <li><a href="" onclick="torrent_up_web1()">游戏分享社区</a></li>
  <li><a href=""onclick="file_down_page1()">其他下载</a></li>
  <li><a href=""onclick="file_make_page1()">修改服务器资料</a></li>
  <li><a href="up_game.html">上传游戏</a></li>
  <li><a href="up_flie.html">上传文件</a></li>
  `;
}else{
  game_set_ul.innerHTML=`
  <li><a href="../../mtn_set.html">返回设置</a></li>
  <li><a style="color: #8a6d3b !important;" href="#">本地游戏</a></li>
  <li><a href="" onclick="torrent_up_web1()">游戏分享社区</a></li>
  <li><a href=""onclick="file_down_page1()">其他下载</a></li>
  <li><a href=""onclick="file_make_page1()">修改服务器资料</a></li>
  `;

}
  creat_game_tags();
  creat_page_game_title('全部',gameall_classify_no);
  var game_table= await get_game_table('all',Page_no,1);
  creat_game_rows(game_table);
  creat_gane_page(gameall_classify_no);
  
}
// 显示分页链接
async function creat_gane_page(classify_no) {
  var game_page_div = document.getElementById('game_page');
  game_page_div.innerHTML = '';
  game_no = game_classify_name[Number(game_classify_id)];

  // 第一页按钮
  var firstPageButton = document.createElement('button');
  firstPageButton.className = 'btn btn-primary';
  firstPageButton.textContent = '第一页';
  firstPageButton.onclick = function() {
      page_click(1, classify_no);
      // 移除所有分页按钮的 btn-warning 类，并添加 btn-primary 类
      var allPageButtons = game_page_div.querySelectorAll('button');
      allPageButtons.forEach(function(button) {
          button.classList.remove('btn-warning');
          button.classList.add('btn-primary');
      });
      // 为当前点击的分页按钮添加 btn-warning 类
      firstPageButton.classList.remove('btn-primary');
      firstPageButton.classList.add('btn-warning');
  };
  game_page_div.appendChild(firstPageButton);

  var game_Page = Math.max(Math.ceil(classify_no / Page_no), 1);
  for (var i = 1; i <= game_Page; i++) {
      var game_page_button = document.createElement('button');
      game_page_button.className = 'btn btn-primary';
      game_page_button.textContent = i;
      game_page_button.onclick = (function(button, pageNumber, gameCount) {
          return function() {
              page_click(pageNumber, gameCount);
              // 移除所有分页按钮的 btn-warning 类，并添加 btn-primary 类
              var allPageButtons = game_page_div.querySelectorAll('button');
              allPageButtons.forEach(function(item) {
                  item.classList.remove('btn-warning');
                  item.classList.add('btn-primary');
              });
              // 为当前点击的分页按钮添加 btn-warning 类
              button.classList.remove('btn-primary');
              button.classList.add('btn-warning');
          };
      })(game_page_button, i, classify_no);
      game_page_div.appendChild(game_page_button);

      // 如果是第一页后面的第一个按钮，设置其类为 btn-warning
      if (i === 1) {
          game_page_button.classList.remove('btn-primary');
          game_page_button.classList.add('btn-warning');
      }
  }
}
//按下分页链接
async function page_click(click_page,classify_no){
  currentPage=click_page;
  var game_table= await get_game_table(sql_str,Page_no,click_page);
  creat_page_game_title(game_classify_name[Number(game_classify_id)],classify_no);
  creat_game_rows(game_table);
}
//显示主要内容
async function creat_game_rows(game_table){
  var defaultThumbnail = 'img/thumbs/no_pic.png'; // 默认图片路径
  var page_game_title_div = document.getElementById('game_rows');
  page_game_title_div.innerHTML='';
  
  if (game_table !== "") {
    const parsedResult = JSON.parse(game_table);
    
    for (const item of parsedResult) {
      
      var game_article = document.createElement('article');     
      game_article.className='col-lg-2 col-md-6 col-sm-4';
      var game_post_div = document.createElement('div');
      game_post_div.className='post post-medium';
      var game_thumbr = document.createElement('div');
      game_thumbr.className='thumbr';
      var game_thumbr_a = document.createElement('a');
      game_thumbr_a.className='afterglow post-thumb';
      game_thumbr_a.setAttribute('data-lity', '');
      //添加点击事件
      game_thumbr_a.onclick = (function(game_id) {
        return function() {
          make_game_web(game_id);
        };
      })(item.id);
      var game_thumbr_img = document.createElement('img');
      game_thumbr_img.className='img-responsive';
      game_thumbr_img.src = ispath(item.game_thumb_path);
      
      loadSafeImage(game_thumbr_img, defaultThumbnail);
      game_thumbr_a.appendChild(game_thumbr_img);
      game_thumbr.appendChild(game_thumbr_a);
      
      var game_infor_div = document.createElement('div');
      game_infor_div.className='infor';
      
      var game_infor_h4 = document.createElement('h4');
      var game_infor_a = document.createElement('a');
      game_infor_a.className='title';
      game_infor_a.textContent = item.game_name;
      
      game_infor_h4.appendChild(game_infor_a);
      game_infor_div.appendChild(game_infor_h4);
      var game_infor_span = document.createElement('span');
      game_infor_span.className='badge bg-yellow';
      game_infor_span.textContent = game_classify_name[Number(item.classify_id)];
      game_infor_div.appendChild(game_infor_span);
      game_post_div.appendChild(game_thumbr);
      game_article.appendChild(game_post_div);
      game_post_div.appendChild(game_infor_div);
      page_game_title_div.appendChild(game_article);
    }
  }
}
function make_game_web(game_id){
  window.location.href = "set_game.html?game_id="+game_id;
}
//主要内容标题
async function creat_page_game_title(classify_name,classify_no){
  var game_Page =  Math.max(Math.floor(classify_no / Page_no), 1);
  var page_game_title_div = document.getElementById('page_game_title');
      page_game_title_div.innerHTML='';
      page_game_title_div.innerHTML+='<i class="fa fa-television" aria-hidden="true"></i>';
      if(game_classify_id==0){
        page_game_title_div.innerHTML+='全部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                     +game_Page+"/"+currentPage+'页';
      }else{
        page_game_title_div.innerHTML+=classify_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                     +game_Page+"/"+currentPage+'页';
      }
}
//创建标签
async function creat_game_tags(){
  var game_tags_div = document.getElementById('sidebar_tags');
  game_tags_div.innerHTML='';
  game_tags_div.innerHTML+='<div><h2 class="icon"><i class="fa fa-gears" aria-hidden="true"></i>标签</h2></div>';
  var game_tags= await get_game_tags_all(game_classify_id);
  if (game_tags.length !== 0) {
    for(const tag_str of game_tags) {
      var tag_div = document.createElement('div');
      var tag_span = document.createElement('span');
      var tag_a = document.createElement('a');
      tag_div.className='col-lg-6';
      tag_span.className='badge bg-yellow';      
      tag_a.textContent = tag_str;
      tag_a.onclick = (function(tag_str) {
        return function() {
          game_tags_name_sql(tag_str,'tags');
        };
      })(tag_str);
      tag_span.appendChild(tag_a);
      tag_div.appendChild(tag_span);
      game_tags_div.appendChild(tag_div);
    }
  }
}
//创建分类
function creat_classify_list(SIDEBAR_div,parsedResult,classify_no)
{

  var classify_li = document.createElement('li');
  var classify_a = document.createElement('a');
  var classify_span = document.createElement('span');     
  classify_li.className='fa fa-chevron-right';      
  //classify_a.href='#';
  classify_a.textContent = parsedResult.daohang_name;
  classify_li.onclick = (function(col,id) {
    return function() {
    game_Search(col,id);
            // 移除所有分类项的选中状态
            var allClassifyItems = SIDEBAR_div.querySelectorAll('li');
            allClassifyItems.forEach(function(item) {
                var aTag = item.querySelector('a');
                if (aTag) {
                    aTag.style.color = ''; // 移除颜色样式
                }
            });
            // 为当前点击的分类项添加选中状态
            classify_a.style.color = '#8a6d3b';
    };
  })('classify_id',parsedResult.id);     
  classify_span.textContent='数量:'+classify_no;
  classify_li.appendChild(classify_a);       
  classify_li.appendChild(classify_span);
  SIDEBAR_div.appendChild(classify_li); 
}
async function game_Search(col,id){
  var add_game_div = document.getElementById('add_game_div');
  var add_game_sample = document.getElementById('add_game_sample');
  game_classify_id=id;
 if (id !== 0){
  sql_str=col+'='+id;
  add_game_div.style.display = "block";
  add_game_sample.style.display = "none";
 }else{
  sql_str='all';
  add_game_div.style.display = "none";
  add_game_sample.style.display = "block";
 }
 creat_game_tags();
 
 var game_table= await get_game_table(sql_str,Page_no,1);
 var classify_no= await get_game_no(sql_str);
 creat_page_game_title(game_classify_name[Number(id)],classify_no);
 creat_gane_page(classify_no);
 creat_game_rows(game_table);
}

async function game_tags_name_sql(tags_name_str,type){
  var tags_name_sql='';
if (sql_str=='all' && type=='tags'){
  tags_name_sql="game_type LIKE '%"+tags_name_str+"%'";
}
else if (sql_str=='all' && type=='name'){
  tags_name_sql="game_name LIKE '%"+tags_name_str+"%'";
}
else if(type=='tags'){
  tags_name_sql=sql_str+" AND game_type LIKE '%"+tags_name_str+"%'";
}
else{
  tags_name_sql=sql_str+" AND game_name LIKE '%"+tags_name_str+"%'";
}
var game_table= await get_game_table(tags_name_sql,Page_no,1);
var classify_no= await get_game_no(tags_name_sql);

creat_page_game_title(game_classify_name[Number(game_classify_id)],classify_no);
creat_gane_page(classify_no);
creat_game_rows(game_table);
}

function game_so(){
  var searchIndicator = document.getElementById("rom_sch");
  var keyword=searchIndicator.value;
  if(keyword==''){
    alert('请输入关键字');
  }else{
    searchIndicator.value='';
    game_tags_name_sql(keyword,'name');
  }
}

async function enter_down_page1(){
  const result=await enter_down_page();

  if(result=='ok'){}else{alert(result);}
}
async function torrent_up_web1(){
  await CefSharp.BindObjectAsync('indexViewBinding');
  const result=await window.indexViewBinding.torrent_up_web();
  if(result=='ok'){}else{alert(result);}
}
async function file_down_page1(){
  const result=await file_down_page();
  if(result=='ok'){}else{alert(result);}
}
async function file_make_page1(){
  const result=await file_make_page();
  if(result=='ok'){}else{alert(result);}
}

//播放背景音乐
function bg_play_music(music_url) { 
  var audio = document.getElementById('backgroundMusic');  
  audio.src = music_url;
  audio.play();
}
// 暂停背景音乐
function bg_pause_music() {
  var audio = document.getElementById('backgroundMusic');
  audio.pause();
}
function int_music() {
  var audio = document.getElementById('backgroundMusic');
  if (int_music_value==0 && mtn_config[0]["set_music_ft"]=="1") {
    audio.addEventListener('ended', function () {
      gain_play_music();
    });
    gain_play_music();
    //audio.style.display = 'block';
  }
  if (int_music_value==0 && mtn_config[0]["set_music_ft"]=="0") {
   // audio.style.display = 'none';
  }
 int_music_value=2;
}
async function gain_play_music(){
  await CefSharp.BindObjectAsync('indexViewBinding'); 
  const result=await window.indexViewBinding.set_bg_music();
  if (result !== "") {
    bg_play_music(result);
  }
}