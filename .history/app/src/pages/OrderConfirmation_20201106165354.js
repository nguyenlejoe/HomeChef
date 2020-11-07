import React from 'react';
import './OrderConfirmation.scss';

export default function CheckoutPage() {
  return<div className="app">             
       <div className="cart">
           <TopBar text="Confirmation"></TopBar>
       </div>
       <div className="OrderConfirmed">
           <div className="checkoutone">
                Order confirmed
           </div>
           <OrderDetails bgimg="none"></OrderDetails>
       </div>
        <div className="button">
            <Button text="Checkout"></Button>
        </div>
    </div>
}
