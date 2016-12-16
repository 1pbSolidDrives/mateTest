//等待牌局界面，牌桌动画以及牌桌初始化
const MVC = require("FWS_MVC");

const tableScript = require("tableScript");
const shareLayerScript = require("shareLayerScript");
const actionLayoutScript = require("actionLayoutScript");
const autoLayoutScript = require("autoLayoutScript");
const backgroundLayerScript = require("backgroundLayerScript");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

        //建立连接
        this.connect();
    },
    onDestroy:function ( ){
        cc.log("销毁了 断开连接");
        this.disconnect();
    },





    
});

