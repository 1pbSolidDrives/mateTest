//编辑
const MVC = require("FWS_MVC");
const Project = require("Project");
var editView;
editView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },
    onEnterNode: function() {
        //加载结算场景
        cc.director.loadScene("editScene");



        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
    

});
module.exports = editView;