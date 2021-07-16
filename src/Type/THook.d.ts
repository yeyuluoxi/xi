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