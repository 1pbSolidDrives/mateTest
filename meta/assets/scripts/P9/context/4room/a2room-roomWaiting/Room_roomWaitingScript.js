//等待牌局界面，牌桌动画以及牌桌初始化
cc.Class({
    extends: cc.Component,

    properties: {
        //标题区
        titleSprite: {
            default: null,
            type: cc.Sprite
        },
        //内容背景
        backgroundLayer: {
            default:null,
            type: cc.Sprite
        },
        //牌局信息区
        gameprofile: {
            default: null,
            type: cc.Sprite
        },
        //人数 文字
        personcountLabel:{
            default: null,
            type: cc.Label
        },
        //入局人数/人数 文字
        personLabel:{
            default: null,
            type: cc.Label
        },
        //牌局时长 文字
        timeLabel:{
            default: null,
            type: cc.Label
        },
        //分享按钮
        shareBtn:{
            default: null,
            type: cc.Button
        },
        //分享 文字
        shareLabel:{
            default: null,
            type: cc.Label
        },
        //牌局编号 
        roomnumberLabel:{
            default: null,
            type: cc.Label
        },
        //开局按钮
        startBtn:{
            default: null,
            type: cc.Button
        },
        //开局 文字
        startLabel:{
            default: null,
            type: cc.Label
        },
        //立即上桌按钮
        joinBtn:{
            default: null,
            type: cc.Button
        },
        //立即上桌 文字
        joinLabel:{
            default: null,
            type: cc.Label
        },
        //等待玩家入局 文字
        waitplayerLabel:{
            default: null,
            type: cc.Label
        },
        //超时 文字
        overtimeLabel:{
            default: null,
            type: cc.Label
        },
        //牌桌
        table: {
            default: null,
            type: cc.Sprite
        },
        chatLayer: {
            default: null,
            type: cc.Sprite
        },
        /*---------------------弹出层，设置带入记分牌----------------------*/
        //设置带入记分牌层
        setscoreLayer: {
            default: null,
            type: cc.Layout
        },
        //标题 文字
        titleLabel: {
            default: null,
            type: cc.Label
        },
        //退出按钮
        quitBtn: {
            default: null,
            type: cc.Button
        },
        //slider
        slider: {
            default: null,
            type: cc.slider
        },
        //带入数量
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        //设置带入记分牌 文字
        settakeinLabel: {
            default: null,
            type: cc.Label
        },
        //slider最小值
        mintakeinLabel: {
            default: null,
            type: cc.Label
        },
        //slider最大值
        maxtakeinLabel: {
            default: null,
            type: cc.Label
        },
        //开启自动买入 文字
        openautobuyLabel: {
            default: null,
            type: cc.Label
        },
        //开启自动买入 按钮
        openBtn: {
            default: null,
            type: cc.Button
        },
        //自动买入按钮开关
        crecleSprite: {
            default: null,
            type: cc.Sprite
        },
        //当我的计分板少于/等于 文字
        scoreless1Label: {
            default: null,
            type: cc.Label
        },
        //个大盲注时
        scoreless2Label: {
            default: null,
            type: cc.Label
        },
        //系统自动为我补充
        supplement1Label: {
            default: null,
            type: cc.Label
        },
        //个buy-in
        supplement2Label: {
            default: null,
            type: cc.Label
        },
        //减号按钮
        minusBtn: {
            default: null,
            type: cc.Button
        },
        //buy-in数量
        buyincountLabel: {
            default: null,
            type: cc.Label
        },
        //加好按钮
        addBtn: {
            default: null,
            type: cc.Button
        },
        //确定带入按钮
        confirmtakeBtn: {
            default: null,
            type: cc.Button
        },
        //确定带入 文字
        confirmtakeLabel: {
            default: null,
            type: cc.Label
        },
        /*----------------------分享层-------------------------*/
        //分享层
        shareLayerBtn: {
            default: null,
            type: cc.Button
        },
        //微信分享按钮
        shareVXBtn: {
            default: null,
            type: cc.Button
        },
        //QQ分享按钮
        shareQQBtn: {
            default: null,
            type: cc.Button
        },
        //微信分享 文字
        VXLabel: {
            default: null,
            type: cc.Label
        },
        //QQ分享 文字
        QQLabel: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {

        this.shareLayerBtn.node.active = false;

        this.waitplayerLabel.node.active = false;

        this.overtimeLabel.node.active = false;

        this.table.node.setLocalZOrder(3);

        this.setscoreLayer.node.active = false;

        this.titleSprite.node.setLocalZOrder(4);

        this.backgroundLayer.node.cascadeOpacity = false;
        this.backgroundLayer.node.setLocalZOrder(4);

    },
    //分享按钮点击
    shareBtnclick: function(){
        this.shareLayerBtn.node.active = true;
        this.shareLayerBtn.node.setLocalZOrder(6);
    },
    //牌桌动画回调
    onStop : function (event) {
        cc.log("1111111111111111111111111111");
    },
    //开局按钮点击
    startBtnclick: function(){
        //隐藏无关节点
        this.shareBtn.node.active = false;
        this.startBtn.node.active = false;
        this.joinBtn.node.active = false;
        this.gameprofile.node.active = false;
        this.titleSprite.node.active = false;


        var table = this.table.node;

        //聊天动画回调
        var chatfinished = cc.callFunc(function(){
            //获取桌子动画并播放
            var animCtrl = table.getComponent(cc.Animation);
            animCtrl.on('stop',this.onStop,this);
            animCtrl.play("table");


        },this,null);
        var chatLayerAction = cc.sequence(cc.moveTo(1,cc.p(0,-1000)),chatfinished);
        this.chatLayer.node.runAction(chatLayerAction);
    },
    //立即上桌按钮点击
    joinBtnclick: function(){
        var layer = this.setscoreLayer
        layer.node.active = true;
        layer.node.setLocalZOrder(5);
    },
    //退出设置记分牌layer
    quitBtnclick: function(){
        this.setscoreLayer.node.active = false;

    },
    //自动买入按钮开启
    openBtnclick: function(){

    },
    //减号按钮点击
    minusBtnclick: function(){

    },
    //加号按钮点击
    addBtnclick: function(){

    },
    //确定带入按钮点击
    confirmtakeBtnclick: function(){

    },
    //退出分享页面
    shareLayerBtnclick: function(){
        this.shareLayerBtn.node.active = false;
    }





    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
