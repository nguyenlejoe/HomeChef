import React, { useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './Checkout.scss';
import CheckoutItem from '../../comps/CheckoutItem';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import {Link, useHistory} from "react-router-dom";


export default function CheckoutPage() {

  const {state,dispatch} = useContext(AppContext);

  const [cartItems, SetCart] = ([state.items]);

  console.log(state.items);

  return<div className="app">             
       <div>
           <TopBar text="Cart"></TopBar>
       </div>
       <div className="checkout">

       {cartItems.map((o,i)=>{
           return <div className="checkouttwo">
           <CheckoutItem
           Itemnm={o.name}
           Pricetag={o.price}
           ></CheckoutItem>
           </div>
          })}

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
