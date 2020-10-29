import React from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';

const FoodDisplayCont = styled.div`
cursor:pointer;
`
const FoodCont = styled.div`
height: 238px;
width: 159px;
left: 0px;
top: 0px;
border-radius: 36px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.79) 100%);
filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.25));
background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
background-size:cover;

`
const Foodtxt = styled.div`
position:relative;
display:flex;
flex-direction:column;
text-align:center;
top:160px;
color:white;
font-weight: 500;
font-size: 19px;
line-height: 27px;
`
const MealName = styled.div`
font-size: 23px;
`
const MealPrice = styled.div`

`





const FoodDisplayCover = ({Mealnm, MealPrc, bgimg}) => {
    
    return <FoodDisplayCont>
        <FoodCont  bgimg={bgimg}>
            <Foodtxt>
            <MealName>{Mealnm}</MealName>
            <MealPrice>{MealPrc}</MealPrice>
            </Foodtxt>
        </FoodCont>
    </FoodDisplayCont>

}

FoodDisplayCover.defaultProps = {
    
    Mealnm:"Joe's Pho",
    MealPrc: "$12.99",
    bgimg : "./JoesPho.png",
   

}

export default FoodDisplayCover;