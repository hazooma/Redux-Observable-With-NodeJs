import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const ReduxFormDateRange = ({
  label,
  meta: { touched, error, warning },
  input,
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <DatePicker selected={input.value || null} onChange={input.onChange} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};
