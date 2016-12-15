"use strict";
cc._RFpush(module, '87439k3KiFMKpyOGBZ/Rdqa', 'FWS_MODEL');
// scripts/FWS/FWS_MODEL.js

var FWS_MODEL = {};

//──────────────────────────────────────────────────────────

/**
 * 数据绑定功能, 暂时只支持单向数据绑定
 */
FWS_MODEL.FBind = cc.Class({
    name: "FBind",
    statics: {

        init: function init() {

            if (FWS_MODEL.FBind._BIND_MODELS_) return;
            FWS_MODEL.FBind._BIND_MODELS_ = new Array();
            FWS_MODEL.FBind._BIND_ARRAYS_ = new Array();
            FWS_MODEL.FBind._BIND_DICTS_ = new Array();
        },
        notifyArrayChanged: function notifyArrayChanged(source, action, index, member) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_ARRAYS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_ARRAYS_[i];
                if (link.source === source) {
                    if (link.target instanceof FWS_MODEL.FArray) {
                        if (action == "add") {
                            link.target.add(member);
                        } else if (action == "insert") {
                            link.target.insert(member, index);
                        } else if (action == "remove") {
                            link.target.remove(index);
                        } else if (action == "modify") {
                            link.target.modify(index, member);
                        } else if (action == "clear") {
                            link.target.clear();
                        }
                    } else {
                        if (link.target.onBindArrayChanged && typeof link.target.onBindArrayChanged == "function") {
                            link.target.onBindArrayChanged(action, index, member);
                        }
                    }
                }
            }
        },
        notifyDictChanged: function notifyDictChanged(source, k, v) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_DICTS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_DICTS_[i];
                if (link.source === source) {
                    if (link.target instanceof FWS_MODEL.FDict) {
                        if (k) link.target.setValue(k, v);else link.target.clear();
                    } else {
                        if (link.target.onBindDictChanged && typeof link.target.onBindDictChanged == "function") {
                            link.target.onBindDictChanged(k, v);
                        }
                    }
                }
            }
        },
        notifyDataValueChanged: function notifyDataValueChanged(source, propertyName, oldValue, newValue) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < FWS_MODEL.FBind._BIND_MODELS_.length; i++) {
                var link = FWS_MODEL.FBind._BIND_MODELS_[i];
                if (link.source === source) {
                    if (link.map[propertyName]) {
                        var targetPropertyName = link.map[propertyName];
                        link.target[targetPropertyName] = newValue;
                    }
                }
            }
        },
        find: function find(source, target, ary) {
            FWS_MODEL.FBind.init();
            for (var i = 0; i < ary.length; i++) {
                var link = ary[i];
                if (link.source === source) {
                    if (link.target === target) {
                        return link;
                    }
                }
            }
        },
        bindModel: function bindModel(source, target, propertiesMap) {
            FWS_MODEL.FBind.init();
            if (propertiesMap && source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_MODELS_);
                if (found) return;

                var link = new Object();
                link.source = source;
                link.target = target;
                link.map = propertiesMap;
                FWS_MODEL.FBind._BIND_MODELS_.push(link);
            }
        },
        bindArray: function bindArray(source, target) {
            FWS_MODEL.FBind.init();
            if (source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_ARRAYS_);
                if (found) return;
                var link = new Object();
                link.source = source;
                link.target = target;
                FWS_MODEL.FBind._BIND_ARRAYS_.push(link);
            }
        },
        bindDict: function bindDict(source, target) {
            FWS_MODEL.FBind.init();
            if (source && target) {
                var found = FWS_MODEL.FBind.find(source, target, FWS_MODEL.FBind._BIND_DICTS_);
                if (found) return;
                var link = new Object();
                link.source = source;
                link.target = target;
                FWS_MODEL.FBind._BIND_DICTS_.push(link);
            }
        },

        unbindModel: function unbindModel(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_MODELS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_MODELS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_MODELS_.splice(i, 1);
                }
            }
        },
        unbindArray: function unbindArray(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_ARRAYS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_ARRAYS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_ARRAYS_.splice(i, 1);
                }
            }
        },
        unbindDict: function unbindDict(source, target) {
            FWS_MODEL.FBind.init();
            for (var i = FWS_MODEL.FBind._BIND_DICTS_.length - 1; i >= 0; i--) {
                var link = FWS_MODEL.FBind._BIND_DICTS_[i];
                if (link.source === source && link.target === target) {
                    FWS_MODEL.FBind._BIND_DICTS_.splice(i, 1);
                }
            }
        }
    }
});

