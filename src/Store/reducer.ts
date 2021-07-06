import {Action, Reducer} from 'redux'
import {YStore} from "../Type/TStore";
import initState from "./index";

interface YAct extends Action{
  val?: string
}

const reducer: Reducer<YStore, YAct> = (state = initState, action) => {
  switch (action.type) {
    case "Home":
      return {
        ...state,
        val: action.val || ""
      }
    case "Load":
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default reducer