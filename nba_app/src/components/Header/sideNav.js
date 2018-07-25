import React from 'react';
import SideNav from 'react-simple-sidenav';

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
          
        </SideNav>
      </div>
    )
  }
}

export default AppSideNav;