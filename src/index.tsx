import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//引入样式  不能使用绝对路径
import './Assets/css/common.global.less';
import "./Assets/css/antd.global.less";

import Router from "./Router";
import {Provider} from "react-redux";
import store from "./Store";

import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import "moment/locale/zh-cn";
import moment from "moment";
moment.locale("zh-cn");

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <Router />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
