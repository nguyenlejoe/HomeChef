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
import OrderConfirmation from './pages/OrderConfirmation';
import Checkout from './pages/Checkout';
import ChefReview from './pages/ChefReview';
import ChefOrdersPending from './pages/ChefOrders-Pending';
import ChefOrdersConfirm from './pages/ChefOrders-Confirmed';
import AddBalance from './pages/AddBalance';
import CurrentOrderPage from './pages/CurrentOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import DishDescription from './pages/DishDescription';
import GourmetFavorites from './pages/FavoritesGourmet';
import ChefMyAccount from './pages/ChefMyAccount';
import ChefPage from './pages/ChefPage';
import ChefCalendar from './pages/ChefCalendar';
import LoadingPage from './pages/LoadingPage';
import SearchPage from './pages/SearchPage';
import './App.scss';





function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={LoadingPage}></Route>
      <Route path="/ChefMyAccount" exact component={ChefMyAccount}></Route>
      <Route path="/ChefOrdersConfirm" exact component={ChefOrdersConfirm}></Route>
      <Route path="/GourmetFavorites" exact component={GourmetFavorites}></Route>
      <Route path="/Login" exact component={Login}></Route>
      <Route path="/CreateAccountChef" exact component={CreateAccountPageChef}></Route>
      <Route path="/DashBoardGourmet" exact component={DashBoardGourmet}></Route>
      <Route path="/CreateAccountGourmet" exact component={CreateAccountGourmet}></Route>
      <Route path="/DashBoardChef" exact component={DashBoardChef}></Route>
      <Route path="/MyAccountGourmet" exact component={MyAccountGourmet}></Route>
      <Route path="/CreateItem" exact component={CreateItem}></Route>
      <Route path="/OrderConfirmation" exact component={OrderConfirmation}></Route>
      <Route path="/Checkout" exact component={Checkout}></Route>
      <Route path="/ChefReview" exact component={ChefReview}></Route>
      <Route path="/AddBalance" exact component={AddBalance}></Route>
      <Route path="/CurrentOrderPage" exact component={CurrentOrderPage}></Route>
      <Route path="/OrderHistoryPage" exact component={OrderHistoryPage}></Route>
      <Route path="/DishDescription" exact component={DishDescription}></Route>
      <Route path="/ChefOrdersConfirm" exact component={ChefOrdersConfirm}></Route>
      <Route path="/ChefOrdersPending" exact component={ChefOrdersPending}></Route>
      <Route path="/ChefPage" exact component={ChefPage}></Route>
      <Route path="/ChefCalendar" exact component={ChefCalendar}></Route>
      <Route path="/LoadingPage" exact component={LoadingPage}></Route>
      <Route path="/SearchPage" exact component={SearchPage}></Route>

      </Switch>
    </Router>
  );
}

export default App;
