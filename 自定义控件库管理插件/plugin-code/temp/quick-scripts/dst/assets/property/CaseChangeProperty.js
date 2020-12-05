
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