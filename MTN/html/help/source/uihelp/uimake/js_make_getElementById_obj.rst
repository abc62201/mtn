元素常用属性脚本
=======================================================

.. image:: img/164.png

常用的元素属性，如果没有的可以手写到给元素块的值里。

    
::

    <body>

    <script>
        async function mtn_init(){
        var 图层=document.getElementById("图层");
        var 图层中包含的内容=图层.innerHTML;
        alert(window.getComputedStyle(图层).getPropertyValue("left"));       
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
