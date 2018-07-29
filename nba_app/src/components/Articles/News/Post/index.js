import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './header';

class NewsArticles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: null,
      team: null
    }
  }

  componentWillMount() {
    axios.get(`${API_URL}/articles?id=${this.props.match.params.id}`)
      .then((result) => {
        let article = result.data[0];
        axios.get(`${API_URL}/teams?id=${article.team}`)
          .then((result) => {
            this.setState({
              article: article,
              team: result.data
            });
          });
      });
  }

  render() {
    if (!this.state.article) {
      return (
        <div>Loading...</div>
      )
    };

    let { article } = this.state;

    return(
      <div className={styles.articleWrapper}>
        <Header 
          teamData={this.state.team[0]}
          date={this.state.article.date}
          author={this.state.article.author}
        />

        {/* Article Body */}
        <div className={styles.articleBody}>
          <h2>{ article.title }</h2>
          <div className={styles.articleImage}
               style={{
                 background: `url('/images/articles/${article.image}')`
               }}
          ></div>
          <div className={styles.articleText}>
              { article.body }
          </div>
        </div>

      </div>
    )
  }
}

export default NewsArticles;