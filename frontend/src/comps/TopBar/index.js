import React from 'react';
import styled from 'styled-components';


const TopBarContainer = styled.div`
   font-family: Poppins;
   display:flex;
   align-items:center;
   border: 0.6px solid #CCCCCC;
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
   right:15px;
`;


const TopBar = ({text}) => {

    return <TopBarContainer>
            <LeftArrowImg><img src='/leftarrow.png' /></LeftArrowImg>
            <TopLeftText>{text}</TopLeftText>
            
        </TopBarContainer>
}

TopBar.defaultProps = {
    
}

export default TopBar;