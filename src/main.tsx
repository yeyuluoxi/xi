import React from 'react';
import ReactDOM from 'react-dom';

console.log(import.meta.env, "meta");

//引入样式
import 'antd/dist/antd.css';
import './index.scss';

import Router from "./Router";
import {Provider} from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)