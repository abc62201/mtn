获取样式的值脚本
=======================================================

.. image:: img/162.png

.. image:: img/163.png

获取部分css样式的值。

    
::

    <body>

    <script>
        async function mtn_init(){
        var 图层=document.getElementById("图层");
        alert(window.getComputedStyle(图层).getPropertyValue("left"));        
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
