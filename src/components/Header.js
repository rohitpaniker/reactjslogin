import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

const styles= {
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    padding: 0,
    backgroundColor: 'rgb(241, 241, 241)',
  },
  menuItemsStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
  }
}

const Header = (props) => {
  return(
    <header className="App-header" style={styles.headerStyle}>
      <div className="logo">
        <img src="" alt='ClassMate' style={{ padding: 20, cursor: 'pointer', marginRight: 10 }}/>
      </div>
      <div className="menuItems" style={styles.menuItemsStyle}>
        {props.menuItems.map((e, i) => {
          return (
            <div className={ e.toLowerCase() } style={{ padding: 20, cursor: 'pointer', marginRight: 10, marginRight: 10, color: 'rgb(128, 125, 125)' }}> { e.toUpperCase() } </div>
          );
        })}
      </div>
    </header>
  );
}

export { Header }
