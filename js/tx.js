window.onload = function () {
    //顶部工具栏
    // 隐藏广告
    var yys_hide = document.getElementById("yys_hide");
    var yys = document.getElementById("yys");
    yys.onmouseover = function () {
        yys_hide.className = "show";
    };
    yys.onmouseout = function () {
        yys_hide.className = "hide";
    };
    //往上滚动的不知道什么东西
    var zyc_GoUp = document.getElementById("zyc_GoUp");
    setInterval(function () {
        if (zyc_GoUp.children[0].offsetTop === 0) {
            animate(zyc_GoUp.children[0], {"top": -55, "opacity": 0}, function () {
                zyc_GoUp.children[0].style.top = "55px";
                zyc_GoUp.children[0].style.opacity = "1";
            }, 20);
            animate(zyc_GoUp.children[1], {"top": 0}, function () {
            }, 20);
        } else {
            animate(zyc_GoUp.children[1], {"top": -55, "opacity": 0}, function () {
                zyc_GoUp.children[1].style.top = "55px";
                zyc_GoUp.children[1].style.opacity = "1";
            }, 20);
            animate(zyc_GoUp.children[0], {"top": 0}, function () {
            }, 20);
        }
    }, 3000);
    /*主体部分start*/
    //滚动条//有点问题
    var scroll_bar = document.getElementById("scroll_bar");
    var ul = scroll_bar.children[0];
    var timer1 = null;
    scroll_bar.onmouseover = function () {
        clearInterval(timer1)
    };
    scroll_bar.onmouseout = function () {
        timer1 = setInterval(scroll, 40);
    };
    timer1 = setInterval(scroll, 40);
    function scroll() {
        var leader = ul.offsetLeft;
        var step = -1;
        if (leader > -1782) {
            leader = leader + step;
            ul.style.left = leader + "px";
        } else {
            ul.style.left = 0;
        }
    }

    //下载区标题
    var download_ul = document.getElementById("download_ul");
    var d_as = download_ul.getElementsByTagName("a");
    var dspans_before = download_ul.getElementsByClassName("before");
    var dspans_after = download_ul.getElementsByClassName("after");
    for (var i = 0; i < d_as.length; i++) {
        d_as[i].index = i;
        d_as[i].onmouseover = function () {
            animate(dspans_before[this.index], {"opacity": 0});
            dspans_before[this.index].style.transform = "scale(1.4,1.4)";
            animate(dspans_after[this.index], {"opacity": 1});
            dspans_after[this.index].style.transform = "scale(1,1)";
        };
        d_as[i].onmouseout = function () {
            animate(dspans_before[this.index], {"opacity": 1});
            dspans_before[this.index].style.transform = "scale(1,1)";
            animate(dspans_after[this.index], {"opacity": 0});
            dspans_after[this.index].style.transform = "scale(1.4,1.4)";
        };
    }
    //轮播图
    var main_switch = document.getElementById("main_switch");
    var switch_icon = document.getElementById("switch_icon");
    var as = main_switch.getElementsByTagName("a");//图片
    var flag = 0;
    main_switch.timer = null;
    as[0].style.opacity = 1;//默认显示第一张
    for (var i = 0; i < as.length; i++) {
        var li = document.createElement("li");//动态生成li
        switch_icon.appendChild(li);
    }
    var lis = switch_icon.children;//按钮
    lis[0].className = "current";//默认第一个li变色
    //给li添加鼠标经过事件
    var lis = switch_icon.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
                lis[i].style.transform = "rotate(0deg)";
            }
            this.className = "current";
            this.style.transform = "rotate(360deg)";
            flag = this.index;
            for (var j = 0; j < as.length; j++) {//对应切换图片
                animate(as[j], {"opacity": 0, "zIndex": 0});
            }
            animate(as[flag], {"opacity": 1, "zIndex": 1});
        };
    }
    //图片自动轮播
    main_switch.timer = setInterval(function () {
        flag++;
        if (flag >= lis.length) {
            flag = 0;
        }
        lis[flag].onmouseover();
    }, 3000);
    //鼠标移动到图片上时，自动轮播停止 移开继续
    main_switch.onmouseover = function () {
        clearInterval(main_switch.timer);
    };
    main_switch.onmouseout = function () {
        main_switch.timer = setInterval(function () {
            flag++;
            if (flag >= lis.length) {
                flag = 0;
            }
            lis[flag].onmouseover();
        }, 3000);
    };
    //动态创建日期
    var date_box = document.getElementById("date_box");
    var date = new Date();
    date_box.innerHTML = "今日：" + (date.getMonth() + 1) + "月" + date.getDate() + "日[十月十三]";
    //新闻栏
    var title = document.getElementById("title");
    var title_lis = title.children;
    var span_before = title.getElementsByClassName("before");
    var span_after = title.getElementsByClassName("after");
    var content = document.getElementById("content");
    var contentWidth = content.offsetWidth;
    var ulbox = content.children[0];
    //当鼠标经过标题时，标题样式改变，同时对应的内容滑动出来
    for (var i = 0; i < title_lis.length; i++) {
        title_lis[i].index = i;
        title_lis[i].onmouseover = function () {
            for (var i = 0; i < title_lis.length; i++) {
                animate(span_before[i], {"opacity": 1});
                animate(span_after[i], {"opacity": 0});
            }
            animate(span_before[this.index], {"opacity": 0});
            animate(span_after[this.index], {"opacity": 1});
            var target = -contentWidth * this.index;
            animate(ulbox, {"left": target});

        };
    }
    /*主体部分end*/
    /*门派介绍部分start*/
    //左上
    var list = document.getElementById("list");
    var list_as = list.getElementsByTagName("a");
    for (var i = 0; i < list_as.length; i++) {
        list_as[i].onmouseover = function () {
            this.style.color = "#FC8445";
            this.style.textDecoration = "underline";
        };
        list_as[i].onmouseout = function () {
            this.style.color = "#4F4D52";
            this.style.textDecoration = "none";
        };
    }
    //左
    //动态生成结构
    var datas = [
        {"pre": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "黄鹤楼", "name": "豆瓣酱丶", "info": "踏入天下2619天！", "time": "11/14"},
        {"pre": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "情动大荒", "name": "颜汝玉", "info": "踏入天下2670天！", "time": "11/14"},
        {"pre": "莫愁前路无知己，天下谁人不识君。", "server": "三潭印月", "name": "晚秋丶", "info": "踏入天下2476天！", "time": "11/14"},
        {"pre": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "笑看风云", "name": "桃花影落乀", "info": "踏入天下879天！", "time": "11/14"},
        {"pre": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "天府之国", "name": "厌世之剑", "info": "踏入天下218天！", "time": "11/14"},
        {"pre": "莫愁前路无知己，天下谁人不识君。", "server": "天生王者", "name": "静静转身离去", "info": "踏入天下2065天！", "time": "11/14"},
        {"pre": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "黄鹤楼", "name": "豆瓣酱丶", "info": "踏入天下2619天！", "time": "11/14"},
        {"pre": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "情动大荒", "name": "颜汝玉", "info": "踏入天下2670天！", "time": "11/14"},
        {"pre": "莫愁前路无知己，天下谁人不识君。", "server": "三潭印月", "name": "晚秋丶", "info": "踏入天下2476天！", "time": "11/14"},
    ];
    var longlis = document.getElementById("longlis");
    var longlis_ul = document.createElement("ul");
    longlis.appendChild(longlis_ul);
    var arr = [];
    for (var i = 0; i < datas.length; i++) {
        var data = datas[i];
        var str = "<li>" +
            data.pre +
            "【" +
            "<i>" + data.server +
            "</i>" +
            "】的" +
            "<span>" + data.name +
            "</span>" + data.info +
            "<em>" + data.time +
            "</em>" +
            "</li>";
        arr.push(str);
    }
    longlis_ul.innerHTML = arr.join("");
    //轮播
    var longlis_lis = longlis_ul.children;
    longlis.timer = null;
    longlis.timer = setInterval(start, 40);
    longlis.onmouseover = function () {
        clearInterval(longlis.timer);
    };
    longlis.onmouseout = function () {
        longlis.timer = setInterval(start, 40);
    };
    function start() {
        var leader = longlis_ul.offsetTop;
        var step = -1;
        if (leader > -(longlis_lis[0].offsetHeight * longlis_lis.length - longlis.offsetHeight)) {
            leader = leader + step;
            longlis_ul.style.top = leader + "px";
        } else {
            longlis_ul.style.top = 0;
        }
    }

    //中间门派介绍
    var carousel = document.getElementById("carousel");
    var carou_title = carousel.children[0];
    var carou_lis = carou_title.children;//标题们
    var carou_spans = carou_title.getElementsByTagName("span");
    var lis_img = carou_title.getElementsByTagName("img");
    var intro = carousel.getElementsByClassName("intro");
    var picbox = carousel.getElementsByClassName("picbox");
    var timer2 = null;
    for (var i = 0; i < carou_lis.length; i++) {
        if (i % 2 === 0) {
            lis_img[i].style.top = 8 + "px";//偶数行字在下面
        }
        carou_lis[i].index = i;
        carou_lis[i].onmouseenter = function () {
            var that = this;
            clearTimeout(timer2);
            timer2 = setTimeout(
                function () {
                    for (var i = 0; i < carou_lis.length; i++) {
                        animate(carou_spans[i], {"opacity": 0});
                        animate(intro[i], {"left": -80, "opacity": 0});
                        animate(picbox[i], {"right": -200, "opacity": 0});
                    }
                    carou_spans[that.index].className = "current";
                    animate(carou_spans[that.index], {"opacity": 1}, null);
                    animate(intro[that.index], {"left": 25, "opacity": 1});
                    animate(picbox[that.index], {"right": 0, "opacity": 1});
                }, 100);
        };
    }
    /*门派介绍部分end*/
};

