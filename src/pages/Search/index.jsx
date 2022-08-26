import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import SearchInput from '../../compoent/SearchInput'
import IconBox from '../../compoent/Iconbox'
import Home from '../Search/home'
import Res from '../Search/Res'
import './index.css'
export default class Search extends Component {
  render() {
      return (
        <div id='wrap'>
          <div id="title">搜索</div>
          <IconBox/>
          <div id="searchBox">
          <SearchInput></SearchInput>
          </div>
          <Switch>
                    <Route path='/search/home' component={Home}></Route>
                    <Route path='/search/res/:value' component={Res}></Route>
                    <Redirect path='/search' to='/search/home'></Redirect>
          </Switch>
        </div>
      )
   
  }
}
