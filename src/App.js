import React from 'react';
import './App.css';
import Data from './components/Data';
import { FavTeam } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Spain League Football Teams</h1>
          <div className="nav-bar">
            <ul>
              <li>
                <Link to="/teams">Home</Link>
              </li>|
            <li>
                <Link to="/favourite-teams">Favourite Teams</Link>
              </li>
            </ul>
            <hr></hr>
          </div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/teams" />}></Route>
            <Route path="/teams" component={Data}></Route>
            <Route path="/favourite-teams" component={FavTeam}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;