// panel/index.js, this filename needs to match the one registered in package.json
const Fs = require("fire-fs");
Editor.Panel.extend({
  // css style for panel
  style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

  // html template for panel
  template: `
    <h2>自定义控件库</h2>
    <div class="layout vertical">
      <ui-button id="updateBtn"> <i class="icon-cw"></i>刷新</ui-button>         
      <div id="content" style="border: groove; padding-top:1px;width: 98%;height:70%;overflow-y:auto;"></div>    
    </div>
  `,

  // element and variable binding
  $: {
    content: '#content',
    updateBtn:'#updateBtn',
  },

  // method executed when template and styles are successfully loaded and initialized
  ready () {    
    this.updateView();
    this.$updateBtn.addEventListener('confirm', () => {
      //刷新
      this.updateView();    
    });
  },

  updateView(){    
    this.cleanView();    
    allPaths = this.readPaths()            
    allPaths.forEach((pathVal,i)=>{              
      Editor.assetdb.queryAssets(pathVal[1], 'prefab' , function (err, prefabs) {        
        const title = pathVal[0];
        this.$content.innerHTML += "<h3>"+title+"</h3>"  
        prefabs.forEach(prefab => {        
          const id = prefab.uuid;
          const urlval = prefab.url;        
          let name= urlval.split('/').pop().split(".")[0];
          this.$content.innerHTML += '<ui-button id = '+id+">"+name+"</ui-button>";            
        });
        if(i == allPaths.length-1){
          const nodes = this.$content.childNodes;
          nodes.forEach(node=>{          
            if(node.nodeName == "UI-BUTTON"){
              node.addEventListener("confirm",()=>{                  
                Editor.Scene.callSceneScript('custom_com', 'get-canvas-children',[node.id]);          
              })
            }          
          }) 
        }                
      }.bind(this)); 
    })            
  },

  readPaths(){
    const file = Fs.readFileSync(Editor.url("packages://custom_com/prefabPaths.txt"),"utf-8")
    const pathLines = file.split("\n");
    const res = [];
    pathLines.forEach(line =>{
      lineVals = line.split("#")
      res.push(lineVals);
    })
    return res;
  },

  cleanView(){    
    this.$content.innerHTML = "";
  },
  // register your ipc messages here
  messages: {
    'custom_com:hello' (event) {
      //this.$label.innerText = 'Hello!';
    }
  }
});