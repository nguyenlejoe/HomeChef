import React from 'react';
import styled, {css} from 'styled-components';
import icon1 from '../../assets/Filter.png';
import icon2 from '../../assets/DollarSign.png';

const ButtonContainer = styled.button`
    background-color: #FFF;
    border-radius: 15px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border:none;
    padding: 0px 45px 0px 45px;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: 14px;
    color:#24B574;
`;

const Icon = styled.div`
    ${({icon1, icon2}) => css`
        background-image: url(${props =>props.icon1 ? props.icon1 : icon2});
        background-color:white;
        padding:10px;
        background-repeat: no-repeat;
        background-position: center;
        position:absolute;
        left: 0px;
        `}
    `;

const Button = ({text,color,bgcolor, width, height, icon1, icon2}) => {
    return <ButtonContainer color = {bgcolor} height={height} width={width}>
              { icon1 &&<Icon />}<ButtonText color = {color}>{text}</ButtonText>
            </ButtonContainer>
}

ButtonText.defaultprops = {
    color:null,
}

export default Button;