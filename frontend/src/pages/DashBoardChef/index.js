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
  const [facepic, setFace] = useState();

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
                <SummaryBox
                  buyer={o.user.name}
                  product={o.orderItems[0].name}
                  foodimg={o.orderItems[0].image}
                  // personimg={facepic.data.results[counter++].picture.large}
                  
                ></SummaryBox>
              </div>
            })}
            
            {/* <div className="SumBox"><SummaryBox note1="no onion"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/friedchicken.jpg" personimg="/person2.jpg" buyer="Milan" note1="extra sauce" product="Fried Chicken"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/friedrice.jpg" personimg="/person5.jpg" buyer="Semi" note1="extra pepper" product="Fried Rice"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/sandwhich.jpg" personimg="/person4.jpg" buyer="Yunus" note1="add cheese" product="BLT Sandwhich"></SummaryBox></div> */}
        </div>

        <h3>Activity Feed</h3>
        <div className="ActivityFeedBox">
            <ActivityFeed></ActivityFeed>
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
