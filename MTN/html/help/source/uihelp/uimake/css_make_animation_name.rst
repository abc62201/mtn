动画
=======================================================

.. image:: img/77.png

指定元素的动画效果。

::

    <style>
    .图层样式{
    position:absolute;
    top:0px;
    left:0px;
    width:100px;
    height:100px;
    background-color:#ff0000;
    animation-name:myfirst;
    animation-duration:2s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
    }
    @keyframes myfirst{
    0%{
      left:0px;
      top:0px;
    }
    25% {
    top:0px;
    left:90%;}
    50% {
    top:90%;
    left:90%;}
    75% {
    top:90%;
    left:0px;}
    100% {
    top:0px;
    left:0px;}
    }
    </style>

测试样式

.. image:: img/78.png