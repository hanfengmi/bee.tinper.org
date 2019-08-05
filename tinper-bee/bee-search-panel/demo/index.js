import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 普通搜索面板","code":"/**\r\n *\r\n * @title 普通搜索面板\r\n * @description 一般用于页面中有搜索功能的内容区。\r\n *\r\n */\r\nimport React, {Component} from 'react';\nimport {  } from 'tinper-bee';\r\nimport SearchPanel from \"tinper-bee/lib/src\";;\r\nimport {FormControl,Row, Col,Label,Form,Radio} from 'tinper-bee';\r\nlet HeadContainer = SearchPanel.HeadContainer;\r\nlet AdvancedContainer = SearchPanel.AdvancedContainer;\r\n\r\nconst FormItem = Form.FormItem;\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            expanded: true\r\n        }\r\n    }\r\n    search=()=>{\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log(err);\r\n            } else {\r\n                console.log('提交成功', values)\r\n            }\r\n        });\r\n    }\r\n    clear=()=>{\r\n        this.props.form.resetFields()\r\n    }\r\n    onChange = () => {\r\n        this.setState({expanded: !this.state.expanded})\r\n    }\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        return (<div className=\"demo1\">\r\n            <SearchPanel\r\n                title='条件筛选'\r\n                onSearch={this.search}\r\n                onReset={this.clear}\r\n                expanded={this.state.expanded}\r\n                onChange={this.onChange}\r\n                onPanelChangeStart={status => {\r\n                    console.log(status, \"start\")\r\n                }}\r\n                onPanelChangeIng={status => {\r\n                    console.log(status, \"ing\")\r\n                }}\r\n                onPanelChangeEnd={status => {\r\n                    console.log(status, \"end\")\r\n                }}>\r\n                <HeadContainer>\r\n                    <div className='demo-head'>\r\n                        <Form>\r\n                            <Row>\r\n                                <Col xs={12} sm={6} md={4} lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>名 称</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('name', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>电话</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('phone', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n                            </Row>\r\n                        </Form>\r\n                    </div>\r\n                </HeadContainer>\r\n                \r\n                <AdvancedContainer>\r\n                    <div className='demo-body'>\r\n                        <Form>\r\n                            <Row>\r\n\r\n                                <Col xs={12} sm={6} md={4} lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>联系人</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('people', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>供应商</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('supplier', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col> \r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>地址</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('address', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col> \r\n\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>车牌</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('carNumber', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>备注</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('remark', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>编号</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('id', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                            </Row>\r\n                        </Form>\r\n                    </div>                 \r\n                </AdvancedContainer>\r\n            </SearchPanel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 一般用于页面中有搜索功能的内容区。","scss_code":".demo1 {\r\n    .u-label {\r\n        min-width: 80px;\r\n        white-space: nowrap;\r\n        text-align: right;\r\n    }\r\n    .u-checkbox-group,\r\n    .col {\r\n        display: inline-flex;\r\n    }\r\n    .u-form-item {\r\n        min-height: 42px;\r\n        .u-select {\r\n            min-width: 152px;\r\n        }\r\n        .u-form-control {\r\n            min-width: 152px;\r\n        }\r\n    }\r\n    .u-form-item,\r\n    .u-row>div {\r\n        padding: 0;\r\n    }\r\n    .u-search .u-panel {\r\n        padding-top: 0px;\r\n        padding-bottom: 0;\r\n        .u-panel-body{\r\n            padding-bottom: 0\r\n        }\r\n    }\r\n    .u-search-resident {\r\n        padding-bottom: 0px;\r\n        padding-top: 0px;\r\n    }\r\n    .demo-head {\r\n        box-sizing: border-box;\r\n    }\r\n    .demo-body {\r\n        margin: 0 -20px;\r\n    }\r\n}"},{"example":<Demo2 />,"title":" HeadContainer 为空状态","code":"/**\r\n *\r\n * @title HeadContainer 为空状态\r\n * @description 目前提供 HeadContainer(常驻区)、AdvancedContainer(收起区) 两部分示例\r\n *\r\n */\r\nimport React, {Component} from 'react';\nimport { DatePicker } from 'tinper-bee';\r\nimport SearchPanel from \"tinper-bee/lib/src\";;\r\nimport { Form, Label,Checkbox,Switch,Button,\r\n     Radio, Select,  Col , Row , FormControl } from 'tinper-bee';\r\n\nimport moment from \"moment/moment\";\r\nconst FormItem = Form.FormItem;\r\nconst Option = Select.Option;\r\nconst { RangePicker } = DatePicker;\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\nconst HeadContainer = SearchPanel.HeadContainer;\r\nconst AdvancedContainer = SearchPanel.AdvancedContainer;\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            expanded: true,\r\n            orderTypes:[\r\n                {\r\n                    'code':'001',\r\n                    'name':'类型1'\r\n                },\r\n                {\r\n                    'code':'002',\r\n                    'name':'类型2'\r\n                },\r\n                {\r\n                    'code':'003',\r\n                    'name':'类型3'\r\n                },\r\n            ]\r\n        };\r\n    }\r\n    clear = () =>{\r\n        this.props.form.resetFields();\r\n    }\r\n    onChange = () => {\r\n        this.setState({expanded: !this.state.expanded})\r\n    }\r\n\r\n    search =()=>{\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log(err);\r\n            } else {\r\n                console.log('提交成功', values)\r\n            }\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        let self = this;\r\n        return (<div className=\"demo2\">\r\n            <SearchPanel\r\n                title='条件筛选'\r\n                onSearch={this.search}\r\n                onReset={this.clear}\r\n                expanded={this.state.expanded}\r\n                onChange={this.onChange} \r\n                onPanelChangeStart={status => {\r\n                    console.log(status, \"start\")\r\n                }}\r\n                onPanelChangeIng={status => {\r\n                    console.log(status, \"ing\")\r\n                }}\r\n                onPanelChangeEnd={status => {\r\n                    console.log(status, \"end\")\r\n                }}>\r\n                <AdvancedContainer>\r\n                    <div className='demo-body'>\r\n                        <Form>\r\n                            <Row>\r\n                            <Col xs={12} sm={6} md={4} lg={4}>\r\n                                    <FormItem>\r\n                                            <Label>订单编号</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('orderCode', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={4}>\r\n                                    <FormItem>\r\n                                            <Label>供应商名称</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('supplierName', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n                                <Col xs={12} sm={6} md={4}  lg={4}>\r\n                                    <FormItem>\r\n                                            <Label>订单类型</Label>\r\n                                            <Select size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('type', {\r\n                                                    initialValue: '',\r\n                                                }\r\n                                                )}>\r\n                                                <Option value=\"\">请选择</Option>\r\n                                                {\r\n                                                    self.state.orderTypes.map((item, index) => {\r\n                                                        return (\r\n                                                            <Option key={index} value={item.code}>{item.name}</Option>\r\n                                                        )\r\n                                                    })\r\n                                                }\r\n                                            </Select>\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={4}>\r\n                                    <FormItem>\r\n                                            <Label>采购组</Label>\r\n                                            <CheckboxGroup \r\n                                                    {\r\n                                                        ...getFieldProps('purchasingGroup',{\r\n                                                            initialValue:['2']\r\n                                                        })\r\n                                                    }\r\n                                                >\r\n                                                    <Checkbox value='1'>人力</Checkbox>\r\n                                                    <Checkbox value='2'>财务</Checkbox>\r\n                                            </CheckboxGroup>\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={4}>\r\n                                    <FormItem>\r\n                                            <Label>审批</Label>\r\n                                            <Radio.RadioGroup\r\n                                                    {\r\n                                                    ...getFieldProps('approvalState', {\r\n                                                        initialValue: '1',\r\n                                                        valuePropName:\"selectedValue\"\r\n                                                    }\r\n                                                    )}\r\n                                                >\r\n                                                <Radio value=\"0\" >未审批</Radio>\r\n                                                <Radio value=\"1\" >已审批</Radio>\r\n                                            </Radio.RadioGroup>\r\n                                    </FormItem>\r\n                                </Col>\r\n                            </Row>\r\n                        </Form>\r\n                    </div>\r\n                </AdvancedContainer>\r\n            </SearchPanel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 目前提供 HeadContainer(常驻区)、AdvancedContainer(收起区) 两部分示例","scss_code":".demo2 {\r\n    .u-label {\r\n        min-width: 80px;\r\n        white-space: nowrap;\r\n        text-align: right;\r\n    }\r\n    .u-checkbox-group,\r\n    .col {\r\n        display: inline-flex;\r\n    }\r\n    .u-form-item {\r\n        min-height: 42px;\r\n        .u-select {\r\n            min-width: 152px;\r\n        }\r\n        .u-form-control {\r\n            min-width: 152px;\r\n        }\r\n    }\r\n    .u-form-item,\r\n    .u-row>div {\r\n        padding: 0;\r\n    }\r\n    .u-search .u-panel {\r\n        padding-top: 0px;\r\n        padding-bottom: 0;\r\n        .u-panel-body{\r\n            padding-bottom: 0\r\n        }\r\n    }\r\n    .u-search-resident {\r\n        padding-bottom: 0px;\r\n        padding-top: 0px;\r\n    }\r\n    .demo-head {\r\n        box-sizing: border-box;\r\n    }\r\n    .demo-body {\r\n        margin: 0 -20px;\r\n    }\r\n}"},{"example":<Demo3 />,"title":" 提取所有输入信息","code":"/**\r\n *\r\n * @title 提取所有输入信息\r\n * @description 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】\r\n *\r\n */\r\nimport React, {Component} from 'react';\nimport { DatePicker } from 'tinper-bee';\r\nimport SearchPanel from \"tinper-bee/lib/src\";;\r\nimport { Form, Label,Checkbox,Switch,Button,\r\n     Radio, Select,  Col , Row , FormControl } from 'tinper-bee';\r\n\nimport moment from \"moment/moment\";\r\nconst FormItem = Form.FormItem;\r\nconst Option = Select.Option;\r\nconst { RangePicker } = DatePicker;\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\nconst HeadContainer = SearchPanel.HeadContainer;\r\nconst AdvancedContainer = SearchPanel.AdvancedContainer;\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            expanded: true,\r\n            orderTypes:[\r\n                {\r\n                    'code':'001',\r\n                    'name':'类型1'\r\n                },\r\n                {\r\n                    'code':'002',\r\n                    'name':'类型2'\r\n                },\r\n                {\r\n                    'code':'003',\r\n                    'name':'类型3'\r\n                },\r\n            ]\r\n        };\r\n    }\r\n    clear = () =>{\r\n        this.props.form.resetFields();\r\n    }\r\n    onChange = () => {\r\n        this.setState({expanded: !this.state.expanded})\r\n    }\r\n\r\n    search =()=>{\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log(err);\r\n            } else {\r\n                console.log('提交成功', values)\r\n            }\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        let self = this;\r\n        return (<div className=\"demo3\">\r\n            <SearchPanel\r\n                title='条件筛选'\r\n                onSearch={this.search}\r\n                onReset={this.clear}\r\n                expanded={this.state.expanded}\r\n                onChange={this.onChange}\r\n                onPanelChangeStart={status => {\r\n                    console.log(status, \"start\")\r\n                }}\r\n                onPanelChangeIng={status => {\r\n                    console.log(status, \"ing\")\r\n                }}\r\n                onPanelChangeEnd={status => {\r\n                    console.log(status, \"end\")\r\n                }}>\r\n                <HeadContainer>\r\n                    <div className='demo-head'>\r\n                        <Form>\r\n                            <Row>\r\n                                <Col xs={12} sm={6} md={4} lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>订单编号</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('orderCode', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>供应商名称</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('supplierName', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n                            </Row>\r\n                        </Form>\r\n                    </div>\r\n                </HeadContainer>\r\n            \r\n\r\n                <AdvancedContainer>\r\n                    <div className='demo-body'>\r\n                        <Form>\r\n                            <Row>\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>订单类型</Label>\r\n                                            <Select size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('type', {\r\n                                                    initialValue: '',\r\n                                                }\r\n                                                )}>\r\n                                                <Option value=\"\">请选择</Option>\r\n                                                {\r\n                                                    self.state.orderTypes.map((item, index) => {\r\n                                                        return (\r\n                                                            <Option key={index} value={item.code}>{item.name}</Option>\r\n                                                        )\r\n                                                    })\r\n                                                }\r\n                                            </Select>\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>采购组</Label>\r\n                                            <CheckboxGroup \r\n                                                    {\r\n                                                        ...getFieldProps('purchasingGroup',{\r\n                                                            initialValue:['2']\r\n                                                        })\r\n                                                    }\r\n                                                >\r\n                                                    <Checkbox value='1'>人力</Checkbox>\r\n                                                    <Checkbox value='2'>财务</Checkbox>\r\n                                            </CheckboxGroup>\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>审批</Label>\r\n                                            <Radio.RadioGroup\r\n                                                    {\r\n                                                    ...getFieldProps('approvalState', {\r\n                                                        initialValue: '1',\r\n                                                        valuePropName:\"selectedValue\"\r\n                                                    }\r\n                                                    )}\r\n                                                >\r\n                                                <Radio value=\"0\" >未审批</Radio>\r\n                                                <Radio value=\"1\" >已审批</Radio>\r\n                                            </Radio.RadioGroup>\r\n                                    </FormItem>\r\n                                </Col>\r\n                            </Row>\r\n                        </Form>\r\n                    </div>\r\n                </AdvancedContainer>\r\n            </SearchPanel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】","scss_code":".demo3 {\r\n    .u-label {\r\n        min-width: 80px;\r\n        white-space: nowrap;\r\n        text-align: right;\r\n    }\r\n    .u-checkbox-group,\r\n    .col {\r\n        display: inline-flex;\r\n    }\r\n    .u-form-item {\r\n        min-height: 42px;\r\n        .u-select {\r\n            min-width: 152px;\r\n        }\r\n        .u-form-control {\r\n            min-width: 152px;\r\n        }\r\n    }\r\n    .u-form-item,\r\n    .u-row>div {\r\n        padding: 0;\r\n    }\r\n    .u-search .u-panel {\r\n        padding-top: 0px;\r\n        padding-bottom: 0;\r\n        .u-panel-body{\r\n            padding-bottom: 0\r\n        }\r\n    }\r\n    .u-search-resident {\r\n        padding-bottom: 0px;\r\n        padding-top: 0px;\r\n    }\r\n    .demo-head {\r\n        box-sizing: border-box;\r\n    }\r\n    .demo-body {\r\n        margin: 0 -20px;\r\n    }\r\n}"},{"example":<Demo4 />,"title":" 多语示例","code":"/**\r\n *\r\n * @title 多语示例\r\n * @description 使用tinper-bee的locale组件或者传locale属性。此处为使用locale属性示例\r\n *\r\n */\r\nimport React, {Component} from 'react';\nimport {  } from 'tinper-bee';\r\nimport SearchPanel from \"tinper-bee/lib/src\";;\r\nimport {FormControl,Row, Col,Label,Form,Radio} from 'tinper-bee';\r\nlet HeadContainer = SearchPanel.HeadContainer;\r\nlet AdvancedContainer = SearchPanel.AdvancedContainer;\r\n\r\nconst FormItem = Form.FormItem;\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            expanded: true\r\n        }\r\n    }\r\n    search=()=>{\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log(err);\r\n            } else {\r\n                console.log('提交成功', values)\r\n            }\r\n        });\r\n    }\r\n    clear=()=>{\r\n        this.props.form.resetFields()\r\n    }\r\n    onChange = () => {\r\n        this.setState({expanded: !this.state.expanded})\r\n    }\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        let locale = {\r\n            'title': 'screening conditions',\r\n            'resetName': 'reset',\r\n            'searchName': 'submit',\r\n            'down':'open',\r\n            'up':'close',\r\n        }\r\n        return (<div className=\"demo1\">\r\n            <SearchPanel\r\n                locale={locale}\r\n                onSearch={this.search}\r\n                onReset={this.clear}\r\n                expanded={this.state.expanded}\r\n                onChange={this.onChange}\r\n                onPanelChangeStart={status => {\r\n                    console.log(status, \"start\")\r\n                }}\r\n                onPanelChangeIng={status => {\r\n                    console.log(status, \"ing\")\r\n                }}\r\n                onPanelChangeEnd={status => {\r\n                    console.log(status, \"end\")\r\n                }}>\r\n                <HeadContainer>\r\n                    <div className='demo-head'>\r\n                        <Form>\r\n                            <Row>\r\n                                <Col xs={12} sm={6} md={4} lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>名 称</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('name', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>电话</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('phone', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n                            </Row>\r\n                        </Form>\r\n                    </div>\r\n                </HeadContainer>\r\n                \r\n                <AdvancedContainer>\r\n                    <div className='demo-body'>\r\n                        <Form>\r\n                            <Row>\r\n\r\n                                <Col xs={12} sm={6} md={4} lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>联系人</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('people', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>供应商</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('supplier', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col> \r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>地址</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('address', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col> \r\n\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>车牌</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('carNumber', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>备注</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('remark', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                                <Col xs={12} sm={6} md={4}  lg={3}>\r\n                                    <FormItem>\r\n                                            <Label>编号</Label>\r\n                                            <FormControl size=\"sm\"\r\n                                                {\r\n                                                ...getFieldProps('id', {\r\n                                                    initialValue: '',\r\n                                                })\r\n                                                }\r\n                                            />\r\n                                    </FormItem>\r\n                                </Col>\r\n\r\n                            </Row>\r\n                        </Form>\r\n                    </div>                 \r\n                </AdvancedContainer>\r\n            </SearchPanel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 使用tinper-bee的locale组件或者传locale属性。此处为使用locale属性示例","scss_code":".demo4 {\r\n    .u-label {\r\n        min-width: 80px;\r\n        white-space: nowrap;\r\n        text-align: right;\r\n    }\r\n    .u-checkbox-group,\r\n    .col {\r\n        display: inline-flex;\r\n    }\r\n    .u-form-item {\r\n        min-height: 42px;\r\n        .u-select {\r\n            min-width: 152px;\r\n        }\r\n        .u-form-control {\r\n            min-width: 152px;\r\n        }\r\n    }\r\n    .u-form-item,\r\n    .u-row>div {\r\n        padding: 0;\r\n    }\r\n    .u-search .u-panel {\r\n        padding-top: 0px;\r\n        padding-bottom: 0;\r\n        .u-panel-body{\r\n            padding-bottom: 0\r\n        }\r\n    }\r\n    .u-search-resident {\r\n        padding-bottom: 0px;\r\n        padding-top: 0px;\r\n    }\r\n    .demo-head {\r\n        box-sizing: border-box;\r\n    }\r\n    .demo-body {\r\n        margin: 0 -20px;\r\n    }\r\n}"}]


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
