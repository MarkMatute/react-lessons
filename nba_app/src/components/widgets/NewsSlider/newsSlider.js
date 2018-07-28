import React from 'react';
import axios from 'axios';
import SliderTemplates from './sliderTemplates';

class NewsSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3001/articles?_start=0&_end=3')
      .then((result) => {
        this.setState({
          news: result.data
        });
      });
  }

  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type="featured"/>
      </div>
    )
  }
}

export default NewsSlider;