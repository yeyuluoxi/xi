import moment from "moment";
import {YTime} from "../Type/THook";

export const dealTime: YTime = (
  date = "",
  format = "YYYY-MM-DD"
) => {

  return moment(date, format);
};

export default dealTime;