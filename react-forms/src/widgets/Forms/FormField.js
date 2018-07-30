import React from 'react';

const FormField = (props) => {

  const renderFields = () => {
    const formArray = [];
    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      });
    }
    return formArray.map((item, index) => { 
      return (
        <div className="form_element" key={index}>
          {renderElementTemplate(item)}
        </div>
      )
    });
  }

  const showLabel = (show, label) => {
    if (!show) return null;
    return <label>{label}</label>
  }

  const validate = (element) => {
    let error = [true, ''];
    console.log(element.validation);
    // Min Length
    if(element.validation.minLength) {
      const valid = element.value.length >= element.validation.minLength;
      console.log(valid);
      let message = '';
      if (!valid) message = `This field must be greater than ${element.validation.minLength}.`;
      error = [valid, message];
      return error;
    }

    // Required
    if(element.validation.required) {
      const valid = element.value.trim() !== '';
      let message = '';
      if (!valid) message = `This field is required.`;
      error = [valid, message];
      return error;
    }
    return error;
  }

  const changeHandler = (e, id, isBlur = false) => {
    const newState = props.formData;
    newState[id].value = e.target.value;

    if(isBlur) {
      let validData = validate(newState[id]);
      newState[id].valid = validData[0];
      newState[id].validationMessage = validData[1];
    }
    newState[id].touched = true;
    props.change(newState); 
  }

  const showValidation = (settings) => {
    let errorMessage = null;
    if (settings.validation && !settings.valid) {
      errorMessage = (
        <div
          style={{
            color: 'red'
          }}
        >{settings.validationMessage}</div>
      )
    }
    return errorMessage;
  }

  const renderElementTemplate = (item) => {
    let formTemplate = null;
    const settings = item.settings;

    switch(settings.element) {

      case 'input':
        formTemplate = (
          <div>
            {showLabel(settings.label, settings.labelText)}
            <input 
              type={settings.config.type}
              name={settings.config.name}
              value={settings.value}
              onChange={(e) => changeHandler(e, item.id)}
              onBlur={(e) => changeHandler(e, item.id, true)}
            />
            {showValidation(settings)}
          </div>
        )
        break;
      case 'textarea':
        formTemplate = (
          <div>
            {showLabel(settings.label, settings.labelText)}
            <textarea
              type={settings.config.type}
              name={settings.config.name}
              onChange={(e) => changeHandler(e, item.id)}
              onBlur={(e) => changeHandler(e, item.id, true)}
              value={settings.value} />
          </div>
        )
        break;
      case 'select':
        formTemplate = (
          <div>
            {showLabel(settings.label, settings.labelText)}
            <select
              value={settings.value}
              name={settings.config.name}
              onChange={(e) => changeHandler(e, item.id)}
              onBlur={(e) => changeHandler(e, item.id, true)}
            >
              {settings.config.options.map((opt, index) => {
                return (
                  <option value={opt.value} key={index}>
                    {opt.text}
                  </option>
                )
              })}
            </select>
          </div>
        )
        break;
      default:
        formTemplate = <p>Input Not Supported</p>
        break;
    }
    return formTemplate;
  }

  return (
    <div>
      {renderFields()}
    </div>
  )
}

export default FormField;