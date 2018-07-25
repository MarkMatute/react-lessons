import React from 'react'; 
import ReactDOM from 'react-dom';
import JSON from './db.json'

// Components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: JSON,
      filtered: []
    }
    this.getKeyword = this.getKeyword.bind(this);
  }

  getKeyword(e) {
    const keyword = e.target.value;
    let filtered = this.state.news.filter((item) => {
      console.log(item.title);
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={this.state.filtered.length !== 0 ? this.state.filtered : this.state.news} />
      </div>
    )
  }
}


 ReactDOM.render(<App />, document.getElementById('root'));
