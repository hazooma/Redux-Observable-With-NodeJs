import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./store";
import EventForms from "./components/eventForms";
import EventForm from "./components/eventForm";
import history from "./history";

let store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <h1>Event Form</h1>
            </header>
          </div>
          <div style={{ textAlign: "center", alignItems: "center" }}>
            <Route exact path="/forms">
              <EventForms />
            </Route>

            <Route exact path="/">
              <EventForm />
            </Route>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
