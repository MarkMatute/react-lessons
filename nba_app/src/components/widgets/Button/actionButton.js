import React from 'react';
import styles from './actionButton.css';

class ActionButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let template = null;

    switch(this.props.type) {
      case 'loadmore':
        template = (
          <div 
            className={styles.blue_btn}
            onClick={this.props.loadMore}
          >
            {this.props.cta}
          </div>
        )
        break;
      default:
        template = null;
        break;
    }

    return template
  }
}

export default ActionButton;