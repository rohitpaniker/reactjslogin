import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom';
const styles = {
   loginRootStyle: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     margin: 'auto',
     height: '100%',
   },
   raisedButtonStyle: {
     margin: 15
   },
   loginAreaStyle: {
     width: '50%',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
   },
   creativeArea: {
     width: '50%',
     backgroundImage: `url(${require('./../assets/png/login_creative.jpg')})`,
     height: '100%',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
   },
   creativeAreaDescription: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     marginLeft: 50,
     fontSize: 30,
     color: '#FFFFFF',
   },
   appLogoStyle: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-start',
     width: '30%',
   },
   overlay: {
     backgroundColor: 'rgba(0, 0, 0, 0.6)',
     height: '100%',
     width: '100%',
     position: 'fixed',
     top: '50%',
     left: '100%',
     fontSize: 30,
     color: '#FFFFFF',
     transform: 'translate(-50%,-50%)',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
   }
};

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      redirect: false,
    }
 }

 handleClick = async event => {
   event.preventDefault();
   try {
     //await this.login(this.state.username, this.state.password);
     //this.props.userHasAuthenticated(true);
     this.props.history.push("/");
   } catch(e) {
     console.log(e);
   }
   // console.log(u, p);
   // if(u === 'admin' && p === '1234') {
   //   this.setState({
   //     redirect: true
   //   })
   // }
 }
  render() {
    if (this.state.redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="loginRoot" style={styles.loginRootStyle}>
        <div className="loginArea" style={styles.loginAreaStyle}>
          <div className="appLogo" style={styles.appLogoStyle}>
            <img src={require('./../assets/png/logo.jpg')} alt='ClassMaster' style={{ width: 64 }}/>
          </div>
          <div className="loginPanel">
            <MuiThemeProvider>
              <div>
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
               <TextField
                 type="password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={styles.raisedButtonStyle} onClick={(e) => this.handleClick(e)}/>
               </div>
             </MuiThemeProvider>
          </div>
        </div>
        <div className="creativeArea" style={styles.creativeArea}>
          <div className="overlay" style={styles.overlay}>
            <div className="description" style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}>
              <div style={{ paddingBottom: 20, fontSize: 30 }}> Welcome to ClassMaster. </div>
              <div style={{ fontSize: 20 }}> Log in to access your account. </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
