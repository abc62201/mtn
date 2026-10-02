var bookmarks_classify_id=0;
var currentPage=1;
var Page_no=24;
var bookmarks_classify_name={0:'全部'};
var sql_str='all';
let currentGameId = 0;
var mtn_config= {};
async function mtn_init(){
    mtn_config=await get_mtn_config();
  
    mtn_config=JSON.parse(mtn_config);
    await joy_start(0);
    int_music();
    var classify_table= await get_fav_menu();
    var game_classify_div = document.getElementById('SIDEBAR');
    game_classify_div.innerHTML='';

   var bookmarks_count= await get_fav_list_count('all');
    
    game_classify_div.innerHTML+='<li class="fa fa-chevron-right" onclick="game_Search(\'category_id\',0)"><a>全部</a>'
    +'<span >数量:'+bookmarks_count+'</span></li>';
    if (classify_table !== "") {
        for (const item of classify_table) {
            var classify_no= await get_fav_list_count(item.id);
            creat_classify_list(game_classify_div,item,classify_no);
            bookmarks_classify_name[item.id]=item.category_name;
      }}
      creat_game_tags();
      creat_page_game_title('全部',bookmarks_count);
      creat_gane_page(bookmarks_count);
      var game_table= await get_bookmarks_table('all',Page_no,1);
      creat_game_rows(game_table);
}

//创建分类
function creat_classify_list(SIDEBAR_div,parsedResult,classify_no)
{

  var classify_li = document.createElement('li');
  var classify_a = document.createElement('a');
  var classify_span = document.createElement('span');     
  classify_li.className='fa fa-chevron-right';      
  //classify_a.href='#';
  classify_a.textContent = parsedResult.category_name;
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
  })('category_id',parsedResult.id);     
  classify_span.textContent='数量:'+classify_no;
  classify_li.appendChild(classify_a);       
  classify_li.appendChild(classify_span);
  SIDEBAR_div.appendChild(classify_li); 
}

//主要内容标题
async function creat_page_game_title(classify_name,classify_no){
    
    var game_Page =  Math.max(Math.floor(classify_no / Page_no), 1);
    
    var page_game_title_div = document.getElementById('page_game_title');
        page_game_title_div.innerHTML='';
        page_game_title_div.innerHTML+='<i class="fa fa-television" aria-hidden="true"></i>';
        if(bookmarks_classify_id==0){
          page_game_title_div.innerHTML+='全部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                       +game_Page+"/"+currentPage+'页';
        }else{
          page_game_title_div.innerHTML+=classify_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                       +game_Page+"/"+currentPage+'页';
        }
  }


  // 显示分页链接
async function creat_gane_page(classify_no) {
    var game_page_div = document.getElementById('game_page');
    game_page_div.innerHTML = '';
    game_no = bookmarks_classify_name[Number(bookmarks_classify_id)];
  
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
    var game_table= await get_bookmarks_table(sql_str,Page_no,click_page);
    creat_page_game_title(bookmarks_classify_name[Number(game_classify_id)],classify_no);
    creat_game_rows(game_table);
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