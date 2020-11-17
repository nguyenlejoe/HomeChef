import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../MainButton';

const NavContainer = styled.div`
display:flex;
height:100%;
width:100%;
background-color:#FFFFFF;
`;

const NavBox = styled.div`
justify-content:space-around;
display:flex;
align-items:center;
position:relative;
width:100%;
height:100%;
border-top: 1px solid #C6C6C6;


`;

const NavButton = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:2px;
    width:15%;
    height:80%; 
    text-align:center;

`;

const NavIcon = styled.div`
    margin-top:3px;
    margin-right:2px;
    width:55%;
    height:55%;
    background-size:contain;
    background-repeat: no-repeat;
   

`;

const NavLabel = styled.div`
    height:20px;
    width:100%; 
    color:${props => props.ButtonActive};

`;






const NavBar = ({active, onClickHome, onClickSearch, onClickOrder, onClickAccount}) => {

const [ButtonActiveVal,SetActive] = useState(active);
    
    return <NavContainer>
        <NavBox>
            
            <NavButton onClick={onClickHome} 
            ButtonActive = {ButtonActiveVal === 1 ? "#24B574" : "#C6C6C6"}
            >
            <NavIcon>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5834 29.1667V20.4167H20.4167V29.1667H27.7084V17.5H32.0834L17.5001 4.375L2.91675 17.5H7.29175V29.1667H14.5834Z" fill={ButtonActiveVal === 1 ? "#24B574" : "#C6C6C6"}/>
                </svg>
            </NavIcon>
                <NavLabel ButtonActive={ButtonActiveVal === 1 ? "#24B574" : "#C6C6C6"}>Home</NavLabel>
            </NavButton>

            <NavButton
            onClick={onClickSearch}
            ButtonActive = {ButtonActiveVal === 2 ? "#24B574" : "#C6C6C6"}
            >
                <NavIcon>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3125 26.25C21.3531 26.25 26.25 21.3531 26.25 15.3125C26.25 9.27189 21.3531 4.375 15.3125 4.375C9.27189 4.375 4.375 9.27189 4.375 15.3125C4.375 21.3531 9.27189 26.25 15.3125 26.25Z" stroke={ButtonActiveVal === 2 ? "#24B574" : "#C6C6C6"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.625 30.625L23.0416 23.0417" stroke={ButtonActiveVal === 2 ? "#24B574" : "#C6C6C6"}stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NavIcon>
                <NavLabel ButtonActive={ButtonActiveVal === 2 ? "#24B574" : "#C6C6C6"} >Search</NavLabel>
            </NavButton>
            
            <NavButton
            onClick={onClickOrder}
            ButtonActive = {ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}
            >
                <NavIcon>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6252 7.29167C29.0064 6.78125 27.2272 6.5625 25.521 6.5625C22.6772 6.5625 19.6147 7.14583 17.5002 8.75C15.3856 7.14583 12.3231 6.5625 9.47933 6.5625C6.63558 6.5625 3.57308 7.14583 1.4585 8.75V30.1146C1.4585 30.4792 1.82308 30.8437 2.18766 30.8437C2.3335 30.8437 2.40641 30.7708 2.55225 30.7708C4.521 29.8229 7.36475 29.1667 9.47933 29.1667C12.3231 29.1667 15.3856 29.75 17.5002 31.3542C19.4689 30.1146 23.0418 29.1667 25.521 29.1667C27.9272 29.1667 30.4064 29.6042 32.4481 30.6979C32.5939 30.7708 32.6668 30.7708 32.8127 30.7708C33.1772 30.7708 33.5418 30.4062 33.5418 30.0417V8.75C32.6668 8.09375 31.7189 7.65625 30.6252 7.29167ZM30.6252 26.9792C29.021 26.4687 27.271 26.25 25.521 26.25C23.0418 26.25 19.4689 27.1979 17.5002 28.4375V11.6667C19.4689 10.4271 23.0418 9.47917 25.521 9.47917C27.271 9.47917 29.021 9.69792 30.6252 10.2083V26.9792Z" fill={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}/>
                <path d="M25.521 15.3125C26.8043 15.3125 28.0439 15.4438 29.1668 15.6917V13.475C28.0147 13.2562 26.7752 13.125 25.521 13.125C23.0418 13.125 20.796 13.5479 18.9585 14.3354V16.7563C20.6064 15.8229 22.896 15.3125 25.521 15.3125Z" fill={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}/>
                <path d="M18.9585 18.2147V20.6355C20.6064 19.7022 22.896 19.1918 25.521 19.1918C26.8043 19.1918 28.0439 19.323 29.1668 19.5709V17.3543C28.0147 17.1355 26.7752 17.0043 25.521 17.0043C23.0418 17.0043 20.796 17.4418 18.9585 18.2147Z" fill={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}/>
                <path d="M25.521 20.8979C23.0418 20.8979 20.796 21.3209 18.9585 22.1084V24.5292C20.6064 23.5959 22.896 23.0854 25.521 23.0854C26.8043 23.0854 28.0439 23.2167 29.1668 23.4646V21.2479C28.0147 21.0146 26.7752 20.8979 25.521 20.8979Z" fill={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}/>
                </svg>
                </NavIcon>
                <NavLabel ButtonActive={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"} >Orders</NavLabel>
            </NavButton>


            <NavButton
            onClick={onClickAccount}
            ButtonActive = {ButtonActiveVal === 4 ? "#24B574" : "#C6C6C6"}
            >
                <NavIcon>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4999 17.4999C20.7228 17.4999 23.3332 14.8895 23.3332 11.6666C23.3332 8.44367 20.7228 5.83325 17.4999 5.83325C14.277 5.83325 11.6666 8.44367 11.6666 11.6666C11.6666 14.8895 14.277 17.4999 17.4999 17.4999ZM17.4999 20.4166C13.6062 20.4166 5.83325 22.3708 5.83325 26.2499V29.1666H29.1666V26.2499C29.1666 22.3708 21.3937 20.4166 17.4999 20.4166Z" fill={ButtonActiveVal === 4 ? "#24B574" : "#C6C6C6"}/>
                    </svg>
                </NavIcon>
                <NavLabel ButtonActive={ButtonActiveVal === 4 ? "#24B574" : "#C6C6C6"}>Account</NavLabel>
            </NavButton>
        </NavBox>
    </NavContainer>

}

NavBar.defaultProps = {
    title: "label",
    bgimg: "/Home.png",
    orderNum: "0",
    ButtonActive:"black"

}

export default NavBar;