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
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <Global
        styles={{
          body: {
            background: "#fafafa",
            fontFamily: "'Helvetica Neue', sans-serif",
            margin: 0
          }
        }}
      />
      <Navbar />
      <main
        css={{
          maxWidth: "1000px",
          margin: "auto"
        }}
      >
        <Router>
          <Login path="/login" />
          <Home path="/" />
          <Restaurant path="/restaurant" />
        </Router>
      </main>
    </UserProvider>
  );
}

const $root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
