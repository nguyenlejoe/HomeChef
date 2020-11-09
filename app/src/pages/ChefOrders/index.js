import React from 'react';
import './ChefOrders.scss'
import Button from '../comps/WhiteButton';
import ConfirmOrder from '../../comps/ConfirmOrder';
import NavBarChef from '../../comps/NavBarChef';
import Avatar from '../../comps/Avatar';
import FoodDisplayCover from '../../comps/FoodDisplayCover';




export default function Home() {
  return<div className="app">
    <div className="topbuttons">
        <Button text="Pending Orders" color="Green" > </Button>
        <Button text="Confirmed Orders" ></Button>

        
    </div>
    <div className="Orderboxes">
    <ConfirmOrder Seller="Yunus Emre" Quantity="5x" Product="Fried Rice"></ConfirmOrder>
    <br></br>
    <ConfirmOrder></ConfirmOrder>
    </div>
    <div className="Nav">
    <NavBarChef></NavBarChef>
    </div>
    </div>

}
