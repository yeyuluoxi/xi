import {YRoute} from "../../Type/TRoute";
import Date from "../../Pages/Date/Date";
import Paging from "../../Hook/Component/Paging/Paging";

const cList: YRoute[] = [
  {
    path: "/Page",
    name: "Paging",
    component: Paging
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