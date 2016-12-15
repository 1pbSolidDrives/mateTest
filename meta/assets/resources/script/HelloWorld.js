
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
        obj.data = "我是数据";
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
