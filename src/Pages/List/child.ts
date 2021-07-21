import {YRoute} from "../../Type/TRoute";
import Date from "../../Pages/Date/Date";
import Page from "../Page/Page";

const cList: YRoute[] = [
  {
    path: "/Page",
    name: "Page",
    component: Page
  },
  {
    path: "/Date",
    name: "Date",
    component: Date
  }
];

cList.forEach(elem => {
  if(!elem.when) elem.when = () => false;
});

export default cList;