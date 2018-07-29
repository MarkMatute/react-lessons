import React from 'react';
import styles from './videoList.css';
import axios from 'axios';
import {API_URL} from '../../../config';
import ActionButton from '../Button/actionButton';

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

  }

  renderTitle() {
    return this.props.title? (
      <h3>NBA VIDEOS</h3>
    ): null;
  }

  loadMore() {
    alert('Loadmore');
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
        {this.renderButton()}
      </div>
    )
  }
}

export default VideoList;