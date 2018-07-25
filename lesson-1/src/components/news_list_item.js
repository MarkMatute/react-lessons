import React from 'react';

class NewsListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { newsItem } = this.props;
    return (
      <div>
        <h3>{newsItem.title}</h3>
        <div>
          {newsItem.feed}
        </div>
      </div> 
    )
  }
}

export default NewsListItem;
