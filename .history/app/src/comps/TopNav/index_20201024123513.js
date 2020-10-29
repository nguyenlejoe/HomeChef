import React from 'react';
import styled from 'styled-components';


const TopNavContainer = styled.div`
   
`;

const TopNav = ({text}) => {

    return <TopNavContainer>
            {text}
            Credit $20
        </TopNavContainer>
}

TopNav.defaultProps = {
    
}

export default TopNav;