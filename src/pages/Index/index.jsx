import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../../compoent/SearchInput'
import httpUtils from '../../utils/httpUtils'
import Billboard from '../../compoent/Billboard'
import 'antd/dist/antd.css'
import './index.css'
export default class index extends Component {
  state={
    dataArr:null,
  }
  componentDidMount(){
    httpUtils.billboard().then((res)=>{
      let newArr = res.list.slice(0,4)
      newArr=Array.from(newArr)
      this.setState({dataArr:newArr}) 
    },(err)=>{
      console.log(err);
    })
  }
  // Tosearch=()=>{
  //   setTimeout(() => {
  //     window.location='/search'
  //   }, 0);
  // }
 
  render() {
    const {dataArr}= this.state
    if(dataArr==null){
      return (
        <div id='wrap'>
          <div id="title">
            网易云音乐
          </div>
          <div id="search">
              <SearchInput></SearchInput>
          </div>
          <div id="mainBody">
          </div>
      </div>
      )
    }
    return (
      <div id='wrap'>
          <div id="title">
            网易云音乐
          </div>
          <Link to='/search'>
          <div id="search" >
              <SearchInput></SearchInput>
          </div>
          </Link>
        
          <div id="mainBody">
          <Billboard data={dataArr[0]}/>
          <Billboard data={dataArr[1]}/>
          <Billboard data={dataArr[2]}/>
          <Billboard data={dataArr[3]}/>
          </div>
      </div>
    )
  }
}
