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






const NavBar = ({active, onClickHome, onClickSearch, onClickCalendar, onClickAccount}) => {

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
            // onClick={()=>{
            //     SetActive(active);
            // }}
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
            onClick={onClickCalendar}
            // onClick={()=>{
            //     SetActive(active);
            // }}
            ButtonActive = {ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}
            >
                <NavIcon>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 7.83325C4.375 6.72868 5.27043 5.83325 6.375 5.83325H28.625C29.7296 5.83325 30.625 6.72868 30.625 7.83325V30.0833C30.625 31.1878 29.7296 32.0833 28.625 32.0833H6.375C5.27043 32.0833 4.375 31.1878 4.375 30.0833V7.83325Z" stroke={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.3333 2.91675V8.75008" stroke={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.6667 2.91675V8.75008" stroke={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.375 14.5833H30.625" stroke={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NavIcon>
                <NavLabel ButtonActive={ButtonActiveVal === 3 ? "#24B574" : "#C6C6C6"}>Calendar</NavLabel>
            </NavButton>


            <NavButton
            onClick={onClickAccount}
            // onClick={()=>{
            //     SetActive(active);
            // }}
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