import React from 'react';
import styled from 'styled-components';


const TopBarContainer = styled.div`
   font-family: Poppins;
   display:flex;
   align-items:center;
   width:350px;
   padding:10px;
   position:relative;
`;

const LeftArrowImg = styled.div`
    margin-right:15px;
`;

const TopLeftText = styled.div`
    display:flex;
    
`;

const CreditText = styled.div`
   color:#24B574;
   font-size:13px;
   position:absolute;
   right:10px;
`;


const TopBar = ({text}) => {

    return <TopBarContainer>
            <LeftArrowImg><img src='/leftarrow.png' /></LeftArrowImg>
            <TopLeftText>{text}</TopLeftText>
            <CreditText>Credit $20</CreditText>
        </TopBarContainer>
}

TopBar.defaultProps = {
    
}

export default TopBar;