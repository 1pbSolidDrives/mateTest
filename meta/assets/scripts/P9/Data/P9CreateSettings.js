
const MVC = require("FWS_MVC");
var P9CreateSettings = cc.Class({
    extends: MVC.FMessageConnection,
    onEnterNode: function() {
        P9CreateSettings.P9CreateSettingsSTD = new P9CreateSettings.P9CreateSettingsSTD();
        //读取文件数据
        P9CreateSettings.P9CreateSettingsSTD.init_SB_BB_EntryFee();
        P9CreateSettings.P9CreateSettingsSTD.init_PlayerNum();
        P9CreateSettings.P9CreateSettingsSTD.init_PartyTime();
        P9CreateSettings.P9CreateSettingsSTD.init_Ante();
        P9CreateSettings.P9CreateSettingsSTD.init_DeepRaise();
        //读取文件数据
        P9CreateSettings.P9CreateSettingsSNG = new P9CreateSettings.P9CreateSettingsSNG();
        P9CreateSettings.P9CreateSettingsSNG.init_Speed();
        P9CreateSettings.P9CreateSettingsSNG.init_SingleDeskPlayerNum();

        P9CreateSettings.P9CreateSettingsMTT = new P9CreateSettings.P9CreateSettingsMTT();
        P9CreateSettings.P9CreateSettingsMTT.init_SingleDeskPlayerNum();
        P9CreateSettings.P9CreateSettingsMTT.init_Speed();
    },
    onFMessage_GetP9CreateSettingsSTDDataAck:function (msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsSTDDataReq", "root");
        msg1.args.SB_BB_EntryFee    = P9CreateSettings.P9CreateSettingsSTD.SB_BB_EntryFee;
        msg1.args.PlayerNum         = P9CreateSettings.P9CreateSettingsSTD.PlayerNum;
        msg1.args.PartyTime         = P9CreateSettings.P9CreateSettingsSTD.PartyTime;
        msg1.args.Ante              = P9CreateSettings.P9CreateSettingsSTD.Ante;
        msg1.args.DeepRaise         = P9CreateSettings.P9CreateSettingsSTD.DeepRaise;

        msg1.send();
    },
    onFMessage_GetP9CreateSettingsMTTAck:function (msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsMTTReq", "root");
        msg1.args.SingleDeskPlayerNum       = P9CreateSettings.P9CreateSettingsMTT.SingleDeskPlayerNum;
        msg1.args.Speed                     = P9CreateSettings.P9CreateSettingsMTT.Speed;

        msg1.send();
    },
    onFMessage_GetP9CreateSettingsSNGAck:function (msg) {
        msg.complete();
        var msg1 = new MVC.FMessage("GetP9CreateSettingsSNGReq", "root");
        msg1.args.SingleDeskPlayerNum       = P9CreateSettings.P9CreateSettingsSNG.SingleDeskPlayerNum;
        msg1.args.Speed                     = P9CreateSettings.P9CreateSettingsSNG.Speed;

        msg1.send();
    }
});

P9CreateSettings.P9CreateSettingsSTD = cc.Class({

    properties: {
        SB_BB_EntryFee:[],
        PlayerNum:[],
        PartyTime:[],
        Ante:[],
        DeepRaise:[],

    },


    init_SB_BB_EntryFee:function () {
         this.SB_BB_EntryFee[0]={
            SB:1,
            BB:2,
            EntryFee:200
        };
        this.SB_BB_EntryFee[2]={
            SB:2,
            BB:4,
            EntryFee:400
        };
        this.SB_BB_EntryFee[3]={
            SB:5,
            BB:10,
            EntryFee:1000
        };
        this.SB_BB_EntryFee[4]={
            SB:10,
            BB:20,
            EntryFee:2000
        };
        this.SB_BB_EntryFee[5]={
            SB:25,
            BB:50,
            EntryFee:5000
        };
        this.SB_BB_EntryFee[6]= {
            SB: 50,
            BB: 100,
            EntryFee: 10000
        }
    },
    init_PlayerNum:function () {
         for (var i =0 ;i<7;i++){
            this.PlayerNum[i]=2+i;
        }
    },
    init_PartyTime:function () {
        for (var i=0;i<9;i++){
            this.PartyTime[i]=0.5+i*0.5;
        }
    },

    init_Ante:function () {
        for (var i=0;i<5;i++){
           this.Ante[i]=i*100;
        }
    },
    init_DeepRaise:function () {
        for (var i=0;i<3;i++){
            this.DeepRaise[i]=i*2;
        }
    },



});

P9CreateSettings.P9CreateSettingsSNG = cc.Class({

    properties: {
        SingleDeskPlayerNum:[],
        Speed:[],

    },

    init_Speed:function () {
        this.Speed[0]= {
            SpeedName:"慢速",
            VirtualApplicationFee:1000,
            InitialIntegral:4000,
            BlindUpTime:"15'",
            TheFirstPrize:4500,
            TheSecondPrize:2700,
            TheThirdPrize:1800
        };
        this.Speed[1]= {
            SpeedName:"普通",
            VirtualApplicationFee:1000,
            InitialIntegral:3000,
            BlindUpTime:"10'",
            TheFirstPrize:4500,
            TheSecondPrize:2700,
            TheThirdPrize:1800
        };
        this.Speed[2]= {
            SpeedName:"高速",
            VirtualApplicationFee:1000,
            InitialIntegral:2000,
            BlindUpTime:"5'",
            TheFirstPrize:4500,
            TheSecondPrize:2700,
            TheThirdPrize:1800
        };
        this.Speed[3]= {
            SpeedName:"超高速",
            VirtualApplicationFee:1000,
            InitialIntegral:1000,
            BlindUpTime:"3'",
            TheFirstPrize:4500,
            TheSecondPrize:2700,
            TheThirdPrize:1800
        };
    },
    init_SingleDeskPlayerNum:function () {
        for (var i=0;i<5;i++){
            this.SingleDeskPlayerNum[i]= 2+i;
        }
    },

});
P9CreateSettings.P9CreateSettingsMTT = cc.Class({

    properties: {
        SingleDeskPlayerNum:[],
        Speed:[],

    },
    onEnterNode: function() {
        this.init_SingleDeskPlayerNum();
        this.init_Speed();
    },
    init_SingleDeskPlayerNum:function () {
        for (var i=0;i<5;i++){
            this.SingleDeskPlayerNum[i]= 2+i;
        }
    },
    init_Speed:function () {
        this.Speed[0]={
            SpeedName:"慢速",
            VirtualApplicationFee:1000,
            BlindUpTime:"15'",
            InitialInjection:"10/20",
            InitialIntegral:4000,
        },
        this.Speed[1]={
            SpeedName:"普通",
            VirtualApplicationFee:1000,
            BlindUpTime:"10'",
            InitialInjection:"10/20",
            InitialIntegral:3000,
        },
        this.Speed[2]={
            SpeedName:"高速",
            VirtualApplicationFee:1000,
            BlindUpTime:"5'",
            InitialInjection:"10/20",
            InitialIntegral:2000,
        },
        this.Speed[3]={
            SpeedName:"超高速",
            VirtualApplicationFee:1000,
            BlindUpTime:"3'",
            InitialInjection:"10/20",
            InitialIntegral:1000,
        }
    },

});

module.exports = P9CreateSettings;
