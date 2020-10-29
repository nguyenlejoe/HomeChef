import React from 'react';
import styled from 'styled-components';


const TopNavContainer = styled.div`
   display:flex;
`;

const TopLeft = styled.div`
   margin-right:30px;
`;

const TopNav = ({text}) => {

    return <TopNavContainer>
            <TopLeft>{text}</TopLeft>
            Credit $20
        </TopNavContainer>
}

TopNav.defaultProps = {
    
}

export default TopNav;