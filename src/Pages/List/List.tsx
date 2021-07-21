import React from "react";
import {HashRouter, Redirect, RouterProps} from "react-router-dom";
import YuHead from "../../Hook/Component/YuHead/YuHead";
import cList from "./child";
import childRoute from "../../Router/child";
import {CacheSwitch} from "react-router-cache-route";
import "./List.less";

const List = (props: RouterProps) => {
  return (
    <div styleName="modeList">
      <YuHead path="Index" title="组件"  history={props.history}/>
      <div styleName="main">
        <ul styleName="left" className="bgBlue">
          {
            cList.map(elem => (
              <li styleName="child" className="pointer" key={elem.path}>{elem.name}</li>
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