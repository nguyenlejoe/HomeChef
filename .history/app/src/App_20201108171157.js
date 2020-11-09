import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Pages from './pages/ChefReview';
import './App.scss';
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
import OrderConfirmation from './pages/OrderConfirmation';
import ChefOrders from './pages/ChefOrders';



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
      <Route path="/OrderConfirmation" exact component={OrderConfirmation}></Route>
      <Route path="/ChefOrders" exact component={ChefOrders}></Route>
      
      </Switch>
    </Router>
  );
}

export default App;