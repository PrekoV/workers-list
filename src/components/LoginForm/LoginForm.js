import React from 'react';
import { Formik, Form, Field } from 'formik';
import validation from './validation';

export default function LoginForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validation}
      validateOnMount
    >
      {({ errors }) => (
        <Form className="login-form">
          <label htmlFor="login">Login</label>
          <Field name="login" />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <label htmlFor="Password">Password</label>
          <Field name="password" type="password" />
          <button className={`${Object.keys(errors).length !== 0 && 'disabled'}`} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
