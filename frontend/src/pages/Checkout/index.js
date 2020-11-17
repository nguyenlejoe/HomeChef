import React from 'react';
import './Checkout.scss';
import CheckoutItem from '../../comps/CheckoutItem';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import {Link, useHistory} from "react-router-dom";


export default function CheckoutPage() {
  return<div className="app">             
       <div>
           <TopBar text="Cart"></TopBar>
       </div>
       <div className="checkout">
           <div className="checkoutone">
             <CheckoutItem></CheckoutItem>
           </div>
           <div className="checkouttwo">
             <CheckoutItem Itemnm="Yunus's Cold noodle" Note="No onions"></CheckoutItem>
           </div>
            <div className="total">
                <div className="TotalText">TOTAL</div>
                <div className="PriceText">12.99</div>
            </div>
            
            <div className="ButtonBox"> 
            <Link to="/OrderConfirmation" style={{ textDecoration: 'none' }}>
                    <Button text="Checkout"></Button>
                    </Link>

            </div>
           
        </div>
    </div>
}
