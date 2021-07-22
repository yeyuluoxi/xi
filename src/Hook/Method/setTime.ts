import moment from "moment";
import {YSetTime} from "@/Type/THook";

export const setTime: YSetTime = (
  date = "",
  format = "YYYY-MM-DD"
) => {

  return moment(date, format);
};

export default setTime;