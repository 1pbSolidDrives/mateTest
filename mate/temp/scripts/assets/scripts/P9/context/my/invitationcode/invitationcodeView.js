"use strict";
cc._RFpush(module, '720ddO1HAxJvLgdaaqSecPZ', 'invitationcodeView');
// scripts/P9/context/my/invitationcode/invitationcodeView.js

//邀请码
var MVC = require("FWS_MVC");
var Project = require("Project");
var invitationcodeView;
invitationcodeView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("invitationcodeScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = invitationcodeView;

cc._RFpop();