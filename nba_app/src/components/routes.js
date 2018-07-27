import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/home';
import Layout from '../hoc/Layout/layout';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
    )
  }
  
}

export default Routes;