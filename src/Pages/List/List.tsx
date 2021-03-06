import React from "react";
import {HashRouter, Redirect, RouterProps} from "react-router-dom";
import {CacheSwitch} from "react-router-cache-route";
import YuHead from "@/Hook/Component/YuHead/YuHead";
import childRoute from "@/Router/child";
import {linkTo} from "@/Hook/Method";
import cList from "./child";
import "./List.less";

const List = (props: RouterProps) => {
  const toCItem = (path: string) => {
    path = "List" + path;
    return () => linkTo(props, path, true);
  };
  return (
    <div styleName="modeList">
      <YuHead path="Index" title="组件"  history={props.history}/>
      <div styleName="main">
        <ul styleName="left" className="bgBlue">
          {
            cList.map(elem => (
              <li
                styleName="child"
                className="pointer"
                key={elem.path}
                onClick={toCItem(elem.path)}
              >{elem.name}</li>
            ))
          }
        </ul>
        <div styleName="right">
          <HashRouter>
            <CacheSwitch>
              {childRoute(cList, "/List")}
              <Redirect from="/List" to="/List/Date" />
            </CacheSwitch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
};

export default List;