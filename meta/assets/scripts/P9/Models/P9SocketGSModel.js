/*
 * 与九人桌游戏服务的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:00 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-06 17:40:33
 */
const MVC = require("FWS_MVC");
const FSocketModelAbstract = require("FSocketModelAbstract");
module.exports = cc.Class({
    // name: "P9SocketGSModel",
    extends: FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    onFMessage_socketOnReceive: function(msg) {
        msg.complete();
        MVC.Flog.info("Socket,Room", "TODO: > 网络通讯");
    },

    //────────────────────────────────────────────────────────── 游戏事件
    notify_gameEvent: function(msg) {
        msg.complete();
    },

    //TODO: start
    //TODO: handcards
    //TODO: publiccards
    //TODO: pot
    //TODO: action
    //TODO: timebank
    //TODO: safe...

    //────────────────────────────────────────────────────────── 就绪
    onFMessage_gameReady: function(msg) {
        msg.complete();
    },

    //────────────────────────────────────────────────────────── 玩家动作
    onFMessage_gameActionAck: function(msg) {
        msg.complete();
    }

});