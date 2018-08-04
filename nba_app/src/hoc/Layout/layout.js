import React from 'react';
import './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }

  hideSideNav() {
    this.setState({
      showNav: false
    });
  }

  showSideNav() {
    this.setState({
      showNav: true
    });
  }

  render() {
    return (
      <div>
        <Header 
          showNav={this.state.showNav}
          onHideNav={this.hideSideNav.bind(this)}
          onShowNav={this.showSideNav.bind(this)}
          user={this.props.user}
        />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default Layout;