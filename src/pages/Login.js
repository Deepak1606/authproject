import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/actions.auth";

const Login = ({ login, isAuthenticated }) => {
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });

  const {email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    var r = login(email, password);
    console.log(r);
  };

  //check authentication
  if (isAuthenticated) {
    return <Redirect to="/"/>;
  }

  return (
    <div>
      <h1>Sign In to your account</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <br />
        <input
          type="email"
          placeholder="Your email here"
          name="email"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Your password here"
          name="password"
          autoComplete="on"
          onChange={(e) => onChange(e)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <br />
      <br />
      <h6>
        Dont have account?<Link to="/signup">Create Account</Link>
      </h6>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);