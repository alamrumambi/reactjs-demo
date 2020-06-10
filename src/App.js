import React from 'react';
import './App.css';
import Data from './components/Data';
import {AddData} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Spain League Football Teams</h1>
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/teams">Home</Link>
            </li>|
            <li>
              <Link to="/addData">AddData</Link>
            </li>
          </ul>
          <hr></hr>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/teams" /> }></Route>
          <Route path="/teams" component={ Data }></Route>
          <Route path="/addData" component={ AddData }></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;