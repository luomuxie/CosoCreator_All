module.exports = {
    // 更多的是跟场景编辑器当前的状态进行交互
    'get-canvas-children': function (evt,id) {
        debugger
        
        let canvas = cc.find('Canvas');
        Editor.log('children length : ' + canvas.children.length);        
        let nodeUuids=Editor.Selection.curSelection("node"); 
        let selNode= cc.engine.getInstanceById(nodeUuids[0]);
        Editor.Ipc.sendToPanel("scene","scene:create-nodes-by-uuids",id,selNode? selNode.uuid:"",{unlinkPrefab:null})
    }
};
