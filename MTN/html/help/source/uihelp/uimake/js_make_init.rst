打开主题后运行
=======================================================

.. image:: img/121.png

当主题打开后，会自动运行js代码。UI执行顺序应该是先载入元素和样式，然后mtn_init()函数。
要保证MTN函数的运行顺序，需要将执行脚本的过程放在mtn_init（）中。并且注意关键词async
代表了异步函数。也就是脚本执行顺序是异步的。

::

    <body>

    <script>
        async function mtn_init(){

        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
