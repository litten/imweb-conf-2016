<template>
    <section class="set-head">
        <canvas id="canvas-elm" width="1280" height="150">
            Your browser does not support the Canvas element.
        </canvas>
        <header class="signage">
            <a class="scroll" href="#point1">
            <div>
                <section class="signage-wrap">
                    <span class="dot"></span>
                    <h1 v-on:click="jump(e, 'http://imweb.io/', true)">腾讯web前端团队</h1>
                    <span class="line"></span>
                    <p>技术开放日</p>
                    <h2>IMWEB-CONF</h2>
                    <p>2016-09-10</p>
                    <p>深圳市南山区腾讯大厦</p>
                    <span class="line second"></span>
                    <button v-on:click="jump(e, '153654')">免费票</button>
                    <button v-on:click="jump(e, '153658')">腾大餐厅体验票</button>
                </section>
                <span class="arrow"></span>
            </div>
            </a>
        </header>
    </section>
    <section class="set-line">
        <h2 class="timepoint" id="point1">上午 - 腾讯大厦2楼多功能厅</h2>
        <ul class="timeline">
            <li class="event" v-for="(index, list) in am">
                <input type="radio" name="am-group" v-bind:checked="list.isChecked"/>
                <label>{{index}}</label>
                <div class="thumb">
                    <img v-bind:src="list.img|imgfilter">
                    <span class="info">{{list.info}}</span><br/>
                    <span class="author">{{list.author}}</span>
                </div>
                <div class="content-perspective">
                    <div class="content">
                        <div class="content-inner">
                            <h3>{{list.title}}</h3>
                            <p>{{list.des}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <h2 class="timepoint" id="point2">下午 - Node分会场 - 腾讯大厦24楼</h2>
        <ul class="timeline">
            <li class="event" v-for="(index, list) in pmNode">
                <input type="radio" name="pm-node-group" v-bind:checked="list.isChecked"/>
                <label>{{index}}</label>
                <div class="thumb">
                    <img v-bind:src="list.img|imgfilter">
                    <span class="info">{{list.info}}</span><br/>
                    <span class="author">{{list.author}}</span>
                </div>
                <div class="content-perspective">
                    <div class="content">
                        <div class="content-inner">
                            <h3>{{list.title}}</h3>
                            <p>{{list.des}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <h2 class="timepoint" id="point3">下午 - React分会场 - 腾讯大厦24楼</h2>
        <ul class="timeline">
            <li class="event" v-for="(index, list) in pmReact">
                <input type="radio" name="pm-react-group" v-bind:checked="list.isChecked"/>
                <label>{{index}}</label>
                <div class="thumb">
                    <img v-bind:src="list.img|imgfilter">
                    <span class="info">{{list.info}}</span><br/>
                    <span class="author">{{list.author}}</span>
                </div>
                <div class="content-perspective">
                    <div class="content">
                        <div class="content-inner">
                            <h3>{{list.title}}</h3>
                            <p>{{list.des}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <h2 class="timepoint" id="point4">下午 - 综合分会场 - 腾讯大厦24楼</h2>
        <ul class="timeline">
            <li class="event" v-for="(index, list) in pmComplex">
                <input type="radio" name="pm-complex-group" v-bind:checked="list.isChecked"/>
                <label>{{index}}</label>
                <div class="thumb">
                    <img v-bind:src="list.img|imgfilter">
                    <span class="info">{{list.info}}</span>
                    <span class="author">{{list.author}}</span>
                </div>
                <div class="content-perspective">
                    <div class="content">
                        <div class="content-inner">
                            <h3>{{list.title}}</h3>
                            <p>{{list.des}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>

    <div id="footer">
        <div id="footer-main">
            <div class="footer-link">
                <ul>
                    <li>友情链接</li>
                    <li><a href="http://ke.qq.com/">腾讯课堂</a></li>
                    <li><a href="http://imweb.github.io/">腾讯IMWeb</a></li>
                    <li><a href="http://www.alloyteam.com/">腾讯alloyteam</a></li>
                    <li><a href="http://isux.tencent.com/">腾讯ISUX</a></li>
                    <li><a href="http://ur.tencent.com/">腾讯高校合作</a></li>
                    <li><a href="http://tpai.qq.com/">T派校园</a></li>
                    <li><a href="http://ued.taobao.org/blog/">淘宝UED</a></li>
                    <li><a href="http://fex.baidu.com/">百度FEX</a></li>
                    <li><a href="http://www.w3ctech.com/">w3ctech</a></li>
                    <li><a href="http://www.w3cplus.com/">w3cplus</a></li>
                    <li><a href="http://www.html-js.com/">前端乱炖</a></li>
                </ul>
                <ul>
                    <li>我们的开源</li>
                    <li><a href="https://github.com/imweb/FKB">前端知识库</a></li>
                    <li><a href="http://iconfont.imweb.io/">iconfont</a></li>
                    <li><a href="https://github.com/imweb/Q.js">Q.js</a></li>
                    <li><a href="http://lego.imweb.io/">lego</a></li>
                    <li><a href="https://github.com/BetterJS">badjs</a></li>
                </ul>
                <ul>
                    <li>合作伙伴</li>
                    <li><a href="http://www.html5cn.org/">HTML5中国</a></li>
                </ul>
            </div>
            <div class="footer-about">
                <a href="http://imweb.github.io" target="_blank">IMWEB团队</a>正式成立是时间是2011年6月7日<br/>目前主要负责腾讯在线教育战略产品腾讯课堂<br/>多人社交互动视频以及活动组织类项目的研发工作<br/>
                <a href="http://imweb.io"><img src="//imweb.github.io/img/footerLogo.png"></a>
            </div>


            <div class="footer-sub">
                <p>Copyright © 2016-2024; <a href="http://imweb.io">imweb.io</a>. All Rights Reserved.</p>
                <p><a href="http://imweb.github.io">imwebteam</a> 版权所有</p>
            </div>

        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Anm from './anm';
import DefaultData from './default_data';

Vue.filter('imgfilter', function (str) {
    return './src/img/' + str;
})

export default {
    data () {
        return DefaultData
    },
    methods: {
        jump(e, url, type) {
            let link = type ? url : 'https://ke.qq.com/course/' + url;
            window.open(link);
            if (e && e.preventDefault) {
                e.preventDefault();
            } else {
                window.event.returnValue = false;
                return false;
            }
        },
        menuClk(menu, $index) {
            // menu.expanded = !menu.expanded;
        }
    },
    ready: () => {
        Anm.init(document.getElementById('canvas-elm'));
        let h = window.screen.height;
        document.getElementsByClassName('signage')[0].style.transform = 'scale('+ h/827 +')';

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
ul, li {
    list-style: none;
}
.hide {
    display: none;
}
.hide-height {
    height: 0;
    overflow: hidden;
}
body {
    background: #1A3742;
    background-image: gradient(linear, 0% 0%, 0% 100%, from(#1A3742), to(#9EA183));
    background-image: linear-gradient(top, #1A3742, #9EA183);
    font-family: "微软雅黑";
}
h2.timepoint {
    text-align: center;
    color: #fff;
    margin-bottom: 50px;
}
header.signage {
    text-align: center;
    display: block;
    position: absolute;
    top: 25%;
    left:50%;
    margin-left: -159px;
    height: 318px;
    width: 318px;
}
header.signage a {
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    display: block;
    height: 318px;
    width: 318px;
    background-color: rgb(16,165,135);
    background-color: rgba(16,165,135, 0.8);
    -moz-border-radius: 209px;
    -webkit-border-radius: 209px;
    border-radius: 209px;
    -moz-transition: all 0.20s ease;
    -webkit-transition: all 0.20s ease;
    -o-transition: all 0.20s ease;
    transition: all 0.20s ease;
}
header.signage div {
    overflow: hidden;
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    border: 1px solid rgb(166,216,206);
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    border-radius: 200px;
    text-align: center;
    color: rgb(255,255,255);
    moz-transition: border-radius 0.20s ease;
    -webkit-transition: border-radius 0.20s ease;
    -o-transition: border-radius 0.20s ease;
    transition: border-radius 0.20s ease;
}
section.signage-wrap {
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -moz-opacity:1;
    -khtml-opacity: 1;
    opacity: 1;
    position: absolute;
    top: 4%;
    bottom: 4%;
    right: 4%;
    left: 4%;
    display: block;
    -moz-transition: all 0.10s ease;
    -webkit-transition: all 0.10s ease;
    -o-transition: all 0.10s ease;
    transition: all 0.10s ease;
}
header.signage h1, header.signage h2 {
    color: rgb(139,237,219);
    font-weight: normal;
}
header.signage h1 {
    margin-top: 27px;
    margin-bottom: 0;
    font-size: 1.35em;
    font-family: "微软雅黑";
}
header.signage h2 {
    margin: 5px 0;
    padding: 0;
    font-size: 2em;
    letter-spacing: 2px;
    font-family: "微软雅黑";
}
header.signage p {
    margin: 0;
    font-size: .9em;
    line-height: 1em;
}
header.signage span.dot {
    margin: 8px auto 0 auto;
    display: block;
    border: 1px solid rgb(166,216,206);
    width: 6px;
    height: 6px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
header.signage span.line {
    margin: 10px auto 16px auto;
    display: block;
    background-color: rgb(166,216,206);
    width: 165px;
    height: 1px;
}
header.signage span.second {
    margin: 15px auto 16px auto;
}
header.signage span.arrow {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -5px;
    background: url(./img/h-arrow.png) center bottom no-repeat;
    display: block;
    width: 9px;
    height: 38px;
}
header.signage button {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    border-radius: 2px;
    border: 0;
    user-select: none;
    background: #f9b379;
    color: #fff;
    padding: 6px 5px;
    outline: none;
}
header.signage button:hover {
    background: #f9c479;
}
header.signage button:active {
    background: #f9a679;
}
@media only screen and (min-width: 768px) {
    header.signage {
    top: 15%;
    left:50%;
    margin-left: -209px;
    height: 418px;
    width: 418px;
}
header.signage a {
    height: 418px;
    width: 418px;
    -moz-border-radius: 209px;
    -webkit-border-radius: 209px;
    border-radius: 209px;
}
header.signage div {
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    border-radius: 200px;
}
header.signage h1 {
    margin-top: 40px;
    margin-bottom: 0;
    font-size: 1.45em;
}
header.signage h2 {
    margin: 10px 0;
    padding: 0;
    font-size: 2.5em;
    letter-spacing: 4px;
}
header.signage p {
    margin: 0;
    font-size: 1em;
}
header.signage span.dot {
    margin: 8px auto 0 auto;
    width: 8px;
    height: 8px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
header.signage span.line {
    margin: 15px auto 21px auto;
    width: 165px;
    height: 1px;
}
header.signage span.second {
    margin: 25px auto 21px auto;
}
header.signage span.arrow {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -5px;
    width: 9px;
    height: 38px;
}
}
.set-line {
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    padding: 0 30px;
}
.timeline {
    position: relative;
    list-style-type: none;
    padding: 30px 0 50px 0;
    font-family: "微软雅黑";
}
.timeline:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    top: 0;
    left: 165px;
    background: url(data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJUlEQVQIW2NkQAP/gYARWQwkAOLDBeECjEAAkkEWAKtEFwAJAgAZEBP+oM1IkwAAAABJRU5ErkJggg==);
}
.event {
    position: relative;
    margin-bottom: 80px;
    padding-right: 40px;
}
.thumb {
    position: absolute;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 0 8px #10a587, 0 1px 1px rgba(255,255,255,0.5);
    background-repeat: no-repeat;
    border-radius: 50%;
    transform: scale(0.8) translateX(24px);
}
.thumb:before {
    content: '';
    position: absolute;
    height: 8px;
    z-index: -1;
    background: transparent url(data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPElEQVQYV2NkQAP/gYARCNDFUQRgirAphitEl0TngxXisg5ZnBGXIpgbYfIYjkb3BNxGbBLYxIgyEaQRAA8KKAWYsZtjAAAAAElFTkSuQmCC);
    width: 51px;
    top: 42px;
    left: 100%;
    margin-left: 8px;
}
.thumb span {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    position: absolute;
}
.thumb span.author {
    width: 300px;
    left: -100px;
    bottom: -35px;
}
.thumb span.info {
    width: 300px;
    left: -100px;
    bottom: -55px;
}
.thumb img {
    border-radius: 50%;
    width: 100%;
}
/* Transparent Checkbox/radio hack: leave the checkbox on top, hide it with opacity 0*/
    .event label,
.event input[type="radio"] {
    width: 24px;
    height: 24px;
    left: 158px;
    top: 36px;
    position: absolute;
    display: block;
}
.event input[type="radio"] {
    opacity: 0;
    z-index: 10;
    cursor: pointer;
}
.event label:after {
    font-family: 'fontawesome-selected';
    content: '-';
    background: #fff;
    border-radius: 50%;
    color: #10a587;
    font-size: 26px;
    height: 100%;
    width: 100%;
    left: -2px;
    top: -3px;
    line-height: 24px;
    position: absolute;
    text-align: center;
}
.content-perspective {
    margin-left: 230px;
    position: relative;
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    -o-perspective: 600px;
    -ms-perspective: 600px;
    perspective: 600px;
}
.content-perspective:before {
    content: '';
    width: 37px;
    left: -51px;
    top: 45px;
    position: absolute;
    height: 1px;
    z-index: -1;
    background: #fff;
}
.content {
    
}
.content-inner {
    position: relative;
    padding: 20px;
    color: #333;
    border: none;
    border-left: 5px solid #10a587;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    background: #fff;
}
.content-inner h3 {
    font-size: 26px;
    padding: 5px 0 5px 0;
    color: #10a587;
}
.content-inner p {
    font-size: 18px;
    text-align: left;
}
.content-inner:before {
    font-family: 'fontawesome-selected';
    content: '\25c2';
    font-weight: normal;
    font-size: 54px;
    line-height: 54px;
    position: absolute;
    width: 30px;
    height: 30px;
    color: #10a587;
    left: -22px;
    top: 19px;
    z-index: -1;
}
/* Transitions*/
    .thumb,
.thumb span,
.content-inner h3 {
    -webkit-transition: all 0.6s ease-in-out 0.2s;
    -moz-transition: all 0.6s ease-in-out 0.2s;
    -o-transition: all 0.6s ease-in-out 0.2s;
    -ms-transition: all 0.6s ease-in-out 0.2s;
    transition: all 0.6s ease-in-out 0.2s;
}
.content-inner {
    -webkit-transition: box-shadow 0.8s linear 0.2s;
    -moz-transition: box-shadow 0.8s linear 0.2s;
    -o-transition: box-shadow 0.8s linear 0.2s;
    -ms-transition: box-shadow 0.8s linear 0.2s;
    transition: box-shadow 0.8s linear 0.2s;
}
.content {
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(.59,1.45,.69,.98) 0.2s;
    -moz-transition: -moz-transform 0.8s cubic-bezier(.59,1.45,.69,.98) 0.2s;
    -o-transition: -o-transform 0.8s cubic-bezier(.59,1.45,.69,.98) 0.2s;
    -ms-transition: -ms-transform 0.8s cubic-bezier(.59,1.45,.69,.98) 0.2s;
    transition: transform 0.8s cubic-bezier(.59,1.45,.69,.98) 0.2s;
}
.content-inner p {
    -webkit-transition: max-height 0.5s linear, color 0.3s linear;
    -moz-transition: max-height 0.5s linear, color 0.3s linear;
    -o-transition: max-height 0.5s linear, color 0.3s linear;
    -ms-transition: max-height 0.5s linear, color 0.3s linear;
    transition: max-height 0.5s linear, color 0.3s linear;
}
/* Checked*/
    .event input[type="radio"]:checked + label:after {
    content: '\2714';
    color: #f9c479;
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.8);
}
.event input[type="radio"]:checked ~ .content-perspective:before {
    background: #f9c479;
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner h3 {
    color: #f9c479;
}
.event input[type="radio"]:checked ~ .content-perspective .content {
    transform: rotateY(0deg);
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner {
    border-color: #f9c479;
    box-shadow: 10px 0px 10px -6px rgba(0, 0, 0, 0.1);
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner p {
    max-height: 260px;
    /* Add media queries*/
    color: rgba(0,0,0,0.6);
    -webkit-transition-delay: 0s, 0.6s;
    -moz-transition-delay: 0s, 0.6s;
    -o-transition-delay: 0s, 0.6s;
    -ms-transition-delay: 0s, 0.6s;
    transition-delay: 0s, 0.6s;
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner:before {
    color: #f9c479;
}
.event input[type="radio"]:checked ~ .thumb {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 8px #f9c479, 0 1px 1px rgba(255,255,255,0.5);
}
.event input[type="radio"]:checked ~ .thumb span {
    color: #f9c479;
}
.event input[type="radio"]:checked ~ .thumb:before {
    background: transparent url(data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPUlEQVQYV2NkQAOfUjX+882+wYgujiIAU4RNMVwhuiQ6H6wQl3XI4oy4FMHcCJPHcDS6J2A2EqUQpJhohQBbNyaHFmzEqgAAAABJRU5ErkJggg==);
}
.content-inner p,
.thumb span,
.event label {
    -webkit-backface-visibility: hidden;
}
@media screen and (max-width: 850px) {
    .content-inner h3 {
    font-size: 20px;
}
.content-inner p {
    font-size: 14px;
    text-align: justify;
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner p {
    max-height: 500px;
}
}
@media screen and (max-width: 540px) {
    .timeline::before {
    left: 50px;
}
.event {
    padding-right: 0px;
    margin-bottom: 100px;
}
.thumb {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}
.event input[type="radio"] {
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
}
.thumb:before, .event input[type="radio"]:checked ~ .thumb:before {
    background: none;
    width: 0;
}
.event label {
    display: none;
}
.content-perspective {
    margin-left: 0px;
    top: 80px;
}
.content-perspective:before {
    height: 0px;
}
.content {
    -webkit-transform: rotateX(-10deg);
    -moz-transform: rotateX(-10deg);
    -o-transform: rotateX(-10deg);
    -ms-transform: rotateX(-10deg);
    transform: rotateX(-10deg);
}
.event input[type="radio"]:checked ~ .content-perspective .content {
    -webkit-transform: rotateX(10deg);
    -moz-transform: rotateX(10deg);
    -o-transform: rotateX(10deg);
    -ms-transform: rotateX(10deg);
    transform: rotateX(10deg);
}
.content-inner {
    border-left: none;
    border-top: 5px solid #10a587;
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner {
    border-color: #f9c479;
    box-shadow: 0 10px 10px -6px rgba(0, 0, 0, 0.1);
}
.content-inner:before {
    content: '\25b4';
    left: 33px;
    top: -32px;
}
.event input[type="radio"]:checked ~ .content-perspective .content-inner p {
    max-height: 300px;
}
}
/*footer*/
    #footer {
    background-color: #4d4e4e;
    clear: both;
    margin-top: 20px;
    border-top: 1px solid #a7a7a7;
    font-size: 12px;
}
#footer a {
    text-decoration: none;
}
#footer-main {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    line-height: 24px;
    text-align: center;
    color: #EEE
}
#footer-main p {
    font-size: 12px
}
#footer-main .footer-link {
    float: left;
    width: 59%
}
#footer-main .footer-link ul {
    float: left;
    width: 20%
}
#footer-main .footer-link a {
    color: #EEE;
    opacity: .7;
    transition: opacity ease-out .5s;
    -moz-transition: opacity ease-out .5s;
    -webkit-transition: opacity ease-out .5s;
    -o-transition: opacity ease-out .5s
}
#footer-main .footer-link a:hover {
    opacity: 1
}
#footer-main .footer-about {
    float: left;
    width: 41%;
    text-align: right
}
#footer-main .footer-about .social-list a {
    background: #DDD;
    border-radius: 50%;
    color: transparent;
    display: inline-block;
    line-height: 1;
    opacity: .8;
    padding: .3em
}
.inner.topic,.panel .header {
    background: #fff
}
#footer-main .footer-about .social-list .social-github:before,#footer-main .footer-about .social-list .social-weibo:before {
    display: inline-block;
    font-family: FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4d4e4e;
    font-size: 12em;
}
#footer-main .footer-about .social-list a:hover {
    opacity: 1;
    transition: opacity ease-out 1s;
    -moz-transition: opacity ease-out 1s;
    -webkit-transition: opacity ease-out 1;
    -o-transition: opacity ease-out 1s
}
#footer-main .footer-about a {
    color: #EEE
}
#footer-main .footer-about a:active,#footer-main .footer-about a:hover {
    text-decoration: underline
}
.topic-tab:hover,.user_action a {
    text-decoration: none
}
#footer-main .footer-sub {
    clear: both
}
#footer-main .footer-sub a {
    color: #fff
}
</style>
