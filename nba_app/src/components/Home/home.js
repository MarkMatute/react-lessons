import React from 'react';
import NewsSlider from '../widgets/NewsSlider/newsSlider'; 
import NewsList from '../widgets/NewsList/newsList';

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

        <NewsList 
          type="card"
          loadmore={true}
          start={3}
          amount={3}
          
        />
      </div>
    )
  }
}

export default Home;