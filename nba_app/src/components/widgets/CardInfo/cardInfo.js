import React from 'react';
import FA from 'react-fontawesome';
import styles from './cardInfo.css';

class CardInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  getTeamName(teams, team) {
    const data = teams.find((item) => {
      return team === item.id;
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
          { this.props.date }
        </span>
      </div>
    )
  }
}

export default CardInfo;