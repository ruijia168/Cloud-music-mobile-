import axios from 'axios'
//获取榜单信息
const instance = axios.create({
    baseURL: 'http://121.40.19.111:3000',
  });
  // 添加返回拦截器，直接获取返回内容的data
instance.interceptors.response.use((res) => {
    return res.data
})

export const httpReq = (method, url, data, resType) => {
    return new Promise((resolve, reject) => {
      instance({
        method: method,
        url: url,
        data: data,
        responseType: resType,
      }).then(
        (data) => {
          resolve(data)
        },(err)=>{
           console.log(err);
        }
      )
    })
  }