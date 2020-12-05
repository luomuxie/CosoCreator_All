
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