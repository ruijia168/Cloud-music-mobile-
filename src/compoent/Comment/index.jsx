
import React, { Component } from 'react'
import { Divider } from 'antd';
import './index.css'
export default class index extends Component {
  render() {
    const{data}=this.props
    return (
     <div id='comment-wrap'>
            <div id="comment-header">
                <div id="head">
                    <div id="img">
                        <img src={`${data.user.avatarUrl}`} alt="" />
                    </div>
                    <div id="msg">
                        <div id="name">{data.user.nickname}</div>
                        <div id="time">{data.timeStr}</div>
                    </div>
                </div>
                <div id="good">{`${data.likedCount}`}&#xe600;</div>
            </div>
            <div id="comment-content">{data.content}</div>
            <div id="border"></div>
     </div>
    )
  }
}
