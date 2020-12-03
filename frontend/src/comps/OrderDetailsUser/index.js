import React, { useState, useEffect, useContext} from "react";
import Avatar from '../Avatar';
import styled from 'styled-components';

const OrderCont = styled.div`

    display:inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0 0 0;
    width: 100%;

`;

const UserAvatar = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    p{
        font-size: 18px;
        color: #24B574;
    }

`;

const FullOrderDetails = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 100%;

`;

const OrderText = styled.p`
    

`;

const OrderDetailsChef = ({chefName, oNumber, date, time, phone, total, title}) => {
    return(
        <OrderCont>
            <UserAvatar>
                <Avatar/>
                <OrderText>{title} {chefName}</OrderText>
            </UserAvatar>
            <FullOrderDetails>
                
                <OrderText>Order Number: {oNumber}</OrderText>
                <OrderText>Pick up date & time: {date}  {time}</OrderText>
                <OrderText>Total Price {total}</OrderText>
                <OrderText>Contact Number: {phone}</OrderText>
            </FullOrderDetails>
        </OrderCont>
    )
};

OrderDetailsChef.defaultProps = {
    
    title:"Chef",
    chefName:"Alex Inglis",
    oNumber:"#1234567",
    date:"18/01/2021",
    time:"16:00PM",
    phone:"778 628 2716",
    location: "2456 Hastings St"

}

export default OrderDetailsChef;