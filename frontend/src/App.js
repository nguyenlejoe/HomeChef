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
import EditMenuItem from './pages/EditMenuItems';
import FullOrderGourmet from './pages/FullOrderGourmet';
import AppProvider, { AppContext } from './context/provider';
import './App.scss';



function App() {
  return (
    <AppProvider>
    <Router>
      <Switch>
      <Route path="/" exact component={LoadingPage}/>
      <Route path="/ChefMyAccount" exact component={ChefMyAccount}/>
      <Route path="/ChefOrdersConfirm" exact component={ChefOrdersConfirm}/>
      <Route path="/GourmetFavorites" exact component={GourmetFavorites}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/CreateAccountChef" exact component={CreateAccountPageChef}/>
      <Route path="/DashBoardGourmet" exact component={DashBoardGourmet}/>
      <Route path="/CreateAccountGourmet" exact component={CreateAccountGourmet}/>
      <Route path="/DashBoardChef" exact component={DashBoardChef}/>
      <Route path="/MyAccountGourmet" exact component={MyAccountGourmet}/>
      <Route path="/CreateItem" exact component={CreateItem}/>
      <Route path="/OrderConfirmation" exact component={OrderConfirmation}/>
      <Route path="/Checkout" exact component={Checkout}/>
      <Route path="/ChefReview" exact component={ChefReview}/>
      <Route path="/AddBalance" exact component={AddBalance}/>
      <Route path="/CurrentOrderPage" exact component={CurrentOrderPage}/>
      <Route path="/OrderHistoryPage" exact component={OrderHistoryPage}/>
      <Route path="/DishDescription" exact component={DishDescription}/>
      <Route path="/ChefOrdersConfirm" exact component={ChefOrdersConfirm}/>
      <Route path="/ChefOrdersPending" exact component={ChefOrdersPending}/>
      <Route path="/ChefPage" exact component={ChefPage}/>
      <Route path="/ChefCalendar" exact component={ChefCalendar}/>
      <Route path="/LoadingPage" exact component={LoadingPage}/>
      <Route path="/SearchPage" exact component={SearchPage}/>
      <Route path="/EditMenuItem" exact component={EditMenuItem}/>
      <Route path="/FullOrderGourmet" exact component={FullOrderGourmet}/>

      </Switch>
    </Router>
    </AppProvider>
  );
}

export default App;
