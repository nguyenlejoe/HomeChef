import React from 'react';
import './index.scss'
import TopNav from '../comps/TopNav';
import FoodDisplayCover from '../comps/FoodDisplayCover';
import ViewCartButton from '../comps/ViewCartButton';
import NavBar from '../comps/NavBar';


export default function Home() {
  return<div className="app">
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
          <NavBar
          bgimg = "/Search.png"
          title = "Search"
          btnState = {true}
          orderActive = {true}
          ></NavBar>
        </div>
        
        
    </div>

}
