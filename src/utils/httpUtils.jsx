import { httpReq } from './httpReq'

class HttpUtil {
  // 获取首页榜单内容
  billboard = (params) => httpReq('get', '/toplist/detail', params)
  //获取热搜榜
  hotList =()=>httpReq('get','/search/hot/detail')
  //获取搜索结果
  searchRes=(word)=>httpReq('get',`/search?keywords=${word}`)
  //获取歌单详情
  detailList=(id)=>httpReq('get',`/playlist/detail?id=${id}`)
  
  //获取相似音乐
  resemble=(id)=>httpReq('get',`/simi/song?id=${id}`)
  //获取某首音乐评论
  getcomment=(id)=>httpReq('get',`/comment/hot?id=${id}&type=0&limit=3`)
  //歌曲详情
  detailSong=(id)=>httpReq('get',`/song/url?id=${id}`)
  //获取歌词
  getlyric=(id)=>httpReq('get',`/lyric?id=${id}`)
}

export default new HttpUtil()
