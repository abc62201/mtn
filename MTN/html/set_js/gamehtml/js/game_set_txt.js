async function add_gameset_txt(){
    let mtn_text=await gitmtn_txt_dict(); 
    document.getElementById("game_ver_txt").innerText= mtn_text['csv_column_column4'];
    document.getElementById("game_score_txt").innerText= mtn_text['csv_column_column10'];
    document.getElementById("game_players_txt").innerText= mtn_text['csv_column_column5'];
    document.getElementById("game_issuing_date_txt").innerText= mtn_text['csv_column_column6'];
    document.getElementById("game_developer_txt").innerText= mtn_text['csv_column_column7'];
    document.getElementById("game_publisher_txt").innerText= mtn_text['csv_column_column8'];
    document.getElementById("game_language_txt").innerText= mtn_text['csv_column_column9'];
    document.getElementById("game_type_txt").innerText= mtn_text['csv_column_column3'];
}