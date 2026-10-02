获取游戏列表脚本
=======================================================

.. image:: img/145.png

使用MTN软件将数据库中的mtn_rom表发送给UI使用。在使用rom表前需要进行数据搜索，例如通过分类搜索。

.. image:: img/141.png

.. image:: img/142.png

注意一次性的数据过多会导致浏览器卡顿，所以需要分页。

.. image:: img/143.png

.. image:: img/144.png

    
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
        }
        }
    </script>
    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
