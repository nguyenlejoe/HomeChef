import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`

`;

const Label = styled.div`

`;
const Input = styled.input`
    width: 350px;
    height: 150px;
    background-color: #ECECEC;
    border-radius: 20px;
    display:flex;
    position:relative;
`;

const Max = styled.div`
    position:absolute;
    top:10px;
    right:10px;
`;

const Description = ({text}) => {

    return <DescriptionContainer>
        <Label> Description (optional) </Label>
        <Input type="text" />
        <Max>Max 350 Characters </Max> 
        </DescriptionContainer>
}

Description.defaultProps = {
    
}

export default Description;