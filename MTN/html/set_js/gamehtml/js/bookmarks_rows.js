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
            open_bookmarks(game_id);
          };
        })(item.id);
          // 右键点击事件
        game_thumbr_a.oncontextmenu = (function(game_id) {
            return function(e) {
            showContextMenu(e, game_id); // 显示右键菜单并传入当前 id
            };
         })(item.id);
        var game_thumbr_img = document.createElement('img');
        game_thumbr_img.className='img-responsive';
        game_thumbr_img.src = ispath(item.bookmarks_img);
        
        loadSafeImage(game_thumbr_img, defaultThumbnail);
        game_thumbr_a.appendChild(game_thumbr_img);
        game_thumbr.appendChild(game_thumbr_a);
        
        var game_infor_div = document.createElement('div');
        game_infor_div.className='infor';
        
        var game_infor_h4 = document.createElement('h4');
        var game_infor_a = document.createElement('a');
        game_infor_a.className='title';
        game_infor_a.textContent = item.bookmarks_name;
        
        game_infor_h4.appendChild(game_infor_a);
        game_infor_div.appendChild(game_infor_h4);
        var game_infor_span = document.createElement('span');
        //game_infor_span.className='badge bg-yellow';
        game_infor_span.className = 'text-muted';
        game_infor_span.style.fontSize = '0.9em';
        let categoryName = bookmarks_classify_name[Number(item.category_id)] || '';
        categoryName=categoryName+':'+item.bookmarks_explain;
        if (categoryName.length > 30) {
            categoryName = categoryName.substring(0, 30) + '...'; // 超出部分用 ... 替代
        }
        game_infor_span.textContent = categoryName;
        game_infor_div.appendChild(game_infor_span);
        game_post_div.appendChild(game_thumbr);
        game_article.appendChild(game_post_div);
        game_post_div.appendChild(game_infor_div);
        page_game_title_div.appendChild(game_article);
      }
    }
  }

  // 显示右键菜单
function showContextMenu(e, gameId) {
    e.preventDefault(); // 阻止默认浏览器右键菜单
    currentGameId = gameId;
  
    const menu = document.getElementById('customContextMenu');
    menu.style.left = e.pageX + 'px';
    menu.style.top = e.pageY + 'px';
    menu.style.display = 'block';
  }
  
  // 隐藏右键菜单
  function hideContextMenu() {
    document.getElementById('customContextMenu').style.display = 'none';
  }
  
  // 点击页面其他地方隐藏菜单
  document.addEventListener('click', function () {
    hideContextMenu();
  });

  // 显示模态框并加载当前收藏数据
  async function showEditModal() {
    creat_modify_modal();
    var game_sql="id = "+currentGameId;
    var game_table= await get_bookmarks_table(game_sql,0,1);
    if (game_table !== "") {
        const bookmarkData = JSON.parse(game_table);
        for (const item of bookmarkData) {
            
            //document.getElementById('bookmarkId').value = currentGameId;
            document.getElementById('bookmarkName').value = item.bookmarks_name || '';
           document.getElementById('bookmarkUrl').value = item.bookmarks_path || '';
         document.getElementById('bookmarkDescription').value = item.bookmarks_explain || '';
        document.getElementById('bookmarkTags').value = item.bookmarks_Label || '';
                    // 设置图片预览
       const imgPreview = document.getElementById('bookmarkImagePreview');
       imgPreview.src = ispath(item.bookmarks_img) || 'img/thumbs/no_pic.png';
       imgPreview.addEventListener('dblclick', function () {
        getSelectedimgPath(); // 双击后打开文件选择
    });
        // 加载分类选项
        loadCategories(item.category_id);
        }             
    }
  }
  // 获取选择图片的函数
  async function getSelectedimgPath() {
    var filePath = await gei_file_path();
    if (!filePath) return;
    var imgPreview = document.getElementById('bookmarkImagePreview');
    imgPreview.src = ispath(filePath); // 更新图片预览
}
    //获取选择文件的地址
    async function getSelectedFilePath() {
        var file_paht= await gei_file_path();
        if (file_paht === "") {
          return;
        }
        var bookmarkUrl = document.getElementById('bookmarkUrl');
        bookmarkUrl.value=file_paht;
      }
  // 加载分类到下拉框
  async function loadCategories(selectedCategoryId) {
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.innerHTML = '';
    const categories = await get_fav_menu(); // 调用后端获取分类列表
    if (categories) {
      categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.text = cat.category_name;
        
        if (cat.id == selectedCategoryId) option.selected = true;
        categorySelect.appendChild(option);
      });
    }
  }



  // 获取表单数据
function getFormData() {
    return {
        bookmarks_id:currentGameId,
        categoryId: document.getElementById('categorySelect').value,
        name: document.getElementById('bookmarkName').value.trim(),
        url: document.getElementById('bookmarkUrl').value.trim(),
        tags: document.getElementById('bookmarkTags').value.trim(),
        description: document.getElementById('bookmarkDescription').value.trim(),
        imageUrl: decodeURIComponent(document.getElementById('bookmarkImagePreview').src)
    };
}

//修改个人收藏数据
async function updateBookmark() { 
    const formData = getFormData();
    if (!formData.name || !formData.url) {
        alert("名称和地址为必填项！");
        return false;
    }
    modify_bookmarks(formData);
    refreshBookmarks();
}
//刷新个人收藏页面
async function refreshBookmarks() {
    var game_table= await get_bookmarks_table(sql_str,Page_no,1);
    creat_game_rows(game_table);
}