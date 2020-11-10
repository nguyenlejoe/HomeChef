import React from 'react';
import './Checkout.scss';
import CheckoutItem from '../comps/CheckoutItem';
import Button from '../comps/MainButton';

export default function CheckoutPage() {
  return<div className="app">             
       <div>
           <div></div>
           <div>Cart</div>
       </div>
       <div>
           <CheckoutItem></CheckoutItem>
       </div>

        <div>
            <div>TOTAL</div>
            <div>12.99</div>
        </div>
        <div>
            <Button text="Checkout"></Button>
        </div>
    </div>
}
