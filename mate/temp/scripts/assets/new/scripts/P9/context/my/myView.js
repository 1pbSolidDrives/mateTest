"use strict";
cc._RFpush(module, '09b0f5WWbVOAo1+BuYP6Ozu', 'myView');
// new/scripts/P9/context/my/myView.js

var MVC = require("FWS_MVC");
var myView;
myView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        //加载结算场景
        // cc.director.loadScene("myScene");

        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = myView;

cc._RFpop();