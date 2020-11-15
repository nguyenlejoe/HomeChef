import React from 'react';
import styled from 'styled-components';

const CoverCont = styled.div`
    height:100%;
    width:100%;
    background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    
`;

const CoverImage = ({bgimg}) =>{
    return <CoverCont bgimg={bgimg}>

    </CoverCont>
}

export default CoverImage;