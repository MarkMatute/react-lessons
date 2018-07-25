import React from 'react';

class LifeCycle extends React.Component {

  state = {
    title: 'Tite'
  }

  // Get default props

  // Set default state

  // Before Render
  componentWillMount() {
    console.log('3 Component will mount');
  }

  componentWillUpdate() {
    console.log('Component Will Update');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);

    if (nextState && nextState.title === 'KANA!') {
      return false;
    }

    return true;
  }

  // Render JSX
  render() {
    console.log('4 Render');
    return(
      <div>
        React LifeCycle Demo <br />
        { this.state.title }
        <button type="button" onClick={() => {
          this.setState({
            title: "KANA!"
          });
        }}>
          Change Title
        </button>
      </div>
    )
  }

  // After Render JSX
  componentDidMount() {
    console.log('5 Component Did Mount'); 
  }

  //  

}

export default LifeCycle;