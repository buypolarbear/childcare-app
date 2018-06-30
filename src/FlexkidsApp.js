import React, { Component } from 'react';

import NewsOverviewContainer from './routes/news/containers/NewsOverviewContainer';
import Home from './routes/home/components/overview';

import { Route, Switch } from 'react-router-dom';
import NewsItemContainer from "./routes/news/containers/NewsItemContainer";

import SessionsOverviewContainer from './routes/sessions/containers/SessionsOverviewContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
       
       {/* <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/news">News</Link></li>
          </ul>
       </nav>*/}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={NewsOverviewContainer} />
          <Route exact path="/news/:id" component={NewsItemContainer} />
          <Route exact path="/sessions" component={SessionsOverviewContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
