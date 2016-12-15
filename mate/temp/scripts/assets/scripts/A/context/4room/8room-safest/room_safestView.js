"use strict";
cc._RFpush(module, '06047wcQMhLV5rVBke9Q8Wk', 'room_safestView');
// scripts/A/context/4room/8room-safest/room_safestView.js

var MVC = require("FWS_MVC");
var roomSafestView;
var otherTurnLayer;
roomSafestView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/safestLayer", function (err, prefab) {
            cc.log(err);
            otherTurnLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(otherTurnLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        otherTurnLayer.removeFromParent(true);
    }

});
module.exports = roomSafestView;

cc._RFpop();