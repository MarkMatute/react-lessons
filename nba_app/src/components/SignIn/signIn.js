import React from 'react';
import styles from './signIn.css';
import FormFields from '../widgets/FormFields/formFields';
import * as _ from 'lodash';
import { firebase } from '../../firebase';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerError: '',
      loading: false,
      formData: {
        email: {
          element: 'input',
          value: '',
          config: {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Enter your email'
          },
          validation: {
            required: true,
            email: true
          },
          valid: false,
          touched: false,
          validationMessage: ''
        },
        password: {
          element: 'input',
          value: '',
          config: {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter your password'
          },
          validation: {
            required: true,
            password: true
          },
          valid: false,
          touched: false,
          validationMessage: ''
        }
      }
    }
  }

  updateFormData(id, newState) {
    const newFormData = {
      ...this.state.formData
    };
    newFormData[id] = newState;
    this.setState({
      formData: newFormData
    });
  }

  onSubmitForm (e, type) {
    e.preventDefault();
    this.setState({
      loading: true
    });

    const hasError = _.filter(this.state.formData, {valid: false});

    if(hasError.length) {
      alert('Check forms');
      return;
    }

    const dataToSubmit = _.map(this.state.formData, (element) => {
      let payload = {};
      payload[element.config.name] = element.value;
      return payload;
    });

    // Login
    if(type=='login') {
      firebase.auth().signInWithEmailAndPassword(
        dataToSubmit[0].email, dataToSubmit[1].password
      ).then(() => {
        this.props.history.push('/');
      }).catch((err)=>{
        alert('Error');
      });
    }

    // Register
    else if(type=='register') {
      firebase.auth().createUserWithEmailAndPassword(
        dataToSubmit[0].email, dataToSubmit[1].password
      ).then(() => {
        this.props.history.push('/');
      }).catch((err) => {
        alert('Error');
      });
    }

    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form>
          <FormFields 
            id={'email'}
            formData={this.state.formData.email}
            change={(id, newState) => this.updateFormData(id, newState)}
          />
          <FormFields
            id={'password'}
            formData={this.state.formData.password}
            change={(id, newState) => this.updateFormData(id, newState)}
          />
          {
            this.state.loading? (<div>Loading...</div>): ''
          }
          <button type="button" onClick={(e)=>this.onSubmitForm(e, 'login')}> 
            Login
          </button>
          <button type="button" onClick={(e) => this.onSubmitForm(e, 'register')}>
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn;
