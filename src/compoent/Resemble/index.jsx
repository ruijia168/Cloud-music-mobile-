import { Avatar, List } from 'antd';
import React, { Component } from 'react'
export default class index extends Component {

  render() {
    const msg = this.props.data
    const data = [
      {
        title: `${msg.name}`,
      },
     
    ];
    return (
      <div>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`${msg.album.blurPicUrl}`} style={{height:'7vh',width:'12vw'}}/>}
          title={<a href="#">{item.title}</a>}
          description={`${msg.artists[0].name} - ${msg.name}`}
        />
        <div className='icon-play'>&#xe624;</div>
      </List.Item>
    )}
  />
      </div>
    )
  }
}
