import "./Home.less";
import React, {useState, useEffect} from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import {DatePicker} from "antd";
import YuPage from "../../Hook/Component/YuPage/YuPage";
import {linkTo, setTime} from "../../Hook/Method";
import {HomeProp} from "../../Type/Page/PHome";
import {Moment} from "moment";
import {YStore} from "../../Type/TStore";

const Home = (props: HomeProp) => {
// function Page(props: HomeProp) {
  console.log(props, "params");
  const [page, setPage] = useState<number>(5);
  const [date, setDate] = useState<Moment | null>(null);
  const changePage = (val: number) => setPage(val);

  const getTime = (date: any, val: string) => {
    if(val) setDate(setTime(val));
    else setDate(null);
    props.setVal(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    document.title = "主页";
  }, []);

  const toDetail = () => {
    linkTo(props, "Detail", true);
  };
  const toText = () => {
    props.history.push("/Text");
  };

  return (
    <div styleName="modeHome">
      <div className="yButton" onClick={toDetail}>详情</div>
      <div>{props.val}</div>
      <div className="yButton" onClick={toText}>其他</div>
      <DatePicker value={date} onChange={getTime} showToday={false} inputReadOnly={true}/>
      <YuPage page={page} changePage={changePage} pageTotal={20} total={100}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
