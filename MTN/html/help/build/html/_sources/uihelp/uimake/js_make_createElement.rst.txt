创造元素脚本
=======================================================

.. image:: img/168.png

通过脚本来创建一个元素。注意创建成功并未显示，需要通过添加块添加到页面中。

.. image:: img/169.png

::

    <body>

    <script>
        async function mtn_init(){
        var 图层=document.getElementById("图层");
        var 图层中包含的内容=图层.innerHTML;
        图层.style.left="100px";
        var 标题=document.createElement("p");     
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
