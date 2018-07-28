import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider'; 

class Home extends React.Component {
  render() {
    return (
      <div>
        <NewsSlider 
          type="featured"
          start="0"
          take="3"
          settings={{
            dots: true
          }}
        />
      </div>
    )
  }
}

export default Home;