import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import actions from '../../store/actions/user';

function Register(props) {
  const onSubmit = values => {
    if (!values) return;
    props.register(values).then(() => props.history.replace('/workers'));
  };
  return (
    <div className="middle">
      <h2>Register</h2>
      <LoginForm onSubmit={onSubmit} />
      <Link to="/login">Already have account?</Link>
    </div>
  );
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(null, mapDispatchToProps)(Register);
