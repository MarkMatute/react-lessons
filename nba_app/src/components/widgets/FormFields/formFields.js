import React from 'react';
import styles from './formFields.css';

class FormFields extends React.Component {

  constructor(props) {
    super(props);
  }

  handleInputChange(element) {
    const newFormData = {
      ...this.props.formData
    };
    
    newFormData.value = element.event.target.value;

    if (element.blur) {
      let validData = this.validate(newFormData);
      newFormData.valid = validData.valid;
      newFormData.validationMessage = validData.message;
    }

    this.props.change(element.id, newFormData);
  }

  validate(element) {
    let error = { valid: true, message: '' };

    if (element.validation) {
      if (element.validation.required) {
        error.valid = element.value.trim() !== '';
        if (!error.valid) error.message = 'This field is required';
      }
      if (element.validation.password && error.valid) {
        error.valid = element.value.trim().length > 5;
        if (!error.valid) error.message = 'Password too week';
      }
    }
    return error;
  }

  renderTemplate() {
    const {id, formData, change} = this.props;
    let template = null;
    switch(formData.element) {
      case 'input':
        template = (
          <div>
            <input 
              type={formData.config.type}
              value={formData.value}
              onChange={(event) => this.handleInputChange({
                event, id, blur: false
              })}
              onBlur={(event) => this.handleInputChange({
                event, id, blur: true
              })}
              />
          </div>
        )
        break;
      default:
        template = `This element is not supperted. ${formData.element}`;
        break;
    }
    return (
      <div>
        {this.showLabel(formData.config)}
        {template}
        {this.showValidation(formData)}
      </div>
    );
  }

  showLabel(config) {
    return (
      <label>{ config.label }</label>
    )
  }

  showValidation(config) {
    let template = null;
    if (!config.valid) {
      template = (
        <span className={styles.labelError}>{config.validationMessage}</span>
      )
    }
    return template;
  }

  render() {
    return(
      <div>
        {this.renderTemplate()}
      </div>
    )
  }
}

export default FormFields;