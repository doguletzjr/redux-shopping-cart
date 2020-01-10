import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.scss";
import {loadState, saveState} from './localStorage';
import App from "./containers/App";
import reducers from "./redux/reducers/reducers";
import throttle from 'lodash/throttle'

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
