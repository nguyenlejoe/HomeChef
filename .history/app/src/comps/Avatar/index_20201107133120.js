import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
width:${props =>props.width ? props.width : '80px'};
height:${props =>props.height ? props.height : '80px'};
`;

const AvatarImg = styled.div`
min-width:100%;
min-height:100%;
background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
background-size:cover;
border-radius:100px;

`;

const Avatar = ({bgimg, width, height}) =>{
    return <AvatarContainer>
        <AvatarImg bgimg={bgimg} width={width} height={height}  ></AvatarImg>
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg",
}

export default Avatar;