import React from 'react';
import styled from 'styled-components';
import {useHistory, Link} from "react-router-dom";

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

const Avatar = ({bgimg}) =>{
    return <AvatarContainer>
       
        <AvatarImg bgimg={bgimg}></AvatarImg>
      
    </AvatarContainer>
}

Avatar.defaultProps = {
    bgimg : "./alex.jpg"
}

export default Avatar;