关闭启动软件后执行脚本
=======================================================

.. image:: img/153.png

当启动游戏后，MTN软件会自动最小化到任务栏。这时视频，音频如果是自动带声音播放的会影响游戏的声音。需要使用这个块来关闭声音。

::

    <body>
    <script>
        async function mtn_init(){
        //MTN初始化函数
        await mtn_init();
        await mouse_click_ds(0,0);
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
