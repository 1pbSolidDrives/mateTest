"use strict";
cc._RFpush(module, '0231f2Y6CRKfJP0jnaeYkJu', 'room_partyRoomOverController');
// scripts/A/context/4room/a1room-partyRoomOver/room_partyRoomOverController.js

var MVC = require("FWS_MVC");
var roomPartyRoomOverController;
roomPartyRoomOverController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = roomPartyRoomOverController;

cc._RFpop();