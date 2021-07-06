import Text from "../Pages/Text/Text";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";

interface YRoute{
  path: string,
  name: string,
  component: any,
  children?: YRoute[]
}

const routes: YRoute[] = [
  {
    path: "/Text",
    name: "Text",
    component: Text
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail
  }
]

export default routes;