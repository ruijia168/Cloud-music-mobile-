import React, { Component } from 'react'
import {  List } from 'antd';
import './index.css'
export default class Billboard extends Component {
 
  render(){
    const{tracks,coverImgUrl,coverImgId,updateFrequency,id} =this.props.data
    const sendId=()=>{
      window.location.href=`/listdetail/${id}`
    }
    const data = [
      `1.${tracks[0].first}-${tracks[0].second}`,
      `2.${tracks[1].first}-${tracks[1].second}`,
      `3.${tracks[2].first}-${tracks[2].second}`,
      ];
      const imgURL = coverImgUrl
    return (
      <div id='box' onClick={sendId}>
        <div id="imgbox">
            <img src={imgURL} alt="" />
            <div id="prompt">
              {
                updateFrequency
              }
            </div>
        </div>
        <div id="list">
        <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
         {item}
        </List.Item>
      )}
    />
        </div>
      </div>
    )
  }
}




