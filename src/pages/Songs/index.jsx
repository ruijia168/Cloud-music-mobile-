import React, { Component } from 'react'
import Resemble from '../../compoent/Resemble'
import Iconbox from '../../compoent/Iconbox'
import httpUtils from '../../utils/httpUtils'
import Comment from '../../compoent/Comment'
import './index.css'
export default class index extends Component {
    state={
        resemble:null,
        id:null,
        song:null,
        comment:null,
        mp3:null,
        lyric:null
    }
    componentDidMount(){
        // console.log(this.props.match.params);
        const{id}=this.props.match.params
        this.setState({id:id})
        // httpUtils.detailSong(id).then((res)=>{
        //     // console.log(res);
        // })
       //歌词
       httpUtils.getlyric(id).then((res)=>{
        const{lyric}=res.lrc
        const newLyric = lyric.replace(/\[.*?\]/g, ``)
       this.setState({lyric:newLyric})
       })
        
      //获取音源
      httpUtils.detailSong(id).then((res)=>{
        this.setState({mp3:res.data[0].url})
      })
      //获取评论
      httpUtils.getcomment(id).then((res)=>{
        this.setState({comment:res.hotComments})
      })
      //获取相似歌曲
      httpUtils.resemble(id).then((res)=>{
       this.setState({resemble:res.songs})
      })
    }
  render() {
    const{id,resemble,comment,lyric}=this.state
    // console.log(id);
    if(id==null||resemble==null){
      return(
        <div></div>
      )
    }
    // console.log(this.props.match.params);
    // const wrapStyle={
    //   bgd:{
    //     backgroundImage: `url(${this.props.picUrl})`,
    // }}
    return (
      <div id='wrap' className='songs-wrap'>
        <div id="IconBox"><Iconbox></Iconbox></div>
      <div className="play-plate">
      <div className="lyric">
        <pre>{lyric}</pre></div>
      <audio src={this.state.mp3} controls></audio>
      </div>
       <div className="ResembleBox">
        <h1>喜欢这首歌的人也听</h1>
       {
        resemble.map((obj,index)=>{
          return(
            <Resemble data={obj} index={index} key={obj.duration}></Resemble>
          )
        })
       }
       </div>
       <div className="commentBox">
        <h1>精彩评论</h1>
        {
          comment.map((obj,index)=>{
            return(
              <Comment data={obj} key={index}></Comment>
            )
          })
        }
       </div>
      </div>
    )
  }
}
