延时脚本
=======================================================

.. image:: img/128.png

延时一定时间后继续执行后面的程序，延时的单位为毫秒。1000毫秒等于1秒。

    
::

    <body>

    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        await new Promise(resolve => setTimeout(resolve, 1000));
        }
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
