async function up_game_rom(){
  var server_select = document.getElementById('server_select');
  if(server_select.value==0){
    alert('请选择服务游戏分类');
    return;
  }
  var file_md5 = document.getElementById('file_md5');
  if(file_md5.value==''){
    alert('计算文件MD5失败');
    return;
  }
  form_rom_Object['file_md5']=file_md5.value;

  var game_run_file = document.getElementById('game_run_file');
  if(game_run_file.value==''){
    alert('请选择游戏文件');
    return;
  }
  form_rom_Object['game_run_file']=game_run_file.value;

  var game_name_input = document.getElementById('ch_name');
  if(game_name_input.value==''){
    form_rom_Object['ch_name']=await getFileNamenoext(game_run_file.value);;
  }
  form_rom_Object['ch_name']=game_name_input.value;

  var game_zip_file = document.getElementById('game_zip_file');
  form_rom_Object['game_zip_file']=game_zip_file.value;

  var game_ips_file = document.getElementById('game_ips_file');
  form_rom_Object['game_ips_file']=game_ips_file.value;

  var emu_args = document.getElementById('emu_args');
  form_rom_Object['emu_args']=emu_args.value;

  var thumbnail = document.getElementById('thumbnail');
  form_rom_Object['thumbnail']=thumbnail.alt;

  var cassette = document.getElementById('cassette');
  form_rom_Object['cassette']=cassette.alt;
  
  var video = document.getElementById('video');
  form_rom_Object['video']=video.alt;

  var ui_bj = document.getElementById('ui_bj');
  form_rom_Object['ui_bj']=ui_bj.alt;

  var game_type = document.getElementById('game_type');
  form_rom_Object['game_type']=game_type.innerText;

  var game_ver = document.getElementById('game_ver');
  form_rom_Object['game_ver']=game_ver.innerText;

  var game_score = document.getElementById('game_score');
  var value = game_score.innerText.trim(); // 去除前后空白
  var value = value.replace(/\D/g, '');
  var numvalue=parseInt(value, 10);
  if (!isNaN(numvalue)) {
    game_score.innerText = value;
      if (numvalue > 5) {
        game_score.innerText = '5';
    } 
  }
   else{
    game_score.innerText = '0';
  }
  form_rom_Object['game_score']=game_score.innerText;

  var game_players = document.getElementById('game_players');
  var value = game_players.innerText.trim(); // 去除前后空白
  var value = value.replace(/\D/g, '');
  var numvalue=parseInt(value, 10);
  if (isNaN(numvalue)) {
    game_players.innerText = '0';
  }else{
    game_players.innerText = value;
  }
  form_rom_Object['game_players']=game_players.innerText;

  var game_issuing_date = document.getElementById('game_issuing_date');
  form_rom_Object['game_issuing_date']=game_issuing_date.innerText;

  var game_developer = document.getElementById('game_developer');
  form_rom_Object['game_developer']=game_developer.innerText;

  var game_publisher = document.getElementById('game_publisher');
  form_rom_Object['game_publisher']=game_publisher.innerText;

  var game_language = document.getElementById('game_language');
  form_rom_Object['game_language']=game_language.innerText;

  var flagImage = document.getElementById('flagImage');
  form_rom_Object['national_flag']=flagImage.alt;

  form_rom_Object['game_intro_path']=mtn_intro_path;

  var game_title_path = document.getElementById('game_title_path');
  form_rom_Object['game_title_path']=game_title_path.alt;

  var game_ico = document.getElementById('game_ico');
  form_rom_Object['game_ico']=game_ico.alt;

  var game_screenshot_path = document.getElementById('game_screenshot_path');
  form_rom_Object['game_screenshot_path']=game_screenshot_path.alt;

  var game_cover_path = document.getElementById('game_cover_path');
  form_rom_Object['game_cover_path']=game_cover_path.alt;

  var game_circuit_path = document.getElementById('game_circuit_path');
  form_rom_Object['game_circuit_path']=game_circuit_path.alt;

  var game_box_path = document.getElementById('game_box_path');
  form_rom_Object['game_box_path']=game_box_path.alt;

  var game_poster_path = document.getElementById('game_poster_path');
  form_rom_Object['game_poster_path']=game_poster_path.alt;

  var game_logo_path = document.getElementById('game_logo_path');
  form_rom_Object['game_logo_path']=game_logo_path.alt;

  var game_role_paht = document.getElementById('game_role_paht');
  form_rom_Object['game_role_paht']=game_role_paht.alt;

  var game_magazine = document.getElementById('game_magazine');
  form_rom_Object['game_magazine']=game_magazine.alt;
  
  var game_players = document.getElementById('pay_f');
  var value = game_players.value.trim(); // 去除前后空白
  var value = value.replace(/\D/g, '');
  var numvalue=parseInt(value, 10);
  if (isNaN(numvalue)) {
    game_players.value = '0';
  }else{
    game_players.value = value;
  }
  form_rom_Object['pay_f']=game_players.value;

  var author_m = document.getElementById('author_m');
  form_rom_Object['author_m']=author_m.value;

  var up_result=await up_game_rom_fileandinrto(form_rom_Object);
  if (up_result=="ok"){
    alert("上传成功");
    document.getElementById('progress').style.display = 'none';
  }else{
    alert(up_result);
  }
 // alert(form_rom_Object['author_m']);

}