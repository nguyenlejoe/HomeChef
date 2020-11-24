import React from 'react';
import './ChefPage.scss'
import NavBarGourmet from '../../comps/NavBarGourmet';
import Avatar from '../../comps/Avatar';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import CoverImage from '../../comps/CoverImage';




export default function ChefPage({text,name}) {
  return<div className="ChefPageApp">
            <div className="CoverBox">
                <CoverImage bgimg="/alex.jpg"></CoverImage>
            </div>
        <div className="ChefDesc">
            <h2>{name}</h2>
            <p>{text}</p>
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

ChefPage.defaultProps = {
    name: "Alex Inglis",
    text:"The God of Kitchen"
}