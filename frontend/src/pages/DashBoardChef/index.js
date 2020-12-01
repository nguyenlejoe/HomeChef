import React from 'react';
import './DashBoardChef.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';




export default function DashBoardChefPage() {

  const history = useHistory();

  
  

  return<div className="DashBoardChefApp">
        <h3>Order expected today</h3>
        <div className="OrderToday">
            
            <div className="SumBox"><SummaryBox note1="no onion"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/friedchicken.jpg" personimg="/person2.jpg" buyer="Milan" note1="extra sauce" product="Fried Chicken"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/friedrice.jpg" personimg="/person5.jpg" buyer="Semi" note1="extra pepper" product="Fried Rice"></SummaryBox></div>
            <div className="SumBox"><SummaryBox foodimg="/sandwhich.jpg" personimg="/person4.jpg" buyer="Yunus" note1="add cheese" product="BLT Sandwhich"></SummaryBox></div>
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
