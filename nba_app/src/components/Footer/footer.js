import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';
 
class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <Link to="/" className={styles.logo}>
          <img alt="Nba Ligo" src="/images/nba_logo.png"/>
        </Link>
        <div className={styles.right}>
          @NBA { CURRENT_YEAR } All rights reserved.
        </div>
      </div>
    )
  }
}

export default Footer;