"use strict";
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