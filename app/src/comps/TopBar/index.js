import React from 'react';
import styled from 'styled-components';


const TopBarContainer = styled.div`
   display:inline-flex;
   align-items:center;
   justify-content: space-between;
   border: none;
   margin-top:5px;
   width: 90vw;
`;

const LeftArrowImg = styled.div`
`;

const TopLeftText = styled.h2`
    width: 375px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    margin-top:15px
    font-size: 20px;
    font-family: sans-serif;
`;

const CreditText = styled.p`
   font-family: sans-serif;
   color:#24B574;
   font-size:18px;
`;


const TopBar = ({text}) => {

    return <>
    <TopBarContainer>
            <LeftArrowImg><img src='/leftarrow.png' /></LeftArrowImg>
            <CreditText>Credit $20</CreditText>
        </TopBarContainer>
        <TopLeftText>{text}</TopLeftText>
        </>
}

TopBar.defaultProps = {
    
}

export default TopBar;