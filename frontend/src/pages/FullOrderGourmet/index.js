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

export default function FullOrderGourmet({chefName, foodName, description, ingredient, list, oNumber, date, time, phone}){
    
    // const {state,dispatch} = useContext(AppContext);
    
    // const [count,setCount] = useState(1)

    // function minusCount() {
    //     count > 1 &&
    //     setCount(prevCount => prevCount -1)
    // };

    // function plusCount() {
    //     setCount(prevCount => prevCount +1)
    // };

    // var dish = props.location.state.o;


    return(
        <div className="FullOrderCont">
            <div className="BackButtonCont">
                <Link to="/CurrentOrderPage">
                    <BackButton/>
                </Link>
                <p>Full Order Details</p>
            </div>
            <div className="OrderCont">
                <OrderDetailsChef/>
            </div>            
            <div className="FoodDetails">                
                <OrderDetailsFood/>
            </div>
            
        </div>
    );
};

FullOrderGourmet.defaultProps = {

}