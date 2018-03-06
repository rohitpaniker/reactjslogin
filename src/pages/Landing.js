import React, { Component, Fragment } from 'react';
import { Header } from './../components/Header';
import 'font-awesome/css/font-awesome.min.css';

class Landing extends Component {
  render() {
    return(
      <Fragment>
        <Header
          menuItems={['Home', 'About', 'Courses', 'Contact', 'Login']}/>
      </Fragment>
    );
  }
}

export default Landing;
