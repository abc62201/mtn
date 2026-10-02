//声明工作区全局变量
var myworkspace = null;
async function mtn_init(){
  await joy_start(0);
}
//禁用快
function jinyongkuai(kuai_name){
  const toolboxElement = document.getElementById('toolbox');
  const targetBlock = toolboxElement.querySelector('block[type="' + kuai_name+'"]');
  targetBlock.setAttribute("disabled", "true");
}

//启用块
function qiyongkuai(kuai_name){
  const toolboxElement = document.getElementById('toolbox');
  const targetBlock = toolboxElement.querySelector('block[type="' + kuai_name+'"]');
  targetBlock.removeAttribute("disabled");
}
//管理这里块的使用
function kuaiguli(workspace) {
  myworkspace=workspace;
  workspace.registerButtonCallback('blockly_add_img', blockly_add_img);
  workspace.registerButtonCallback('blockly_add_img_b6', blockly_add_img_b6);
  workspace.registerButtonCallback('blockly_add_video', blockly_add_video);
  workspace.registerButtonCallback('blockly_add_music', blockly_add_music);
  workspace.registerButtonCallback('blockly_add_script', blockly_add_script);
  workspace.registerButtonCallback('blockly_add_font', blockly_add_font);
  workspace.registerButtonCallback('blockly_add_example', blockly_add_example);
  workspace.registerButtonCallback('blockly_server_example', blockly_server_example);
    return function (masterEvent) {
//禁用块

 if (masterEvent.type === Blockly.Events.CREATE) { 
    const newBlock = masterEvent.blockId ? workspace.getBlockById(masterEvent.blockId) : null;
    if (newBlock && newBlock.type == 'mtn_make_style') { 
      jinyongkuai(newBlock.type);
    }else if(newBlock.type == 'mtn_make_html'){
        jinyongkuai(newBlock.type);
    }
  }
//启用块
  if (masterEvent.type === Blockly.Events.DELETE) { // 处理删除事件
    const deletedBlockType = masterEvent.oldXml.getAttribute('type'); // 获取被删除块的类型
    if (deletedBlockType === 'mtn_make_style') { // 替换为要监测的特定块类型
      qiyongkuai(deletedBlockType); // 启用 mtn_make_style 块
    }else if(deletedBlockType === 'mtn_make_html'){
        qiyongkuai(deletedBlockType);
    }
  }


    };
  }
  async function blockly_add_img() {
    // 确保myworkspace已被正确初始化
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.blockly_file_path();
    if(result !=""){
      var xmlStr = '<xml> <block type="file_img"> <value name="file_img_paht"> <shadow type="text"> <field name="TEXT">'+result+'</field> </shadow> </value> </block></xml>';
      // 解析XML字符串为DOM对象
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      // 将整个DOM对象插入到工作区
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      // 检查工作区的顶级块是否是我们刚刚添加的
      var topBlock = myworkspace.getTopBlocks()[0];
    }    
  }
  async function blockly_add_img_b6() {
    // 确保myworkspace已被正确初始化
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
		const result=await gei_file_path();
    const img_b6=await fileToBase64(result);
    if(result !=""){
      var xmlStr = '<xml> <block type="file_img_base64"> <value name="img_base64"> <shadow type="math_number"> <field name="NUM">'+img_b6+'</field> </shadow> </value> </block></xml>';
      // 解析XML字符串为DOM对象
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      // 将整个DOM对象插入到工作区
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      // 检查工作区的顶级块是否是我们刚刚添加的
      var topBlock = myworkspace.getTopBlocks()[0];
    }    
  }
  
  async function blockly_add_video() {
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.blockly_file_path();
    if(result !=""){
      var xmlStr = '<xml> <block type="file_video"> <value name="file_video_paht"> <shadow type="text"> <field name="TEXT">'+result+'</field> </shadow> </value> </block></xml>';
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      var topBlock = myworkspace.getTopBlocks()[0];
    }   
  }
  async function blockly_add_music() {
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.blockly_file_path();
    if(result !=""){
      var xmlStr = '<xml> <block type="file_music"> <value name="file_music_paht"> <shadow type="text"> <field name="TEXT">'+result+'</field> </shadow> </value> </block></xml>';
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      var topBlock = myworkspace.getTopBlocks()[0];
    }   
  }
  async function blockly_add_script() {
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding'); 	
		const result=await window.indexViewBinding.blockly_file_path();
    if(result !=""){
      var xmlStr = '<xml> <block type="file_script"> <value name="file_script_paht"> <shadow type="math_number"> <field name="NUM">&lt;script src="'+result+'"&gt;&lt;/script&gt;</field> </shadow> </value> </block></xml>';
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      var topBlock = myworkspace.getTopBlocks()[0];
    }   
  }

  async function blockly_add_font() {
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding');
  const result=await window.indexViewBinding.blockly_file_path();
    if(result !=""){
      var xmlStr = '<xml> <block type="file_font"> <value name="file_font_paht"> <shadow type="text"> <field name="TEXT">'+result+'</field> </shadow> </value> </block></xml>';
      var xmlDom = Blockly.Xml.textToDom(xmlStr);
      Blockly.Xml.domToWorkspace(xmlDom, myworkspace);
      var topBlock = myworkspace.getTopBlocks()[0];
    }
  }
  // 定义一个通用的警告设置函数
