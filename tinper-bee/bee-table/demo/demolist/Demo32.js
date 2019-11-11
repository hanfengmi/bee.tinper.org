/**
* @title 多功能表格
* @description  根据列进行过滤、拖拽交换列综合使用案例
*/

import React, { Component } from 'react';
import {Icon,Checkbox,Popover} from "tinper-bee";

import Table from '../../src';
import multiSelect from '../../src/lib/multiSelect';
import filterColumn from '../../src/lib/filterColumn';
import dragColumn from "../../src/lib/dragColumn";
import sum from '../../src/lib/sum';

 //Cloumns1
function getCloumns(){
  const column = [
      {
          title: "序号",
          dataIndex: "index",
          key: "index",
          width: 100, 
      },
      {
          title: "订单编号",
          dataIndex: "orderCode",
          key: "orderCode",
          width: 100, 
      },
      {
          title: "供应商名称",
          dataIndex: "supplierName",
          key: "supplierName",
          width: 100
      },
      {
          title: "类型",
          dataIndex: "type_name",
          key: "type_name",
          width: 100
      },
      {
          title: "采购组织",
          dataIndex: "purchasing",
          key: "purchasing",
          width: 100
      },
      {
          title: "采购组",
          dataIndex: "purchasingGroup",
          key: "purchasingGroup",
           width: 300
      },
      {
          title: "凭证日期",
          dataIndex: "voucherDate",
          key: "voucherDate",
          width: 100,
          
      },
      {
          title: "审批状态",
          dataIndex: "approvalState_name",
          key: "approvalState_name",
          width: 100
      },
      {
          title: "确认状态",
          dataIndex: "confirmState_name",
          key: "confirmState_name",
           width: 100
      }, 
      {
          title: "关闭状态",
          dataIndex: "closeState_name",
          key: "closeState_name",
          width: 100
      },
      {
          title: "操作",
          dataIndex: "d",
          key: "d",
          width:100,
          fixed: "right",
          render(text, record, index) {
              return (
                  <div className='operation-btn'>
                    <a href="#"
                      tooltip={text}
                      onClick={() => {
                        alert('这是第'+index+'列，内容为:'+text);
                      }}
                    >
                      一些操作
                    </a>
                  </div>
              )
          }
      }
  ];
  return column;
}

const dataList = [ 
  { 
      index: 1, 
      orderCode:"2343", 
      supplierName: "xxx",
      type_name: "123",
      purchasing:'内行', 
      purchasingGroup:"323",
      voucherDate:"kkkk",
      approvalState_name:"vvvv",
      confirmState_name:"aaaa",
      closeState_name:"vnnnnn",
      d:"操作",
      key: "1"
  }, 
  { 
    index: 2, 
    _checked:true,
    orderCode:"222", 
    supplierName: "22xxx",
    type_name: "1223",
    purchasing:'内行2', 
    purchasingGroup:"3223",
    voucherDate:"222kk",
    approvalState_name:"22vvvv",
    confirmState_name:"2aaaa",
    closeState_name:"2vnnnnn",
    d:"2操作",
    key: "2"
  },
  { 
    index: 3, 
    orderCode:"222", 
    supplierName: "22xxx",
    _disabled:true,
    type_name: "1223",
    purchasing:'内行2', 
    purchasingGroup:"3223",
    voucherDate:"222kk",
    approvalState_name:"22vvvv",
    confirmState_name:"2aaaa",
    closeState_name:"2vnnnnn",
    d:"3操作",
    key: "3"
  },
  { 
    index: 4, 
    orderCode:"222", 
    supplierName: "22xxx",
    type_name: "1223",
    purchasing:'内行2', 
    purchasingGroup:"3223",
    voucherDate:"222kk",
    approvalState_name:"22vvvv",
    confirmState_name:"2aaaa",
    closeState_name:"2vnnnnn",
    d:"4操作",
    key: "4"
  },
]

const DragColumnTable = filterColumn(dragColumn(multiSelect(Table, Checkbox)),Popover);

const defaultProps25 = {
  prefixCls: "bee-table"
};

class Demo25 extends Component {
  constructor(props) {
    super(props);
  }

  getSelectedDataFunc=(data)=>{
      console.log("data",data);
  }
 
  getCloumnsScroll=(columns)=>{
    let sum = 0;
    columns.forEach((da)=>{
        sum += da.width;
    })
    console.log("sum",sum);
    return (sum);
  }

  selectedRow=(record, index)=>{

  }

  render() {
    let columns = getCloumns();
    
    return <div className="demo25">
            <DragColumnTable 
                columns={columns}
                data={dataList} 
                getSelectedDataFunc={this.getSelectedDataFunc}
                
                checkMinSize={7}
                draggable={true}
                multiSelect={{type: "checkbox"}}
                scroll={{x:true, y: 100}}
                selectedRow={this.selectedRow}
                // scroll={{x:this.getCloumnsScroll(columns), y: 150}}
                />
            </div>
  }
}
Demo25.defaultProps = defaultProps25;


export default Demo25;