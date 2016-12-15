"use strict";
cc._RFpush(module, '53fe0KEx0BIBL2cGyzj0kXv', 'ruleView');
// scripts/A/context/my/rule/ruleView.js

//规则说明
var MVC = require("FWS_MVC");
var Project = require("Project");
var ruleView;
ruleView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},
    onEnterNode: function onEnterNode() {
        //加载结算场景
        cc.director.loadScene("ruleScene");

        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}
});
module.exports = ruleView;

cc._RFpop();