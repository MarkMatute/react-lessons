import React from 'react';
import FA from 'react-fontawesome';
import styles from './cardInfo.css';

class ReactInfo extends React.Component {

  getTeamName() {
    const {teams, team} = this.props;
    const data = teams.find((item) => {
      return team === item.id;
    });
    return data.name;
  }

  render() {
    return (
      <div className={styles.cardInfo}>
        <span className={styles.teamName}>
          { this.getTeamName() }
        </span>
        <span className={styles.teamDate}>
          <FA name="clock" />
          { this.props.date }
        </span>
      </div>
    )
  }
}

export default ReactInfo;