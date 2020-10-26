import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const NavContainer = styled.div`
display:flex;
height:107px;
width:420px;
`;

const NavBox = styled.div`
justify-content:space-around;
display:flex;
align-items:center;
position:relative;
bottom:-22px;
width:100%;
height:80%;
border-style:solid;
border-width:1px;
border-color:#C6C6C6;

`;

const NavButton = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:2px;
    width:15%;
    height:80%; 
    // background-color:black;
    text-align:center;

    ${props => props.active === true && css`
        display:none;
        `}
`;

const NavIcon = styled.div`
    margin-top:3px;
    margin-right:2px;
    width:55%;
    height:55%;
    background-size:contain;
    background-repeat: no-repeat;
    background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
`;

const NavLabel = styled.label`
    height:20px;
    width:100%; 

`;

const OrderNum = styled.div`
    font-size:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:18px;
    height:18px;
    background-color:red;
    position:fixed;
    left:145px;
    top:45px;
    border-radius:100px;
    z-index: 1;

    ${props => props.active === true && css`
    display:none;
    `}
`;





const NavBar = ({bgimg,title, btnState, orderActive, orderNum}) => {

    
    return <NavContainer>
        <OrderNum active={orderActive}>
            {orderNum}
        </OrderNum>
        <NavBox>
            <NavButton >
                <NavIcon bgimg="/home.png"></NavIcon>
                <NavLabel>Home</NavLabel>
            </NavButton>

            <NavButton>
                <NavIcon bgimg={bgimg}></NavIcon>
                <NavLabel>{title}</NavLabel>
            </NavButton>
            <NavButton active={btnState}>
                <NavIcon bgimg="CreateListing.png"></NavIcon>
                <NavLabel>Create Listing </NavLabel>
            </NavButton>
            <NavButton>
                <NavIcon bgimg="/calendar.png"></NavIcon>
                <NavLabel>Calendar</NavLabel>
            </NavButton>
            <NavButton>
                <NavIcon bgimg="accountIcon.png"></NavIcon>
                <NavLabel>Account</NavLabel>
            </NavButton>
        </NavBox>
    </NavContainer>

}

NavBar.defaultProps = {
    title: "label",
    bgimg: "/Home.png",
    orderNum: "0"

}

export default NavBar;