import React from "react";
import {RouterProps} from "react-router-dom";

const Detail = (props: RouterProps) => {
  const toHome = () => {
    props.history.push("/Home");
  };
  return (
    <div className="modeDetail">
      <div className="yButton" onClick={toHome}>列表</div>
    </div>
  );
};

export default Detail;