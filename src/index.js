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
import Feed from "./pages/Feed";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);
