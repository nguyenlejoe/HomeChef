import React from 'react';
import './ChefOrders.scss'
import Button from '../../comps/MainButton';
import ConfirmOrder from '../../comps/ConfirmOrder';
import NavBarChef from '../../comps/NavBarChef';





export default function Home() {
  return<div className="app">
    <div className="topbuttons">
        <Button text="Pending Orders" bgcolor="#24B574" radius="40px" width="170px" height="32px" > </Button>
        <Button text="Confirmed Orders" bgcolor="#C4C4C4" radius="40px" width="170px" height="32px" ></Button>

        
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
