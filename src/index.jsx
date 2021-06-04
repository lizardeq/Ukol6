import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink  
} from 'react-router-dom';
import Jana from './Jana';
import Jitka from './Jitka';
import KockomysiHra from './KockomysiHra';

const App = () => {
  return (
  <Router>
    <div className="navigation">
    <nav className="game__nav">
      <div>
      <img src="./assets/mouse_silhouette.png" alt="" className="nav__pic" id="nav__pic1" />
      </div>
      <div className="odkazy">
        <NavLink className="nav__link" activeClassName="nav__link--selected" exact to="/">O hře</NavLink> |
        <NavLink className="nav__link"activeClassName="nav__link--selected" to="/jitka">O Jitce</NavLink> |
        <NavLink className="nav__link"activeClassName="nav__link--selected" to="/jana">O Janě</NavLink>
      </div>
      <div>
      <img src="./assets/cat1_white.png" alt="" className="nav__pic" id="nav__pic2" />
      </div>
    </nav>
    </div>

    <Switch>
      <Route exact path="/">
        <KockomysiHra />
      </Route>

      <Route exact path="/jitka">
        <Jitka />
      </Route>

      <Route exact path="/jana">
        <Jana />
      </Route>
    </Switch>

  </Router>
);
};

render(<App />, document.querySelector('#app'));
