import React from 'react';
import './OrderConfirmation.scss';
import Button from '../comps/MainButton';
import TopBar from '../comps/TopBar';
import OrderDetails from '../comps/OrderDetails';

export default function CheckoutPage() {
  return<div className="app">             
       <div className="cart">
           <TopBar text="Confirmation"></TopBar>
       </div>
       <div className="OrderConfirmed">
            Order confirmed
        </div>
           <OrderDetails bgimg="none"></OrderDetails>
       
        <div className="ButtonBox"> 
            <Button text="Continue"></Button>
        </div>
    </div>
}
