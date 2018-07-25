import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type='text' onChange={this.props.keywords}/>
      </header>
    )
  }
}

export default Header;
