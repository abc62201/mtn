新窗口打开网页脚本
=======================================================

.. image:: img/157.png

输入网站地址注意要写http或https网站协议，新窗口打开网站。例如www.baidu.com 应写为 https://www.baidu.com

::

    <body>
    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        await open_help_ui("网站地址");
        }
        }
    </script>
    <script>
        async function mtn_Started(){
        }
    </script>
    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
