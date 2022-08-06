import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router,useLocation } from "react-router-dom";
import "./index.css";
import store from './store'
import {Provider} from 'react-redux'
import Sidebar from './components/index'
// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Sidebar />
      <App className="font-Roboto" />  
      </Router>
    </Provider>
  </React.StrictMode>
);
