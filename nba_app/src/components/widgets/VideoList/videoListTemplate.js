import React from 'react';
import { Link } from 'react-router-dom'; 
import CardInfo from '../CardInfo/cardInfo';
import styles from './videoList.css';

class VideoListTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.data.map((item, index) => {
      return (
        <Link to={`/videos/${item.id}`} key={index}>
          <div className={styles.videoListItem_wrapper}>
            <div className={styles.left}
                style={{
                  background: `url(/images/videos/${item.image})`
                }}
            >
              <div></div>
            </div>
            <div className={styles.right}>
              <CardInfo teams={this.props.teams} team={item.team} date={item.date} un={true}/>
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      )
    });
  }

}

export default VideoListTemplate;