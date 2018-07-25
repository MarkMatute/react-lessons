import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FA from 'react-fontawesome';
import AppSideNav from './sideNav';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  displayNavBars() {
    return (
      <div className={style.bars}
        onClick={this.props.onShowNav}
      >
        <FA name="bars" />
      </div>
    )
  }

  displayLogo() {
    return (
      <Link to="/" className={style.logo}>
        <img src="" alt="NBA Logo" src="/images/nba_logo.png"/>
      </Link>
    )
  }
  
  render() {
    return(
      <header className={style.header}>
        <AppSideNav {...this.props} />
        <div className={style.headerOpt}>
          {this.displayNavBars()}
          {this.displayLogo()}
        </div>
      </header>
    )
  }
}

export default Header;