import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

class AppSideNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SideNav 
          showNav={this.props.showNav}
          onHideNav={this.props.onHideNav}
          onShowNav={this.props.onShowNav}
          navStyle={{
            background: '#242424',
          }}
        >
          <SideNavItems user={this.props.user}/>

        </SideNav>
      </div>
    )
  }
}

export default AppSideNav;