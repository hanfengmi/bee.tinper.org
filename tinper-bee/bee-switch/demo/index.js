import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认开关","code":"/**\n *\n * @title 默认开关\n * @description\n *\n */\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    };\n  }\n  onChange = () => {\n    this.setState({\n      checked: !this.state.checked\n    });\n  };\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch\n            checked={this.state.checked}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":""},{"example":<Demo2 />,"title":" 不同大小的开关","code":"/**\n *\n * @title 不同大小的开关\n * @description 通过`size`属性控制开关的大小\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch size=\"sm\" />\n        </Col>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch size=\"lg\" />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":" 通过`size`属性控制开关的大小"},{"example":<Demo3 />,"title":" 事件开关","code":"/**\n *\n * @title 事件开关\n * @description 点击开关触发事件\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      switch: \"\",\n      checked: false\n    };\n  }\n  onChange = e => {\n    this.setState({\n      switch: `${e}`,\n      checked: !this.state.checked\n    });\n  };\n\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch\n            checked={this.state.checked}\n            onChange={this.onChange}\n            checkedChildren={\"on\"}\n            unCheckedChildren={\"off\"}\n          />\n        </Col>\n        <Col sm={2}>\n          <span>{this.state.switch}</span>\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":" 点击开关触发事件"},{"example":<Demo4 />,"title":" 被禁用开关","code":"/**\n *\n * @title 被禁用开关\n * @description\n *\n */\nimport React, { Component } from \"react\";\nimport { Switch, Button,  Row, Col  } from 'tinper-bee';\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n        defaultDisabled: true\n    };\n  }\n  onChange = () => {\n    this.setState({\n      defaultDisabled: !this.state.defaultDisabled\n    });\n  };\n  onConsoleLog=(x)=>{\n    console.log(x) \n  }\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch disabled={this.state.defaultDisabled}/>\n        </Col>\n        <Col sm={2}>\n          <Button onClick={this.onChange}>toggle disabled</Button>\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":""}]


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
