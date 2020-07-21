import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { connect, useDispatch } from "react-redux";
import { initAction } from "../actions/eventFormActions";
import moment from "moment";

const eventForms = ({ eventForms = [], history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAction());
  }, []);

  return (
    <div>
      <ul className="list-group">
        {eventForms.map((eventForm) => {
          return (
            <div>
              {" "}
              <li
                key={eventForm.id}
                className="list-group-item list-group-item-success"
              >
                <div>
                  {eventForm.firstName}
                  <br />
                  {eventForm.lastName}
                  <br />
                  {eventForm.email}
                  <br />
                  {moment(eventForm.eventDate).format("YYYY-MM-DD")}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <button
        variant="outline-primary"
        style={{ width: "100px", height: "50px" }}
        onClick={() => history.push("/")}
      >
        {" "}
        Create New{" "}
      </button>{" "}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    eventForms: state.eventReducer.eventForms,
  };
};

export default withRouter(connect(mapStateToProps)(eventForms));
