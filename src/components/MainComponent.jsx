import React, { Component } from "react";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { saveToken, saveUser } from "../actions";

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(saveToken(token)),
  saveUser: user => dispatch(saveUser(user))
});

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/login" exact component={Login} />
          <Route path="/create-account" exact component={CreateAccount} />
          <Route path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount = async () => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      this.props.saveToken(tokenFromStorage);
      const baseURL = process.env.REACT_APP_BASE_URL;
      let response;
      try {
        response = await fetch(baseURL + "/user/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenFromStorage
          },
          body: null
        });
        console.log(response);
        console.log(response.status);
        console.log(response.statusText);
        switch (response.status) {
          case 200:
            // OK
            response = await response.json();
            this.props.saveUser(response.user);
            this.props.saveToken(response.token);
            break;
          case 401:
            // unauthorized
            localStorage.removeItem("token");
            break;
          default:
            console.log("Some error");
        }
      } catch (error) {
        alert("Check console for error");
        console.log(error);
      }
    }
  };
}
export default connect(null, mapDispatchToProps)(MainComponent);
