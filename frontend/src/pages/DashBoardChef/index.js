import React, {useReducer, useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './DashBoardChef.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';




export default function DashBoardChefPage() {

  const {state,dispatch} = useContext(AppContext);
  const [orders, setOrders] = useState([]); 
  const [face, setFace] = useState();
  const [active, setActive] = useState(true); 

  const history = useHistory();

  const HandleOrders = async() =>{

    const config = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };
  
    const resp = await axios.get(`/api/orders`, config);
    console.log(resp.data.user);
    setOrders(...[resp.data]);


  }


  const RandomFace = async() =>{
    const face = await axios.get("https://randomuser.me/api/?results=10");
    setFace(face);
    // var data = JSON.parse(face.data)
    console.log(face);
  }

  useEffect(()=>{
    HandleOrders();
    RandomFace();
  },[]);
  
  //test

  return<div className="DashBoardChefApp">
    
        <h3>Order expected today</h3>
        <div className="OrderToday">
            {orders.map((o,i)=>{
            if(o.orderItems.length > 1){
              o.orderItems[0].name = "Multiple Items"
            }

            var counter = 0;

            console.log(counter)

            
              return <div className="SumBox">
                <Link style={{ textDecoration: 'none' }} to={{ pathname: "/FullOrderChef", state: {o} }}>
                <SummaryBox
                  buyer={o.user.name}
                  product={o.orderItems[0].name}
                  foodimg={o.orderItems[0].image}
                  note1={"Total price $" + o.totalPrice}
                  // personimg={facepic.data.results[counter++].picture.large}
                  // buyerimg={o.orderItems[1].image}
                /></Link>
              </div>
            })}
  
        </div>

        <h3>Activity Feed</h3>
        <div className="ActivityFeedBox">
            <ActivityFeed/>
        </div>
        <div className="Nav">
          <NavBarChef
          active={1}
          onClickCreate={()=>{
            history.push("/CreateItem");
          }}
          onClickAccount={()=>{
            history.push("/ChefMyAccount");
          }}
          onClickOrder={()=>{
            history.push("/ChefOrdersPending");
          }}
          onClickCalendar={()=>{
            history.push("/ChefCalendar");
          }}
          ></NavBarChef>
        </div>
        
        
    </div>

}
