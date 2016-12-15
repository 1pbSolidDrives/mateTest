/*
 * 环境参数
 * @Author: thor.liu 
 * @Date: 2016-12-05 14:26:34 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-05 17:52:38
 */

const FEnvironment = cc.Class({
    name: "FEnvironment",
    ctor: function() {},

    statics: {

        //────────────────────────────────────────────────────────── 参数定义

        /**
         * TCP服务器IP地址
         */
        tcpServerIP: "127.0.0.1",
        /**
         * TCP服务器端口
         */
        tcpServerPort: 4000,
        /**
         * WEB服务基础地址 (功能接口的基础地址)
         */
        httpApiBaseUrl: "http://localhost:8080/api/",

        /**
         * WEB页基础地址 (WEB界面或者网页的基础地址)
         */
        webPageBaseUrl: "http://api.nicefold.com/",


        //────────────────────────────────────────────────────────── 方法定义

        getWebApiUrl: function(apiUrl) {
            return FEnvironment + apiUrl;
        }
    }
});

module.exports = FEnvironment;