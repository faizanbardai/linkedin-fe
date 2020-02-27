import React, { Component } from "react";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveUser } from "../actions";
import CBRetrun from "./CBRetrun";
import { api_refreshToken } from "./api";

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUser(user))
});

const mapStateToProps = state => {
  return { token: state.token };
};

class MainComponent extends Component {
  toggleAuthenticated = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };
  state = { authenticated: localStorage.getItem("token") ? true : false };
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Feed
              authenticated={this.state.authenticated}
              toggleAuthenticated={this.toggleAuthenticated}
            />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/auth/facebook/callback/:accessToken" exact>
            {this.state.authenticated ? <Redirect to="/" /> : <CBRetrun />}
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
      let response;
      try {
        response = await api_refreshToken(tokenFromStorage);
        switch (response.status) {
          case 200: // OK
            response = await response.json();
            this.props.saveUser(response.user);
            this.setState({ authenticated: true });
            break;
          case 401: // unauthorized
            localStorage.removeItem("token");
            this.props.saveUser(null);
            this.toggleAuthenticated();
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
