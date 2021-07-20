import {RouterProps} from "react-router-dom";
import {Moment} from "moment";

export type YSetTime = (
  date?: string,
  format?: string
) => Moment

export type YGetTime = (
  time: Moment | null,
  format?: string
) => string

export type YLink = (
  props: RouterProps,
  name: string,
  alive?: boolean,
  params?: Object
) => void

export interface DateProps{
  year?: number, //  年
  month?: number,  //  月
  day?: number,  //  日
  gDate?: Function,
  date: string
}

export interface YDateItem{
  type: "before" | "after" | "now",
  day: number
}
export type YDateList = (
  year: number,
  month: number
) => YDateItem[]