import React from 'react';
import styled from 'styled-components';


const TopNavContainer = styled.div`
   display:flex;
   align-items:center;
   border: 0.6px solid #CCCCCC;
   width:480px;
   padding:10px;
`;

const LeftArrowImg = styled.div`
    margin-right:15px;
`;

const TopLeftText = styled.div`
   margin-right:30px;
   font-size:18px;
`;

const CreditText = styled.div`
   color:#24B574;
   font-size:16px;
`;


const TopNav = ({text}) => {

    return <TopNavContainer>
            <LeftArrowImg><img src='/leftarrow.png' /></LeftArrowImg>
            <TopLeftText>{text}</TopLeftText>
            <CreditText>Credit $20</CreditText>
        </TopNavContainer>
}

TopNav.defaultProps = {
    
}

export default TopNav;