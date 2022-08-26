import React, { Component } from 'react'
import { List } from 'antd';
import './index.css'
export default class HotSearchList extends Component {
 
  render() {
    const{data} = this.props
    const msg = [
        {
          title: `${data.searchWord}`,
        },
      ];
    return (
      <div id='hotListBox'>
      
         <List
    itemLayout="horizontal"
    dataSource={msg}
    renderItem={(item) => (
      <List.Item>
        <div id="hotIcon"><i>&#xeca8;</i></div>
        <div id="head"><div className="status">{this.props.index+1}</div></div>
        <List.Item.Meta
          title={<a href="#">{item.title}</a>}
          description={data.content}
        />
        <div style={{color:'rgba(0, 0, 0, 0.45)'}}>{data.score}</div>
      </List.Item>
    )}
  />
      </div>
    )
  }
}


