import React from 'react';
import styled from 'styled-components';

const InputText = styled.h2`
    font-family: Poppins;
    font-size: 14px;
    color: ${props=>props.color ? props.color : "#1E9761"};

`;

const PickUpText = ({text}) => {
return <InputText>{text}</InputText>;
}

export default PickUpText;