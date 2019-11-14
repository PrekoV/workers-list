import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import API from '../../api';

export default function Login(props) {
  const onSubmit = values => {
    API.post('/login', values).then(res => props.history.replace('/workers'));
  };
  return (
    <div className="middle">
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
