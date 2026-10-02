清除所有子元素脚本
=======================================================

.. image:: img/184.png

清楚一个元素中的全部子元素。

::

    <body>

    <script>
    while (element_name.firstChild) {
    element_name.removeChild(element_name.firstChild);
    }
    </script>

    </body>
    
js教程请参考

.. raw:: html

   <p><a href="https://www.w3school.com.cn/js/index.asp" target="_blank">w3school</a></p>
   <p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank">菜鸟教程</a></p>
