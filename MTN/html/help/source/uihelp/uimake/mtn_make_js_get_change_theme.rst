切换分类脚本
=======================================================

.. image:: img/150.png

使用命令来切换分类。这样做与超链接切换的区别是会将分类id传给MTN软件并修改config表中的no_web字段的值使MTN软件关闭后下次会打开指定分类。

::

    <body>
    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        await change_theme("1");
        }
        }
    </script>
    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
