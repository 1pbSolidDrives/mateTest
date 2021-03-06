"use strict";
cc._RFpush(module, '037a92lydREIqAOROo3DLcU', 'myController');
// scripts/A/context/my/myController.js

var MVC = require("FWS_MVC");
var Project = require("Project");
var myController;
myController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function onEnterNode() {
        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        cc.log("loginController onLeaveNode");
    },
    //切换钱包界面
    onFMessage_walletBtnclick: function onFMessage_walletBtnclick(msg) {
        MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
        MVC.FContextManager.gotoID("wallet");
        msg.complete();
    },
    //切换商城界面
    onFMessage_mallBtnclick: function onFMessage_mallBtnclick(msg) {
        MVC.FLog.data("商城跳转", "接收消息 {0}", msg);
        MVC.FContextManager.gotoID("mall");
        msg.complete();
    }
    // onFMessage_clickLoginButton: function(msg) {
    //     if( msg.args.name == "登录"){
    //         //进入分享节点
    //         cc.log("goto main 前");
    //         MVC.FContextManager.gotoID("main");
    //         cc.log("goto main 后");
    //         //发送消息给网络模块
    //     }else if(msg.args.name == "注册"){
    //         //进入分享节点
    //         // MVC.FContextManager.gotoID("Share");
    //         //发送消息给网络模块
    //     }

    // }

});
module.exports = myController;

cc._RFpop();