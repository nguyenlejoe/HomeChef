import React from 'react';
import './DashBoardGourmet.scss'
import TopNav from '../../comps/TopNav';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import ViewCartButton from '../../comps/ViewCartButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import CuisineBar from '../../comps/CuisineBar';


export default function DashBoardGourmet() {
  return<div className="app">
        <div className="CuisineBox">
            <CuisineBar></CuisineBar>
        </div>
        <div className="TopNavCon">
          <TopNav></TopNav>
        </div>
        <div className="Content">
          <FoodDisplayCover></FoodDisplayCover>
          <FoodDisplayCover></FoodDisplayCover>
          <FoodDisplayCover></FoodDisplayCover>
          <FoodDisplayCover></FoodDisplayCover>
          <FoodDisplayCover></FoodDisplayCover>
          <FoodDisplayCover></FoodDisplayCover>
        </div>
        
        <div className="Cart">
          <ViewCartButton></ViewCartButton>
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
