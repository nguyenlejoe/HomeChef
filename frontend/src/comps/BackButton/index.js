import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';


const ButtonContainer = styled.div`
position: relative; 
width: ${props =>props.width ? props.width : '37px'};
height: ${props =>props.height ? props.height : '37px'};
cursor:pointer;
`;

const ButtonIcon = styled.div`

`;



const BackButton = ({onClick, width, height}) =>{
    return <ButtonContainer height={height} width={width}  onClick={onClick}>
        <ButtonIcon>
            <img src='/backbutton.svg' />
        </ButtonIcon>
    </ButtonContainer>
}

BackButton.defaultProps = {
    foodimg:"/coldnoodle.jpg"
}

export default BackButton;