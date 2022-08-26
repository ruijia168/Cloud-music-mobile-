import React, { Component } from 'react'
import HotSearchList from '../../../compoent/HotSearchList'
import httpUtils from '../../../utils/httpUtils'
import './index.css'
export default class Home extends Component {
  state={
    dataArr: null,
  }
  componentDidMount(){
    httpUtils.hotList().then((res)=>{
      let newArr = res.data
      this.setState({dataArr:newArr})
    })
  }
  render() {
    const{dataArr} = this.state
    if(dataArr==null){
      return (
        <div>
          {/* <div id="title">搜索</div>
          <IconBox/>
          <div id="searchBox">
          <SearchInput></SearchInput>
          </div> */}
        </div>
      )
    }
    return (
      <div>
        <div id="header">
            热搜榜
        </div>
        <div id="hotSearchBox">
        {
          dataArr.map((obj,index)=>{
            return (
              <HotSearchList data={obj} key={obj.score} index={index}/>
            )
          })
        }
        </div>
      </div>
    )
  }
}
