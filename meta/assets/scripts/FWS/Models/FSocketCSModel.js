/*
 * 与CS服务模块的SOCKET通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:33 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-06 17:39:05
 */

const MVC = require("FWS_MVC");
const FSocketModelAbstract = require("FSocketModelAbstract");
module.exports = cc.Class({
    // name: "FSocketCSModel",
    extends: FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    onFMessage_socketOnReceive: function(msg) {
        // msg.complete();
        MVC.Flog.info("Socket,Room", "TODO: > 网络通讯");
    },

    //────────────────────────────────────────────────────────── 连接服务器

    onFMessage_serverConnect: function(msg) {
        msg.complete();
    }
});