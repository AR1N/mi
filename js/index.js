$(function () {
    //二级选项卡部分
    $(".title").hover(function () {
        $(this).find(".items").show();
    }, function () {
        $(this).find(".items").hide();
    });
//comment部分
    $(".hometool_right li").hover(function(){
    $(this).find(".comment").slideToggle("fast");
});
   


});

/*  ----------------------------------------*/
//闪购倒计时
var timer = setInterval("timeShow()", 1000);
function timeShow() {
    var nowTime = new Date();
    var nowN = nowTime.getFullYear();
    var nowY = nowTime.getMonth();
    var nowR = nowTime.getDate();

    var endTime = new Date(nowN, nowY + 1, nowR, 20, 00, 00);//每天20点
    var timeSS = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
    var h = Math.floor((timeSS / 3600) % 24);
    var m = Math.floor((timeSS / 60) % 60);
    var s = Math.floor(timeSS % 60);

    function doubleShow(i) {
        if (i < 10) {
            return "0" + i;
        } else {
            return i;
        }
    }
    if (h >= 20) {
        $(".timeH").text("00");
        $(".timeM").text("00");
        $(".timeS").text("00");
    } else if (timeSS < 0) {
        clearInterval(timer);
        $(".timeH").text("00");
        $(".timeM").text("00");
        $(".timeS").text("00");
    } else {
        $(".timeH").text(doubleShow(h));
        $(".timeM").text(doubleShow(m));
        $(".timeS").text(doubleShow(s));
    }

} //timeShow 结束

///轮播开始
$(function () {
var t;
var index = 0;
/////自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 5) {
        index = 0
    }
    // console.log(index)
    $("#lunbobox ul li").eq(index).css({
        "background": "#fff",
        "border-color" : "rgb(150,147,141)"
    }).siblings().css({
        "background": "rgb(148,143,134)",
        "border-color": "rgb(180,177,171)"
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

///点击鼠标 图片切换
$("#lunbobox ul li").click(function () {

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "#fff",
        "border-color": "rgb(150,147,141)"
    }).siblings().css({
        "background": "rgb(148,143,134)",
        "border-color": "rgb(180,177,171)"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    // console.log(index);

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

/////////////上一张、下一张切换
$("#toleft").click(function () {
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
    {
        index = 5
    }
    console.log(index);
    $("#lunbobox ul li").eq(index).css({
        "background": "#fff",
        "border-color": "rgb(150,147,141)"
    }).siblings().css({
        "background": "rgb(148,143,134)",
        "border-color": "rgb(180,177,171)"
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

$("#toright").click(function () {
    index++;
    if (index > 5) {
        index = 0
    }
    console.log(index);
    $(this).css({
        "opacity": "0.5"
    })
    $("#lunbobox ul li").eq(index).css({
        "background": "#fff",
        "border-color": "rgb(150,147,141)"
    }).siblings().css({
        "background": "rgb(148,143,134)",
        "border-color": "rgb(180,177,171)"
    })
    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

//鼠标移进  移出
$("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(
///鼠标移进
    function () {
        $('#toright,#toleft').show()
        clearInterval(t);

    },
//鼠标移开
    function () {
        //$('#toright,#toleft').hide()
        //alert('aaa')
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 5) {
                index = 0
            }
            $("#lunbobox ul li").eq(index).css({
                "background": "#fff",
                "border-color": "rgb(150,147,141)"
                
            }).siblings().css({
                "background": "rgb(148,143,134)",
                "border-color": "rgb(180,177,171)"
            })
            $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    });
});