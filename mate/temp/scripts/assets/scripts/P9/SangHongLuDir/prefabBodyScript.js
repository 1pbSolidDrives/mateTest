"use strict";
cc._RFpush(module, '8f4d6gqKHBLNL1EnXBN+Xke', 'prefabBodyScript');
// scripts/P9/SangHongLuDir/prefabBodyScript.js



cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setContentSize(cc.director.getVisibleSize());
    }

});

cc._RFpop();