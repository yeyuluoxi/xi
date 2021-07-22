import "./Feature.less";
import React from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import {linkTo} from "@/Hook/Method";
import {HomeProp} from "@/Type/Page/PHome";
import {YStore} from "@/Type/TStore";
import YuHead from "@/Hook/Component/YuHead/YuHead";

const Feature = (props: HomeProp) => {
  const setVal = () => {
    props.setVal(Math.floor(Math.random() * 100));
  };
  const toDetail = () => {
    linkTo(props, "Detail", true);
  };
  return (
    <div styleName="modeHome">
      <YuHead path="Index" title="功能"  history={props.history}/>
      <div className="yButton" onClick={setVal}>更改数字</div>
      <div styleName="number">{props.val}</div>
      <br/>
      <br/>
      <div className="yButton" onClick={toDetail}>详情页</div>
    </div>
  );
};

const mapStateToProps = (state: YStore) => {
  return {
    val: state.val
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<any ,any> = (dispatch) => {
  return {
    setVal: (val: number) => dispatch({type: "Page", val})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
