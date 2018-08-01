import React from 'react';
import styles from './videoList.css';
import ActionButton from '../Button/actionButton';
import VideoListTemplate from './videoListTemplate';
import { fbTeams, fbVideos, snapShotToObject } from '../../../firebase';

class VideoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      videos: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount
    }
  }

  componentWillMount() {
    const {start, end} = this.state;
    this.getVideosData(start, end);
  }

  getVideosData(start, end) {

    // Get Teams
    if (this.state.teams && this.state.teams.length < 1) {
      fbTeams.once('value')
        .then((snapshot) => {
          const teams = snapShotToObject(snapshot);
          this.setState({
            teams: teams
          });
        });
    }

    // Get Videos
    fbVideos
      .orderByChild('id')
      .startAt(start)
      .endAt(end)
      .once('value')
      .then((snapshot) => {
        const videos = snapShotToObject(snapshot);
        this.setState({
          videos: [...this.state.videos, ...videos],
          start: end,
          end: this.state.end + this.state.amount
        });
      });
  }

  renderTitle() {
    return this.props.title? (
      <h3>NBA VIDEOS</h3>
    ): null;
  }

  renderVideos() {
    let template = null;
    switch (this.props.type) {
      case 'card':
        template = <VideoListTemplate data={this.state.videos} teams={this.state.teams}/>
        break;
    
      default:
        template = null
        break;
    }
    return template;
  }

  loadMore() {
    let end = this.state.end + this.state.amount;
    this.getVideosData(this.state.end, end);
  }

  renderButton() {
    let template = null;
    if (this.props.loadmore) {
      template = (
        <ActionButton 
          type="loadmore" 
          loadMore={()=>this.loadMore()}
          cta="Load More Videos"/>
      );
    } else {
      template = (
        <ActionButton type="linkTo" cta="More Videos" linkTo="/videos" />
      )
    }
    return template;
  }

  render() {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideoList;