const MVC = require("FWS_MVC");
const FSocketModelAbstract = cc.Class({
    extends: MVC.FMessageConnection,

    createPack: function() {
        var c = require("FSocketPack");
        return new c();
    },

    sendPack: function(pack) {

        //TODO: 发送数据包
    }
});

module.exports = FSocketModelAbstract;