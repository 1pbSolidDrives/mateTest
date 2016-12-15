const MVC = require("FWS_MVC");
cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        ChipPrefab: {
            default: null,
            type: cc.Prefab
        },
        //当前是几人桌
        seatNum: 9,
        //左侧的X坐标
        leftPositionX: -310,
        //右侧的X坐标
        rightPositionX: 310,
        //上面左侧的x坐标
        upPositionX_shuangl: -151,
        //上面右侧的x坐标
        upPositionX_shuangr: 151,
        //上面一个人时候x坐标
        upPositionX_dan: 0,
        //上面Y坐标
        upPositionY: 527,
        //下面x坐标
        downPositionX: 0,
        //下面y坐标
        downPositionY: -480,
        //左右Y坐标的最大值
        upMaxPosition: 310,
        //左右Y坐标的最小值
        downMaxPosition: -170,
    },

    // use this for initialization
    onLoad: function () {
        this.connect();
        //两边的最大高度
        this.upMaxPosition=cc.director.getVisibleSize().height*0.2421875;
        //两边的最小高度
        this.downMaxPosition=cc.director.getVisibleSize().height*(-0.1328125);
        //上面座位的高度
        this.upPositionY=cc.director.getVisibleSize().height*(0.3360869);
        //下面座位的高度
        this.downPositionY=cc.director.getVisibleSize().height*(-0.41640625);
        //左边座位的x值
        this.leftPositionX=cc.director.getVisibleSize().width*(0.43055555);
        //右边座位的x值
        this.rightPositionX=cc.director.getVisibleSize().width*(-0.43055555);
        //上面左边x值
        this.upPositionX_shuangl=cc.director.getVisibleSize().width*(0.20972222);
        //上面右边x值
        this.upPositionX_shuangr=cc.director.getVisibleSize().width*(-0.20972222);


        cc.log("宽度是",cc.director.getVisibleSize().width);
        //上面座位的高度
        this.upPositionYChip=cc.director.getVisibleSize().height*(0.28125);
        //下面筹码的高度
        this.downPositionYChip=cc.director.getVisibleSize().height*(-0.2421875);
        //左边筹码的x值
        this.leftPositionXChip=cc.director.getVisibleSize().width*(0.2421875);
        //右边筹码的x值
        this.rightPositionXChip=cc.director.getVisibleSize().width*(-0.2421875);
        //上面左筹码x值
        this.upPositionX_shuanglChip=cc.director.getVisibleSize().width*(0.115);
        //上面右筹码x值
        this.upPositionX_shuangrChip=cc.director.getVisibleSize().width*(-0.115);
        //cc.log(cc.director.getVisibleSize().height);
        //this.newSeat();
        this.newChipSeat();

        var newStar = cc.instantiate(this.ChipPrefab);
        newStar.name = "initPondbg";
        this.node.addChild(newStar);
        newStar.setPosition(cc.p(300,300));

        var msg1 = new MVC.FMessage("initPondbg", "root");
        msg1.args.PondLabelNum = 88888888;
        msg1.args.name = "initPondbg";
        msg1.send();
    },
    onDestory:function () {
            cc.log("wo bei shan chu le ");
        this.disconnect();
    },
    //设置每个人筹码数的位置
    newSeat: function () {
        for (var i = 0; i < this.seatNum; i++) {
            var newStar = cc.instantiate(this.ChipPrefab);
            newStar.name = "meChipLabel";
            this.node.addChild(newStar);
            newStar.setPosition(this.setSeatPosition(i,false));
        }
        var msg1 = new MVC.FMessage("meChipLabel", "root");
        msg1.args.meChipLabelNum = 88888888;
        msg1.args.name = "meChipLabel";
        msg1.send();
    },
    //设置筹码的位置
    newChipSeat: function () {
        for (var i = 0; i < this.seatNum; i++) {
            var newStar = cc.instantiate(this.ChipPrefab);
            newStar.name = "Chip";
            newStar.tag = i;
            this.node.addChild(newStar);
            newStar.setPosition(this.setSeatPosition(i,true));
            var msg1 = new MVC.FMessage("Chip", "root");
            msg1.args.Chipnum = 88888888;
            msg1.args.Chip="Chipr";

            if(this.seatNum / 2 >i&& i>0){
                msg1.args.Chip="Chipl";
            }
            msg1.args.name = "Chip";
            msg1.args.tag = i;
            msg1.send();
        }
        
    },
    //返回设置拍桌上空座位的位置
    setSeatPosition: function (i,isChip=false) {
        
        var pX = 0;
        var pY = 0;
        if ((this.seatNum) % 2 == 0) {
            cc.log("第一个");
            if ((i == this.seatNum / 2) || (i == 0)) {
                pX = this.downPositionX;
                if (i == 0) {
                    pY = this.downPositionY;
                    if(isChip){
                        pY = this.downPositionYChip;    
                    }
                } else {
                    pY = this.upPositionY;
                    if(isChip){
                        pY = this.upPositionYChip;    
                    }
                }
                return cc.p(pX, pY);
            } else if (i > 0 && i < this.seatNum / 2) {
                
                if(isChip){
                    pX = this.leftPositionXChip;
                }else{
                    pX = this.leftPositionX;
                }
                pY = ((this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2-2)) * (i-1) + this.downMaxPosition;
                if(this.seatNum==4){
                    pY =(this.upMaxPosition - this.downMaxPosition)/2+this.downMaxPosition;
                }
            } else {
                if(isChip){
                    pX = this.rightPositionXChip;    
                }else{
                    pX = this.rightPositionX;
                }
                pY = ((this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2-2)) * (this.seatNum - i-1) + this.downMaxPosition;
                if(this.seatNum==4){
                    pY =(this.upMaxPosition - this.downMaxPosition)/2+this.downMaxPosition;
                }
            }
        } else if ((this.seatNum) % 2 == 1) {
            //第一个位置
            if (i == 0) {
                cc.log("i=0");
                pX = this.downPositionX;
                if(isChip){
                    pY = this.downPositionYChip;    
                }else{
                    pY = this.downPositionY;
                }
                return cc.p(pX, pY);
            }
            //上面的位置 
            else if ((i < this.seatNum / 2 + 1) && (i > this.seatNum / 2 - 1)) {
                if (i < this.seatNum / 2) {
                    //pX = this.upPositionX_shuangr;
                    if(isChip){
                        pX = this.upPositionX_shuanglChip;    
                    }else{
                        pX = this.upPositionX_shuangl;
                    }
                } else {
                   //pX = this.upPositionX_shuangl; 
                    if(isChip){
                        pX = this.upPositionX_shuangrChip;    
                    }else{
                        pX = this.upPositionX_shuangr;
                    }
                }
                if(isChip){
                    pY = this.upPositionYChip;
                }else{
                    pY = this.upPositionY;
                }
                return cc.p(pX, pY);
            } 
            //中间左边
            else if (i > 0 && i < this.seatNum / 2 - 1) {
                cc.log("i=zuo");
                if(isChip){
                        pX = this.leftPositionXChip;
                    }else{
                        pX = this.leftPositionX;
                    }
                pY = ((this.upMaxPosition - this.downMaxPosition) / (parseInt(this.seatNum/ 2)-1-1)) * (i-1) + this.downMaxPosition;
                if(this.seatNum==5){
                    pY =(this.upMaxPosition - this.downMaxPosition)/2+this.downMaxPosition;
                }
            } 
            //中间右边
            else {
                    cc.log("i=you");
                    
                    if(isChip){
                    pX = this.rightPositionXChip;    
                }else{
                    pX = this.rightPositionX;
                }
                    pY = ((this.upMaxPosition - this.downMaxPosition) / (parseInt(this.seatNum/ 2)-1-1)) * (this.seatNum - i-1) + this.downMaxPosition;
                    if(this.seatNum==5){
                         pY =(this.upMaxPosition - this.downMaxPosition)/2+this.downMaxPosition;
                    }
                }
        }
        // cc.log("x",pX);
        // cc.log("y",pY);
        if(isChip){
            return cc.p(pX, pY);
        }else{
            return cc.p(pX, pY-cc.director.getVisibleSize().height*0.04609375);
        }       
        
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
