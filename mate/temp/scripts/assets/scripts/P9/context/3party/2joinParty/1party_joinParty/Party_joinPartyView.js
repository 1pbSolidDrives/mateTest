"use strict";
cc._RFpush(module, '08c3206R4xFPr7tk0g1CVT4', 'Party_joinPartyView');
// scripts/P9/context/3party/2joinParty/1party_joinParty/Party_joinPartyView.js

var MVC = require("FWS_MVC");
var party_joinPartyView;
var partyJoinPartyLayer;
party_joinPartyView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function onEnterNode() {
        cc.log("myTurnLayer");
        // cc.loader.loadRes("TestProfab/partyJoinPartyLayer", function (err, prefab) {
        //     cc.log(err);
        //     partyJoinPartyLayer = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(partyJoinPartyLayer);
        // });
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {
        partyJoinPartyLayer.removeFromParent(true);
    }

});
module.exports = party_joinPartyView;

cc._RFpop();