import {AxiosRequestConfig, Method} from "axios";
import {OString} from "./TBase";

export interface IObject {
  [key: string]: any
}

export interface YObject {
  [key: string]: string | number | any[] | IObject
}

export interface ISendForm {
  method: Method,
  url: string,
  loading: boolean,
  cancel: boolean,
  params?: YObject | FormData,
  config?: object
}

export interface IResult<T> {
  code: number;
  msg: string;
  data: T;
}

export type IAxiosMethod =
  <T = any>(
    option: AxiosRequestConfig,
    loading: boolean,
    cancel: boolean
  ) => Promise<IResult<T>>;

export type AxiosGet =
  <T = any>(
    url: string,
    params?: YObject,
    status?: boolean[],
    config?: IObject
  ) => Promise<IResult<T>>

export type AxiosPost =
  <T = any>(
    url: string,
    params?: YObject | FormData,
    status?: boolean[],
    config?: IObject
  ) => Promise<IResult<T>>

export interface TUrl {
  HomeUrl: OString
}

export interface TReq {
  [key: string]: <T = any>(params: YObject, status?: boolean[], config?: IObject) => Promise<IResult<T>>
}

const AxiosType = {
  AxiosGet,
  AxiosPost
};

export default AxiosType;