import { compose, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunk, createLogger()))
);

export default store;
