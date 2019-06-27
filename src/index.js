/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Global, jsx } from "@emotion/core";

import Login from "./views/login";
import Restaurant from "./views/restaurant";
import Home from "./views/home";
import Navbar from "./components/navbar";
import store from "./store";
// import { useLogin } from "../action-hooks";

const global = {
  body: {
    fontFamily: "'Helvetica Neue', sans-serif",
    margin: 0
  }
};

const main = {
  maxWidth: "1000px",
  margin: "auto"
};

function App() {
  return (
    <>
      <Global styles={global} />
      <Navbar />
      <main css={main}>
        <Router>
          <Login path="/login" />
          <Home path="/" />
          <Restaurant path="/restaurant" />
          <Login path="/login" />
        </Router>
      </main>
    </>
  );
}

const $root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
