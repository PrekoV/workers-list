import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import API from '../../api';

export default function Register(props) {
  const onSubmit = values => {
    if (values) {
      API.post('/register', values).then(res => {
        props.history.replace('/workers');
      });
    }
  };
  return (
    <div className="middle">
      <h2>Register</h2>
      <LoginForm onSubmit={onSubmit} />
      <Link to="/login">Already have account?</Link>
    </div>
  );
}
