/*
 * Socket数据包信息
 * @Author: thor.liu 
 * @Date: 2016-12-06 16:46:25 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-06 17:02:53
 */

const FSocketPack = cc.Class({
    name: "FSocketPack",
    ctor: function() {

    },

    statics: {
        version: 0
    },



    properties: {
        //-----
        type: 0,
        msgid: 0,

        //-----
        retcode: 0,
        extra: "",
        router: "",

        //-----
        body: null
    }

});

module.exports = FSocketPack;