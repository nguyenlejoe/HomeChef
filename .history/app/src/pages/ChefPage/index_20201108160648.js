import React from 'react';
<<<<<<< HEAD:app/src/pages/ChefPage.js
import './ChefReview.scss'
import NavBarGourmet from '../comps/NavBarGourmet';
import Avatar from '../comps/Avatar';
import FoodDisplayCover from '../comps/FoodDisplayCover';
=======
import './ChefPage.scss'
import NavBarGourmet from '../../comps/NavBarGourmet';
import Avatar from '../../comps/Avatar';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
>>>>>>> 065d6a6876a349750527cf8f60d28ccee673cebb:app/src/pages/ChefPage/index.js




<<<<<<< HEAD:app/src/pages/ChefPage.js
export default function ChefReviewPage() {
  return<div className="app">
=======
export default function ChefPage() {
  return<div className="ChefPageApp">
>>>>>>> 065d6a6876a349750527cf8f60d28ccee673cebb:app/src/pages/ChefPage/index.js
        <div className="CoverImage"></div>
        <div className="ChefDesc">
            <h2>Alex Inglis</h2>
            <p>Loves mama's chicken</p>
        </div>
        <div className="AvatarBox">
                <Avatar></Avatar>
                <a>Reviews</a>
            </div>
        <div className="FoodList">
            <div className="food">
            <FoodDisplayCover></FoodDisplayCover>
            </div>
            <div className="food">
            <FoodDisplayCover></FoodDisplayCover>
            </div>
            <div className="food">
            <FoodDisplayCover></FoodDisplayCover>
            </div>
            <div className="food">
            <FoodDisplayCover></FoodDisplayCover>
            </div>
        </div>
        
        <div className="Nav">
          <NavBarGourmet
          bgimg = "/Search.png"
          title = "Search"
          btnState = {true}
          orderActive = {true}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
