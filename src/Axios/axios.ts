import axios, {AxiosRequestConfig} from 'axios';
import qs from "qs";
import store from "@/Store";
import {AxiosGet, AxiosPost, IAxiosMethod, YObject} from "@/Type/TAxios";

const uid: string = localStorage.getItem("uid") || "";

const httpAxios: IAxiosMethod = async(
  option,
  loading,
  cancel
) => {
  if(cancel && store.getState().axiosRequest.status){// 若存在同样的请求,则先取消
    store.getState().axiosRequest.source?.cancel("取消");
  }
  if (loading) {// 做加载动画处理
    store.dispatch({type: "Load", load: true});
  }
  option.baseURL = process.env.REACT_APP_LINE || "";
  if(cancel){
    const token = axios.CancelToken;
    const source = token.source();
    option.cancelToken = source.token;
    store.dispatch({type: "axios", source});
  }
  return new Promise((resolve, reject) => {
    axios(option).then(result => {
      store.dispatch({type: "Load", load: false});  // 取消动画
      if(result.data.code === 200){
        resolve(result.data);
        return;
      }
      reject(result.data);
    }).catch((err) => {
      store.dispatch({type: "Load", load: false});  // 取消动画
      if(axios.isCancel(err)){
        // console.log(err, "cancel,success");
      }
      reject(err);
    });
  });
};

const dealParams = (params?: YObject) => {
  params = params || {};
  params.uid = uid;
  Object.keys(params).forEach(elem => {
    if (typeof (params as YObject)[elem] === "object") {
      (params as YObject)[elem] = JSON.stringify((params as YObject)[elem]);
    }
  });
  return params;
};

export const getAxios: AxiosGet = (
  url,
  params,
  status,
  config
) => {
  params = dealParams(params);
  const option: AxiosRequestConfig = {
    method: "GET",
    url,
    headers: config,
    params: params,
    timeout: 120000
  };
  const [loading = false, cancel = false] = status || [];
  return httpAxios(option, loading, cancel);
};

export const postAxios: AxiosPost = (
  url,
  params,
  status,
  config
) => {
  if(params instanceof FormData){
    params.append("uid", uid);
    config = config || {"Content-Type": "multipart/form-data"};
  }else{
    params = dealParams(params);
  }
  const option: AxiosRequestConfig = {
    method: "POST",
    url,
    headers: config,
    data: params instanceof FormData ? params : qs.stringify(params),
    timeout: 120000
  };
  const [loading = false, cancel = false] = status || [];
  return httpAxios(option, loading, cancel);
};
