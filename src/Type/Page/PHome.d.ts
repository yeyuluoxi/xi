import {RouterProps} from "react-router-dom";

export interface HomeProp extends RouterProps{
  val: number,
  setVal: Function
}
