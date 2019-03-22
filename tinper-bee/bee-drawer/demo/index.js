import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from '../src';
import Clipboard from 'bee-clipboard';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" Drawer基本示例","code":"/**\n *\n * @title Drawer基本示例\n * @description 弹出文字\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from \"tinper-bee/lib/Drawer\";\nimport { Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button className=\"btn\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className={'demo1'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                 \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 弹出文字"},{"example":<Demo2 />,"title":" Drawer位置示例","code":"/**\n *\n * @title Drawer位置示例\n * @description 从上下左右弹出抽屉\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from \"tinper-bee/lib/Drawer\";\nimport { Button, Radio } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Drawer'\n        };\n        this.fPositionChange = this.fPositionChange.bind(this);\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fPositionChange(value){\n        this.setState({\n            placement: value\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n        title = placement[0].toUpperCase() + placement.slice(1) + ' ' + title;\n\n        return (\n            <div className=\"demoPadding demo2\">\n                <div className=\"placementc\">\n                    <Radio.RadioGroup\n                        name=\"placement\"\n                        selectedValue={placement}\n                        onChange={this.fPositionChange}>\n                        <Radio value=\"left\" >left</Radio>\n                        <Radio value=\"right\" >right</Radio>\n                        <Radio value=\"top\" >top</Radio>\n                        <Radio value=\"bottom\" >bottom</Radio>\n                    </Radio.RadioGroup>\n                </div>\n                <div className=\"btnc\">  \n                    <Button className=\"btn\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className={'demo2'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <p>这是第一行文字</p>\n                        <p>这是第二行文字</p>\n                        <p>这是第三行文字，啦啦啦~</p>                                                  \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 从上下左右弹出抽屉"},{"example":<Demo3 />,"title":" Drawer表单示例","code":"/**\n *\n * @title Drawer表单示例\n * @description 弹出表单信息\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from \"tinper-bee/lib/Drawer\";\nimport { Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: '表单'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button className=\"btn\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className={'demo3'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <div className=\"form\">\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Name：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Age：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Job：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Hometown: </label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Major:</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Hobby:</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <label>Description: </label>\n                                <div>\n                                    <textarea className=\"input\"></textarea>\n                                </div>\n                            </div>       \n                        </div>\n                        <div className=\"form-btnc\">\n                            <button className=\"btn\" onClick={this.fCloseDrawer}>Cancel</button>\n                            <button className=\"btn btn-sumbit\" onClick={this.fCloseDrawer}>Submit</button>\n                        </div>                                      \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 弹出表单信息"},{"example":<Demo4 />,"title":" Drawer多层抽屉示例","code":"/**\n *\n * @title Drawer多层抽屉示例\n * @description 弹出多层抽屉\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from \"tinper-bee/lib/Drawer\";\nimport { Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer',\n            secondTitle: 'Second Drawer',\n            showSecondDrawer: false,\n            secondPlacement: 'right'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n        this.fPopSecondDrawer = this.fPopSecondDrawer.bind(this);\n        this.fCloseSecondDrawer = this.fCloseSecondDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    fPopSecondDrawer(){\n        this.setState({\n            showSecondDrawer: true\n        })\n    }\n    fCloseSecondDrawer(){\n        this.setState({\n            showSecondDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title,secondTitle,showSecondDrawer,secondPlacement} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btnc\">  \n                    <Button className=\"btn\" onClick={this.fPopDrawer}>打开</Button>\n                </div>\n                <Drawer className={'demo4'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <Button onClick={this.fPopSecondDrawer} className=\"btn\">二级抽屉</Button>\n                    </div>\n                    <Drawer className={'demo4'} width={'320px'} zIndex={1000001} title={secondTitle} show={showSecondDrawer} placement={secondPlacement} onClose={this.fCloseSecondDrawer}>\n                        <div className=\"con\">\n                            <p>这是第一行文字</p>\n                            <p>这是第二行文字</p>\n                            <p>这是第三行文字，啦啦啦~</p>  \n                            <p>这是第四行文字，啦啦啦~</p>  \n                        </div>\n                    </Drawer>  \n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 弹出多层抽屉"},{"example":<Demo5 />,"title":" Drawer5列表信息示例","code":"/**\n *\n * @title Drawer5列表信息示例\n * @description 弹出列表中一项的信息\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from \"tinper-bee/lib/Drawer\";\n\nclass Demo5 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer',\n            list: [\n                {id:1, name: 'XiaoMing',hometown:'henan', age:23, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaoming.png',\n                 province:'henan',city:'shangqiu',county:'suiyangqu',country:'chengguanzhen',\n                 phone:'138xxxxxxxx',email:'xiaoming@168.com',bio:'xiaoming@weibo.com',weixin:'xiaoming'},\n                {id:2, name: 'XiaoZhang',hometown:'hebei', age:25, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaozhang.png',\n                 province:'beijing',city:'beijing',county:'changping',country:'huilongguan',\n                 phone:'139xxxxxxxx',email:'xiaozhang@168.com',bio:'xiaozhang@weibo.com',weixin:'xiaozhang'}\n            ],\n            curItem: {}\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n        this.fItemClick = this.fItemClick.bind(this);\n    }\n    fItemClick(ev,item){\n        this.setState({\n            curItem: item,\n            showDrawer: true,\n            title: item.name + '\\'s Profile' \n        })\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {list,title,placement,showDrawer,curItem} = this.state;\n\n        return (\n            <div className=\"demoPadding demo5\">\n                <ul className=\"infos\">\n                    {\n                        list.map(item => {\n                            return  (<li key={item.id} className=\"info-item\">\n                                        <div className=\"item-inner\">\n                                            <div className=\"item-left\">\n                                                <img className=\"item-avatar\" src={item.avatar} />\n                                            </div>\n                                            <div className=\"item-main\">\n                                                <div>{item.name}</div>\n                                                <div>{item.email}</div>\n                                                <div>{item.hometown}</div>\n                                            </div>\n                                            <div className=\"item-right\">\n                                                <a className=\"item-link\" onClick={(ev) => this.fItemClick(ev,item)} href=\"javascript:;\">View</a>\n                                            </div>\n                                        </div>\n                                    </li>)\n                        })\n                    }\n                </ul>\n                <Drawer className={'demo5'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Avatar</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <img className=\"sec-avatar\" src={curItem.avatar} />\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Profile</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Name: </span>\n                                        <span>{curItem.name}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>hometown: </span>\n                                        <span>{curItem.hometown}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Age: </span>\n                                        <span>{curItem.age}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>School: </span>\n                                        <span>{curItem.school}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Address</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Province: </span>\n                                        <span>{curItem.province}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>City: </span>\n                                        <span>{curItem.city}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>County: </span>\n                                        <span>{curItem.county}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Country: </span>\n                                        <span>{curItem.country}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div className=\"section\">\n                            <div className=\"sec-title\">Contract</div>\n                            <div className=\"sec-body\">\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Phone: </span>\n                                        <span>{curItem.phone}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Email: </span>\n                                        <span>{curItem.email}</span>\n                                    </div>\n                                </div>\n                                <div className=\"row\">\n                                    <div className=\"col\">\n                                        <span>Bio: </span>\n                                        <span>{curItem.bio}</span>\n                                    </div>\n                                    <div className=\"col\">\n                                        <span>Weixin: </span>\n                                        <span>{curItem.weixin}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 弹出列表中一项的信息"}]


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
