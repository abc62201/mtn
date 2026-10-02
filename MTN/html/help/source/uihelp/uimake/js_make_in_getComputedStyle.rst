元素常用样式脚本
=======================================================

.. image:: img/167.png

常用的css样式的值。

    
::

    <body>

    <script>
        async function mtn_init(){
        var 图层=document.getElementById("图层");
        var 图层中包含的内容=图层.innerHTML;
        图层.style.left="100px";
        alert(window.getComputedStyle(图层).getPropertyValue("left"));
        
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
