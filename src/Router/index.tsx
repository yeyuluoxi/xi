import React from 'react';
// import {BrowserRouter, Redirect} from 'react-router-dom';
import {HashRouter, Redirect} from 'react-router-dom';
import {CacheSwitch} from "react-router-cache-route";
import routes from "./route";
import {connect} from "react-redux";
import {YStore} from "../Type/TBoth";
import childRoute from "./child";

import {Spin} from "antd";

const Router = ({loading}: {loading: boolean}) => (
  <Spin tip="loading" size="large" spinning={loading}>
    {/*<BrowserRouter>*/}
    {/*  <CacheSwitch>*/}
    {/*    {childRoute(routes)}*/}
    {/*    <Redirect from="/" to="/Home" />*/}
    {/*  </CacheSwitch>*/}
    {/*</BrowserRouter>*/}
    <HashRouter>
      <CacheSwitch>
        {childRoute(routes)}
        <Redirect from="/" to="/Home" />
      </CacheSwitch>
    </HashRouter>
  </Spin>
);

const mapStateToProps = (state: YStore) => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Router);