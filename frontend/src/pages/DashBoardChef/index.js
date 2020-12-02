import React from 'react';
import './DashBoardChef.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';




export default function DashBoardChefPage() {


  const {state,dispatch} = useContext(AppContext);
  const [orders, setOrders] = useState([]); 


  const history = useHistory();


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
