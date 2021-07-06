import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {createStore} from "redux";
import reducer from "./Store/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer);

console.log(store.getState(), "store");

console.log(import.meta.env, "meta");
// console.log(process.env.VITE_APP_TEXT)
//引入antd样式
import 'antd/dist/antd.css';

import Router from "./Router";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)