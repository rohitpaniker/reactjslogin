import React, { Component } from 'react';

const styles = {
  rootComponent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
}

class PNF404 extends Component {
  render() {
    return(
      <div className="rootComponent" style={styles.rootComponent}>
        <img src={require('./../assets/png/error-404.png')}/>
      </div>
    );
  }
}

export default PNF404;
