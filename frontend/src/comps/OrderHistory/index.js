import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Button from '../MainButton';

const ItemBox=styled.div`
width: 87vw;
display:inline-flex;
flex-direction: column;
align-items:center;
justify-content:center;
background: #F5F5F5;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 33px;
padding: 10px;
`;

const ChefBox = styled.div`
width: 87vw;
display:inline-flex;
align-items:center;
justify-content: start;
h2{
    margin-left: 10px;
    color: #2B445E;
    font-family: sans-serif;
}
`;

const MealBox = styled.div`
width: 87vw;
display:inline-flex;
align-items:center;
justify-content:center;
`;

const ItemImage = styled.div`
display: inline-flex;
// background-image:url(${props=>props.bgImg ? props.bgImg : "none"});
`;

const ItemText = styled.div`
display: inline-flex;
flex-direction: column;
align-item: center;
justify-content: space-around;
padding: 10px;
p{
    margin: 8px;
    font-size: 13px;
    font-family: sans-serif;
    font-weight: bold;
}
span{
color: #2B445E;

}
`;


const OrderHistory = ({name, oNumber, upTime, location, bgImg}) =>{
    
    return (
    <ItemBox>
        <ChefBox>
            <Avatar/>
            <h2>CHEF {name}</h2>
        </ChefBox>
        <MealBox>
            <ItemImage ><image src={bgImg}/></ItemImage>
            <ItemText>
                <p>Order number : {oNumber} </p>
                <p>Pick up time : {upTime}</p>
                <p>Location : {location}</p>
                <p><span onClick="">Chef contact details</span></p>
            </ItemText>
        </MealBox>
        <Button text="Order Again" radius="15px" disabled height="33px" width="118px"/>
    </ItemBox>
    )
}
    
    OrderHistory.defaultProps = {
        name: "Alex Inglis",
        oNumber:"1234567",
        upTime:"01/07/2020",
        location:"2136 Canada Way Burnaby",
        bgImg:"/food.png",
    }
    
    export default OrderHistory;