import React from 'react';
import styles from '../../articles.css';
import Header from './header';
import { fbArticles, fbTeams, firebaseDb, snapShotToObject } from '../../../../firebase'; 

class NewsArticles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: null,
      team: null
    }
  }

  componentWillMount() {
    firebaseDb
      .ref(`articles/${this.props.match.params.id}`)
      .once('value')
      .then((snapshot) => {
        const article = snapshot.val();
        fbTeams
          .orderByChild('teamId')
          .equalTo(article.team)
          .once('value')
          .then((snapshot) => {
            const team = snapShotToObject(snapshot);
            this.setState({
              article: article,
              team: team
            })
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