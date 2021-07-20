import Text from "../Pages/Text/Text";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";
import List from "../Pages/List/List";
import Date from "../Pages/Date/Date";
import {YRoute} from "../Type/TRoute";

const routes: YRoute[] = [
  {
    path: "/Text",
    name: "Text",
    component: Text
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: true,
    when: (props) => {
      const status = props.location;
      if(status && status.state){
        return Boolean((status.state as any).alive);
      }
      return false;
    }
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/List",
    name: "List",
    component: List
  },
  {
    path: "/Date",
    name: "Date",
    component: Date
  }
];

routes.forEach(elem => {
  if(!elem.when) elem.when = () => false;
});

export default routes;