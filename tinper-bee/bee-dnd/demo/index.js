import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo90 = require("./demolist/Demo90");var Demo91 = require("./demolist/Demo91");var Demo92 = require("./demolist/Demo92");var DemoArray = [{"example":<Demo1 />,"title":" 基础拖拽","code":"\n/**\n *\n * @title 基础拖拽\n * @description 将某个元素设置为可拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我可随意拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 将某个元素设置为可拖拽","scss_code":".demo {\n    width:167px;\n    height:32px;\n    background:rgba(247,249,251,1);\n    border-radius:3px;\n    border:1px solid rgba(165,173,186,1);\n    line-height: 32px;\n    font-size: 12px;\n    color: #212121;\n    text-align: center;\n    cursor: grab;\n    &:hover{\n      background:rgba(235,236,240,1);\n      border-radius:3px;\n    }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n    .demo{\n        box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\n        opacity:0.8;\n        cursor: grabbing;\n    }\n}"},{"example":<Demo2 />,"title":" 单个元素沿x轴y轴拖拽","code":"\n/**\n *\n * @title 单个元素沿x轴y轴拖拽\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Button } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只可延X轴拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽","scss_code":".demo {\n  width:167px;\n  height:32px;\n  background:rgba(247,249,251,1);\n  border-radius:3px;\n  border:1px solid rgba(165,173,186,1);\n  line-height: 32px;\n  font-size: 12px;\n  color: #212121;\n  text-align: center;\n  cursor: grab;\n  &:hover{\n    background:rgba(235,236,240,1);\n    border-radius:3px;\n  }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n  .demo{\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\n      opacity:0.8;\n      cursor: grabbing;\n  }\n}"},{"example":<Demo3 />,"title":" 设置元素不可拖拽","code":"\n/**\n *\n * @title 设置元素不可拖拽\n * @description 设置 onStart 的返回值为false，则不可以拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n        return false;\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div className=\"demo-3\">\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo3 demo\">我不可以拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n","desc":" 设置 onStart 的返回值为false，则不可以拖拽","scss_code":".demo-3{\n  .demo3:hover{\n    background:rgba(247,249,251,1);\n    cursor: not-allowed;\n  }\n}"},{"example":<Demo4 />,"title":" 单个元素拖拽把手","code":"/**\n *\n * @title 单个元素拖拽把手\n * @description 设置 handle，值为选择器，例如 '.handle'\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Icon } from 'tinper-bee';\n\nclass Demo4 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n\n    render() {\n        return (\n            <div className=\"demo-4\">\n                <div>\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo4 demo\">\n                            需要拖拽把手\n                            <div className=\"handle\"><Icon type=\"uf-move\"></Icon></div>\n                        </div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n","desc":" 设置 handle，值为选择器，例如 '.handle'","scss_code":"\n.demo-4 .demo4 {\n  position: relative;\n  cursor: default;\n  &:hover{\n    background:rgba(247,249,251,1);\n    cursor: default;\n  }\n}\n\n.demo4 .handle {\n  position: absolute;\n  right: -1px;\n  top: -1px;\n  height: 32px;\n  line-height: 30px;\n  background:rgba(223,225,230,1);\n  border-radius:0px 3px 3px 0px;\n  border:1px solid rgba(165,173,186,1);\n  cursor: grab;\n  &:hover{\n    background:rgba(179,186,197,1);\n  }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n  .demo4 .handle{\n    background:rgba(179,186,197,1);\n    cursor: grabbing;\n  }\n}"},{"example":<Demo5 />,"title":" 每次拖拽移动距离","code":"\n/**\n *\n * @title 每次拖拽移动距离\n * @description 设置 grid={[x,y]}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Button } from 'tinper-bee';\n\nclass Demo5 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置 grid={[x,y]}","scss_code":".demo {\n  width:167px;\n  height:32px;\n  background:rgba(247,249,251,1);\n  border-radius:3px;\n  border:1px solid rgba(165,173,186,1);\n  line-height: 32px;\n  font-size: 12px;\n  color: #212121;\n  text-align: center;\n  cursor: grab;\n  &:hover{\n    background:rgba(235,236,240,1);\n    border-radius:3px;\n  }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n  .demo{\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\n      opacity:0.8;\n      cursor: grabbing;\n  }\n}"},{"example":<Demo6 />,"title":" 元素拖拽范围","code":"\n/**\n *\n * @title 元素拖拽范围\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo6 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div className=\"demo6\">\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}","scss_code":".demo {\n  width:167px;\n  height:32px;\n  background:rgba(247,249,251,1);\n  border-radius:3px;\n  border:1px solid rgba(165,173,186,1);\n  line-height: 32px;\n  font-size: 12px;\n  color: #212121;\n  text-align: center;\n  cursor: grab;\n  &:hover{\n    background:rgba(235,236,240,1);\n    border-radius:3px;\n  }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n  .demo{\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\n      opacity:0.8;\n      cursor: grabbing;\n  }\n}\n.demo6{\n  height: 100px;\n}"},{"example":<Demo7 />,"title":" 在指定容器中拖拽","code":"\n/**\n *\n * @title 在指定容器中拖拽\n * @description 设置只可以在指定容器中移动\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\nimport { Button } from 'tinper-bee';\n\nclass Demo7 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <div className=\"demo7-parent\">\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo\">我只能在父级元素中移动</div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n","desc":" 设置只可以在指定容器中移动","scss_code":".demo {\n  width:167px;\n  height:32px;\n  background:rgba(247,249,251,1);\n  border-radius:3px;\n  border:1px solid rgba(165,173,186,1);\n  line-height: 32px;\n  font-size: 12px;\n  color: #212121;\n  text-align: center;\n  cursor: grab;\n  &:hover{\n    background:rgba(235,236,240,1);\n    border-radius:3px;\n  }\n}\n/*拖动状态*/\n.react-draggable-transparent-selection{\n  .demo{\n    box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\n    opacity:0.8;\n    cursor: grabbing;\n  }\n}\n\n.demo7-parent {\n  width: 300px;\n  height: 200px;\n  background: rgba(247,249,251,1);\n  border: 1px solid rgba(235,236,240,1);\n  position: relative;\n}"},{"example":<Demo8 />,"title":" 数据集合拖拽列表排序","code":"/**\n *\n * @title 数据集合拖拽列表排序\n * @description 增加list 可以为 [1,2,3]数组，\n *              也可以为 [{},{}...]，需要配置 showKey 。\n *              也可以为 dom集合，见后边示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo8 extends Component {\n    \n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{   \n        console.log('结束');\n    }\n    onDragUpdate=(result)=>{\n        console.log('update')\n    }\n    render() {\n        let list=[\n            {\n                name:'第一',\n                code:'a'\n            },\n            {\n                name:'第二',\n                code:'b'\n            },\n            {\n                name:'第三',\n                code:'c'\n            },\n            {\n                name:'第四',\n                code:'d'\n            },\n            {\n                name:'第五',\n                code:'e'\n            },\n        ];\n        return (\n            <Dnd showKey='name' list={list} onDragUpdate={this.onDragUpdate} onStart={this.onDragStart} onStop={this.onDragEnd}/>\n        );\n    }\n}\n\n","desc":" 增加list 可以为 [1,2,3]数组，","scss_code":""},{"example":<Demo9 />,"title":" DOM集合拖拽列表排序","code":"\n/**\n *\n * @title DOM集合拖拽列表排序\n * @description list传dom集合\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo9 extends Component {\n\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{\n        console.log('结束');\n    }\n    render() {\n        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];\n        return (\n           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n","desc":" list传dom集合"},{"example":<Demo90 />,"title":" 横向拖拽列表排序","code":"\n/**\n *\n * @title 横向拖拽列表排序\n * @description type='horizontal'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list=['第一','第二','第三','第四','第五'];\n        return (\n           <Dnd list={list} type='horizontal'  />\n        );\n    }\n}\n\n","desc":" type='horizontal'"},{"example":<Demo91 />,"title":" 两列纵向拖拽","code":"\n/**\n *\n * @title 两列纵向拖拽\n * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd className='demo91' list={list1} otherList={list2} type='betweenVertical'  />\n        );\n    }\n}\n\n","desc":" 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开","scss_code":".u-drop{\n    overflow: scroll;\n}\n.u-drag-between{\n    height: 300px;\n}"},{"example":<Demo92 />,"title":" 两列横向拖拽","code":"\n/**\n *\n * @title 两列横向拖拽\n * @description 设置 type='betweenVertical'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,listObj)=>{\n        console.log('结束');\n        console.log(listObj)\n    }\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd list={list1} otherList={list2} type='betweenHorizontal' onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n","desc":" 设置 type='betweenVertical'","scss_code":".u-drop{\n    overflow: scroll;\n}\n.u-drag-between-horizontal{\n    height: 200px;\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
