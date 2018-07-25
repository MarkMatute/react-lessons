import React from 'react';
import NewsListItem from './news_list_item';

class NewsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const items = this.props.news.map((item, index) => {
      return (
        <NewsListItem key={index} newsItem={item}/>
      )
    });

    return (
      <div>
        News List 
        <br/>
        {items}
      </div>
    )
  }
}

export default NewsList;