import React from 'react';
import styled from 'styled-components';

const CoverBox = styled.div`
    height:100%;
    width:100%;
    background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
`;

const CoverImage = ({bgimg}) =>{
    return <CoverBox bgimg={bgimg}>

    </CoverBox>
}

export default CoverImage;