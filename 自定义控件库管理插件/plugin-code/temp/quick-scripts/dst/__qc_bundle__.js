
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/MainScene');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/property/CaseChangeProperty');
require('./assets/property/CaseCustomPropertyUI');
require('./assets/property/CaseDialogShowEffect');
require('./assets/property/CaseVisibleProperty');
require('./hello-world-plugin/PluginModule');
require('./hello-world-plugin/PluginScript');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31e41pbRoBKN6x2lEud5TPL', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/property/CaseVisibleProperty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c459bB2ORdK8JRWVRi4ghX9', 'CaseVisibleProperty');
// property/CaseVisibleProperty.js

"use strict";

var PropertyEnum = cc.Enum({
  Property1: 0,
  Property2: 1,
  Property3: 2,
  PropertyAll: 3
});
cc.Class({
  "extends": cc.Component,
  properties: {
    propertyType: {
      "default": PropertyEnum.Property1,
      displayName: "是否显示",
      type: PropertyEnum,
      notify: function notify() {
        this._updateProperty();
      }
    },
    property1: {
      "default": "10",
      displayName: "属性1",
      visible: true
    },
    property2: {
      "default": "20",
      displayName: "属性2",
      visible: true
    },
    property3: {
      "default": "30",
      displayName: "属性3",
      visible: true
    }
  },
  _updateProperty: function _updateProperty() {
    console.log("_updateProperty");

    if (this.propertyType === PropertyEnum.Property1) {
      cc.Class.attr(this, 'property1', {
        visible: true
      });
      cc.Class.attr(this, 'property2', {
        visible: false
      });
      cc.Class.attr(this, 'property3', {
        visible: false
      });
    } else if (this.propertyType === PropertyEnum.Property2) {
      cc.Class.attr(this, 'property1', {
        visible: false
      });
      cc.Class.attr(this, 'property2', {
        visible: true
      });
      cc.Class.attr(this, 'property3', {
        visible: false
      });
    } else if (this.propertyType === PropertyEnum.Property3) {
      cc.Class.attr(this, 'property1', {
        visible: false
      });
      cc.Class.attr(this, 'property2', {
        visible: false
      });
      cc.Class.attr(this, 'property3', {
        visible: true
      });
    } else if (this.propertyType === PropertyEnum.PropertyAll) {
      cc.Class.attr(this, 'property1', {
        visible: true
      });
      cc.Class.attr(this, 'property2', {
        visible: true
      });
      cc.Class.attr(this, 'property3', {
        visible: true
      });
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJvcGVydHlcXENhc2VWaXNpYmxlUHJvcGVydHkuanMiXSwibmFtZXMiOlsiUHJvcGVydHlFbnVtIiwiY2MiLCJFbnVtIiwiUHJvcGVydHkxIiwiUHJvcGVydHkyIiwiUHJvcGVydHkzIiwiUHJvcGVydHlBbGwiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eVR5cGUiLCJkaXNwbGF5TmFtZSIsInR5cGUiLCJub3RpZnkiLCJfdXBkYXRlUHJvcGVydHkiLCJwcm9wZXJ0eTEiLCJ2aXNpYmxlIiwicHJvcGVydHkyIiwicHJvcGVydHkzIiwiY29uc29sZSIsImxvZyIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QkMsRUFBQUEsU0FBUyxFQUFFLENBRFk7QUFFdkJDLEVBQUFBLFNBQVMsRUFBRSxDQUZZO0FBR3ZCQyxFQUFBQSxTQUFTLEVBQUUsQ0FIWTtBQUl2QkMsRUFBQUEsV0FBVyxFQUFFO0FBSlUsQ0FBUixDQUFuQjtBQVFBTCxFQUFFLENBQUNNLEtBQUgsQ0FBUztBQUNMLGFBQVNOLEVBQUUsQ0FBQ08sU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVNWLFlBQVksQ0FBQ0csU0FEWjtBQUN1QlEsTUFBQUEsV0FBVyxFQUFFLE1BRHBDO0FBQzRDQyxNQUFBQSxJQUFJLEVBQUVaLFlBRGxEO0FBRVZhLE1BQUFBLE1BRlUsb0JBRUQ7QUFDTCxhQUFLQyxlQUFMO0FBQ0g7QUFKUyxLQUROO0FBT1JDLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFDUUosTUFBQUEsV0FBVyxFQUFFLEtBRHJCO0FBQzRCSyxNQUFBQSxPQUFPLEVBQUU7QUFEckMsS0FQSDtBQVVSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBQ1FOLE1BQUFBLFdBQVcsRUFBRSxLQURyQjtBQUM0QkssTUFBQUEsT0FBTyxFQUFFO0FBRHJDLEtBVkg7QUFhUkUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUNRUCxNQUFBQSxXQUFXLEVBQUUsS0FEckI7QUFDNEJLLE1BQUFBLE9BQU8sRUFBRTtBQURyQztBQWJILEdBSFA7QUFxQkxGLEVBQUFBLGVBckJLLDZCQXFCYTtBQUNkSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjs7QUFDQSxRQUFJLEtBQUtWLFlBQUwsS0FBc0JWLFlBQVksQ0FBQ0csU0FBdkMsRUFBa0Q7QUFDOUNGLE1BQUFBLEVBQUUsQ0FBQ00sS0FBSCxDQUFTYyxJQUFULENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQztBQUFDTCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFqQztBQUNBZixNQUFBQSxFQUFFLENBQUNNLEtBQUgsQ0FBU2MsSUFBVCxDQUFjLElBQWQsRUFBb0IsV0FBcEIsRUFBaUM7QUFBQ0wsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBakM7QUFDQWYsTUFBQUEsRUFBRSxDQUFDTSxLQUFILENBQVNjLElBQVQsQ0FBYyxJQUFkLEVBQW9CLFdBQXBCLEVBQWlDO0FBQUNMLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWpDO0FBQ0gsS0FKRCxNQUlPLElBQUksS0FBS04sWUFBTCxLQUFzQlYsWUFBWSxDQUFDSSxTQUF2QyxFQUFrRDtBQUNyREgsTUFBQUEsRUFBRSxDQUFDTSxLQUFILENBQVNjLElBQVQsQ0FBYyxJQUFkLEVBQW9CLFdBQXBCLEVBQWlDO0FBQUNMLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWpDO0FBQ0FmLE1BQUFBLEVBQUUsQ0FBQ00sS0FBSCxDQUFTYyxJQUFULENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQztBQUFDTCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFqQztBQUNBZixNQUFBQSxFQUFFLENBQUNNLEtBQUgsQ0FBU2MsSUFBVCxDQUFjLElBQWQsRUFBb0IsV0FBcEIsRUFBaUM7QUFBQ0wsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBakM7QUFDSCxLQUpNLE1BSUEsSUFBSSxLQUFLTixZQUFMLEtBQXNCVixZQUFZLENBQUNLLFNBQXZDLEVBQWtEO0FBQ3JESixNQUFBQSxFQUFFLENBQUNNLEtBQUgsQ0FBU2MsSUFBVCxDQUFjLElBQWQsRUFBb0IsV0FBcEIsRUFBaUM7QUFBQ0wsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBakM7QUFDQWYsTUFBQUEsRUFBRSxDQUFDTSxLQUFILENBQVNjLElBQVQsQ0FBYyxJQUFkLEVBQW9CLFdBQXBCLEVBQWlDO0FBQUNMLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWpDO0FBQ0FmLE1BQUFBLEVBQUUsQ0FBQ00sS0FBSCxDQUFTYyxJQUFULENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQztBQUFDTCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFqQztBQUNILEtBSk0sTUFJQSxJQUFJLEtBQUtOLFlBQUwsS0FBc0JWLFlBQVksQ0FBQ00sV0FBdkMsRUFBb0Q7QUFDdkRMLE1BQUFBLEVBQUUsQ0FBQ00sS0FBSCxDQUFTYyxJQUFULENBQWMsSUFBZCxFQUFvQixXQUFwQixFQUFpQztBQUFDTCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFqQztBQUNBZixNQUFBQSxFQUFFLENBQUNNLEtBQUgsQ0FBU2MsSUFBVCxDQUFjLElBQWQsRUFBb0IsV0FBcEIsRUFBaUM7QUFBQ0wsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBakM7QUFDQWYsTUFBQUEsRUFBRSxDQUFDTSxLQUFILENBQVNjLElBQVQsQ0FBYyxJQUFkLEVBQW9CLFdBQXBCLEVBQWlDO0FBQUNMLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWpDO0FBQ0g7QUFDSjtBQXhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUHJvcGVydHlFbnVtID0gY2MuRW51bSh7XHJcbiAgICBQcm9wZXJ0eTE6IDAsXHJcbiAgICBQcm9wZXJ0eTI6IDEsXHJcbiAgICBQcm9wZXJ0eTM6IDIsXHJcbiAgICBQcm9wZXJ0eUFsbDogMyxcclxufSk7XHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9wZXJ0eVR5cGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogUHJvcGVydHlFbnVtLlByb3BlcnR5MSwgZGlzcGxheU5hbWU6IFwi5piv5ZCm5pi+56S6XCIsIHR5cGU6IFByb3BlcnR5RW51bSxcclxuICAgICAgICAgICAgbm90aWZ5KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcGVydHkxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiMTBcIiwgZGlzcGxheU5hbWU6IFwi5bGe5oCnMVwiLCB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wZXJ0eTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCIyMFwiLCBkaXNwbGF5TmFtZTogXCLlsZ7mgKcyXCIsIHZpc2libGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BlcnR5Mzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIjMwXCIsIGRpc3BsYXlOYW1lOiBcIuWxnuaApzNcIiwgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIF91cGRhdGVQcm9wZXJ0eSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIl91cGRhdGVQcm9wZXJ0eVwiKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eVR5cGUgPT09IFByb3BlcnR5RW51bS5Qcm9wZXJ0eTEpIHtcclxuICAgICAgICAgICAgY2MuQ2xhc3MuYXR0cih0aGlzLCAncHJvcGVydHkxJywge3Zpc2libGU6IHRydWV9KTtcclxuICAgICAgICAgICAgY2MuQ2xhc3MuYXR0cih0aGlzLCAncHJvcGVydHkyJywge3Zpc2libGU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIGNjLkNsYXNzLmF0dHIodGhpcywgJ3Byb3BlcnR5MycsIHt2aXNpYmxlOiBmYWxzZX0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wZXJ0eVR5cGUgPT09IFByb3BlcnR5RW51bS5Qcm9wZXJ0eTIpIHtcclxuICAgICAgICAgICAgY2MuQ2xhc3MuYXR0cih0aGlzLCAncHJvcGVydHkxJywge3Zpc2libGU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIGNjLkNsYXNzLmF0dHIodGhpcywgJ3Byb3BlcnR5MicsIHt2aXNpYmxlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGNjLkNsYXNzLmF0dHIodGhpcywgJ3Byb3BlcnR5MycsIHt2aXNpYmxlOiBmYWxzZX0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wZXJ0eVR5cGUgPT09IFByb3BlcnR5RW51bS5Qcm9wZXJ0eTMpIHtcclxuICAgICAgICAgICAgY2MuQ2xhc3MuYXR0cih0aGlzLCAncHJvcGVydHkxJywge3Zpc2libGU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIGNjLkNsYXNzLmF0dHIodGhpcywgJ3Byb3BlcnR5MicsIHt2aXNpYmxlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICBjYy5DbGFzcy5hdHRyKHRoaXMsICdwcm9wZXJ0eTMnLCB7dmlzaWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wZXJ0eVR5cGUgPT09IFByb3BlcnR5RW51bS5Qcm9wZXJ0eUFsbCkge1xyXG4gICAgICAgICAgICBjYy5DbGFzcy5hdHRyKHRoaXMsICdwcm9wZXJ0eTEnLCB7dmlzaWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBjYy5DbGFzcy5hdHRyKHRoaXMsICdwcm9wZXJ0eTInLCB7dmlzaWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBjYy5DbGFzcy5hdHRyKHRoaXMsICdwcm9wZXJ0eTMnLCB7dmlzaWJsZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/hello-world-plugin/PluginScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1438UfXkVI6a3cnVI/G6H5', 'PluginScript');
// PluginScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    console.log("hello plugin");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxoZWxsby13b3JsZFxccGx1Z2luXFxQbHVnaW5TY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNILEdBUkk7QUFVTEMsRUFBQUEsS0FWSyxtQkFVRyxDQUVQLENBWkksQ0FjTDs7QUFkSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge30sXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHBsdWdpblwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/property/CaseDialogShowEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '692977jwSxEsLJ9qzOsQGBa', 'CaseDialogShowEffect');
// property/CaseDialogShowEffect.js

"use strict";

var ActionEnum = cc.Enum({
  None: "None",
  Scale: "Scale",
  Blink: "Blink",
  Shake: "Shake",
  FadeIn: "FadeIn",
  FadeOut: "FadeOut",
  Move: "Move"
});
cc.Class({
  "extends": cc.Component,
  editor: CC_EDITOR && {
    inspector: "packages://hello-world/inspector/dialog/dialog.js",
    playOnFocus: true,
    executeInEditMode: true // 允许当前组件在编辑器模式下运行。

  },
  properties: {
    actionType: {
      "default": ActionEnum.None,
      displayName: "动画类型",
      type: ActionEnum
    },
    actionNode: {
      "default": null,
      displayName: "动画节点",
      type: cc.Node
    },
    preview: {
      "default": 0,
      visible: true,
      notify: function notify() {
        this._record();

        this._runAction();
      }
    },
    delayTime: {
      "default": 0,
      displayName: "延迟时间",
      tooltip: "单位:秒"
    },
    // 延迟时间
    actionTime: {
      "default": 0,
      displayName: "动画时间",
      tooltip: "单位:秒"
    },
    // 动画时间
    shakeStrength: {
      "default": 0,
      displayName: "震动强度",
      tooltip: "强度越高,振幅越大"
    },
    // 震动强度
    blinkCount: {
      "default": 1,
      displayName: "闪烁次数",
      tooltip: ""
    },
    // 闪烁次数
    scaleSize: {
      "default": 1,
      displayName: "缩放比例",
      tooltip: ""
    },
    // 缩放比例
    moveBeganPosX: {
      "default": 0,
      displayName: "X",
      tooltip: ""
    },
    // 移动开始坐标X
    moveBeganPosY: {
      "default": 0,
      displayName: "Y",
      tooltip: ""
    },
    // 移动开始坐标Y
    moveEndPosX: {
      "default": 0,
      displayName: "X",
      tooltip: ""
    },
    //移动结束X
    moveEndPosY: {
      "default": 0,
      displayName: "Y",
      tooltip: ""
    },
    //移动结束Y
    _recordData: null // 记录数据,用于还原

  },
  onFocusInEditor: CC_EDITOR && function () {// console.log("onFocusInEditor");
  },
  onLostFocusInEditor: CC_EDITOR && function () {
    console.log("onLostFocusInEditor");

    this._recover();

    this._recordData = null;
  },
  // 记录
  _record: CC_EDITOR && function () {
    this._recordData = {
      x: this.node.x,
      y: this.node.y,
      opacity: this.node.opacity,
      active: this.node.active,
      scaleX: this.node.scaleX,
      scaleY: this.node.scaleY,
      rotation: this.node.rotation,
      width: this.node.width,
      height: this.node.height
    };
  },
  // 恢复
  _recover: CC_EDITOR && function () {
    this.node.stopAllActions();

    if (this._recordData) {
      this.node.x = this._recordData.x;
      this.node.y = this._recordData.y;
      this.node.opacity = this._recordData.opacity;
      this.node.active = this._recordData.active;
      this.node.scaleX = this._recordData.scaleX;
      this.node.scaleY = this._recordData.scaleY;
      this.node.rotation = this._recordData.rotation;
      this.node.width = this._recordData.width;
      this.node.height = this._recordData.height;
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    if (!CC_EDITOR) {
      this._runAction();
    }
  },
  _runAction: function _runAction() {
    if (this.actionType === ActionEnum.None) {
      if (CC_EDITOR) {
        Editor.log("未设置动画,预览无效!");
      }

      this._actionOver();
    } else {
      if (this.actionTime > 0) {
        var act = this._genAction(this.actionType);

        if (act) {
          var actionArr = []; // 延迟动作

          if (this.delayTime > 0) {
            actionArr.push(cc.delayTime(this.delayTime));
          } // 当前设置的动作


          actionArr.push(act);
          actionArr.push(cc.callFunc(this._actionOver.bind(this)));
          var runAct = cc.sequence(actionArr);
          this.node.stopAllActions();
          this.node.runAction(runAct);
        }
      } else {
        console.log("指定的动画时间为0,跳过该动画!");
      }
    }
  },
  _actionOver: function _actionOver() {
    console.log("action over");

    if (CC_EDITOR) {
      this._recover && this._recover();
    }
  },
  _genAction: function _genAction(type) {
    var ret = null;

    if (type === ActionEnum.FadeOut) {
      this.node.opacity = 255;
      ret = cc.fadeOut(this.actionTime);
    } else if (type === ActionEnum.FadeIn) {
      this.node.opacity = 0;
      ret = cc.fadeIn(this.actionTime);
    } else if (type === ActionEnum.Shake) {
      // 震动
      var acts = [];
      var cfg = [{
        strength: 1,
        max: 10
      }, {
        strength: 2,
        max: 12
      }, {
        strength: 3,
        max: 15
      }, {
        strength: 4,
        max: 20
      }, {
        strength: 5,
        max: 25
      }];
      var shakeMaxMoveDistance = 0; // 震动幅度距离

      for (var i = 0; i < cfg.length; i++) {
        var item = cfg[i];

        if (item.strength.toString() === this.shakeStrength.toString()) {
          shakeMaxMoveDistance = item.max;
          break;
        }
      }

      var shakeCount = 0; // 震动次数

      var moveUnitTime = 0.05; // 单元震动时间

      shakeCount = Math.floor(this.actionTime / moveUnitTime);
      var node = this.node.getPosition();

      if (shakeCount > 0 && shakeMaxMoveDistance > 0) {
        for (var _i = 0; _i < shakeCount; _i++) {
          var x = node.x + this._randomPos(shakeMaxMoveDistance);

          var y = node.y + this._randomPos(shakeMaxMoveDistance);

          var move = cc.moveTo(moveUnitTime, cc.v2(x, y));
          acts.push(move);
        } // acts.push(cc.callFunc(function () {
        //     this.node.x = this.node.y = 0;
        // }.bind(this)));


        ret = cc.sequence(acts);
      } else {
        console.log("未查找到晃动的配置!");
      }
    } else if (type === ActionEnum.Blink) {
      ret = cc.blink(this.actionTime, this.blinkCount);
    } else if (type === ActionEnum.Scale) {
      ret = cc.scaleTo(this.actionTime, this.scaleSize);
    } else if (type === ActionEnum.Move) {
      this.node.setPosition(this.moveBeganPosX || 0, this.moveBeganPosY || 0);
      ret = cc.moveTo(this.actionTime, this.moveEndPosX || 0, this.moveEndPosY || 0);
    }

    return ret;
  },
  _randomByMaxValue: function _randomByMaxValue(maxNum) {
    return Math.floor(Math.random() * maxNum);
  },
  _randomPos: function _randomPos(max) {
    var num = this._randomByMaxValue(2);

    if (num % 2 === 0) {
      return this._randomByMaxValue(max);
    } else {
      return -this._randomByMaxValue(max);
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJvcGVydHlcXENhc2VEaWFsb2dTaG93RWZmZWN0LmpzIl0sIm5hbWVzIjpbIkFjdGlvbkVudW0iLCJjYyIsIkVudW0iLCJOb25lIiwiU2NhbGUiLCJCbGluayIsIlNoYWtlIiwiRmFkZUluIiwiRmFkZU91dCIsIk1vdmUiLCJDbGFzcyIsIkNvbXBvbmVudCIsImVkaXRvciIsIkNDX0VESVRPUiIsImluc3BlY3RvciIsInBsYXlPbkZvY3VzIiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiYWN0aW9uVHlwZSIsImRpc3BsYXlOYW1lIiwidHlwZSIsImFjdGlvbk5vZGUiLCJOb2RlIiwicHJldmlldyIsInZpc2libGUiLCJub3RpZnkiLCJfcmVjb3JkIiwiX3J1bkFjdGlvbiIsImRlbGF5VGltZSIsInRvb2x0aXAiLCJhY3Rpb25UaW1lIiwic2hha2VTdHJlbmd0aCIsImJsaW5rQ291bnQiLCJzY2FsZVNpemUiLCJtb3ZlQmVnYW5Qb3NYIiwibW92ZUJlZ2FuUG9zWSIsIm1vdmVFbmRQb3NYIiwibW92ZUVuZFBvc1kiLCJfcmVjb3JkRGF0YSIsIm9uRm9jdXNJbkVkaXRvciIsIm9uTG9zdEZvY3VzSW5FZGl0b3IiLCJjb25zb2xlIiwibG9nIiwiX3JlY292ZXIiLCJ4Iiwibm9kZSIsInkiLCJvcGFjaXR5IiwiYWN0aXZlIiwic2NhbGVYIiwic2NhbGVZIiwicm90YXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInN0b3BBbGxBY3Rpb25zIiwib25Mb2FkIiwic3RhcnQiLCJFZGl0b3IiLCJfYWN0aW9uT3ZlciIsImFjdCIsIl9nZW5BY3Rpb24iLCJhY3Rpb25BcnIiLCJwdXNoIiwiY2FsbEZ1bmMiLCJiaW5kIiwicnVuQWN0Iiwic2VxdWVuY2UiLCJydW5BY3Rpb24iLCJyZXQiLCJmYWRlT3V0IiwiZmFkZUluIiwiYWN0cyIsImNmZyIsInN0cmVuZ3RoIiwibWF4Iiwic2hha2VNYXhNb3ZlRGlzdGFuY2UiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInRvU3RyaW5nIiwic2hha2VDb3VudCIsIm1vdmVVbml0VGltZSIsIk1hdGgiLCJmbG9vciIsImdldFBvc2l0aW9uIiwiX3JhbmRvbVBvcyIsIm1vdmUiLCJtb3ZlVG8iLCJ2MiIsImJsaW5rIiwic2NhbGVUbyIsInNldFBvc2l0aW9uIiwiX3JhbmRvbUJ5TWF4VmFsdWUiLCJtYXhOdW0iLCJyYW5kb20iLCJudW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNyQkMsRUFBQUEsSUFBSSxFQUFFLE1BRGU7QUFFckJDLEVBQUFBLEtBQUssRUFBRSxPQUZjO0FBR3JCQyxFQUFBQSxLQUFLLEVBQUUsT0FIYztBQUlyQkMsRUFBQUEsS0FBSyxFQUFFLE9BSmM7QUFLckJDLEVBQUFBLE1BQU0sRUFBRSxRQUxhO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUUsU0FOWTtBQU9yQkMsRUFBQUEsSUFBSSxFQUFFO0FBUGUsQ0FBUixDQUFqQjtBQVNBUixFQUFFLENBQUNTLEtBQUgsQ0FBUztBQUNMLGFBQVNULEVBQUUsQ0FBQ1UsU0FEUDtBQUVMQyxFQUFBQSxNQUFNLEVBQUVDLFNBQVMsSUFBSTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLG1EQURNO0FBRWpCQyxJQUFBQSxXQUFXLEVBQUUsSUFGSTtBQUdqQkMsSUFBQUEsaUJBQWlCLEVBQUUsSUFIRixDQUdROztBQUhSLEdBRmhCO0FBT0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFBQyxpQkFBU2xCLFVBQVUsQ0FBQ0csSUFBckI7QUFBMkJnQixNQUFBQSxXQUFXLEVBQUUsTUFBeEM7QUFBZ0RDLE1BQUFBLElBQUksRUFBRXBCO0FBQXRELEtBREo7QUFFUnFCLElBQUFBLFVBQVUsRUFBRTtBQUFDLGlCQUFTLElBQVY7QUFBZ0JGLE1BQUFBLFdBQVcsRUFBRSxNQUE3QjtBQUFxQ0MsTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDcUI7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QUFWOztBQUNBLFFBQUlHLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7QUFDZixhQUFPLEtBQUtILGlCQUFMLENBQXVCbEIsR0FBdkIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sQ0FBQyxLQUFLa0IsaUJBQUwsQ0FBdUJsQixHQUF2QixDQUFSO0FBQ0g7QUFDSjtBQXBMSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQWN0aW9uRW51bSA9IGNjLkVudW0oe1xyXG4gICAgTm9uZTogXCJOb25lXCIsXHJcbiAgICBTY2FsZTogXCJTY2FsZVwiLFxyXG4gICAgQmxpbms6IFwiQmxpbmtcIixcclxuICAgIFNoYWtlOiBcIlNoYWtlXCIsXHJcbiAgICBGYWRlSW46IFwiRmFkZUluXCIsXHJcbiAgICBGYWRlT3V0OiBcIkZhZGVPdXRcIixcclxuICAgIE1vdmU6IFwiTW92ZVwiLFxyXG59KTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xyXG4gICAgICAgIGluc3BlY3RvcjogXCJwYWNrYWdlczovL2hlbGxvLXdvcmxkL2luc3BlY3Rvci9kaWFsb2cvZGlhbG9nLmpzXCIsXHJcbiAgICAgICAgcGxheU9uRm9jdXM6IHRydWUsXHJcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsIC8vIOWFgeiuuOW9k+WJjee7hOS7tuWcqOe8lui+keWZqOaooeW8j+S4i+i/kOihjOOAglxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhY3Rpb25UeXBlOiB7ZGVmYXVsdDogQWN0aW9uRW51bS5Ob25lLCBkaXNwbGF5TmFtZTogXCLliqjnlLvnsbvlnotcIiwgdHlwZTogQWN0aW9uRW51bX0sXHJcbiAgICAgICAgYWN0aW9uTm9kZToge2RlZmF1bHQ6IG51bGwsIGRpc3BsYXlOYW1lOiBcIuWKqOeUu+iKgueCuVwiLCB0eXBlOiBjYy5Ob2RlfSxcclxuICAgICAgICBwcmV2aWV3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsIHZpc2libGU6IHRydWUsIG5vdGlmeSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcnVuQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZWxheVRpbWU6IHtkZWZhdWx0OiAwLCBkaXNwbGF5TmFtZTogXCLlu7bov5/ml7bpl7RcIiwgdG9vbHRpcDogXCLljZXkvY0656eSXCJ9LC8vIOW7tui/n+aXtumXtFxyXG4gICAgICAgIGFjdGlvblRpbWU6IHtkZWZhdWx0OiAwLCBkaXNwbGF5TmFtZTogXCLliqjnlLvml7bpl7RcIiwgdG9vbHRpcDogXCLljZXkvY0656eSXCJ9LC8vIOWKqOeUu+aXtumXtFxyXG5cclxuICAgICAgICBzaGFrZVN0cmVuZ3RoOiB7ZGVmYXVsdDogMCwgZGlzcGxheU5hbWU6IFwi6ZyH5Yqo5by65bqmXCIsIHRvb2x0aXA6IFwi5by65bqm6LaK6auYLOaMr+W5hei2iuWkp1wifSwvLyDpnIfliqjlvLrluqZcclxuXHJcbiAgICAgICAgYmxpbmtDb3VudDoge2RlZmF1bHQ6IDEsIGRpc3BsYXlOYW1lOiBcIumXqueDgeasoeaVsFwiLCB0b29sdGlwOiBcIlwifSwvLyDpl6rng4HmrKHmlbBcclxuXHJcbiAgICAgICAgc2NhbGVTaXplOiB7ZGVmYXVsdDogMSwgZGlzcGxheU5hbWU6IFwi57yp5pS+5q+U5L6LXCIsIHRvb2x0aXA6IFwiXCJ9LC8vIOe8qeaUvuavlOS+i1xyXG5cclxuXHJcbiAgICAgICAgbW92ZUJlZ2FuUG9zWDoge2RlZmF1bHQ6IDAsIGRpc3BsYXlOYW1lOiBcIlhcIiwgdG9vbHRpcDogXCJcIn0sLy8g56e75Yqo5byA5aeL5Z2Q5qCHWFxyXG4gICAgICAgIG1vdmVCZWdhblBvc1k6IHtkZWZhdWx0OiAwLCBkaXNwbGF5TmFtZTogXCJZXCIsIHRvb2x0aXA6IFwiXCJ9LC8vIOenu+WKqOW8gOWni+WdkOagh1lcclxuICAgICAgICBtb3ZlRW5kUG9zWDoge2RlZmF1bHQ6IDAsIGRpc3BsYXlOYW1lOiBcIlhcIiwgdG9vbHRpcDogXCJcIn0sLy/np7vliqjnu5PmnZ9YXHJcbiAgICAgICAgbW92ZUVuZFBvc1k6IHtkZWZhdWx0OiAwLCBkaXNwbGF5TmFtZTogXCJZXCIsIHRvb2x0aXA6IFwiXCJ9LC8v56e75Yqo57uT5p2fWVxyXG5cclxuICAgICAgICBfcmVjb3JkRGF0YTogbnVsbCwvLyDorrDlvZXmlbDmja4s55So5LqO6L+Y5Y6fXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRm9jdXNJbkVkaXRvcjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uRm9jdXNJbkVkaXRvclwiKTtcclxuICAgIH0sXHJcbiAgICBvbkxvc3RGb2N1c0luRWRpdG9yOiBDQ19FRElUT1IgJiYgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Mb3N0Rm9jdXNJbkVkaXRvclwiKTtcclxuICAgICAgICB0aGlzLl9yZWNvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVjb3JkRGF0YSA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgLy8g6K6w5b2VXHJcbiAgICBfcmVjb3JkOiBDQ19FRElUT1IgJiYgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3JlY29yZERhdGEgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMubm9kZS54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLm5vZGUueSxcclxuICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5ub2RlLm9wYWNpdHksXHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5ub2RlLmFjdGl2ZSxcclxuICAgICAgICAgICAgc2NhbGVYOiB0aGlzLm5vZGUuc2NhbGVYLFxyXG4gICAgICAgICAgICBzY2FsZVk6IHRoaXMubm9kZS5zY2FsZVksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiB0aGlzLm5vZGUucm90YXRpb24sXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLm5vZGUud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5ub2RlLmhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOaBouWkjVxyXG4gICAgX3JlY292ZXI6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLl9yZWNvcmREYXRhLng7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5fcmVjb3JkRGF0YS55O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHRoaXMuX3JlY29yZERhdGEub3BhY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuX3JlY29yZERhdGEuYWN0aXZlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5fcmVjb3JkRGF0YS5zY2FsZVg7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVkgPSB0aGlzLl9yZWNvcmREYXRhLnNjYWxlWTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gdGhpcy5fcmVjb3JkRGF0YS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5fcmVjb3JkRGF0YS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuX3JlY29yZERhdGEuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVuQWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIF9ydW5BY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uVHlwZSA9PT0gQWN0aW9uRW51bS5Ob25lKSB7XHJcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IpIHtcclxuICAgICAgICAgICAgICAgIEVkaXRvci5sb2coXCLmnKrorr7nva7liqjnlLss6aKE6KeI5peg5pWIIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25PdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uVGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3QgPSB0aGlzLl9nZW5BY3Rpb24odGhpcy5hY3Rpb25UeXBlKTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uQXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5bu26L+f5Yqo5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25BcnIucHVzaChjYy5kZWxheVRpbWUodGhpcy5kZWxheVRpbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN6K6+572u55qE5Yqo5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uQXJyLnB1c2goYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25BcnIucHVzaChjYy5jYWxsRnVuYyh0aGlzLl9hY3Rpb25PdmVyLmJpbmQodGhpcykpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcnVuQWN0ID0gY2Muc2VxdWVuY2UoYWN0aW9uQXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJ1bkFjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaMh+WumueahOWKqOeUu+aXtumXtOS4ujAs6Lez6L+H6K+l5Yqo55S7IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgX2FjdGlvbk92ZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24gb3ZlclwiKTtcclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY292ZXIgJiYgdGhpcy5fcmVjb3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBfZ2VuQWN0aW9uKHR5cGUpIHtcclxuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZSA9PT0gQWN0aW9uRW51bS5GYWRlT3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICByZXQgPSBjYy5mYWRlT3V0KHRoaXMuYWN0aW9uVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBBY3Rpb25FbnVtLkZhZGVJbikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldCA9IGNjLmZhZGVJbih0aGlzLmFjdGlvblRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQWN0aW9uRW51bS5TaGFrZSkgey8vIOmch+WKqFxyXG4gICAgICAgICAgICBsZXQgYWN0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2ZnID0gW1xyXG4gICAgICAgICAgICAgICAge3N0cmVuZ3RoOiAxLCBtYXg6IDEwfSxcclxuICAgICAgICAgICAgICAgIHtzdHJlbmd0aDogMiwgbWF4OiAxMn0sXHJcbiAgICAgICAgICAgICAgICB7c3RyZW5ndGg6IDMsIG1heDogMTV9LFxyXG4gICAgICAgICAgICAgICAge3N0cmVuZ3RoOiA0LCBtYXg6IDIwfSxcclxuICAgICAgICAgICAgICAgIHtzdHJlbmd0aDogNSwgbWF4OiAyNX0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hha2VNYXhNb3ZlRGlzdGFuY2UgPSAwOy8vIOmch+WKqOW5heW6pui3neemu1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNmZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZmdbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdHJlbmd0aC50b1N0cmluZygpID09PSB0aGlzLnNoYWtlU3RyZW5ndGgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWtlTWF4TW92ZURpc3RhbmNlID0gaXRlbS5tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNoYWtlQ291bnQgPSAwOy8vIOmch+WKqOasoeaVsFxyXG4gICAgICAgICAgICBsZXQgbW92ZVVuaXRUaW1lID0gMC4wNTsvLyDljZXlhYPpnIfliqjml7bpl7RcclxuICAgICAgICAgICAgc2hha2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy5hY3Rpb25UaW1lIC8gbW92ZVVuaXRUaW1lKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNoYWtlQ291bnQgPiAwICYmIHNoYWtlTWF4TW92ZURpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFrZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IG5vZGUueCArIHRoaXMuX3JhbmRvbVBvcyhzaGFrZU1heE1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBub2RlLnkgKyB0aGlzLl9yYW5kb21Qb3Moc2hha2VNYXhNb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlID0gY2MubW92ZVRvKG1vdmVVbml0VGltZSwgY2MudjIoeCwgeSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHMucHVzaChtb3ZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGFjdHMucHVzaChjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyB9LmJpbmQodGhpcykpKTtcclxuICAgICAgICAgICAgICAgIHJldCA9IGNjLnNlcXVlbmNlKGFjdHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKrmn6Xmib7liLDmmYPliqjnmoTphY3nva4hXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBBY3Rpb25FbnVtLkJsaW5rKSB7XHJcbiAgICAgICAgICAgIHJldCA9IGNjLmJsaW5rKHRoaXMuYWN0aW9uVGltZSwgdGhpcy5ibGlua0NvdW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEFjdGlvbkVudW0uU2NhbGUpIHtcclxuICAgICAgICAgICAgcmV0ID0gY2Muc2NhbGVUbyh0aGlzLmFjdGlvblRpbWUsIHRoaXMuc2NhbGVTaXplKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEFjdGlvbkVudW0uTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5tb3ZlQmVnYW5Qb3NYIHx8IDAsIHRoaXMubW92ZUJlZ2FuUG9zWSB8fCAwKTtcclxuICAgICAgICAgICAgcmV0ID0gY2MubW92ZVRvKHRoaXMuYWN0aW9uVGltZSwgdGhpcy5tb3ZlRW5kUG9zWCB8fCAwLCB0aGlzLm1vdmVFbmRQb3NZIHx8IDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuICAgIF9yYW5kb21CeU1heFZhbHVlKG1heE51bSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhOdW0pO1xyXG4gICAgfSxcclxuICAgIF9yYW5kb21Qb3MobWF4KSB7XHJcbiAgICAgICAgbGV0IG51bSA9IHRoaXMuX3JhbmRvbUJ5TWF4VmFsdWUoMik7XHJcbiAgICAgICAgaWYgKG51bSAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbUJ5TWF4VmFsdWUobWF4KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy5fcmFuZG9tQnlNYXhWYWx1ZShtYXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/hello-world-plugin/PluginModule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fea52k5s+BKzLwI44OXsu00', 'PluginModule');
// PluginModule.js

"use strict";

module.exports = {
  Msg: "hello plugin"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxoZWxsby13b3JsZFxccGx1Z2luXFxQbHVnaW5Nb2R1bGUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIk1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLEVBQUFBLEdBQUcsRUFBRTtBQURRLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIE1zZzogXCJoZWxsbyBwbHVnaW5cIixcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/property/CaseCustomPropertyUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb343Mhj6RIEKBOypW4vH8C', 'CaseCustomPropertyUI');
// property/CaseCustomPropertyUI.js

"use strict";

cc.Class({
  // name:"MyTestUI",
  "extends": cc.Component,
  editor: CC_EDITOR && {
    inspector: "packages://hello-world/inspector/test/test.js"
  },
  properties: {
    foo: {
      "default": "foo",
      type: cc.String,
      notify: function notify() {
        debugger;
        console.log("change");

        this._nodeTest();

        if (this._sgNode) {
          console.log("sgNode");
        }
      }
    },
    bar: 'Bar'
  },
  _nodeTest: function _nodeTest() {
    var label = cc.find("Canvas/label");

    if (label) {
      var com = label.getComponent(cc.Label);

      if (com) {
        com.string = "hello - " + this.foo;
      }
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJvcGVydHlcXENhc2VDdXN0b21Qcm9wZXJ0eVVJLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJpbnNwZWN0b3IiLCJwcm9wZXJ0aWVzIiwiZm9vIiwidHlwZSIsIlN0cmluZyIsIm5vdGlmeSIsImNvbnNvbGUiLCJsb2ciLCJfbm9kZVRlc3QiLCJfc2dOb2RlIiwiYmFyIiwibGFiZWwiLCJmaW5kIiwiY29tIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0w7QUFDQSxhQUFTRCxFQUFFLENBQUNFLFNBRlA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFQyxTQUFTLElBQUk7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNLEdBSGhCO0FBTUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxLQURSO0FBRURDLE1BQUFBLElBQUksRUFBRVIsRUFBRSxDQUFDUyxNQUZSO0FBR0RDLE1BQUFBLE1BSEMsb0JBR1E7QUFDTDtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLGFBQUtDLFNBQUw7O0FBQ0EsWUFBSSxLQUFLQyxPQUFULEVBQWtCO0FBQ2RILFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSDtBQUNKO0FBVkEsS0FERztBQWFSRyxJQUFBQSxHQUFHLEVBQUU7QUFiRyxHQU5QO0FBcUJMRixFQUFBQSxTQXJCSyx1QkFxQk87QUFDUixRQUFJRyxLQUFLLEdBQUdoQixFQUFFLENBQUNpQixJQUFILENBQVEsY0FBUixDQUFaOztBQUNBLFFBQUlELEtBQUosRUFBVztBQUNQLFVBQUlFLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxZQUFOLENBQW1CbkIsRUFBRSxDQUFDb0IsS0FBdEIsQ0FBVjs7QUFDQSxVQUFJRixHQUFKLEVBQVM7QUFDTEEsUUFBQUEsR0FBRyxDQUFDRyxNQUFKLEdBQWEsYUFBYSxLQUFLZCxHQUEvQjtBQUNIO0FBQ0o7QUFDSjtBQTdCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICAvLyBuYW1lOlwiTXlUZXN0VUlcIixcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcclxuICAgICAgICBpbnNwZWN0b3I6IFwicGFja2FnZXM6Ly9oZWxsby13b3JsZC9pbnNwZWN0b3IvdGVzdC90ZXN0LmpzXCIsXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZvbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImZvb1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TdHJpbmcsXHJcbiAgICAgICAgICAgIG5vdGlmeSgpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVUZXN0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2dOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZ05vZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXI6ICdCYXInLFxyXG4gICAgfSxcclxuICAgIF9ub2RlVGVzdCgpIHtcclxuICAgICAgICBsZXQgbGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL2xhYmVsXCIpO1xyXG4gICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICBsZXQgY29tID0gbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKGNvbSkge1xyXG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwiaGVsbG8gLSBcIiArIHRoaXMuZm9vO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/property/CaseChangeProperty.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2be92hXxbdLCJpaPJHpc+tk', 'CaseChangeProperty');
// property/CaseChangeProperty.js

"use strict";

var SelectMenuEn = cc.Enum({
  None: 0,
  MenuA: 1,
  MenuB: 2,
  MenuC: 3,
  MenuD: 4
});
var SelectMenuCn = cc.Enum({
  无: 0,
  选项A: 1,
  选项B: 2,
  选项C: 3,
  选项D: 4
});
cc.Class({
  "extends": cc.Component,
  properties: {
    selectMenuTypeEn: {
      "default": SelectMenuEn.None,
      displayName: "选项-en",
      type: SelectMenuEn,
      notify: function notify() {
        // this.selectMenuTypeCn = this.selectMenuTypeEn;
        // 死循环
        this._updateName1();
      }
    },
    selectMenuTypeCn: {
      "default": SelectMenuCn.无,
      displayName: "选项-cn",
      type: SelectMenuCn,
      notify: function notify() {
        this._updateName2();
      }
    },
    nameLabel: {
      "default": null,
      displayName: "名字",
      type: cc.Label,
      visible: false
    }
  },
  _updateName1: function _updateName1() {
    if (this.selectMenuTypeEn === SelectMenuEn.None) {
      this.nameLabel.string = "";
    } else if (this.selectMenuTypeEn === SelectMenuEn.MenuA) {
      this.nameLabel.string = "我是A";
    } else if (this.selectMenuTypeEn === SelectMenuEn.MenuB) {
      this.nameLabel.string = "我是B";
    } else if (this.selectMenuTypeEn === SelectMenuEn.MenuC) {
      this.nameLabel.string = "我是C";
    } else if (this.selectMenuTypeEn === SelectMenuEn.MenuD) {
      this.nameLabel.string = "我是D";
    }
  },
  _updateName2: function _updateName2() {
    if (this.selectMenuTypeCn === SelectMenuCn.无) {
      this.nameLabel.string = "";
    } else if (this.selectMenuTypeCn === SelectMenuCn.选项A) {
      this.nameLabel.string = "我是A";
    } else if (this.selectMenuTypeCn === SelectMenuCn.选项B) {
      this.nameLabel.string = "我是B";
    } else if (this.selectMenuTypeCn === SelectMenuCn.选项C) {
      this.nameLabel.string = "我是C";
    } else if (this.selectMenuTypeCn === SelectMenuCn.选项D) {
      this.nameLabel.string = "我是D";
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJvcGVydHlcXENhc2VDaGFuZ2VQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJTZWxlY3RNZW51RW4iLCJjYyIsIkVudW0iLCJOb25lIiwiTWVudUEiLCJNZW51QiIsIk1lbnVDIiwiTWVudUQiLCJTZWxlY3RNZW51Q24iLCLml6AiLCLpgInpoblBIiwi6YCJ6aG5QiIsIumAiemhuUMiLCLpgInpoblEIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2VsZWN0TWVudVR5cGVFbiIsImRpc3BsYXlOYW1lIiwidHlwZSIsIm5vdGlmeSIsIl91cGRhdGVOYW1lMSIsInNlbGVjdE1lbnVUeXBlQ24iLCJfdXBkYXRlTmFtZTIiLCJuYW1lTGFiZWwiLCJMYWJlbCIsInZpc2libGUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QkMsRUFBQUEsSUFBSSxFQUFFLENBRGlCO0FBRXZCQyxFQUFBQSxLQUFLLEVBQUUsQ0FGZ0I7QUFHdkJDLEVBQUFBLEtBQUssRUFBRSxDQUhnQjtBQUl2QkMsRUFBQUEsS0FBSyxFQUFFLENBSmdCO0FBS3ZCQyxFQUFBQSxLQUFLLEVBQUU7QUFMZ0IsQ0FBUixDQUFuQjtBQVFBLElBQUlDLFlBQVksR0FBR1AsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdkJPLEVBQUFBLENBQUMsRUFBRSxDQURvQjtBQUV2QkMsRUFBQUEsR0FBRyxFQUFFLENBRmtCO0FBR3ZCQyxFQUFBQSxHQUFHLEVBQUUsQ0FIa0I7QUFJdkJDLEVBQUFBLEdBQUcsRUFBRSxDQUprQjtBQUt2QkMsRUFBQUEsR0FBRyxFQUFFO0FBTGtCLENBQVIsQ0FBbkI7QUFRQVosRUFBRSxDQUFDYSxLQUFILENBQVM7QUFDTCxhQUFTYixFQUFFLENBQUNjLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLGdCQUFnQixFQUFFO0FBQ2QsaUJBQVNqQixZQUFZLENBQUNHLElBRFI7QUFDY2UsTUFBQUEsV0FBVyxFQUFFLE9BRDNCO0FBQ29DQyxNQUFBQSxJQUFJLEVBQUVuQixZQUQxQztBQUN3RG9CLE1BQUFBLE1BRHhELG9CQUNpRTtBQUMzRTtBQUNBO0FBQ0EsYUFBS0MsWUFBTDtBQUNIO0FBTGEsS0FGVjtBQVNSQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQUNkLGlCQUFTZCxZQUFZLENBQUNDLENBRFI7QUFDV1MsTUFBQUEsV0FBVyxFQUFFLE9BRHhCO0FBQ2lDQyxNQUFBQSxJQUFJLEVBQUVYLFlBRHZDO0FBQ3FEWSxNQUFBQSxNQURyRCxvQkFDOEQ7QUFDeEUsYUFBS0csWUFBTDtBQUNIO0FBSGEsS0FUVjtBQWVSQyxJQUFBQSxTQUFTLEVBQUU7QUFBQyxpQkFBUyxJQUFWO0FBQWdCTixNQUFBQSxXQUFXLEVBQUUsSUFBN0I7QUFBbUNDLE1BQUFBLElBQUksRUFBRWxCLEVBQUUsQ0FBQ3dCLEtBQTVDO0FBQW1EQyxNQUFBQSxPQUFPLEVBQUU7QUFBNUQ7QUFmSCxHQUhQO0FBcUJMTCxFQUFBQSxZQXJCSywwQkFxQlU7QUFDWCxRQUFJLEtBQUtKLGdCQUFMLEtBQTBCakIsWUFBWSxDQUFDRyxJQUEzQyxFQUFpRDtBQUM3QyxXQUFLcUIsU0FBTCxDQUFlRyxNQUFmLEdBQXdCLEVBQXhCO0FBQ0gsS0FGRCxNQUVPLElBQUksS0FBS1YsZ0JBQUwsS0FBMEJqQixZQUFZLENBQUNJLEtBQTNDLEVBQWtEO0FBQ3JELFdBQUtvQixTQUFMLENBQWVHLE1BQWYsR0FBd0IsS0FBeEI7QUFDSCxLQUZNLE1BRUEsSUFBSSxLQUFLVixnQkFBTCxLQUEwQmpCLFlBQVksQ0FBQ0ssS0FBM0MsRUFBa0Q7QUFDckQsV0FBS21CLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixLQUF4QjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtWLGdCQUFMLEtBQTBCakIsWUFBWSxDQUFDTSxLQUEzQyxFQUFrRDtBQUNyRCxXQUFLa0IsU0FBTCxDQUFlRyxNQUFmLEdBQXdCLEtBQXhCO0FBQ0gsS0FGTSxNQUVBLElBQUksS0FBS1YsZ0JBQUwsS0FBMEJqQixZQUFZLENBQUNPLEtBQTNDLEVBQWtEO0FBQ3JELFdBQUtpQixTQUFMLENBQWVHLE1BQWYsR0FBd0IsS0FBeEI7QUFDSDtBQUNKLEdBakNJO0FBa0NMSixFQUFBQSxZQWxDSywwQkFrQ1U7QUFDWCxRQUFJLEtBQUtELGdCQUFMLEtBQTBCZCxZQUFZLENBQUNDLENBQTNDLEVBQThDO0FBQzFDLFdBQUtlLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixFQUF4QjtBQUNILEtBRkQsTUFFTyxJQUFJLEtBQUtMLGdCQUFMLEtBQTBCZCxZQUFZLENBQUNFLEdBQTNDLEVBQWdEO0FBQ25ELFdBQUtjLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixLQUF4QjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtMLGdCQUFMLEtBQTBCZCxZQUFZLENBQUNHLEdBQTNDLEVBQWdEO0FBQ25ELFdBQUthLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixLQUF4QjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtMLGdCQUFMLEtBQTBCZCxZQUFZLENBQUNJLEdBQTNDLEVBQWdEO0FBQ25ELFdBQUtZLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixLQUF4QjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtMLGdCQUFMLEtBQTBCZCxZQUFZLENBQUNLLEdBQTNDLEVBQWdEO0FBQ25ELFdBQUtXLFNBQUwsQ0FBZUcsTUFBZixHQUF3QixLQUF4QjtBQUNIO0FBQ0o7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFNlbGVjdE1lbnVFbiA9IGNjLkVudW0oe1xyXG4gICAgTm9uZTogMCxcclxuICAgIE1lbnVBOiAxLFxyXG4gICAgTWVudUI6IDIsXHJcbiAgICBNZW51QzogMyxcclxuICAgIE1lbnVEOiA0LFxyXG59KTtcclxuXHJcbmxldCBTZWxlY3RNZW51Q24gPSBjYy5FbnVtKHtcclxuICAgIOaXoDogMCxcclxuICAgIOmAiemhuUE6IDEsXHJcbiAgICDpgInpoblCOiAyLFxyXG4gICAg6YCJ6aG5QzogMyxcclxuICAgIOmAiemhuUQ6IDQsXHJcbn0pO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgc2VsZWN0TWVudVR5cGVFbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBTZWxlY3RNZW51RW4uTm9uZSwgZGlzcGxheU5hbWU6IFwi6YCJ6aG5LWVuXCIsIHR5cGU6IFNlbGVjdE1lbnVFbiwgbm90aWZ5KCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RNZW51VHlwZUNuID0gdGhpcy5zZWxlY3RNZW51VHlwZUVuO1xyXG4gICAgICAgICAgICAgICAgLy8g5q275b6q546vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVOYW1lMSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RNZW51VHlwZUNuOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFNlbGVjdE1lbnVDbi7ml6AsIGRpc3BsYXlOYW1lOiBcIumAiemhuS1jblwiLCB0eXBlOiBTZWxlY3RNZW51Q24sIG5vdGlmeSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5hbWUyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBuYW1lTGFiZWw6IHtkZWZhdWx0OiBudWxsLCBkaXNwbGF5TmFtZTogXCLlkI3lrZdcIiwgdHlwZTogY2MuTGFiZWwsIHZpc2libGU6IGZhbHNlfSxcclxuXHJcbiAgICB9LFxyXG4gICAgX3VwZGF0ZU5hbWUxKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE1lbnVUeXBlRW4gPT09IFNlbGVjdE1lbnVFbi5Ob25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdE1lbnVUeXBlRW4gPT09IFNlbGVjdE1lbnVFbi5NZW51QSkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMYWJlbC5zdHJpbmcgPSBcIuaIkeaYr0FcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0TWVudVR5cGVFbiA9PT0gU2VsZWN0TWVudUVuLk1lbnVCKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IFwi5oiR5pivQlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RNZW51VHlwZUVuID09PSBTZWxlY3RNZW51RW4uTWVudUMpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gXCLmiJHmmK9DXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdE1lbnVUeXBlRW4gPT09IFNlbGVjdE1lbnVFbi5NZW51RCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMYWJlbC5zdHJpbmcgPSBcIuaIkeaYr0RcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgX3VwZGF0ZU5hbWUyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE1lbnVUeXBlQ24gPT09IFNlbGVjdE1lbnVDbi7ml6ApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0TWVudVR5cGVDbiA9PT0gU2VsZWN0TWVudUNuLumAiemhuUEpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gXCLmiJHmmK9BXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdE1lbnVUeXBlQ24gPT09IFNlbGVjdE1lbnVDbi7pgInpoblCKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IFwi5oiR5pivQlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RNZW51VHlwZUNuID09PSBTZWxlY3RNZW51Q24u6YCJ6aG5Qykge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMYWJlbC5zdHJpbmcgPSBcIuaIkeaYr0NcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0TWVudVR5cGVDbiA9PT0gU2VsZWN0TWVudUNuLumAiemhuUQpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gXCLmiJHmmK9EXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
