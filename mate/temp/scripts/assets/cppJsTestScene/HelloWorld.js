"use strict";
<<<<<<< HEAD
cc._RFpush(module, '0a1971NJR9OrrAWHztE2lBu', 'HelloWorld');
=======
cc._RFpush(module, '01d7d3LyvhOyrzZe+BZ7OaM', 'HelloWorld');
>>>>>>> 6e04f5ad9df4b445460fc443f15c05e7fdea739d
// cppJsTestScene/HelloWorld.js

cc.Class({
    "extends": cc.Component,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;

        window.HelloWorld = this;
    },
    clickForCppToJs: function clickForCppToJs() {},
    clickForSendMsg: function clickForSendMsg() {

        // var msg = new MVC.FMessage("SendWebMSG","root");
        // msg.args.msgType = "login";
        // msg.args.appid = "appid";
        // msg.args.time = "time";
        // msg.args.mobile = "mobile";
        // msg.args.type = "type";
        // msg.args.sms = "sms";
        // msg.args.password = "password";

        // msg.send();
        this.label.string = "sssss";

        var msg = {
            name: "meinv"
        };
        jsCppConnect.testlog("aaa5");

        jsCppConnect.jsToCpp(msg);
    },
    clickForConnect: function clickForConnect() {},
    cppTOjs: function cppTOjs(msg) {
        this.label.string = msg;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();