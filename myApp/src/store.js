import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { compose } from "redux";
import { rootEpic as globalEpics } from "./epics";
import { rootReducer } from "./reducers";
import { BehaviorSubject } from "rxjs";
import { routerMiddleware } from "connected-react-router";
import history from "./history";

const epic$ = new BehaviorSubject(globalEpics);
const rootEpic = (action$, $store) =>
  epic$.mergeMap((epic) => epic(action$, $store));

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware, routerMiddleware(history)),
    ),
  );

  return store;
}