function seterror(block, desiredParentType, warningMessage) {
    var surroundParent = block.getSurroundParent();
    if (surroundParent && surroundParent.type === desiredParentType) {
      block.setWarningText(null);
    } else {
      block.setWarningText(warningMessage);
    }
  }
//打开xml文件读取主题
  async function openxmlfile(){
    await CefSharp.BindObjectAsync('indexViewBinding');	
    const result=await window.indexViewBinding.read_xml();
    if (result !== "") {
      if(preview_code){
        Blockly.mainWorkspace.clear(); // 清除当前工作区中的所有块  
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(result), Blockly.mainWorkspace); // 从 XML 字符串加载块到工作区
      }else{
        editor.setValue(result, -1);
      }

    }
  }
  //保存xml文件
  async function savexmlfile(){
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    await CefSharp.BindObjectAsync('indexViewBinding');
    await window.indexViewBinding.savexmlfile(xmlText);
  }
  //保存html文件生成主题
  async function savehtmlfile(){
    if(preview_code){
    var code = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace) || '';
    var chinese_code = code.replace(/(_[0-9A-F]{2}_[0-9A-F]{2}_[0-9A-F]{2})+/g, function (s) { return decodeURIComponent(s.replace(/_/g, '%')); });
    await CefSharp.BindObjectAsync('indexViewBinding');
    await window.indexViewBinding.blockly_html_write(chinese_code);
    }else{
      await CefSharp.BindObjectAsync('indexViewBinding');
      await window.indexViewBinding.blockly_html_write(Write_preview_code);
    }
  }
  
  function saveXmlToLocalDisk(xmlText, fileName) {
    // 创建Blob对象，将XML文本作为UTF-8编码的文本数据
    const blob = new Blob([xmlText], { type: 'application/xml;charset=utf-8' });
  
    // 创建一个指向Blob的URL（临时下载链接）
    const url = URL.createObjectURL(blob);
  
    // 创建隐藏的可下载链接
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = url;
    downloadLink.download = fileName; // 设置下载后的文件名
  
    // 将下载链接添加到文档中，触发点击事件下载文件，然后移除链接
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  
    // 释放URL对象
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 0);
  }

  async function blockly_server_example() {
    // 确保myworkspace已被正确初始化
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
      }
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    await CefSharp.BindObjectAsync('indexViewBinding');
    await window.indexViewBinding.savexmlfile_example(xmlText);
  }
  
  async function blockly_add_example() {
    // 确保myworkspace已被正确初始化
    if (!myworkspace) {
      console.error("工作区未初始化");
      return;
    }
    await CefSharp.BindObjectAsync('indexViewBinding');	
    const result=await window.indexViewBinding.read_example();
    if (result !== "") {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(result), Blockly.mainWorkspace); // 从 XML 字符串加载块到工作区
    }
  }
