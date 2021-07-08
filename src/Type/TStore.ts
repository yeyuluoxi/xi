import {CancelTokenSource} from "axios";

export interface YStore{
  val: string,
  loading: boolean,
  axiosRequest: {
    status: boolean,
    source: CancelTokenSource | null
  }
}