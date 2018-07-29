import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideoList/VideosRelated/videosRelated';

class VideoArticles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: null,
      team: null,
      teams: [],
      related: []
    }
  }

  componentWillMount() {
    axios.get(`${API_URL}/videos?id=${this.props.match.params.id}`)
      .then((result) => {
        let article = result.data[0];
        axios.get(`${API_URL}/teams?id=${article.team}`)
          .then((result) => {
            this.setState({
              article: article,
              team: result.data
            });
            this.getRelated();
          });
      });
  }

  getRelated() {
    axios.get(`${API_URL}/teams`)
      .then((result) => {
        let teams = result.data;
        axios.get(`${API_URL}/videos?q=${this.state.team[0].city}&_limit=3`)
          .then((result) => {
            this.setState({
              teams: teams,
              related: result.data
            });
          });
      });
  }
  
  render() {
    if (!this.state.article || !this.state.team) {
      return (
        <div>Loading...</div>
      )
    };

    let { article, team } = this.state;
    console.log(article, team);
    return (
      <div>
        <Header teamData={team[0]} />
        <div className={styles.videoWrapper}>
          <h2>{ article.title }</h2>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          ></iframe>
          <VideosRelated 
            data={this.state.related}
            teams={this.state.teams}
          />
        </div>
      </div>
    )
  }
}

export default VideoArticles;