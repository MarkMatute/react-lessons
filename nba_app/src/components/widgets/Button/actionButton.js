import React from 'react';
import styles from './actionButton.css';
import { Link } from 'react-router-dom';

class ActionButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let template = null;
    switch(this.props.type) {
      case 'loadmore':
        template = 
        (<div 
            className={styles.blue_btn}
            onClick={this.props.loadMore}>
            {this.props.cta}
          </div>)
        break;
      case 'linkTo':
        template = 
        (<Link 
          className={styles.blue_btn}
          to={this.props.linkTo}>
          {this.props.cta}
        </Link>);
        break;
      default:
        template = null;
        break;
    }

    return template
  }
}

export default ActionButton;