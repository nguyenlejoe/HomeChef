import { on } from 'nodemon';
import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import AvatarOverlap from '../AvatarOverlap';

const ConfirmContainer = styled.div`
    width: 308px;
    height: 284px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const AvatarPlaceHolder = styled.div`
    height:30%;
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:40px;
    div{
        z-index:1;
    }


`;

const OrderBox = styled.div`
    width: 150px;
    height: 25px;
    background: #FFFFFF;
    border: 0.4px solid #9D9D9D;
    box-sizing: border-box;
    border-radius: 10px;
    margin:15px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ConfirmButtonContainer = styled.div`
    display:flex;
`;

const SellerLabel = styled.label`
`;

const ConfirmButtons = styled.div`

    width: 120px;
    height: 30px;
    margin:15px;
    background: #24B574;
    border-radius: 18px;
    background-image:url(/CheckMark.png);
    background-repeat: no-repeat;
    background-position:center;

    ${props => props.active === true && css`
    background: #EF4800;
    background-image:url(/Ex.png);
    background-repeat: no-repeat;
    background-position:center;
    `}
`;

const ConfirmOrder = ({Seller, Quantity, Product, onClick}) =>{
    return <ConfirmContainer>
            <AvatarPlaceHolder>
            <AvatarOverlap></AvatarOverlap>
            </AvatarPlaceHolder>
                <SellerLabel>{Seller}'s Order</SellerLabel>
            <OrderBox>
                {Quantity} {Product}
            </OrderBox>
            <labe>Confirm Order?</labe>
            <ConfirmButtonContainer>
                    <ConfirmButtons onClick={onClick}></ConfirmButtons>
                    <ConfirmButtons onClick={onClick}  active={true}></ConfirmButtons>
            </ConfirmButtonContainer>
            <a>View full order details</a>
            
    </ConfirmContainer>
}

ConfirmOrder.defaultProps = {
    Seller:"Alex",
    Quantity:"2x",
    Product: "Cold Noodles"
}

export default ConfirmOrder;