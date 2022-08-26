import React, { Component } from 'react'
import SongList from '../../../compoent/SongList'
export default class Res extends Component {
  state={
    word:null,
  }
  componentDidMount(){
    const{value}=this.props.match.params
    this.setState({word:value})
  }
 
  render() {
    const{word} = this.state
    if(word==null){
      return(
        <div></div>
      )
    }
    return (
      <div>
        <SongList keyword={word}/>
      </div>
    )
  }
}
