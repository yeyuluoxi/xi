import React from "react";
import "./Text.less";
import {RouterProps} from "react-router-dom";

const Text = (props: RouterProps) => {

  const linkTo = () => {
    props.history.push("/Home", {
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