import React from 'react';
import styles from '../videoList.css';
import VideoListTemplate from '../videoListTemplate';

const VideosRelated = (props) => {
  return (
    <div className={styles.relatedWrapper}>
      <VideoListTemplate 
        data={props.data}
        teams={props.teams}
      />
    </div>
  )
}

export default VideosRelated;