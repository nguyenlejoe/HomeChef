import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
width:80px;
height:80px;
`;

const AvatarImg = styled.div`
min-width:100%;
min-height:100%;
background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
background-size:cover;
border-radius:100px;

`;

const Avatar = ({bgimg, avwidth, avheight}) =>{
    return <AvatarContainer avwidth={avwidth} avheight={avheight}>
        <AvatarImg bgimg={bgimg}></AvatarImg>
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg",
    avwidth : "80px",
    avheight : "80px"
}

export default Avatar;