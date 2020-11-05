import React from 'react';
import './Checkout.scss';
import CheckoutItem from '../comps/CheckoutItem';
import Button from '../comps/MainButton';
import TopBar from '../comps/TopBar';

export default function CheckoutPage() {
  return<div className="app">             
       <div>
           <TopBar text="Cart"></TopBar>
       </div>
       <div className="checkout">
           <CheckoutItem></CheckoutItem>
       </div>

        <div className="total">
            <div>TOTAL</div>
            <div>12.99</div>
        </div>
        <div className="button">
            <Button text="Checkout"></Button>
        </div>
    </div>
}
