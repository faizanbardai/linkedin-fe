import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveToken, saveUser } from "../actions";
import { api_createAccount } from "../components/api";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import MaterialUILink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        FayJu's LinkedIn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(saveToken(token)),
  saveUser: user => dispatch(saveUser(user))
});

const mapStateToProps = state => {
  return { user: state.user };
};

const CreateAccount = props => {
  const handleSubmit = async e => {
    e.preventDefault();
    let response;
    try {
      const body = {
        username,
        password,
        firstName,
        lastName
      };
      response = await api_createAccount(body);
      switch (response.status) {
        case 200: // OK
          response = await response.json();
          if (response.token) {
            props.saveUser(response.user);
            localStorage.setItem("token", response.token);
          } else {
            alert("some error");
            console.log(response);
          }
          break;
        case 422: // Unprocessable Entity
          alert("Unprocessable Entity. Check console. ");
          response = await response.json();
          console.log(response.errors);
          break;
        case 409: // Conflict
          response = await response.json();
          alert(response.message);
          break;
        default:
          alert("Some error");
      }
    } catch (error) {
      // server down error
      alert(error);
    }
  };

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  if (props.user) return <Redirect push to="/" />;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          // noValidate
          onSubmit={e => handleSubmit(e)}
          // onSubmit={e => e.preventDefault()}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputProps={{ maxLength: 50 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputProps={{ maxLength: 50 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={e => setUsername(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputProps={{ type: "email" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{ minLength: 8 }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <a href={`${process.env.REACT_APP_BASE_URL}/auth/facebook`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Facebook
            </Button>
          </a>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
