import {RouterProps} from "react-router-dom";

export interface  OString{
  [key: string]: string
}

export interface TProp<T = {}> extends RouterProps{
  [key: keyof T]: T[key]
}