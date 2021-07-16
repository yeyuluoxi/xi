import React from 'react';
// import {BrowserRouter, Redirect} from 'react-router-dom';
import {HashRouter, Redirect} from 'react-router-dom';
import {CacheSwitch} from "react-router-cache-route";
import routes from "./route";
import {connect} from "react-redux";
import {YStore} from "../Type/TStore";
import childRoute from "./child";

import {Spin} from "antd";

const Router = ({loading}: {loading: boolean}) => (
  <Spin tip="loading" size="large" spinning={loading}>
    <HashRouter>
      {/*
      <Switch>
        {
          routes.map(router => {
            return (
              <Route
                exact
                key={router.name}
                path={router.path}
                component={router.component}
              />
            )
          })
        }
        <Redirect from="/" to="/Home" />
      </Switch>
      */}
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
  }
}

export default connect(mapStateToProps)(Router);