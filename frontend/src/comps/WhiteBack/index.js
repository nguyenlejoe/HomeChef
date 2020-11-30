import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';


const ButtonContainer = styled.div`
cursor:pointer;
`;

const ButtonIcon = styled.img`
width: ${props =>props.width ? props.width : '25px'};
height: ${props =>props.height ? props.height : '25px'};
`;



const WhiteBack = ({onClick, width, height}) =>{
    return <ButtonContainer height={height} width={width}  onClick={onClick}>
        <ButtonIcon src='/WhiteArrow.svg' />
    </ButtonContainer>
}

WhiteBack.defaultProps = {

}

export default WhiteBack;