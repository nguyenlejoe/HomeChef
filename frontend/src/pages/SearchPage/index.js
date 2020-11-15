import React from 'react';
import './SearchPage.scss';
import SearchTwo from '../../comps/SearchTwo';
import Foodcover from '../../comps/FoodDisplayCover';
import NavBarChef from '../../comps/NavBarChef';
import BackButton from '../../comps/BackButton';


export default function SearchPage() {

  return<div>
    <div className="backbutton">
        <BackButton></BackButton>
    </div>
    <div className="SearchPopup">
      <SearchTwo></SearchTwo>
    </div>
    <div className="foodcovers">
      <Foodcover  Mealnm="Pad Thai" MealPrc="$8.99" ></Foodcover>
      <Foodcover  Mealnm="Fried Chicken" MealPrc="$8.99"></Foodcover>
      <Foodcover  Mealnm="Joe's Pho" MealPrc="$12.99" bgimg="./JoesPho.png"></Foodcover>
      <Foodcover  Mealnm="Veg Burger" MealPrc="$8.99"></Foodcover>
      <Foodcover  Mealnm="Yunus' Fried Rice" MealPrc="$8.99"></Foodcover>
      <Foodcover  Mealnm="Pad Thai" MealPrc="$8.99"></Foodcover>
    </div>

{/* <NavBarChef active={1}> </NavBarChef> */}
  </div>


}
