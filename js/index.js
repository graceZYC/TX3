/**
 * Created by Administrator on 2016/11/12.
 */
"use strict"
// 页面开始那个女的
var begin = document.getElementById("begin");
var closethis = begin.getElementsByTagName("span")[0];
var a = begin.getElementsByTagName("a")[0];
//禁止页面滚动，只适用与chrome，因为懒得引jq


//点击事件
closethis.onclick = function (event) {
    var event = window.event || event;
    console.log(event.target);
    event.stopPropagation();
    animate(begin, {"opacity": 0}, function () {
        begin.style.display = "none";
    })
};

a.onclick = function () {
    location.href = "dhbns.html";
}
//头部导航特效，新闻公告游戏特色那块
var zyc_blackbg = document.getElementById("zyc_blackbg");
var zyc_blackbg_lis = zyc_blackbg.children;
var zyc_blackbg_dds = zyc_blackbg.getElementsByTagName("dd");
var hetght = [251, 251, 217, 285, , 251, 183, 183, 304];
for (var i = 0; i < zyc_blackbg_dds.length; i++) {
    zyc_blackbg_dds[i].onmouseenter = function () {
        animate(this.children[0], {"opacity": 0});
        animate(this.children[1], {"opacity": 1});
    };
    zyc_blackbg_dds[i].onmouseleave = function () {
        animate(this.children[0], {"opacity": 1});
        animate(this.children[1], {"opacity": 0});
    };
    var is = zyc_blackbg_dds[i].getElementsByTagName("i");
    var ems = zyc_blackbg_dds[i].getElementsByTagName("em");
    for (var j = 0; j < ems.length; j++) {//每一个居中
        ems[j].style.marginLeft = -ems[j].offsetWidth / 2 + "px";
        is[j].style.marginLeft = -is[j].offsetWidth / 2 + "px";
    }
}
for (var i = 0; i < zyc_blackbg_lis.length; i++) {
    zyc_blackbg_lis[i].index = i;
    zyc_blackbg_lis[i].onmouseenter = function (event) {
        var event = event || window.event;
        if (event.target.className === "logoli") {//布局的时候出现的问题，现在弥补一下
            return;
        }
        this.getElementsByTagName("em")[0].style.opacity = "1";
        this.getElementsByTagName("i")[0].style.opacity = "0";
        animate(this.getElementsByTagName("em")[0], {"top": 55}, null, 50);
        animate(this.getElementsByClassName("nav-tow")[0], {"height": hetght[this.index]});
    };
    zyc_blackbg_lis[i].onmouseleave = function (event) {
        var event = event || window.event;
        if (event.target.className === "logoli") {
            return;
        }
        var that = this;
        animate(this.getElementsByClassName("nav-tow")[0], {"height": 0}, function () {
            that.getElementsByTagName("i")[0].style.opacity = "1";
        }, 1);
        animate(this.getElementsByTagName("em")[0], {"top": 59}, function () {
            that.getElementsByTagName("em")[0].style.opacity = "0";
        }, 35);
    }

}
//固定悬浮栏
var dcab_fixed_lis = document.getElementById("dcab_fixed").children;
for (var i = 0; i < dcab_fixed_lis.length; i++) {
    dcab_fixed_lis[i].onmouseenter = function () {
        this.getElementsByTagName("h6")[0].style.textDecoration = "underline";
    };
    dcab_fixed_lis[i].onmouseleave = function () {
        this.getElementsByTagName("h6")[0].style.textDecoration = "none";
    };
}
//article8
var dcab_fenxiang_lis = document.getElementById("dcab_fenxiang").children;
for (var i = 0; i < dcab_fenxiang_lis.length; i++) {
    dcab_fenxiang_lis[i].style.background = "url(images/分享_r1_c" + i + ".png) no-repeat";
}
//article6 播放器
var songs_list = document.getElementById("songs_list").children;
for (var i = 0; i < songs_list.length; i++) {
    songs_list[i].onmouseenter = function () {
        color_toOrange(this.children[0].children[1]);
    };
    songs_list[i].onmouseleave = function () {
        color_toGray(this.children[0].children[1]);
    };
}
//article6 同人大赏图像
var article_6_l_ul = document.getElementById("article_6_l_ul");
var article_6_l_ul_lis = article_6_l_ul.children;
for (var i = 0; i < article_6_l_ul_lis.length; i++) {
    article_6_l_ul_lis[i].children[0].children[0].children[0].onmouseenter = function () {
        this.style.transform = "scale(1.2,1.2)";
        color_toOrange(this.parentNode.nextElementSibling);
    };
    article_6_l_ul_lis[i].children[0].children[0].children[0].onmouseleave = function () {
        this.style.transform = "scale(1,1)";
        color_toGray(this.parentNode.nextElementSibling);
    };
}
//article6 本月推荐
var article_6_l_bottom = document.getElementsByClassName("article_6_l_bottom")[0].children;
for (var i = 1; i < article_6_l_bottom.length; i++) {
    article_6_l_bottom[i].style.background = "url(images/本月推荐" + i + ".png) no-repeat 0px 0px";
    article_6_l_bottom[i].onmouseenter = function () {
        color_toOrange(this);
    };
    article_6_l_bottom[i].onmouseleave = function () {
        color_toGray(this);
    };
}
//article6 标题
var article_6_title = document.getElementById("article_6_title").children;
for (var i = 1; i < article_6_title.length; i++) {
    article_6_title[i].onmouseenter = function () {
        Opacity_hide(this);
    };
    article_6_title[i].onmouseleave = function () {
        Opacity_show(this);
    };
}
//article_5 小点点
var dcab_spans = document.getElementsByClassName("article_5")[0].getElementsByClassName("dcab_more");
for (var i = 0; i < dcab_spans.length; i++) {
    dcab_spans[i].onmouseenter = function () {
        Opacity_hide(this);

    }
    dcab_spans[i].onmouseleave = function () {
        Opacity_show(this);
    }
}
//article_5天下热文
var dcab_spans_txrw = document.getElementsByClassName("title clearfix")[0].getElementsByTagName("span");
for (var i = 0; i < dcab_spans_txrw.length; i++) {
    dcab_spans_txrw[i].parentNode.onmouseenter = function () {
        Opacity_hide(this);

    }
    dcab_spans_txrw[i].parentNode.onmouseleave = function () {
        Opacity_show(this);
    }
}
var txrw_img = document.getElementById("txrwul").getElementsByTagName("img");
for (var i = 0; i < txrw_img.length; i++) {
    txrw_img[i].onmouseover = function () {
        this.style.transform = "scale(1.2,1.2)"
        color_toOrange(this.parentNode.nextElementSibling);
    }
    txrw_img[i].onmouseout = function () {
        this.style.transform = "scale(1,1)";
        color_toGray(this.parentNode.nextElementSibling);
    }
}
var luntan_lis = document.getElementsByClassName("luntan")[0].children;
for (var i = 0; i < luntan_lis.length; i++) {
    luntan_lis[i].children[0].onmouseenter = function () {
        color_toOrange(this);
    };
    luntan_lis[i].children[0].onmouseleave = function () {
        color_toGray(this);
    };
}
var tiezi_lis = document.getElementsByClassName("tiezi")[0].children;
for (var i = 0; i < tiezi_lis.length; i++) {
    tiezi_lis[i].children[0].onmouseenter = function () {
        color_toOrange(this);
    };
    tiezi_lis[i].children[0].onmouseleave = function () {
        color_toGray(this);
    };
}
//二维码
var ewm = document.getElementsByClassName("erweima")[0].children;
ewm[0].onmouseenter = ewm[1].onmouseenter = function () {
    animate(this.children[0], {"bottom": 0});
}
ewm[0].onmouseleave = ewm[1].onmouseleave = function () {
    animate(this.children[0], {"bottom": -109});
}
ewm[2].onmouseenter = ewm[3].onmouseenter = function () {
    animate(this.children[0].children[0], {"opacity": 1});
}
ewm[2].onmouseleave = ewm[3].onmouseleave = function () {
    animate(this.children[0].children[0], {"opacity": 0});
}
//小箭头
var time3 = null;
var leader = 0, target = 0;
;
var toTop = document.getElementById("toTop");
window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
    leader = window.pageYOffset;
};
toTop.onclick = function () {
    clearInterval(time3);
    time3 = setInterval(function () {
        if (Math.abs(leader - target) < 1) {
            clearInterval(time3);
        }
        leader = leader + (target - leader) / 10;
        window.scrollTo(0, leader);
    }, 1);
}
//透明度切换的函数
function Opacity_hide(obj) {
    obj.children[0].style.opacity = 0;
    obj.children[1].style.opacity = 1;
}
function Opacity_show(obj) {
    obj.children[0].style.opacity = 1;
    obj.children[1].style.opacity = 0;
}
//颜色切换函数
function color_toOrange(obj) {
    obj.style.color = "#FF7D00";
}
function color_toGray(obj) {
    obj.style.color = "#565656";
}
//缓动动画
function animate(obj, json, fn, time) {
    if (!time) {
        time = 15;
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, time);
}
//获取属性
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}