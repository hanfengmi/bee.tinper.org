/**
 *
 * @title 自定义大小的模态框
 * @description 通过width属性定义模态框大小
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';


class Demo5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({
            showModal: false
        });
    }
    open() {
        this.setState({
            showModal: true
        });
    }
    render () {
        return (
        <div>
            <Button
            colors = "primary"
            className="demo-margin"
            onClick={ ()=>{this.open()} }>
                打开自定义的模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            onHide = { this.close } 
            width = '400'>
                <Modal.Header closeButton>
                    <Modal.Title>这是题目</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    这是一些描述。。。
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={ this.close } colors="secondary" style={{marginRight: 8}}>关闭</Button>
                    <Button onClick={ this.close } colors="primary">确认</Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}

export default Demo5;
