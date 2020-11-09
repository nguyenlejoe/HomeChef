import React from 'react';
import './ChefOrders.scss'
<<<<<<< HEAD
import NavBarChef from '../comps/NavBarChef';
import SummaryBox from '../comps/SummaryBox';
import ActivityFeed from '../comps/ActivityFeed';



export default function ChefOrdersPage() {
  return<div className="app">
        <h3>Order expected today</h3>
        <div className="OrderToday">
            <div className="SumBox"><SummaryBox></SummaryBox></div>
            <div className="SumBox"><SummaryBox></SummaryBox></div>
            <a>Scroll down to view more</a>
        </div>

        <h3>Activity Feed</h3>
        <div className="ActivityFeedBox">
            <ActivityFeed></ActivityFeed>
        </div>
        <div className="Nav">
          <NavBarChef></NavBarChef>
        </div>
        
        
    </div>
=======
import Button from '../comps/WhiteButton';
import ConfirmOrder from '../comps/ConfirmOrder';
import NavBarChef from '../comps/NavBarChef';
import Avatar from '../comps/Avatar';
import FoodDisplayCover from '../comps/FoodDisplayCover';




export default function Home() {
  return<div className="app">
    <div className="topbuttons">
        <Button text="Pending Orders" color="Green" > </Button>
        <Button text="Confirmed Orders" ></Button>

        
    </div>
    <div className="Orderboxes">
    <ConfirmOrder Seller="Yunus Emre" Quantity="5x" Product="Fried Rice"></ConfirmOrder>
    <br></br>
    <ConfirmOrder></ConfirmOrder>
    </div>
    <div className="Nav">
    <NavBarChef></NavBarChef>
    </div>
    </div>
>>>>>>> 065d6a6876a349750527cf8f60d28ccee673cebb

}
