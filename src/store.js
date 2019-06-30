import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import offlineSync from "./midlewares/offline-sync";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (localStorage.getItem("version") !== process.env.REACT_APP_VERSION) {
  localStorage.removeItem("state");
}
const preloadedState = JSON.parse(localStorage.getItem("state") || "{}");

const store = createStore(
  reducer,
  // preloadedState,
  // composer(applyMiddleware(thunk, logger, offlineSync))
  composer(applyMiddleware(thunk, logger))
);

export default store;
