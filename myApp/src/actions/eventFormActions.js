/*
 * action types
 */

export const SEND_FORM = "@SEND_FORM";
export const SENT_SUCCESS = "@SENT_SUCCESS";
export const INIT = "@INIT";
export const SAVE_SUCC = "@SAVE_SUCC";
export const CLEAR = "@CLEAR";

/*
 * action creators
 */

export function submitForm(applicationForm) {
  return { type: SEND_FORM, payload: applicationForm };
}

export function initAction() {
  return { type: INIT };
}

export function saveSuccess(form) {
  return { type: SAVE_SUCC, payload: form };
}

export function clearAction() {
  return { type: CLEAR };
}
