import React from 'react';
import styles from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideoList/VideosRelated/videosRelated';
import { fbVideos, fbTeams, firebaseDb, snapShotToObject } from '../../../../firebase';

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
    firebaseDb
      .ref(`videos/${this.props.match.params.id}`)
      .once('value')
      .then((snapshot) => {
        const video = snapshot.val();
        fbTeams
          .orderByChild('teamId')
          .equalTo(video.team)
          .once('value')
          .then((snapshot) => {
            const team = snapShotToObject(snapshot);
            this.setState({
              article: video,
              team: team
            });
            this.getRelated();
          });
      });
  }

  getRelated() {
    fbTeams.once('value')
      .then((snapshot) => {
        const teams = snapShotToObject(snapshot);

        fbVideos.orderByChild('team')
          .equalTo(this.state.article.team)
          .limitToFirst(3)
          .once('value')
          .then((snapshot) => {
            const related = snapShotToObject(snapshot);
            console.log(related, 'related');
            this.setState({
              teams: teams,
              related: related
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