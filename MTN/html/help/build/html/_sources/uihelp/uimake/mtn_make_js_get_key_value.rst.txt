获取键盘 摇杆 输入值脚本
=======================================================

.. image:: img/189.png

获取键盘 摇杆 输入值

.. image:: img/190.png

.. image:: img/191.png

::

    <body>
    <script>
    async function mtn_init(){
    joy_start(1);

    }
    </script>

    <script>
    async function joyvalue1(){
    alert(mtn_joy_value);
    }
    </script>

    <script>
    async function keyvalue1(){
    alert(mtn_key_value);
    }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
