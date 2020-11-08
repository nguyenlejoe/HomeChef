import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
width:${props=>props.avwidth ? props.avwidth : "0"};
height:${props=>props.avheight ? props.avheight : "0"};
`;

const AvatarImg = styled.div`
min-width:100%;
min-height:100%;
background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
background-size:cover;
border-radius:100px;

`;

const Avatar = ({bgimg, avwidth, avheight}) =>{
    return <AvatarContainer>
        <AvatarImg bgimg={bgimg} avwidth={avwidth} avheight={avheight} ></AvatarImg>
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg",
    avwidth : "60px",
    avheight : "60px"
}

export default Avatar;