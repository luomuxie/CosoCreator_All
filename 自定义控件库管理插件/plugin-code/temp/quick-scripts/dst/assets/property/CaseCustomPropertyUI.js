
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