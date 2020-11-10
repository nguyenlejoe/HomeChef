import React from 'react';
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
import Checkout from './pages/Checkout';
import ChefReview from './pages/ChefReview';
import ChefOrdersConfirmed from './pages/ChefOrdersConfirmed';
import AddBalance from './pages/AddBalance';
import CurrentOrderPage from './pages/CurrentOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import DishDescription from './pages/DishDescription';
import ChefOrders from './pages/ChefOrders-Pending';
import ChefOrdersconfirm from './pages/ChefOrders-Confirmed';
import GourmetFavorites from './pages/FavoritesGourmet';




function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={GourmetFavorites}></Route>
      {/* <Route path="/" exact component={Login}></Route> */}
      <Route path="/CreateAccountChef" exact component={CreateAccountPageChef}></Route>
      <Route path="/DashBoardGourmet" exact component={DashBoardGourmet}></Route>
      <Route path="/CreateAccountGourmet" exact component={CreateAccountGourmet}></Route>
      <Route path="/DashBoardChef" exact component={DashBoardChef}></Route>
      <Route path="/MyAccountGourmet" exact component={MyAccountGourmet}></Route>
      <Route path="/CreateItem" exact component={CreateItem}></Route>
      <Route path="/OrderConfirmation" exact component={OrderConfirmation}></Route>
      <Route path="/Checkout" exact component={Checkout}></Route>
      <Route path="/ChefReview" exact component={ChefReview}></Route>
      <Route path="/ChefOrdersConfirmed" exact component={ChefOrdersConfirmed}></Route>
      <Route path="/AddBalance" exact component={AddBalance}></Route>
      <Route path="/CurrentOrderPage" exact component={CurrentOrderPage}></Route>
      <Route path="/OrderHistoryPage" exact component={OrderHistoryPage}></Route>
      <Route path="/DishDescription" exact component={DishDescription}></Route>

      </Switch>
    </Router>
  );
}

export default App;
