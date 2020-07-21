import { combineReducers } from "redux";
import { eventReducer } from "./event";
import { reducer as form } from "redux-form";
import { connectRouter } from "connected-react-router";
import history from "../history";

export const rootReducer = combineReducers({
  eventReducer,
  form,
  router: connectRouter(history),
});
