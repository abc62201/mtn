//创建标签
async function creat_game_tags(){
    var game_tags_div = document.getElementById('sidebar_tags');
    game_tags_div.innerHTML='';
    game_tags_div.innerHTML+='<div><h2 class="icon"><i class="fa fa-gears" aria-hidden="true"></i>标签</h2></div>';
    var game_tags= await get_bookmarks_tags_all(bookmarks_classify_id);
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

  async function game_tags_name_sql(tags_name_str,type){
    var tags_name_sql='';
  if (sql_str=='all' && type=='tags'){
    tags_name_sql="bookmarks_Label LIKE '%"+tags_name_str+"%'";
  }
  else if (sql_str=='all' && type=='name'){
    tags_name_sql="bookmarks_name LIKE '%"+tags_name_str+"%'";
  }
  else if(type=='tags'){
    tags_name_sql=sql_str+" AND bookmarks_Label LIKE '%"+tags_name_str+"%'";
  }
  else{
    tags_name_sql=sql_str+" AND bookmarks_name LIKE '%"+tags_name_str+"%'";
  }

  var game_table= await get_bookmarks_table(tags_name_sql,Page_no,1);
  var classify_no= await get_bookmarks_no(tags_name_sql);
  
  creat_page_game_title(bookmarks_classify_name[Number(bookmarks_classify_id)],classify_no);
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