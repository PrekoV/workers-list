import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/App.scss';
import Table from './components/Table/Table';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (auth ? <Component {...props} /> : <Redirect to="/register" />)} />
);

const mapStateToProps = state => ({
  auth: state.userReducer.auth,
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ConnectedPrivateRoute path="/workers" component={Table} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
