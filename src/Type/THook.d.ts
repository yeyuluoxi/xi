import {RouterProps} from "react-router-dom";
import {Moment} from "moment";

export type YTime = (
  date?: string,
  format?: string
) => Moment

export type YLink = (
  props: RouterProps,
  name: string,
  alive?: boolean,
  params?: Object
) => void