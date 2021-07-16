import {RouterProps} from "react-router-dom";

export type YLink = (
  props: RouterProps,
  name: string,
  alive?: boolean,
  params?: Object
) => void