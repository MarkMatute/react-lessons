import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import PostDetail from './components/post_detail';
import Profile from './components/profiles';
import LifeCycle from './components/life_cycle';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profiles">Profiles</Link>
        </header>
        <Switch>
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" component={Posts} />
          <Route path="/profiles" component={Profile} />
          <Route path="/life" component={LifeCycle} />
          <Route path="/" exact component={Home} />
          <Route render={() => {
            return (
              <div>Opps 404</div>
            )
          }} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
