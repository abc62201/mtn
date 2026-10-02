async function del_bookmark_categories(){

    const customModal = document.getElementById('customModal');
    customModal.style.display = 'block';
    customModal.innerHTML='';
    var fen_div = document.createElement('div');
    fen_div.className='col-lg-12';
    fen_div.style.height='20px';

    var fen_div1 = document.createElement('div');
    fen_div1.className='col-lg-12';
    fen_div1.style.height='20px';


    var editBookmarkForm = document.createElement('form');  
    editBookmarkForm.id = 'editBookmarkForm';
    editBookmarkForm.className = 'editBookmarkForm'; 

    var editBookmarkForm_div1 = document.createElement('div');
    editBookmarkForm_div1.className='row'

    var form_label_div1 = document.createElement('div');
    form_label_div1.className='col-lg-4';
    var form_label_div2 = document.createElement('div');
    form_label_div2.className='col-lg-4 text-center h1';
    form_label_div2.innerText='删除分类';
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


    var editBookmarkForm_div4 = document.createElement('div');
    editBookmarkForm_div4.className='row'


   var button_fen = document.createElement('div');
   button_fen.className = "col-lg-2"

   var bookmarks_up_div = document.createElement('div');
   bookmarks_up_div.className = "col-lg-2"
   var bookmarks_up_button = document.createElement('button');
   bookmarks_up_button.className = "btn btn-primary";
   bookmarks_up_button.textContent = "确定";
   bookmarks_up_button.type = 'button';
   bookmarks_up_button.onclick=function() {
    del_categories();
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
    editBookmarkForm_div4.appendChild(button_fen);
    editBookmarkForm_div4.appendChild(bookmarks_up_div);
    editBookmarkForm_div4.appendChild(bookmarks_esc_div);

    editBookmarkForm.appendChild(editBookmarkForm_div1);
    editBookmarkForm.appendChild(editBookmarkForm_div2);
    editBookmarkForm.appendChild(editBookmarkForm_div4);

    customModal.appendChild(editBookmarkForm);
    loadCategories(bookmarks_classify_name);
}

async function del_categories() {
    const formData = del_get_categories();
    if (!formData.categoryId) {
        alert("分类为必填项！");
        return false;
    }
    await categories_del(formData);
    await mtn_init();
}
  // 获取表单数据
  function del_get_categories() {
    return {
        categoryId: document.getElementById('categorySelect').value,
    };
}