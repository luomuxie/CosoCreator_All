module.exports = {
    // 更多的是跟场景编辑器当前的状态进行交互
    'get-canvas-children': function (event,el) {
        debugger

        if (Editor.isMainProcess) {

        } else {

        }
        
        let canvas = cc.find('Canvas');
        Editor.log('children length : ' + canvas.children.length);
        let nodeUuids=Editor.Selection.curSelection("node"); 
        let node=cc.engine.getInstanceById(nodeUuids[0]);
        Editor.assetdb.queryAssets('db://assets/prefabs/*', 'prefab' , function (err, prefabs) {
            prefabs.forEach(prefab => {
                Editor.Ipc.sendToPanel("scene","scene:create-nodes-by-uuids",[prefab.uuid],node.uuid,{unlinkPrefab:null})
                Editor.log(prefab.uuid);
            });
        });

        var testPeople = [
            {"id":"1","name":"李1"},{"id":"2","name":"李大龙2"},{"id":"3","name":"李丽丽3"},{"id":"4","name":"李4"},{"id":"5","name":"李5"},{"id":"6","name":"王6"},{"id":"7","name":"王萨德7"},{"id":"8","name":"王三单8"},{"id":"9","name":"王9"},{"id":"10","name":"王10"}];
        var str = "";
        for(var i=0; i<testPeople.length; i++){
            var name = testPeople[i].name+" "+"x";
            str+='<input type="button" style="margin:8px;width:84px" class="btn btn-default" name="'+"sendPeople"+'" id="'+i+'"  value="'+name+'" />';
        }            
        Editor.log("当前容器为："+ Editor.window.document.getElementById("btn")); 
        document.getElementById("content").innerHTML=str;
        //$('#people').html(str)
    

        if (event.reply) {
            event.reply(null, canvas.children.length);
        }
    },        

}