import React from 'react';
import styled from 'styled-components';
import {useHistory, Link} from "react-router-dom";

const AvatarContainer = styled.div`
width:${props=>props.width ? props.width : "80px"};
height:${props=>props.height ? props.height : "80px"};
`;

const AvatarImg = styled.div`
min-width:100%;
min-height:100%;
background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
background-size:cover;
border-radius:100px;

`;


const Avatar = ({bgimg, width, height}) =>{
    return <AvatarContainer width={width} height={height}>
        <AvatarImg bgimg={bgimg}></AvatarImg>    
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg"
}

export default Avatar;