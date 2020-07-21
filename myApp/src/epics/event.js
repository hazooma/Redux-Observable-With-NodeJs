import {
  SEND_FORM,
  saveSuccess,
  INIT,
  clearAction,
} from "../actions/eventFormActions";
import { startSubmit, stopSubmit } from "redux-form";

import { Observable } from "rxjs";
import { push } from "react-router-redux";
import EventApi from "../entities/eventForm/api";
import { FORM_IDENTIFIER } from "../components/eventForm";

// action -> action
export const eventFormEpic = (action$) => {
  return action$.ofType(SEND_FORM).mergeMap(({ payload }) => {
    const { firstName, lastName, email, eventDate } = payload;
    const body = { firstName, lastName, email, eventDate };

    return Observable.concat(
      Observable.of(startSubmit(FORM_IDENTIFIER)),
      Observable.from(EventApi.posteventForm(body))
        .mergeMap(() => [push("/forms")])
        .catch((e) => Observable.of(stopSubmit(FORM_IDENTIFIER))),
    );
  });
};

// action -> action
export const eventFotmsInit = (action$) => {
  return action$.ofType(INIT).mergeMap(() => {
    return Observable.concat(
      Observable.from(EventApi.getEventsForms())
        .mergeMap((forms) => [clearAction(), saveSuccess([...forms])])
        .catch((e) => Observable.of(stopSubmit("eventApplicationForm"))),
    );
  });
};
