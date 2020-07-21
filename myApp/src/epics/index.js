import { combineEpics } from "redux-observable";
import { eventFormEpic, eventFotmsInit } from "./event";

export const rootEpic = combineEpics(eventFormEpic, eventFotmsInit);
