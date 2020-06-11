import React from 'react';
import './App.css';
import TeamsList from './components/TeamsList';
import TeamDetail from './components/TeamDetail';
import { Favourites } from './pages';
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
                <Link to="/">Home</Link>
              </li>|
            <li>
                <Link to="/favourite-teams">Favourite Teams</Link>
              </li>
            </ul>
            <hr></hr>
          </div>
          <Switch>
            <Route exact path="/" component={TeamsList}></Route>
            <Route path="/favourite-teams" component={Favourites}></Route>
            <Route path={`/team/:id`} component={ TeamDetail }></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;