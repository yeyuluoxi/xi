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

//  YuDate
export interface DateProps{
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

//  YuHead
export interface YHeadProps extends RouterProps{
  title: string,
  path: string
}