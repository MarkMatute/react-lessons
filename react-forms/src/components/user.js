import React, { Component } from 'react';
import FormField from '../widgets/Forms/FormField';
import { firebaseDB } from '../firebase';
class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'last_name_input',
                    type: 'text',
                    placeholder: 'Enter your Last Name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message',
                    rows: 4,
                    cols: 36
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            },
            sex: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Sex',
                config: {
                    name: 'sex',
                    options: [
                        { val: 'male', text: 'Male' },
                        { val: 'female', text: 'Female' }
                    ]
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm(newState) {
        this.setState({
            formData: newState
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
        }
        for (let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        if(formIsValid) {
            firebaseDB.ref('users')
                .push(dataToSubmit)
                .then(() => {
                    alert('Users ADded');
                })
                .then((err) => console.log(err));
        } else {
            alert('INVALID!');
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormField 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                        blur={(newState) => this.updateForm(newState)}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default User;