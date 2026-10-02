获取元素标签的属性脚本
=======================================================

.. image:: img/180.png

向元素添加一个样式名

.. image:: img/181.png

::

    <body>

    <script>
    var 图层=document.getElementById("图层");
    图层.style.left="100px";
    var 标题=document.createElement("p");
    标题.textContent="创建了一个段落添加一个新的文本";
    标题.addEventListener("click",async function(event){
    alert("添加一个鼠标点击事件");
    图层.classList.add("abc");
    });
    图层.appendChild(标题);
    var 通过样式获取图层=document.querySelectorAll(".classname");
    alert(图层.getAttribute("id"));
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
