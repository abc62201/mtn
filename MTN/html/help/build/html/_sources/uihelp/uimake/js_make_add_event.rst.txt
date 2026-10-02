添加的元素事件脚本
=======================================================

.. image:: img/173.png

给元素添加一个事件。

.. image:: img/174.png

.. image:: img/175.png

::

    <body>

    <script>
    async function mtn_init(){
    var 图层=document.getElementById("图层");
    图层.style.left="100px";
    var 标题=document.createElement("p");
    标题.textContent="创建了一个段落添加一个新的文本";
    标题.addEventListener("click",async function(event){
      alert("添加一个鼠标点击事件");

    });
    图层.appendChild(标题);

    }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
