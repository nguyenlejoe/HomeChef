import React from 'react';
import styled from 'styled-components';

const ItemBox=styled.div`
width: 250px;
height: 300px;
display:inline-flex;
flex-direction: column;
align-items:center;
justify-content:center;
padding: 10px;
`;

const ImageBox = styled.img`
    display: inline-flex;
    width: 225px;
    height: 225px;
    border-radius: 10px;
    object-fit: cover;
`;

const ItemText = styled.div`
display: inline-flex;
align-item: center;
justify-content: center;
width: 60%;
p{
    margin: 8px;
    font-size: 13px;
    font-family: sans-serif;
}
span{
color: #24B574;

}
`;

const OrderDetailsFood = ({quantity, food, foodimage, price}) => {

    return(
            <ItemBox>
                <ImageBox src={foodimage}/>
                <ItemText><span>{quantity}X </span>{" "+food} </ItemText>
                <ItemText>${price}</ItemText>
            </ItemBox>
    )

};


OrderDetailsFood.defaultProps={
    foodimage:'/friedrice.jpg',
    quantity:'3',
    food:'Fried Rice',
}

export default OrderDetailsFood;