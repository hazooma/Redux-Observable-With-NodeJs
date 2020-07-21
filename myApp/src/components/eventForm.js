import React from "react";
import { Field, reduxForm } from "redux-form";
import { ReduxFormDateRange } from "./datepicker";
import { isDate } from "moment";
import { connect } from "react-redux";
import * as actions from "../actions/eventFormActions";
import { withRouter } from "react-router-dom";

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const isValidDate = (value) =>
  value && isDate(value) ? undefined : "Must be a Valid Date";
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooYoung = (value) =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
export const FORM_IDENTIFIER = "eventApplicationForm";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const EventForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const submit = (form) => {
    const { firstName, lastName, email, eventDate } = form;
    const formData = { firstName, lastName, email, eventDate };
    props.submitForm(formData);
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="FirstName"
          validate={[required, maxLength15, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="LastName"
          validate={[required, maxLength15, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="email"
          type="text"
          component={renderField}
          label="Email"
          validate={[required, email]}
          warn={aol}
        />

        <Field
          name="eventDate"
          type="date"
          component={ReduxFormDateRange}
          label="Event Date"
          validate={[required, isValidDate]}
        />
        <div>
          <button
            type="submit"
            style={{ width: "100px", height: "44px" }}
            disabled={submitting}
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (data) => dispatch(actions.submitForm(data)),
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    reduxForm({
      form: FORM_IDENTIFIER, // a unique identifier for this form
    })(EventForm),
  ),
);
