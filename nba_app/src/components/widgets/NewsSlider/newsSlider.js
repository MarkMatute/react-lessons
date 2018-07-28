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
    const { start, take } = this.props;
    axios.get(`http://localhost:3001/articles?_start=${start}&_end=${take}`)
      .then((result) => {
        this.setState({
          news: result.data
        });
      });
  }

  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    )
  }
}

export default NewsSlider;