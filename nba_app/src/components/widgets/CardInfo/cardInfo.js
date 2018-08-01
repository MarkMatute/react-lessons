import React from 'react';
import FA from 'react-fontawesome';
import styles from './cardInfo.css';
import moment from 'moment';

class CardInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  getTeamName(teams, team) {
    const data = teams.find((item) => {
      return team === item.teamId;
    });
    if (!data) return null;
    return data.name;
  }

  render() {
    return (
      <div className={styles.cardInfo}>
        <span className={styles.teamName}>
          { this.getTeamName(this.props.teams, this.props.team) }
        </span>
        <span className={styles.teamDate}>
          <FA name="clock" />
          {moment(this.props.date).toString() }
        </span>
      </div>
    )
  }
}

export default CardInfo;