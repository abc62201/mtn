添加创建的元素脚本
=======================================================

.. image:: img/170.png

通过脚本来创建一个元素。注意创建成功并未显示，需要通过添加块添加到页面中。

.. image:: img/171.png

.. image:: img/172.png

::

    <body>

    <script>
        async function mtn_init(){
        var 图层=document.getElementById("图层");
        图层.style.left="100px";
        var 标题=document.createElement("p");
        标题.textContent="创建了一个段落添加一个新的文本";
        图层.appendChild(标题);
        
        }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
