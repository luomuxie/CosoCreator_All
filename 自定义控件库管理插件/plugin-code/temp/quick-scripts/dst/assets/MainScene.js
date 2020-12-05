
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MainScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f673dH5r9I1IEa/SrHb2mV', 'MainScene');
// MainScene.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    infoLabel: {
      "default": null,
      displayName: "info",
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    debugger;

    var PluginModule = require("PluginModule");

    this.infoLabel.string = PluginModule.Msg;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWFpblNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5mb0xhYmVsIiwiZGlzcGxheU5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJQbHVnaW5Nb2R1bGUiLCJyZXF1aXJlIiwic3RyaW5nIiwiTXNnIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFBQyxpQkFBUyxJQUFWO0FBQWdCQyxNQUFBQSxXQUFXLEVBQUUsTUFBN0I7QUFBcUNDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUE5QztBQURILEdBSFA7QUFRTDtBQUVBQyxFQUFBQSxNQVZLLG9CQVVJO0FBQ0w7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFDQSxTQUFLTixTQUFMLENBQWVPLE1BQWYsR0FBd0JGLFlBQVksQ0FBQ0csR0FBckM7QUFDSCxHQWRJO0FBZ0JMQyxFQUFBQSxLQWhCSyxtQkFnQkcsQ0FFUCxDQWxCSSxDQW9CTDs7QUFwQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpbmZvTGFiZWw6IHtkZWZhdWx0OiBudWxsLCBkaXNwbGF5TmFtZTogXCJpbmZvXCIsIHR5cGU6IGNjLkxhYmVsfSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIGxldCBQbHVnaW5Nb2R1bGUgPSByZXF1aXJlKFwiUGx1Z2luTW9kdWxlXCIpO1xyXG4gICAgICAgIHRoaXMuaW5mb0xhYmVsLnN0cmluZyA9IFBsdWdpbk1vZHVsZS5Nc2c7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=