import React from 'react';
import SliderTemplates from './sliderTemplates';
import { fbArticles, snapShotToObject } from '../../../firebase';

class NewsSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentWillMount() {
    const { start, take } = this.props;
    fbArticles
      .limitToFirst(take)
      .once('value')
      .then((snapshot) => {
        const news = snapShotToObject(snapshot);
        this.setState({
          news: news
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