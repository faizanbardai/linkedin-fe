import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import "./index.css";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
// import Feed from "./pages/Feed";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/create-account" exact component={CreateAccount} />

          {/* <Route path="/feed" exact component={Feed} /> */}
          <Route path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);
