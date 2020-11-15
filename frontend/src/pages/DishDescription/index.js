import React, {useState} from 'react';
import './DishDescription.scss';
import Avatar from '../../comps/Avatar';
import Trending from '../../comps/TrendingTag';
import Input from '../../comps/PickUp';
import Counter from '../../comps/Counter';
import Calendar from '../../comps/Calendar';
import Button from '../../comps/MainButton';
import CoverImage from '../../comps/CoverImage';


export default function DishDescription(props,{chefName, foodName, description, ingredient, list}) {

    var dish = props.location.state.o;

    console.log(props.location.state);

    console.log(dish.user);


    return(
        <div className="appContainer">
            <div className="coverImage">
                <CoverImage bgimg={dish.image}></CoverImage>
                <div className="forLeft">
                    <Button  width="114px" height="36px" bgcolor="#E82828" text={dish.countInStock + " left"} radius="0px 10px 10px 0px" />
                </div>                
            </div>
            <h2>{chefName}</h2>
            <div className="Avatar">
                <Avatar/>
            </div>
            <div className="tagBox">
                <Trending/>
                <Trending text="Taiwan" bgcolor="#EB5757"/>
                <Trending text="Rice" bgcolor="#F2C94C"/>
            </div>
            <div className="foodDetail">
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
            </div>
            <div className="ingredients">
                <h3> {ingredient} </h3>
                <ul className="columnList">
                    <li>{list}</li>
                    <li>Vegetable</li>
                    <li>Garlic</li>
                    <li>Onion</li>
                    <li>Cooked Rice</li>
                    <li>Carrot</li>
                </ul>
            </div>
            <h4>Order for another day</h4>
            <div className="calendarBox">
                <Calendar/>
            </div>
            <h4>Add a note for the Chef</h4>
            <input/>
            <div className="counter"><Counter/></div>
            <Button width="175px" height="40px" text="Add to Cart"/>
        </div>
    )
}

DishDescription.defaultProps = {
    chefName: "Yunus Emre",
    foodName: "Fried Rice",
    description: "The choice of oil for fried rice plays an important part to create the authentic Asian flavor. Oils suitable for stir-frying are peanut oil, vegetable oil, and palm oil. They have a high smoking point which is suitable for stir-frying and a neutral taste that will not affect the flavor of the fried rice.",
    ingredient: "Ingredients",
    list:"Egg"
}