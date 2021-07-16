import {getAxios} from "./axios";
import URL from "./url";
import {TReq, YObject} from "../Type/TAxios";


const HomeReq: TReq = {
  getList: (params: YObject, status?: boolean[]) => getAxios(URL.HomeUrl.getList, params, status)
};

const Request = {
  HomeReq
};
export default Request;