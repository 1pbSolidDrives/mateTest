const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        label:{
            default:null,
            type:cc.Label
        }
    },
    // use this for initialization
    onLoad: function () {
        this.connect();
        this.scheduleOnce(function () {
            // // MVC.FContextManager.gotoID("login");
            // var obj = new Object();
            // obj.data = "我是数据"
            // gateWay.to("第一次测试！！！");
        },2);
        var msg1 = new MVC.FMessage("GetP9CreateSettingsSTDDataAck", "root");
        msg1.send();
    },
    onDestory:function () {
        this.disconnect();

    },
    onFMessage_GetP9CreateSettingsSTDDataReq:function (msg) {
        var data = msg.args;
        cc.log(data);
    }


});
