import React from 'react';
import styled from 'styled-components';


const TopNavContainer = styled.div`
   display:flex;
`;

const LeftArrowImg = styled.div`
    margin-right:15px;
`;

const TopLeftText = styled.div`
   margin-right:30px;
`;

const TopNav = ({text}) => {

    return <TopNavContainer>
            <LeftArrowImg><img src='/leftarrow.png' /></LeftArrowImg>
            <TopLeftText>{text}</TopLeftText>
            Credit $20
        </TopNavContainer>
}

TopNav.defaultProps = {
    
}

export default TopNav;