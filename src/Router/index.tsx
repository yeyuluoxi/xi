import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from "./route";
import {connect} from "react-redux";
import {YStore} from "../Type/TStore";

import {Spin} from "antd";

const Router = ({loading}) => (
  <Spin tip="loading" size="large" spinning={loading}>
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  </Spin>
);

const mapStateToProps = (state: YStore) => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Router);