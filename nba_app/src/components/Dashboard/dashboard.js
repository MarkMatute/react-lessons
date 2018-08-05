import React from 'react';
import styles from './dashboard.css';
import FormFields from '../widgets/FormFields/formFields';
import * as _ from 'lodash';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        author: {
          element: 'input',
          value: '',
          config: {
            name: 'author',
            type: 'text',
            label: 'Author',
            placeholder: 'Enter Author'
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          validationMessage: ''
        },
        title: {
          element: 'input',
          value: '',
          config: {
            name: 'title',
            type: 'text',
            label: 'Title',
            placeholder: 'Enter Title'
          },
          validation: {
            required: true
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

  onSubmitForm(e) {
    e.preventDefault();

    const hasError = _.filter(this.state.formData, { valid: false });

    if (hasError.length) {
      alert('Check forms');
      return;
    }

    const dataToSubmit = _.map(this.state.formData, (element) => {
      let payload = {};
      payload[element.config.name] = element.value;
      return payload;
    });
    
    console.log(dataToSubmit);

  }

  render() {
    return (
      <div>
        <form>
          <FormFields
            id={'author'}
            formData={this.state.formData.author}
            change={(id, newState) => this.updateFormData(id, newState)}
          />
          <FormFields
            id={'title'}
            formData={this.state.formData.title}
            change={(id, newState) => this.updateFormData(id, newState)}
          />
          <br />
          <button type="button" onClick={(e) => this.onSubmitForm(e)} >
            Save Article
          </button>
        </form>
      </div>
    )
  }
}

export default Dashboard;