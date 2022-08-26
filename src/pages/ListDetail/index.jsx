import React, { Component } from 'react'
import IconBox from '../../compoent/Iconbox'
import httpUtils from '../../utils/httpUtils'
import ListContent from '../../compoent/ListContent'
import './index.css'
export default class index extends Component {
  state={
    topData:null
  }
  componentDidMount(){
    const{id} =this.props.match.params
    httpUtils.detailList(id).then((res)=>{
      const {playlist} =res
      this.setState({topData:playlist})
    },(err)=>{
      console.log(err);
    })
  }
  render() {
    const{topData}=this.state
    if(topData==null){
      return <div></div>
    }
    // console.log(topData);
    const cover = topData.coverImgUrl
    const lilword = topData.description
    const playcount =topData.playCount
    const trackCount = `(共${topData.trackCount}首)`
    const wrapStyle={
      bgd:{
        backgroundImage: `url(${cover})`,
    }

    }
    return (
      <div id='wrap' className='wrap' style={wrapStyle.bgd}>
          <div id="song-title">
              <div id='title'>歌单</div>
                <IconBox></IconBox>
            </div>
        <div id="list-top">
            <div id="imgBox">
              <div className="img">
                <img src={cover} alt="" />
                <div className="playCount">&#xe62b;{playcount}</div>
              </div>
              <div className="description">
                <h2 style={{color:'white'}}>飙升榜</h2>
                <div className="icon-cloud">&#xe62c;</div>
                <div className="lilword">{lilword}</div>
              </div>
            </div>
            <div id="share">
              <span id='icon-span'>&#xe602;&nbsp;分享给微信好友</span>
            </div>
        </div>
        <div id="bottom-list">
          <div className="introduce">
            <span className="icon-playall">&#xe624; 播放全部</span>
            <span className='allNum'>{trackCount}</span>
          </div>
          <ListContent id={this.props.match.params.id}></ListContent>
        </div>
      </div>
    )
  }
}
