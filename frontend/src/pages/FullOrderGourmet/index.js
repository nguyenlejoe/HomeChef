import React, { useState, useEffect, useContext} from "react";
import './FullOrder.scss';
import {AppContext} from '../../context/provider';
import BackButton from "../../comps/BackButton";
import Avatar from '../../comps/Avatar';
import Button from '../../comps/MainButton';
import CoverImage from '../../comps/CoverImage';
import {useHistory, Link} from "react-router-dom";
import OrderDetailsChef from '../../comps/OrderDetailsUser';
import OrderDetailsFood from '../../comps/OrderDetailsFood';

export default function FullOrderGourmet(props,{chefName, foodName, description, ingredient, list, oNumber, date, time, phone}){
    

    var order = props.location.state.o;
    console.log(order);


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
                oNumber={order._id}
                total={"$"+order.totalPrice}
                />
            </div>           
        
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
     
    );
};

FullOrderGourmet.defaultProps = {

}