const MVC = require("FWS_MVC");
var roomController;
roomController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {

        cc.log("roomController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }

});
module.exports = roomController;
