import React from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';
import CoverImage from '../CoverImage';

const FoodDisplayCont = styled.div`
cursor:pointer;
height: 238px;
width: 159px;
`;
// const FoodImage = styled.div`
// cursor:pointer;
// height: 238px;
// width: 159px;
// // left: 0px;
// // top: 0px;
// // border-radius: 36px;
// // background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.79) 100%);
// // opacity:100;
// `;
// const FoodCont = styled.div`
// // height: 238px;
// // width: 159px;
// // left: 0px;
// // top: 0px;
// // border-radius: 36px;
// // background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.79) 100%);
// // filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.25));
// // background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
// // background-size:cover;
// `;
const Foodtxt = styled.div`
position:relative;
display:flex;
flex-direction:column;
text-align:center;
top:-100px;
color:white;
font-weight: 500;
font-size: 19px;
line-height: 27px;
width:110px;
justify-content:center;
align-items:center;
left:25px;
z-index:1;


`;
const MealName = styled.div`
font-size: 23px;


`;
const MealPrice = styled.div`

`;

const ImgCont = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
border-radius: 36px;
filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.25));



`;

const Test = styled.div`
position:relative;
top:240px;
height:238px;
width:100%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.79) 100%);
position:relative;
border-radius: 36px;
z-index:1
`;







const FoodDisplayCover = ({Mealnm, MealPrc, bgimg}) => {
    
    return <FoodDisplayCont>
     
        <ImgCont src={bgimg}></ImgCont>
        <Foodtxt>
            <MealName>{Mealnm}</MealName>
            <MealPrice>${MealPrc}</MealPrice>
            </Foodtxt>
      
        

        {/* <FoodCont>
        <FoodImage>
        <Foodtxt>
            <MealName>{Mealnm}</MealName>
            <MealPrice>${MealPrc}</MealPrice>
            </Foodtxt>
        <Test>
        </Test>
        <ImgCont src={bgimg}></ImgCont>
        </FoodImage>
    

        </FoodCont> */}
    </FoodDisplayCont>

}

FoodDisplayCover.defaultProps = {
    
    Mealnm:"Joe's Pho",
    MealPrc: "$12.99",
    bgimg : "./JoesPho.png",
   

}

export default FoodDisplayCover;