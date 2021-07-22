import {YLink} from "@/Type/THook";

const linkTo: YLink = (props, name: string, alive = false, params?: Object) => {
  if(params){
    let url = sessionStorage.getItem("url") || "{}";
    let query = JSON.parse(url);
    query[name] = params;
    url = JSON.stringify(query);
    sessionStorage.setItem("url", url);
  }
  props.history.push({
    pathname: `/${name}`,
    state: {
      alive
    }
  });
};

export default linkTo;