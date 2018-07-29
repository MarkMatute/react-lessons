import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/home';
import NewsHome from './News/news';
import NewsArticles from './Articles/News/Post/index';
import VideoArticles from './Articles/Videos/Video/index';
import Layout from '../hoc/Layout/layout';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={NewsHome} />
          <Route path="/articles/:id" exact component={NewsArticles}/>
          <Route path="/videos/:id" exact component={VideoArticles} />
        </Switch>
      </Layout>
    )
  }
  
}

export default Routes;