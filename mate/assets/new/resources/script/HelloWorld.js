
const MVC = require("FWS_MVC");
const GateWAY = require("FWS_NATIVE_GATEWAY");

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
            // MVC.FContextManager.gotoID("login");

        },2);

    },
    onDestory:function () {
        this.disconnect();

    },
    clickForCppToJs:function(){

    },   
    clickForSendMsg:function(){
        var obj = {};
        obj.version = "1";
        obj.appid = "11";
        obj.msgId = '111';
        obj.sequence = '1111';
        obj.retcode = '1111';
        obj.extra = "11111";
        obj.router = "1111111";
        obj.timestamp = "191919";
        obj.body = "1111111111111111";
        obj.type = "1";

        jsCppConnect.testlog("发送了网络消息");
        jsCppConnect.jsToCpp(obj);

    },    
    clickForConnect:function(){

    },
    cppTOjs:function(msg){
        this.label.string = msg;

    },

    // called every frame
    update: function (dt) {

    },
});
