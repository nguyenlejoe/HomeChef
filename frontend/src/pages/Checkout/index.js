import React, { useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './Checkout.scss';
import CheckoutItem from '../../comps/CheckoutItem';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';


export default function CheckoutPage() {

  const {state,dispatch} = useContext(AppContext);

  const [cartItems, SetCart] = ([state.items]);

  const history = useHistory();


  console.log(state.items);
  

    if(state.qty != 0){

    var val = cartItems.reduce(function(previousValue, currentValue) {
        return {
          total: previousValue.total + currentValue.total
        }
      });
      console.log(val)
    }
    else{
        val = 0;
    }

//   total();

  return<div className="app">             
       <div>
           <TopBar onClick={()=>{
                history.push("/DashBoardGourmet");
           }}text="Cart"></TopBar>
       </div>
       <div className="checkout">

       {cartItems.map((o,i)=>{
           return <div className="checkouttwo">
           <CheckoutItem
           Itemnm={o.name}
           Pricetag={o.price}
           Quant={o.qty+"x"}
           onClick={()=>{
             
           }}
           ></CheckoutItem>
           </div>
          })}
        
          

            <div className="total">
                <div className="TotalText">TOTAL</div>
                <div className="PriceText">{val.total}</div>
            </div>
            
            <div className="ButtonBox"> 
            <Link to="/OrderConfirmation" style={{ textDecoration: 'none' }}>
                    <Button text="Checkout"
                     disabled={false}
                     onClick={()=>{
                         val.total = 0
                     }}
                    ></Button>
                    </Link>

            </div>
           
        </div>
    </div>
}
