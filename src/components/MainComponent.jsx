import React, { Component } from "react";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveToken, saveUser } from "../actions";
import CBRetrun from "./CBRetrun";
import { api_refreshToken } from "./api";

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(saveToken(token)),
  saveUser: user => dispatch(saveUser(user))
});

const mapStateToProps = state => {
  return { token: state.token };
};

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/login" exact component={Login} />
          <Route path="/auth/facebook/callback/:accessToken" exact>
            {this.props.token ? <Redirect to="/" /> : <CBRetrun />}
          </Route>
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
      let response;
      try {
        response = await api_refreshToken(tokenFromStorage);
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
            this.props.saveToken(null);
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
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
