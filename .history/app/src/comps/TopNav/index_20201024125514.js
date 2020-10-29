import React from 'react';
import styled from 'styled-components';


const TopNavContainer = styled.div`
   display:flex;
   align-items:center;
`;

const LeftArrowImg = styled.div`
    margin-right:15px;
`;

const TopLeftText = styled.div`
   margin-right:30px;
   font-size:20px;
`;

const CreditText = styled.div`
   color:#24B574;
   font-size:14px;
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