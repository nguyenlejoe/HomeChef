import React from 'react';
import './ChefPage.scss'
import NavBarGourmet from '../comps/NavBarGourmet';
import Avatar from '../comps/Avatar';
import FoodDisplayCover from '../comps/FoodDisplayCover';




export default function ChefPage() {
  return<div className="app">
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
