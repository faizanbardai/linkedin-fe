import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveToken } from "../actions";

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(saveToken(token))
});

const mapStateToProps = state => {
  return { token: state.token };
};

function Feed(props) {
  if (props.token || localStorage.getItem("token"))
    return (
      <div>
        I'll show all the <strong>feed</strong>.
        <Link to="/profile">My Profile</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            props.saveToken(null);
          }}
        >
          Logout
        </button>
      </div>
    );
  return <Redirect push to="/login" />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
