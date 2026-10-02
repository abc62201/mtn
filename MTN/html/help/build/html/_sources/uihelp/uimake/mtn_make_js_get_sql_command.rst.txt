数据库命令脚本
=======================================================

.. image:: img/149.png

数据库搜素命令。参考.net de sql数据库搜素命令

::

    <body>
    <script>
        function get_sql_command(sql_value,sql_command,sql_value2){
            var name_sql="";
            if(sql_command=="LIKE"){
                name_sql=sql_value +" "+ sql_command+ " '%"+sql_value2+"%'";
            }else{
            if (typeof sql_value2 === "string") { name_sql=sql_value+" "+sql_command+" '"+sql_value2+"'";
            }else{
                name_sql=sql_value+" "+sql_command+" "+sql_value2;
            }
            }
        return name_sql;
        }
    </script>
    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        get_sql_command("classify_id","=",0);
        }
        }
    </script>
    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
