获取解析表的值脚本
=======================================================

.. image:: img/146.png

通过解析后的json表获取指定字段的值。

::

    <body>

    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        var 分类=await get_classify_table();
        var 分类列表=JSON.parse(分类);
        var 分类长度=分类列表.length;
         var rom数据库字符串=await get_game_table("classify_id=1",0,1,"ORDER BY id ASC");
         webno=分类列表[0].id;
        }
        }
    </script>
    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
