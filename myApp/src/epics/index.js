import { combineEpics } from "redux-observable";
import { eventFormEpic, eventFormsInit } from "./event";

export const rootEpic = combineEpics(eventFormEpic, eventFormsInit);
