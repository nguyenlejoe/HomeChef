import React from 'react';
import './DashBoardGourmet.scss'
import TopNav from '../../comps/TopNav';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import ViewCartButton from '../../comps/ViewCartButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import CuisineBar from '../../comps/CuisineBar';
import {useHistory, Link} from "react-router-dom";


export default function DashBoardGourmet() {

  const history = useHistory();

  return<div className="DashBoardGourmetApp">
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
            active={1}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
