import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/App.scss';
import Table from './components/Table/Table';
import Login from './components/Login';
import Register from './components/Register';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to="/register" />)} />
);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/workers" component={Table} isAuth={!!localStorage.getItem('token')} />
        </Switch>
      </Router>
    </div>
  );
}
