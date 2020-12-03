import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';


const OverlapContainer = styled.div`
width:200px;
height:100px;
display:flex;
align-items:center;
justify-content:center;
`;

const FoodContainer = styled.div`
z-index:-1;
`;

const AvatarContainer = styled.div`
z-index:1;
position:relative;
left:-40px;


`;

const AvatarOverlap = ({foodimg,profileimg, active}) =>{
    return <OverlapContainer>
        <FoodContainer>
            <Avatar bgimg={foodimg}></Avatar>
        </FoodContainer>
        <AvatarContainer active={active}>
             <Avatar bgimg={profileimg}></Avatar>
        </AvatarContainer>

    </OverlapContainer>
}

AvatarOverlap.defaultProps = {
    foodimg:"/coldnoodle.jpg",
}

export default AvatarOverlap;