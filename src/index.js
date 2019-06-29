/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Global, jsx } from "@emotion/core";
import Cart from "./views/cart"
import Login from "./views/login";
import Restaurant from "./views/restaurant";
import Home from "./views/home";
import Navbar from "./components/navbar";
import store from "./store";
import Ubication from "./views/ubication";

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
          <Cart path="/cart"/>
          <Login path="/login" />
          <Home path="/" />
          <Restaurant path="/restaurant/:id" />
          <Ubication path="/ubication/:id" />
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
