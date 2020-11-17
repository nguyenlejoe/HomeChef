import React from 'react';
import './SearchPage.scss';
import SearchTwo from '../../comps/SearchTwo';
import Foodcover from '../../comps/FoodDisplayCover';
import NavBarGourmet from '../../comps/NavBarGourmet';
import BackButton from '../../comps/BackButton';
import {useHistory, Link} from "react-router-dom";


export default function SearchPage() {

  const history = useHistory();


  return<div>
    <div className="SearchPopup">
      <SearchTwo></SearchTwo>
    </div>
    <div className="foodcovers">
      <Foodcover  Mealnm="Pad Thai" MealPrc="$8.99" ></Foodcover>
      <Foodcover  Mealnm="Fried Chicken" MealPrc="$8.99"></Foodcover>
      <Foodcover  Mealnm="Joe's Pho" MealPrc="$12.99" bgimg="./JoesPho.png"></Foodcover>
      <Foodcover  Mealnm="Veg Burger" MealPrc="$8.99"></Foodcover>
    </div>

    
    <div className="Nav">
          <NavBarGourmet
            active={2}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
            onClickOrder={()=>{
              history.push("/CurrentOrderPage");
            }}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
          ></NavBarGourmet>
        </div>
{/* <NavBarChef active={1}> </NavBarChef> */}
  </div>


}
