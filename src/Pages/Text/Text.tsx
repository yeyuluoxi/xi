import React from "react";
import "./Text.scss"
import {RouterProps} from "react-router-dom";

interface TextState{
  text: string
}

export default class Text extends React.Component<RouterProps, TextState>{
  constructor(props: RouterProps) {
    console.log(props, "params");
    super(props);
    this.state = {
      text: "text"
    }
  }

  linkTo() {
    this.props.history.push("/Home", {
      text: "text"
    })
  }

  render() {
    return (
      <div className="modeText">
        <div>Text</div>
        <div
          className="link"
          onClick={() => this.linkTo()}
        >
          详情
        </div>
      </div>
    );
  }
}