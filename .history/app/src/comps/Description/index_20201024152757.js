import React from 'react';
import styled from 'styled-components';

const Description = styled.input`

`;


const Description = ({text}) => {

    return <DescriptionContainer>
        <Label> Description (optional) </Label>
        <Input type="text" />  
        </DescriptionContainer>
}

Description.defaultProps = {
    
}

export default Description;