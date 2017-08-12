### TWaver学习笔记


TWaver学习笔记 
* 基本概念 
> 图元 `Element` 基本元素 节点和年线  Node Link
> 容器 `DataBox` 负责图元的增删改查
> 画布 `Network`  图形的具体绘制和交互


```js
function init(){
  var box = twaver.ElementBox();// 定义一个容器
  var network  = twaver.vector.Network(box);


  document.body.appendChild(network.getView());
  newwork.adjustBounds({x:0, y:0,width:500, height:500});


  // 定义图元
  var aNode = twaver.Node();
  aNode.setName("aNode");
  aNode.setLocation(100,100);
  box.add(aNode);

  // 定义图元B

  var bNode = twaver.Node();
  bNode.setName('bNode');
  bNode.setLocation(300, 400);
  box.add(bNode);


// 定义图元 连线

  var cLink = twaver.Link(aNode, bNode);
  cLink.setName("cLink link A B");
  cLink.setToolTip("link  A B");
  box.add(cLink);

}

```

### 数据元素
 数据元素是数据模型的基本要素，用于描述图形网元，业务网元，或者纯数据。TWaver HTML5中所有数据元素都继承自twaver.Data。
![数据元素](http://doc.servasoft.com/wp-content/uploads/2014/09/QQ20141031-1@2x.png)




```js
// 创建容器
var box = new twaver.ElementBox(); 
// 创建画布
var network = new twaver.vector.Network(box); 
function init() { 
  initNetwork(); 
  registerImage(); 
  initDataBox(); 
} 
function initNetwork() { 
  var view = network.getView();
  document.body.appendChild(view); 
  network.adjustBounds({x: 0, y: 0, width: 1300, height: 600}); 
  twaver.Styles.setStyle('select.color', '#57ab9a'); 
  //重写 getAlarmLabel的方法
  network.getAlarmLabel = function (element) { 
   var severity = element.getAlarmState().getHighestNewAlarmSeverity(); 
   if (severity) { 
    if (element.getName() === 'Jeff.fu') { 
      var label = severity.nickName; 
    } 
    else if (element.getName() === 'alex.dong') { 
      var label = "alexAlarm"; 
    } 
    else if (element.getChildrenSize() !== 0) { 
      var label = "parentAlarm"; 
    }
    else { 
      var label = element.getAlarmState().getNewAlarmCount(severity) + severity.nickName; } 
      if (element.getAlarmState().hasLessSevereNewAlarms()) { 
        label += "+"; 
      } 
      return label; 
    } 
    return null ; 
  } 
}
function registerImage() {
  //register shadow 
  twaver.Util.registerImage('shadow', { w: 37, h: 29, shadowOffsetX: 0, shadowOffsetY: 0, shadowBlur: 5, shadowColor: '#ec6c00', v: [ { shape: 'vector', name: 'node_image', x: 0, y: 0 } ] }); 
} 
function initDataBox() { 
  var parent = new twaver.Group({ name: 'parent', location: {x: 300, y: 400 }, }); 
  addAlarm("alarm 0", parent.getId(), twaver.AlarmSeverity.MINOR, box.getAlarmBox()); 
  box.add(parent); 
  var node1 = new twaver.Node({ name: 'Jeff.fu', location: { x: 200, y: 200 } }); 
  addAlarm("alarm 1", node1.getId(), twaver.AlarmSeverity.CRITICAL, box.getAlarmBox()); 
  node1.setClient('vector', true); 
  box.add(node1); 
  var node2 = new twaver.Node({ name: 'alex.dong', location: { x: 500, y: 350 } }); 
  node2.setClient('vector', true); 
  addAlarm("alarm 2", node2.getId(), twaver.AlarmSeverity.MAJOR, box.getAlarmBox()); 
  box.add(node2); 
  var link = new twaver.Link(node1, node2); 
  link.setName('link1'); 
  link.setStyle('label.position', 'topleft.topleft'); 
  addAlarm("alarm 3", link.getId(), twaver.AlarmSeverity.WARNING, box.getAlarmBox()); 
  box.add(link);
  parent.addChild(node1);
  parent.addChild(node2); 
} 
function addAlarm(alarmID, elementID, alarmSeverity, alarmBox) { 
  var alarm = new twaver.Alarm(alarmID, elementID, alarmSeverity); 
  alarmBox.add(alarm); 
}


```


`HTML节点(HTMLNode)` 用来呈现HTML节点


```js 
//创建方法1
var node = new twaver.HTMLNode({
name:"<div style='background:rgba(255,0,0,1);width:100px;height:100px'></div>",
name2:"<div style='background:rgba(0,255,0,1);width:100px;height:100px'></div>",
});
```

```js
// 创建方法二
var div = document.createElement('div');
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = 'red';
var node = new twaver.HTMLNode({
    name:div,
});

var div = document.createElement('div');
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = 'red';
var node = new twaver.HTMLNode({
    name:div,
});
```


#### 学习笔记twaver HTML5 3D

> 创建画布 Network  
> 创建容器 DataBox
> 创建灯光 PointLight /AmbientLight 光源分为点灯光和环境灯光