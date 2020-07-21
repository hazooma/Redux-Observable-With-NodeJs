import { SAVE_SUCC, SEND_FORM, CLEAR } from "../actions/eventFormActions";

const initialState = {
  eventForms: [],
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        eventForms: [],
      };

    case SAVE_SUCC:
      return {
        ...state,
        eventForms: [...state.eventForms, ...action.payload],
      };

    default:
      return state;
  }
};
