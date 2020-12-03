import React from 'react';
import styled from 'styled-components';
import {useHistory, Link} from "react-router-dom";

const AvatarContainer = styled.div`
display: inline-flex;
width:${props=>props.width ? props.width : "80px"};
height:${props=>props.height ? props.height : "80px"};
`;

const AvatarImg = styled.img`
min-width: 80px;
min-height: 80px;
background-size:cover;
border-radius:100px;
object-fit: cover;

`;


const Avatar = ({bgimg, width, height}) =>{
    return <AvatarContainer width={width} height={height}>
        <AvatarImg src={bgimg}></AvatarImg>    
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg"
}

export default Avatar;