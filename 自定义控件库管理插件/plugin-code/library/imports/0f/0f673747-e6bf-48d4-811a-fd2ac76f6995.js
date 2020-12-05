"use strict";
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