import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const TopNavContainer = styled.div`
    width: 414px;
    height: 73px;
    background-color:#F4F4F4;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const TopNavButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 55px;
    height: 34px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    ${props => props.active === true && css`
        flex:0.7;
        transition: flex 0.5s;
    `}

`;


const TopNav = () =>{

    const [ButtonExpand, setExpand] = useState(false);

    const Expand = () =>{
        
    }

    return <TopNavContainer>
        <TopNavButton active={true}>Trending</TopNavButton>
        <TopNavButton></TopNavButton>
        <TopNavButton></TopNavButton>
        <TopNavButton></TopNavButton>
    </TopNavContainer>
}

export default TopNav;