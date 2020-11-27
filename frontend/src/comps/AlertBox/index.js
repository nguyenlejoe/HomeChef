import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../MainButton';

const AlertCont = styled.div`
    width: 250px;
    height: 200px;
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    ${props => props.active === true && css`
    display:none
    `}

`;

const ButtonBox = styled.div`
display: flex;
justify-content: center;
margin:20px;


`;

const ButtonCont = styled.div`
margin: 10px;

${props => props.active === true && css`
    display:none
    `}

`;

const TextCont = styled.div`
margin-top:20px;
display:flex;
text-align:center;
`;

const AlertBox = ({active, onClickYes, onClickNo, text, textButton1,textButton2, buttonActive}) =>{
    return <AlertCont active={active}>
        <TextCont>{text}</TextCont>
        <ButtonBox>
            <ButtonCont><Button disabled={false} width="100px" height="50px" text={textButton1} onClick={onClickYes}></Button></ButtonCont>
            <ButtonCont active={buttonActive}><Button disabled={false} width="100px" height="50px" text={textButton2} onClick={onClickNo}></Button></ButtonCont>
        </ButtonBox>
    </AlertCont>
}

AlertBox.defaultProps = {
    active:true
}

export default AlertBox;