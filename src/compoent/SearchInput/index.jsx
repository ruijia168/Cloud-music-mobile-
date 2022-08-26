import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import { Link } from 'react-router-dom'
import {message} from 'antd'
import httpUtils from '../../utils/httpUtils'
import './index.css'
export default class SearchInput extends Component {
  // //点击搜索
  // Sendvalue=()=>{
  //   const {value} = this.word
  //   httpUtils.searchRes(value).then((res)=>{
  //    const {songs} = res.result
  //    PubSub.publish('songs',songs)
    
  //   },(err)=>{
  //     console.log(err);
  //   })
  // }
  //点击回车
  handleKeyUp = (e)=>{
    //结构赋值获取key,target
   const{key,target}=e
   //判断是否是回车按键
   if(key !== 'Enter')
   //准备好一个todo对象
   return
   //添加的todo名字不能为空
   if(target.value.trim() === ''){
    message.error('输入不能为空')
    return
   }
   const {value} = this.word
    if(window.location.href !== 'http://localhost:3000/search/res'){
    window.location.href = `/search/res/${value}`
   }
   
   
  }
  render() {
    return (
      <div id='InputBox'>
            <input ref={c=>this.word =c} type="text" placeholder='搜索歌曲' onKeyUp={this.handleKeyUp}/>
            <div className="iconSearch">&#xe601;</div>
      </div>
    )
  }
}
