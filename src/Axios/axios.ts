import axios, {AxiosRequestConfig} from 'axios';
import {IAxiosMethod, IParams} from "../Type/YAxios";
import qs from "qs";



const httpAxios: IAxiosMethod = async(
  method,
  url,
  loading,
  cancel,
  params,
  config) => {
  //若存在同样的请求,则先取消
  // if(cancel && state.axiosRequest.status){
  //   state.axiosRequest.source?.cancel("取消");
  // }

  if (loading) {
    //做加载动画处理
  }

  const uid: string =  "";

  if (params instanceof FormData) {
    params.append("uid", uid);
  } else {
    params = params || {};
    params.uid = uid;
    Object.keys(params).forEach(elem => {
      if (typeof (<IParams>params)[elem as keyof typeof params] === "object") {
        (<IParams>params)[elem as keyof typeof params] = JSON.stringify((params as IParams)[elem as keyof typeof params]);
      }
    })
  }
  let data: string | IParams | FormData;
  if (params instanceof FormData) {
    data = params;
    config = config || {"Content-Type":  "multipart/form-data"};
  } else if (method === "POST") {
    data = qs.stringify(params);
  } else {
    data = params;
  }
  let baseURL = process.env.VUE_APP_URL || "";
  // let baseURL = process.env.VUE_APP_URL1 || "";

  let httpDefault: AxiosRequestConfig = {
    method,
    baseURL,
    url,
    headers: config,
    params: method === "GET" ? <IParams>data : null,
    data: method === "POST" ? <string|FormData>data : null,
    timeout: 120000
  };

  if(cancel){
    const token = axios.CancelToken;
    const source = token.source();
    httpDefault.cancelToken = source.token;
  }

  return new Promise((resolve, reject) => {
    axios(httpDefault).then(result => {
      if(result.data.code === 200){
        resolve(result.data);
        return ;
      }
      reject(result.data);
    }).catch((err) => {

      if(axios.isCancel(err)){
        // console.log(err, "cancel,success");
      }
      reject(err);
    })
  })
}

export default httpAxios;
