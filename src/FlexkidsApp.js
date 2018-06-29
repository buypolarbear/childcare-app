import React, { Component } from 'react';

import NewsOverviewContainer from './routes/news/containers/NewsOverviewContainer';
import Home from './routes/home/components/overview';

import { Link, Route, Switch } from 'react-router-dom';
import NewsItemContainer from "./routes/news/containers/NewsItemContainer";
class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/news">News</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={NewsOverviewContainer} />
          <Route exact path="/news/:id" component={NewsItemContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
