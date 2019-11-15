import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import actions from '../../store/actions/user';

function Login(props) {
  const onSubmit = values => {
    if (!values) return;
    props.login(values).then(e => {
      e.auth && props.history.replace('/workers');
    });
  };
  return (
    <div className="middle">
      <h2>Login</h2>
      <div className="error">{props.message}</div>
      <LoginForm onSubmit={onSubmit} />
      <Link to="/register">Create account</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  message: state.userReducer.message,
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
