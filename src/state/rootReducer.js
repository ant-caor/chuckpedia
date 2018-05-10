import { combineReducers } from "redux";
import feed from "./reducers/feed";

const rootReducer = combineReducers({
  feed: feed
});

export default rootReducer;
