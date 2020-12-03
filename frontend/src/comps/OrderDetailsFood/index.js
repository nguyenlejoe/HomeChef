import React from 'react';
import styled from 'styled-components';

const ItemBox=styled.div`
width: 250px;
height: 250px;
display:inline-flex;
flex-direction: column;
align-items:center;
justify-content:center;
// background: #F5F5F5;
// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// border-radius: 33px;
padding: 10px;
`;

const ImageBox = styled.img`
    display: inline-flex;
    width: 80%;
    height: 80%;
    border-radius: 10px;
    object-fit: cover;
`;

const ItemText = styled.div`
display: inline-flex;
align-item: center;
justify-content: center;
width: 60%;
padding: 10px;
p{
    margin: 8px;
    font-size: 13px;
    font-family: sans-serif;
}
span{
color: #24B574;

}
`;

const OrderDetailsFood = ({quantity, food, foodimage}) => {

    return(
            <ItemBox>
                <ImageBox src={foodimage}/>
                <ItemText><span>{quantity}X</span>{food} </ItemText>
            </ItemBox>
    )

};


OrderDetailsFood.defaultProps={
    foodimage:'/friedrice.jpg',
    quantity:'3',
    food:'Fried Rice',
}

export default OrderDetailsFood;