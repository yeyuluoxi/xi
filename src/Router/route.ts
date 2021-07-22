import Feature from "../Pages/Feature/Feature";
import List from "../Pages/List/List";
import Index from "../Pages/Index/Index";
import {YRoute} from "../Type/TRoute";

const routes: YRoute[] = [
  {
    path: "/Feature",
    name: "Feature",
    component: Feature,
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
    path: "/List",
    name: "List",
    component: List,
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
    path: "/Index",
    name: "Index",
    component: Index
  }
];

routes.forEach(elem => {
  if(!elem.when) elem.when = () => false;
});

export default routes;