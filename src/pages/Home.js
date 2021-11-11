import React from 'react';
import { connect } from 'react-redux';

const Home = ({ isAuthenticated }) => {
  const logedinNow = (
    <>
      <h3>You are logged in currently as</h3>
    </>
  );

  const notLogedin = (
    <>
      <h3>You are currently not logged in</h3>
    </>
  );

  return (
    <div>
      <h2>Welcome to Our Authentication App</h2>
      <br />
      <hr />
      <div>
        <span>Account Status:</span>
        <>{isAuthenticated ? logedinNow : notLogedin}</>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);