import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default class IconBox extends Component {
  
  back = ()=>{
		window.history.back()
	}
  render() {
    return (
     <Fragment>
          <div id="iconbox">
          <div id="left" onClick={this.back}>&#xe618;</div>
          <div id="border"></div>
          <Link to='/index'><div id="index" onClick={this.toIndex}>&#xe650;</div></Link>
        </div>
     </Fragment>
    )
  }
}
