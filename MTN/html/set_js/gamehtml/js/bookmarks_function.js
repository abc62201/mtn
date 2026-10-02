async function game_Search(col,id){
    bookmarks_classify_id=id;
   if (id !== 0){
    sql_str=col+'='+id;
   }else{
    sql_str='all';
   }
   creat_game_tags();
   var game_table= await get_bookmarks_table(sql_str,Page_no,1);
   var classify_no= await get_bookmarks_no(sql_str);
   creat_page_game_title(bookmarks_classify_name[Number(id)],classify_no);
   creat_gane_page(classify_no);
   creat_game_rows(game_table);
  }


  //创建修改信息模态框
  function creat_modify_modal(){
    const customModal = document.getElementById('customModal');
    customModal.style.display = 'block';
    customModal.innerHTML='';
    var editBookmarkForm = document.createElement('form');  
    editBookmarkForm.id = 'editBookmarkForm';
    editBookmarkForm.className = 'editBookmarkForm'; 

    var editBookmarkForm_div1 = document.createElement('div');
    editBookmarkForm_div1.className='row'

    var fen_div = document.createElement('div');
    fen_div.className='col-lg-12';
    fen_div.style.height='20px';

    var form_label_div1 = document.createElement('div');
    form_label_div1.className='col-lg-4';
    var form_label_div2 = document.createElement('div');
    form_label_div2.className='col-lg-4 text-center h1';
    form_label_div2.innerText='修改资料';
    var form_label_div3 = document.createElement('div');
    form_label_div3.className='col-lg-4';

    var editBookmarkForm_div2 = document.createElement('div');
    editBookmarkForm_div2.className='row'
    var categorySelect_label_div = document.createElement('div');
    categorySelect_label_div.className='col-lg-2 text-center';
    var categorySelect_label = document.createElement('label');
    categorySelect_label.for = "categorySelect";
    categorySelect_label.className = "form-label";
    categorySelect_label.textContent = '分类';
    categorySelect_label_div.appendChild(categorySelect_label);
    var categorySelect_div = document.createElement('div');
    categorySelect_div.className='col-lg-4';
    var categorySelect = document.createElement('select');
    categorySelect.id = "categorySelect";
    categorySelect.className = "form-select";
    categorySelect_div.appendChild(categorySelect);

    var bookmarkName_label_div = document.createElement('div');
    bookmarkName_label_div.className='col-lg-2 text-center';
    var bookmarkName_label = document.createElement('label');
    bookmarkName_label.for = "categorySelect";
    bookmarkName_label.className = "form-label";
    bookmarkName_label.textContent = '名称';
    var bookmarkName_input_div = document.createElement('div');
    bookmarkName_input_div.className = 'col-lg-3';
    var bookmarkName_input = document.createElement('input');
    bookmarkName_input.id="bookmarkName";
    bookmarkName_input.className = "my-form-input"; 
    bookmarkName_label_div.appendChild(bookmarkName_label);
    bookmarkName_input_div.appendChild(bookmarkName_input);

    var editBookmarkForm_div3 = document.createElement('div');
    editBookmarkForm_div3.className='row'
    var bookmarkUrl_label_div = document.createElement('div');
    bookmarkUrl_label_div.className='col-lg-2 text-center';
    var bookmarkUrl_label = document.createElement('label');
    bookmarkUrl_label.for = "bookmarkUrl";
    bookmarkUrl_label.className = "form-label";
    bookmarkUrl_label.textContent = '地址';
    var bookmarkUrl_input_div = document.createElement('div');
    bookmarkUrl_input_div.className = 'col-lg-8';
    var bookmarkUrl_input = document.createElement('input');
    bookmarkUrl_input.id="bookmarkUrl";
    bookmarkUrl_input.className = "my-form-input"; 
    var bookmarkUrl_button_div = document.createElement('div');
    bookmarkUrl_button_div.className = "col-lg-2"
    var bookmarkUrl_button = document.createElement('button');
    bookmarkUrl_button.className = "btn btn-primary";
    bookmarkUrl_button.textContent = "选择文件";
    bookmarkUrl_button.type = 'button';
    bookmarkUrl_button.onclick=function() {
        getSelectedFilePath();
    };
    bookmarkUrl_label_div.appendChild(bookmarkUrl_label);
    bookmarkUrl_input_div.appendChild(bookmarkUrl_input);
    bookmarkUrl_button_div.appendChild(bookmarkUrl_button);



    var editBookmarkForm_div4 = document.createElement('div');
    editBookmarkForm_div4.className='row'
    var zhan_div = document.createElement('div');
    zhan_div.className='col-lg-1 text-center';
    var bookmarkImage_div = document.createElement('div');
    bookmarkImage_div.className='col-lg-4 text-center';
    var bookmarkImage_label = document.createElement('label');
    bookmarkImage_label.for = "bookmarkImage";
    bookmarkImage_label.className = "form-label";
    bookmarkImage_label.textContent = '封面图片';
    var bookmarkImage_img = document.createElement('img');
    bookmarkImage_img.id = "bookmarkImagePreview";
    bookmarkImage_img.className = "img-responsive";
    bookmarkImage_div.appendChild(bookmarkImage_label);
    bookmarkImage_div.appendChild(bookmarkImage_img);

    
   //var editBookmarkForm_div3 = document.createElement('div');
   //editBookmarkForm_div3.className='row'
   var bookmarkTags_label_div = document.createElement('div');
   bookmarkTags_label_div.className='col-lg-2 text-center';
   var bookmarkTags_label = document.createElement('label');
   bookmarkTags_label.for = "bookmarkTags";
   bookmarkTags_label.className = "form-label";
   bookmarkTags_label.textContent = '标签用分号分隔';
   var bookmarkTags_input_div = document.createElement('div');
   bookmarkTags_input_div.className = 'col-lg-4';
   var bookmarkTags_input_input = document.createElement('input');
   bookmarkTags_input_input.id="bookmarkTags";
   bookmarkTags_input_input.className = "my-form-input"; 

   bookmarkTags_label_div.appendChild(bookmarkTags_label);
   bookmarkTags_input_div.appendChild(bookmarkTags_input_input);

    //var editBookmarkForm_div3 = document.createElement('div');
   //editBookmarkForm_div3.className='row'
   var bookmarkDescription_label_div = document.createElement('div');
   bookmarkDescription_label_div.className='col-lg-2 text-center';
   var bookmarkDescription_label = document.createElement('label');
   bookmarkDescription_label.for = "bookmarkDescription";
   bookmarkDescription_label.className = "form-label";
   bookmarkDescription_label.textContent = '简介';
   var bookmarkDescription_textarea_div = document.createElement('div');
   bookmarkDescription_textarea_div.className = 'col-lg-4';
   var bookmarkDescription_textarea = document.createElement('textarea');
   bookmarkDescription_textarea.id="bookmarkDescription";
   bookmarkDescription_textarea.className = "my-form-textarea"; 
   bookmarkDescription_textarea.rows = "3";
   bookmarkDescription_label_div.appendChild(bookmarkDescription_label);
   bookmarkDescription_textarea_div.appendChild(bookmarkDescription_textarea);

   var button_fen = document.createElement('div');
   button_fen.className = "col-lg-2"

   var bookmarks_up_div = document.createElement('div');
   bookmarks_up_div.className = "col-lg-2"
   var bookmarks_up_button = document.createElement('button');
   bookmarks_up_button.className = "btn btn-primary";
   bookmarks_up_button.textContent = "确定";
   bookmarks_up_button.type = 'button';
   bookmarks_up_button.onclick=function() {
    updateBookmark();
    customModal.style.display = 'none';
    customModal.innerHTML='';
   };
   var bookmarks_esc_div = document.createElement('div');
   bookmarks_esc_div.className = "col-lg-2"
   var bookmarks_esc_button = document.createElement('button');
   bookmarks_esc_button.className = "btn btn-primary";
   bookmarks_esc_button.textContent = "取消";
   bookmarks_esc_button.type = 'button';
   bookmarks_esc_button.onclick=function() {
    customModal.style.display = 'none';
    customModal.innerHTML='';
   };
   bookmarks_up_div.appendChild(bookmarks_up_button);
   bookmarks_esc_div.appendChild(bookmarks_esc_button);

    editBookmarkForm_div1.appendChild(form_label_div1);
    editBookmarkForm_div1.appendChild(form_label_div2);
    editBookmarkForm_div1.appendChild(form_label_div3);
    editBookmarkForm_div2.appendChild(categorySelect_label_div);
    editBookmarkForm_div2.appendChild(categorySelect_div);
    editBookmarkForm_div2.appendChild(bookmarkName_label_div);
    editBookmarkForm_div2.appendChild(bookmarkName_input_div);
    editBookmarkForm_div3.appendChild(bookmarkUrl_label_div);
    editBookmarkForm_div3.appendChild(bookmarkUrl_input_div);
    editBookmarkForm_div3.appendChild(bookmarkUrl_button_div);
    editBookmarkForm_div4.appendChild(fen_div);
    editBookmarkForm_div4.appendChild(zhan_div);
    editBookmarkForm_div4.appendChild(bookmarkImage_div);
    editBookmarkForm_div4.appendChild(bookmarkTags_label_div);
    editBookmarkForm_div4.appendChild(bookmarkTags_input_div);
    editBookmarkForm_div4.appendChild(bookmarkDescription_label_div);
    editBookmarkForm_div4.appendChild(bookmarkDescription_textarea_div);
    editBookmarkForm_div4.appendChild(button_fen);
    editBookmarkForm_div4.appendChild(bookmarks_up_div);
    editBookmarkForm_div4.appendChild(bookmarks_esc_div);

    editBookmarkForm.appendChild(editBookmarkForm_div1);
    editBookmarkForm.appendChild(editBookmarkForm_div2);
    editBookmarkForm.appendChild(editBookmarkForm_div3);
    editBookmarkForm.appendChild(editBookmarkForm_div4);
    customModal.appendChild(editBookmarkForm);
  }