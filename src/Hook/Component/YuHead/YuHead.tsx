import React from "react";
import {YHeadProps} from "@/Type/THook";
import {linkTo} from "@/Hook/Method/index";
import "./YuHead.less";

const YuHead = (props: YHeadProps) => {
  const turnBack = () => {
    linkTo(props, props.path);
  };
  return (
    <div styleName="modeHead">
      <div className="yButton" onClick={turnBack}>返回</div>
      <div styleName="title">{props.title}</div>
    </div>
  );
};

export default YuHead;