import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateAccountPageChef from './pages/CreateAccountChef';
import Login from './pages/Login/';
import DashBoardGourmet from './pages/DashBoardGourmet/';
import CreateAccountGourmet from './pages/CreateAccountGourmet';
import DashBoardChef from './pages/DashBoardChef';
import MyAccountGourmet from './pages/MyAccountGourmet';
import CreateItem from './pages/CreateItem';



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/CreateAccountChef" exact component={CreateAccountPageChef}></Route>
      <Route path="/DashBoardGourmet" exact component={DashBoardGourmet}></Route>
      <Route path="/CreateAccountGourmet" exact component={CreateAccountGourmet}></Route>
      <Route path="/DashBoardChef" exact component={DashBoardChef}></Route>
      <Route path="/MyAccountGourmet" exact component={MyAccountGourmet}></Route>
      <Route path="/CreateItem" exact component={CreateItem}></Route>
      
      </Switch>
    </Router>
  );
}

export default App;
