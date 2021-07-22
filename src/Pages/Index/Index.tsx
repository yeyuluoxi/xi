import React from "react";
import {RouterProps} from "react-router-dom";
import {UIndexItem} from "@/Type/Page/PIndex";
import {linkTo} from "@/Hook/Method/index";
import "./Index.less";

const Index = (props: RouterProps) => {
  const list: UIndexItem[] = [
    {name: "功能", path: "Feature", color: "#9ad562"},
    {name: "组件", path: "List", color: "#132456"}
  ];
  const toPage = (path: string) => {
    return () => linkTo(props, path, true);
  };
  return (
    <div styleName="modeIndex">
      <div styleName="list">
        {list.map(elem => (
          <div
            styleName="item"
            className="bBlue"
            style={{background: elem.color}}
            onClick={toPage(elem.path)}
            key={elem.path}
          >{elem.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Index;