import {YRoute} from "@/Type/TRoute";
import Date from "../Date/Date";
import Page from "../Page/Page";
import Slider from "../Slider/Slider";

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
  },
  {
    path: "/Slider",
    name: "Slider",
    component: Slider
  }
];

cList.forEach(elem => {
  if(!elem.when) elem.when = () => false;
});

export default cList;