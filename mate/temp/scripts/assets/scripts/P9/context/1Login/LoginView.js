"use strict";
cc._RFpush(module, '949e1Z1yypEdb0PrNClvqIC', 'LoginView');
// scripts/P9/context/1Login/LoginView.js

var MVC = require("FWS_MVC");
var LoginView;
var playerHeadLayer;
LoginView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("LoginScene");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = LoginView;

cc._RFpop();