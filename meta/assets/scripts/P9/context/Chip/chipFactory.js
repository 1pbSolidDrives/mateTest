/*
    1几人桌
    2几个人在玩
    3当前筹码数量
    4谁、压了多少筹码
    5面前的筹码数量
    6主池
    7边池
    8边池、主池、
    9入池
    10谁赢了 
*/
const MVC = require("FWS_MVC");
cc.Class({
    extends:MVC.FMessageConnection,
    properties: {
        //主池筹码图片
        Chips:{
            default:null,
            type:cc.Sprite
        },
        //主池筹码数目
        ChipsLabel:{
            default:null,
            type:cc.Label
        },
        //筹码图片
        Chip:{
            default:null,
            type:cc.Sprite
        },
        //左显示筹码数目
        ChipLabel_l:{
            default:null,
            type:cc.Label
        },
        //右显示筹码数目
        ChipLabel_r:{
            default:null,
            type:cc.Label
        },
        //wo筹码数目
        meChipLabel:{
            default:null,
            type:cc.Label
        },
         //底池筹码图片
        Pondbg:{
            default:null,
            type:cc.Sprite
        },
         //底池筹码文字
        PondLabel:{
            default:null,
            type:cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        this.Chip.node.scale = 0.5;
        this.connect();
        //this.initChip();
        // var mySprite = new cc.Node().addComponent(cc.Label);
        // mySprite.string="sadasdasfafg";
        // mySprite.node.setPosition(300,200);
        // this.node.addChild(mySprite.node);
    },
    onDestory:function () {
            cc.log("wo bei shan chu le ");
        this.disconnect();
    },
    //显示筹码左
    initChipl:function(){
        this.Chip.node.active = true;
        this.Chips.node.active = false;
        this.meChipLabel.node.active = false;
        this.ChipLabel_l.node.active = true;
        this.ChipLabel_r.node.active = false;
        this.Pondbg.node.active = false;
    },
    //显示筹码右
    initChipr:function(){
        this.Chip.node.active = true;
        this.Chips.node.active = false;
        this.meChipLabel.node.active = false;
        this.ChipLabel_l.node.active = false;
        this.ChipLabel_r.node.active = true;
        this.Pondbg.node.active = false;
    },
    //显示主池、边池筹码
    initChips:function(){
        this.Chip.node.active = false;
        this.Chips.node.active = true;
        this.meChipLabel.node.active = false;
        this.ChipLabel_l.node.active = false;
        this.ChipLabel_r.node.active = true;
        this.Pondbg.node.active = false;
    },
    //显示wo的筹码数
    initmeChipLabel:function(){
        this.Chip.node.active = false;
        this.Chips.node.active = false;
        this.meChipLabel.node.active = true;
        this.Pondbg.node.active = false;
    },
    //显示低池
    initPondbg:function(){
        this.Chip.node.active = false;
        this.Chips.node.active = false;
        this.meChipLabel.node.active = false;
        this.Pondbg.node.active = true;
    },
    //接收消息修改筹码数量
    onFMessage_Chip: function(msg) {
        cc.log("调用了");
        if(this.node.name==msg.args.name){
            // if(msg.args.Chip=="Chipr"){
            //     this.initChipr();
            // }else if(msg.args.Chip=="Chipl"){
            //     this.initChipl();
            // }
             
            // if(msg.args.Chipnum != null){
            //     this.ChipLabel_l.string=msg.args.Chipnum;
            //     this.ChipLabel_r.string=msg.args.Chipnum;
            // }
            cc.log("msg.args.tag",msg.args.tag);
            if(this.node.tag==msg.args.tag){
                if(msg.args.Chip=="Chipr"){
                    this.initChipr();
                }else if(msg.args.Chip=="Chipl"){
                    this.initChipl();
                }
                
                if(msg.args.Chipnum != null){
                    this.ChipLabel_l.string=msg.args.Chipnum;
                    this.ChipLabel_r.string=msg.args.Chipnum;
                }
            }
        }
        
       
        
        msg.complete();  
    },
    //接收消息修改主池筹码数量
    onFMessage_Chips: function(msg) {
        if(this.node.name==msg.args.name){
            this.initChips();
            if(msg.args.Chipsnum != null){
                this.ChipsLabel.string=msg.args.Chipsnum;
            }
        }
        
        msg.complete();  
    },
    onFMessage_meChipLabel: function(msg) {
        if(this.node.name==msg.args.name){
            this.initmeChipLabel();
            if(msg.args.meChipLabelNum != null){
                this.meChipLabel.string=msg.args.meChipLabelNum;
            }
        }
        
        msg.complete();  
    },
    onFMessage_initPondbg: function(msg) {
        if(this.node.name==msg.args.name){
            this.initPondbg();
            if(msg.args.PondLabelNum != null){
                this.PondLabel.string=msg.args.PondLabelNum;
            }
        }
        
        msg.complete();  
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
