import {Action, Reducer} from 'redux'
import {YStore} from "../Type/TStore";
import {CancelTokenSource} from "axios";

interface YAct extends Action{
  val?: string,
  load?: boolean,
  source?: CancelTokenSource
}

const initState: YStore = {
  val: "123",
  loading: false,
  axiosRequest: {
    status: false,
    source: null
  }
}

const reducer: Reducer<YStore, YAct> = (state = initState, action) => {
  switch (action.type) {
    case "Home":
      return {
        ...state,
        val: action.val || ""
      }
    case "Load":  //全局加载动画
      return {
        ...state,
        loading: action.load || false
      }
    case "axios":
      const source = action.source || null;
      return {
        ...state,
        axiosRequest: {
          status: source != null,
          source
        }
      }
    default:
      return state;
  }
}

export default reducer