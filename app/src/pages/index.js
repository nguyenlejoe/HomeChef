import React from 'react';
import './index.scss'
import TopNav from '../comps/TopNav';
import FoodDisplayCover from '../comps/FoodDisplayCover';


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
        </div>
    </div>

}
