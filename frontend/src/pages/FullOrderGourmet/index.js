import React, { useState, useEffect, useContext} from 'react';
import './FullOrder.scss';
import {AppContext} from '../../context/provider';
import BackButton from "../../comps/BackButton";
import Avatar from '../../comps/Avatar';
import Button from '../../comps/MainButton';
import CoverImage from '../../comps/CoverImage';
import {useHistory, Link} from "react-router-dom";
import OrderDetailsChef from '../../comps/OrderDetailsUser';
import OrderDetailsFood from '../../comps/OrderDetailsFood';
import NavBar from '../../comps/NavBarGourmet';
import axios from "axios";

export default function FullOrderGourmet(props,{chefName, foodName, description, ingredient, list, oNumber, date, time, phone}){
    

    var order = props.location.state.o;
    console.log(order);

    const history = useHistory();

    return(
        <div className="FullOrderCont">
            <div className="BackButtonCont">
                <Link to="/CurrentOrderPage">
                    <BackButton/>
                </Link>
                <p>Full Order Details</p>
            </div>
            <div className="OrderCont">
                <OrderDetailsChef
                chefName={order.name}
                oNumber={order._id}
                total={"$"+order.totalPrice}
                />
            </div>           
            <hr width="300px"></hr>
            <div className="orderCont">
            {order.orderItems.map((o,i)=>{
                return <div className="FoodDetails"> 
                <OrderDetailsFood
                quantity={o.qty}
                food={o.name}
                price={o.price}
                foodimage={o.image}
                />
            </div>
            })}
            </div>
            <div className="Nav">
                <NavBar
                active={1}
                onClickAccount={()=>{
                  history.push("/MyAccountGourmet");
                }}
                onClickOrder={()=>{
                  history.push("/CurrentOrderPage");
                }}
                onClickSearch={()=>{
                  history.push("/SearchPage");
                }}
                />
            </div>
        
         </div>   
     
    );
};

FullOrderGourmet.defaultProps = {

}