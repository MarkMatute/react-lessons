import React from 'react';
import style from './sideNav.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
 
class SideNavItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          type: style.options,
          icon: 'home',
          text: 'Home',
          link: '/'
        },
        {
          type: style.options,
          icon: 'file',
          text: 'News',
          link: '/news'
        },
        {
          type: style.options,
          icon: 'play',
          text: 'Videos',
          link: '/videos'
        },
        {
          type: style.options,
          icon: 'user',
          text: 'Sign In',
          link: '/sign-in'
        },
        {
          type: style.options,
          icon: 'cross',
          text: 'Sign Out',
          link: '/sign-out'
        }
      ]
    }
  }

  showItems() {
    return this.state.items.map((item, index) => {
      return (
        <div key={index} className={item.type}>
          <Link to={item.link} >
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        { this.showItems() }
      </div>
    )
  }
}

export default SideNavItems;