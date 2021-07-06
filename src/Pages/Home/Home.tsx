import "./Home.scss";
import React, {useState, useEffect} from "react";
import {connect, MapDispatchToPropsFunction} from "react-redux";
import {YStore} from "../../Type/TStore";

function Home(props: any) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(2);
  }, [])
  console.log(props,"props");

  return (
    <div className="modeHome">
      <header className="header">
        <p>
          {count}
        </p>
        <p onClick={() => setCount(count + 1)}>计数</p>
        <p onClick={props.setVal}>{props.val}132</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state: YStore) => {
  return {
    val: state.loading
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<any ,any> = (dispatch, prop) => {
  return {
    setVal: () => dispatch({type: "Load", val: "17"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
