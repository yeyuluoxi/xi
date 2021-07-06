import {Method} from "axios";

export interface IObject {
  [key: string]: any
}
export interface IParams extends IObject{
  uid?: string,
  page?: number
}
export interface ISendForm{
  method: Method,
  url: string,
  loading: boolean,
  cancel: boolean,
  params?: IParams | FormData,
  config?: object
}
export interface IResult<T> {
  code: number;
  msg: string;
  data: T;
}
export type IAxiosMethod =
  <T = any>(
    method: Method,
    url: string,
    loading: boolean,
    cancel: boolean,
    params?: IParams | FormData,
    config?: IObject
  ) => Promise<IResult<T>>;