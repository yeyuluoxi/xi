import {YTime} from "../Type/TBoth";
import moment from "moment";

export const dealTime: YTime = (
  date = "",
  format = "YYYY-MM-DD"
) => {

  return moment(date, format);
};

export default dealTime;