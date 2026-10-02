获取用户设置键盘摇杆列表脚本
=======================================================

.. image:: img/193.png

1 通过获取用户设置键盘摇杆列表块来获取MTN软件发送的用户设置的键盘摇杆列表。然后解析成json数据。

2 通过获取键盘摇杆的值和键盘按键名，摇杆按键名的块组合获取上面解析的json数据。

.. image:: img/194.png

::

    <body>
    <script>
    var 键盘摇杆列表;
    async function mtn_init(){
    joy_start(1);
    var 数据表=await get_joytokey();
    键盘摇杆列表 = JSON.parse(数据表);

    }
    </script>

    <script>
    async function joyvalue1(){
    if (mtn_joy_value != "kong") {
    alert(键盘摇杆列表.rocker_up);

    }
    mtn_joy_value="kong";
    }
    </script>

    <script>
    async function keyvalue1(){
    if (mtn_key_value != "kong") {
    alert(键盘摇杆列表.keyboard_up);

    }
    mtn_key_value="kong";
    }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
