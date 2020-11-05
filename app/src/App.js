import React from 'react';
//only need to import scss once here
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateAccountPage from './pages/CreateAccount/';
import Login from './pages/Login/';
import DashBoardGourmet from './pages/DashBoardGourmet/';



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/CreateAccount" exact component={CreateAccountPage}></Route>
      <Route path="/DashBoardGourmet" exact component={DashBoardGourmet}></Route>
      </Switch>
    </Router>
  );
}

export default App;
