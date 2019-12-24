import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { routePath } from './Constant/Constant';
import Home from './components/Home/Home';




class App extends Component {
  render() {


    return (
      <Router>
        <Switch>
          <Route exact path={routePath.default} component={Login} />
          <Route exact path={routePath.home} component={Home} />
        </Switch>
      </Router >
    );
  }
}

export default App;