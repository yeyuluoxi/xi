import React from 'react';
// import {BrowserRouter, Redirect} from 'react-router-dom';
import {HashRouter, Redirect} from 'react-router-dom';
import {CacheSwitch} from "react-router-cache-route";
import routes from "./route";
import {connect} from "react-redux";
import childRoute from "./child";
import {YStore} from "@/Type/TStore";

import {Spin} from "antd";

const Router = ({loading}: {loading: boolean}) =>{
  document.title = "落";
  return (
    <Spin tip="loading" size="large" spinning={loading}>
      {/*<BrowserRouter>*/}
      {/*  <CacheSwitch>*/}
      {/*    {childRoute(routes)}*/}
      {/*    <Redirect from="/" to="/Page" />*/}
      {/*  </CacheSwitch>*/}
      {/*</BrowserRouter>*/}
      <HashRouter>
        <CacheSwitch>
          {childRoute(routes)}
          <Redirect from="/" to="/Index" />
        </CacheSwitch>
      </HashRouter>
    </Spin>
  );
};

const mapStateToProps = (state: YStore) => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Router);