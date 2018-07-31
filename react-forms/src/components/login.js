import React from 'react';
import { googleAuth, firebase } from '../firebase';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        status: user? true: false
      });
    });
  }

  render() {
    return (
      <div>
        { this.state.status?
          (<button onClick={() => this.signOut()}>
            Sign Out
          </button>)
          :
          (<button onClick={() => this.signIn()}>
            Sign In
          </button>)
        }
      </div>
    )
  }
}

export default Login;