/**
 * 一个支持属性变动事件的数据类
 */
FWS_MODEL.FAbstractModel = cc.Class({
    name: "FAbstractModel",
    ctor: function ctor() {
        this._propertyValues_ = new Object();
    },
    setValue: function setValue(propertyName, propertyValue) {
        if (this._propertyValues_[propertyName] === propertyValue) return;

        var oldValue = this._propertyValues_[propertyName];
        var newValue = propertyValue;

        this._propertyValues_[propertyName] = propertyValue;

        FWS_MODEL.FBind.notifyDataValueChanged(this, propertyName, oldValue, newValue);
    },
    getValue: function getValue(propertyName, defaultValue) {
        if (this._propertyValues_[propertyName]) {
            return this._propertyValues_[propertyName];
        }

        if (defaultValue) return defaultValue;

        return null;
    },
    toString: function toString() {
        return JSON.stringify(this._propertyValues_);
    }
});

/**
 * 一个支持数据成员变动通知的数组
 */
FWS_MODEL.FArray = cc.Class({
    name: "FArray",
    ctor: function ctor() {
        var src = null;
        if (arguments.length > 0) src = arguments[0];
        this._array_ = new Array();
        if (src) {
            for (var i = 0; i < src.length; i++) {
                this._array_.push(src[i]);
            }
        }
    },
    add: function add(item) {
        this._array_.push(item);
        FWS_MODEL.FBind.notifyArrayChanged(this, "add", this._array_.length - 1, item);
    },
    insert: function insert(item, index) {
        if (index < 0 || index >= this._array_.length - 1) return;
        this._array_.splice(index, 0, item);
        FWS_MODEL.FBind.notifyArrayChanged(this, "insert", index, item);
    },
    remove: function remove(index) {
        if (index < 0 || index >= this._array_.length - 1) return;
        var item = this._array_[index];
        this._array_.splice(index, 1);
        FWS_MODEL.FBind.notifyArrayChanged(this, "remove", index, item);
    },
    clear: function clear() {
        this._array_.splice(0, this._array_.length);
        FWS_MODEL.FBind.notifyArrayChanged(this, "clear", 0, null);
    },
    at: function at(index) {
        if (index < 0 || index >= this._array_.length - 1) return null;
        return this._array_[index];
    },
    modify: function modify(index, item) {
        if (this._array_[index] === item) retu;
        if (index < 0 || index >= this._array_.length - 1) return;
        this._array_[index] = item;
        FWS_MODEL.FBind.notifyArrayChanged(this, "modify", index, item);
    },
    indexOf: function indexOf(item) {
        return this._array_.indexOf(item);
    },
    length: function length() {
        return this._array_.length;
    },
    toArray: function toArray() {
        return this._array_.slice(0);
    },
    toString: function toString() {
        return this._array_.toString();
    }
});

/**
 * 一个支持键值变化事件的数据类
 */
FWS_MODEL.FDict = cc.Class({
    name: "FDict",
    ctor: function ctor() {
        var srcObj = null;
        if (arguments.length > 0) srcObj = arguments[0];
        this._obj_ = new Object();
        for (var k in srcObj) {
            this._obj_[k] = srcObj[k];
        }
    },
    setValue: function setValue(k, v) {
        if (this._obj_[k] === v) return;
        this._obj_[k] = v;
        FWS_MODEL.FBind.notifyDictChanged(this, k, v);
    },
    getValue: function getValue(k) {
        if (this._obj_[k]) return this._obj_[k];
        return null;
    },
    findValue: function findValue(v) {
        for (var k in this._obj_) {
            if (this._obj_[k] == v) return k;
        }
        return null;
    },
    clear: function clear() {
        for (var k in this._obj_) {
            delete this._obj_[k];
        }
        FWS_MODEL.FBind.notifyDictChanged(this, null, null);
    },
    count: function count() {
        var ret = 0;
        for (var k in this._obj_) {
            ret++;
        }
        return ret;
    },
    keys: function keys() {
        var ret = new Array();
        for (var k in this._obj_) {
            ret.push(k);
        }
        return ret;
    },
    values: function values() {
        var ret = new Array();
        for (var k in this._obj_) {
            ret.push(this._obj_[k]);
        }
        return ret;
    },
    toString: function toString() {
        return JSON.stringify(this._obj_);
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MODEL;

cc._RFpop();