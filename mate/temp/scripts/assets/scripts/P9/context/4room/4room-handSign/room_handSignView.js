"use strict";
<<<<<<< HEAD
cc._RFpush(module, '10606fQxaJBt55O9A0IlEi2', 'room_handSignView');
=======
cc._RFpush(module, '09353anV5BEhq06NJDZr7Nf', 'room_handSignView');
>>>>>>> 6e04f5ad9df4b445460fc443f15c05e7fdea739d
// scripts/P9/context/4room/4room-handSign/room_handSignView.js

var MVC = require("FWS_MVC");
var roomHandSignView;
var FaShouPaiTestLayer;
roomHandSignView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/FaShouPaiTestLayer", function (err, prefab) {
            cc.log(err);
            FaShouPaiTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(FaShouPaiTestLayer);
        });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignView;

cc._RFpop();