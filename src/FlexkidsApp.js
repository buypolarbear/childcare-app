import React, { Component } from 'react';

import NewsOverviewContainer from './routes/news/containers/NewsOverviewContainer';
import Home from './routes/home/components/overview';
import NewsItemContainer from "./routes/news/containers/NewsItemContainer";
import SessionsOverviewContainer from './routes/sessions/containers/SessionsOverviewContainer'

import { Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div className="app">

        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/sessions" /> } />
          <Route exact path="/home" component={Home} />
          <Route exact path="/news" component={NewsOverviewContainer} />
          <Route exact path="/news/:id" component={NewsItemContainer} />
          <Route exact path="/sessions" component={SessionsOverviewContainer} />
        </Switch>

      </div>
    );
  }
}

export default App;
