import React from 'react';
import './Checkout.scss';
import CheckoutItem from '../comps/CheckoutItem';


export default function Checkout() {
  return<div className="app">             
       <div>
           <div></div>
           <div>Cart</div>
       </div>
       <div>
           {/* <div>1x</div>
           <div>Yunus's Fried rice</div>
           <div>12.99<div></div></div> */}
           <Checkoutitemcont></Checkoutitemcont>
       </div>

        <div>
            <div>TOTAL</div>
            <div>12.99</div>
        </div>
    </div>
}
