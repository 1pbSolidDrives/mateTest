"use strict";
cc._RFpush(module, '00079zKvUNFoq8O90ubCz+u', 'titleScript');
// scripts/A/context/4room/a2room-roomWaiting/titleScript.js

//等待牌局界面，牌桌动画以及牌桌初始化
var MVC = require("FWS_MVC");

var tableScript = require("tableScript");
var shareLayerScript = require("shareLayerScript");
var actionLayoutScript = require("actionLayoutScript");
var autoLayoutScript = require("autoLayoutScript");
var backgroundLayerScript = require("backgroundLayerScript");
cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {

        //建立连接
        this.connect();
    },
    onDestroy: function onDestroy() {
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});

cc._RFpop();