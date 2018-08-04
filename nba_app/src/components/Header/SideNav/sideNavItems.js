import React from 'react';
import style from './sideNav.css';
import FontAwesome from 'react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '../../../firebase'; 

class SideNavItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          type: style.options,
          icon: 'home',
          text: 'Home',
          link: '/',
          login: ''
        },
        {
          type: style.options,
          icon: 'file',
          text: 'News',
          link: '/news',
          login: ''
        },
        {
          type: style.options,
          icon: 'play',
          text: 'Videos',
          link: '/videos',
          login: ''
        },
        {
          type: style.options,
          icon: 'user',
          text: 'Dashboard',
          link: '/dashboard',
          login: true
        },
        {
          type: style.options,
          icon: 'user',
          text: 'Sign In',
          link: '/sign-in',
          login: false
        },
        {
          type: style.options,
          icon: 'cross',
          text: `Sign Out`,
          link: '/sign-out',
          login: true 
        }
      ]
    }
  }

  publicElement(item, i) {
    return (<Link to={item.link} >
      <FontAwesome name={item.icon} />
      {item.text}
    </Link>)
  }

  restrictedElement(item, i) {
    if(!this.props.user) {
      return;
    }
    if(item.link == '/sign-out') {
      return (
        <div onClick={()=>{
          firebase.auth().signOut()
            .then(() => {
              this.props.history.push('/');
            });
        }}>
          <FontAwesome name={item.icon} />
          {item.text}
        </div>
      )
    } else {
      return (
        <Link to={item.link} >
          <FontAwesome name={item.icon} />
          {item.text}
        </Link>
      )
    }
  }

  showItems() {
    return this.state.items.map((item, index) => {
      return (
        <div key={index} className={item.type}>
          { item.login? this.restrictedElement(item, index): this.publicElement(item, index) }
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

export default withRouter(SideNavItems);