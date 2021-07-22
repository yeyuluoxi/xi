import React from "react";
import {RouterProps} from "react-router-dom";
import "./Text.less";

const Text = (props: RouterProps) => {

  const linkTo = () => {
    props.history.push("/Page", {
      text: "text"
    });
  };

  return (
    <div className="modeText">
      <div>Text</div>
      <div
        className="link"
        onClick={linkTo}
      >
        详情(Text)
      </div>
    </div>
  );
};

export default Text;