"use strict";
cc._RFpush(module, '21febBjyyNGpZsYdc7xC33L', 'editView');
// scripts/P9/context/my/edit/editView.js

//编辑
var MVC = require("FWS_MVC");
var Project = require("Project");
var editView;
editView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("editScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = editView;

cc._RFpop();