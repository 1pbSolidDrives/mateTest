/*
选择创建标准局页面
 */

const MVC = require("FWS_MVC");
cc.Class({
    extends: MVC.FMessageConnection,
    properties: {
        bg: {
            default: null,
            type: cc.Sprite
        },

        scrollView: {
            default: null,
            type: cc.ScrollView

        },
        view1: {
            default: null,
            type: cc.Node,
        },
        view2: {
            default: null,
            type: cc.Node
        },
        view3: {
            default: null,
            type: cc.Node
        },

        BlindSlider: {
            default: null,
            type: cc.Slider
        },
        PeopleNumberSlider: {
            default: null,
            type: cc.Slider
        },
        TimeSlider: {
            default: null,
            type: cc.Slider
        },
        //小盲大盲
        blindlabel: {
            default: null,
            type: cc.Label
        },
        //带入记分牌
        scorecardlabel: {
            default: null,
            type: cc.Label
        },




    },



    onLoad: function () {
        this.connect();

    },
    onDestory: function () {
        this.disconnect();
    },

    //高级选项
    moreoptioncall: function () {

        this.scrollView.enabled = true;
        this.view2.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.view3.color = new cc.Color(0, 0, 0);

    },
    //收起
    packupcall: function () {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.view2.active = false;
        this.view3.color = new cc.Color(20, 32, 78);
    },

    //创建标准局
    standardButtonClick: function () {

        var msg = new MVC.FMessage("clickstandardButton", "createPartySet");
        msg.args.name = "创建标准牌局";
        // msg.args.blind = this.blindValue.get();
        msg.send();
    },

    //大小盲注Slider
    BlindSlidercall: function () {
        var percent = this.BlindSlider.progress;

        if (1 / 6 < percent && percent < 2 / 6) {
            this.blindlabel.string = '2/4';
            this.scorecardlabel.string = '400';

        }
        if (2 / 6 < percent && percent < 3 / 6) {
            this.blindlabel.string = '4/8';
            this.scorecardlabel.string = '1000';

        }
        if (3 / 6 < percent && percent < 4 / 6) {
            this.blindlabel.string = '5/10';
            this.scorecardlabel.string = '2000';

        }
        if (4 / 6 < percent && percent < 5 / 6) {
            this.blindlabel.string = '10/20';
            this.scorecardlabel.string = '5000';

        }
        if (5 / 6 < percent && percent < 1) {
            this.blindlabel.string = '25/50';
            this.scorecardlabel.string = '10000';

        }

    },
    PeopleNumberSlider: function () {

    },
    //牌局时长
    TimeSlider: function () {

    },


    // use this for initialization

});