获取键盘 摇杆 输入值为空脚本
=======================================================

.. image:: img/192.png

摇杆和键盘值为js脚本的全局变量，为了不影响其使用，所以需要清空。


::

    <body>
    <script>
    async function mtn_init(){
    joy_start(1);

    }
    </script>

    <script>
    async function joyvalue1(){
    if (mtn_joy_value != "kong") {
    alert(mtn_joy_value);

    }
    mtn_joy_value="kong";
    }
    </script>

    <script>
    async function keyvalue1(){
    if (mtn_key_value != "kong") {
    alert(mtn_key_value);

    }
    mtn_key_value="kong";
    }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
