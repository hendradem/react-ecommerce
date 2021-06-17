import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";

// libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducer from "./redux/reducers";

const globalState = createStore(allReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={globalState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
