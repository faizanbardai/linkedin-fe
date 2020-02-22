import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveUser } from "../actions";

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(saveUser(user))
});

const mapStateToProps = state => {
  return { user: state.user };
};

function Feed(props) {
  if (props.authenticated) {
    if (props.user) {
      return (
        <div>
          I'll show all the <strong>feed</strong>.
          <Link to="/profile">My Profile</Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              props.saveUser(null);
            }}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  } else {
    return <Redirect push to="/login" />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
