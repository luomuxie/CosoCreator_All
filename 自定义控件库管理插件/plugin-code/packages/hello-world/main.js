'use strict';

module.exports = {
    load() {
        // execute when package loaded
    },

    unload() {
        // execute when package unloaded
    },

    // register your ipc messages here
    messages: {
        'open'() {
            // open entry panel registered in package.json
            Editor.Panel.open('hello-world');
        },
        'say-hello'() {
            Editor.log('Hello World!');
            // send ipc message to panel
            Editor.Ipc.sendToPanel('hello-world', 'hello-world:hello');
        },
        'clicked'() {
            Editor.log('Button clicked!');
        },
        'open-all-panel'(event) {
            Editor.Panel.open("hello-world.page1");
            Editor.Panel.open("hello-world.page2");
            Editor.Panel.open("hello-world.page3");
        },
        'open-page4'(event, data) {
            Editor.log("onPage4: " + data);
            Editor.log("我就试试看");
            Editor.Panel.open("hello-world.page4");
            if(event.reply){
                event.reply(null,"我来自主进程onPage4");
            }
            // Editor.Ipc.sendToPanel("hello-world.page3","");

        }
    },
};
