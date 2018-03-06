import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import PNF404 from './pages/PNF404';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Cookie from 'universal-cookie';

const cookie = new Cookie();

class App extends Component {
  componentWillMount() {
    // cookie.set('token', 'a5sd46a54sd564as5d64a6s5d46a5sd46a5s4d5a4sd564a6s5d8w132czx86c4f132dea02z86czx5', { path: '/' });
    // console.log(cookie.get('token'));
    // cookie.remove('token')
    // console.log(cookie.get('token'));
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={PNF404}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
