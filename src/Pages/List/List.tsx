import React from "react";
import {RouterProps} from "react-router-dom";

function List(props: RouterProps) {
  console.log(props, "params");
  const toHome = () => {
    props.history.push("/Home");
  }
  return (
    <div className="modeDetail">
      <div className="yButton" onClick={toHome}>列表</div>
    </div>
  );
}

export default List;