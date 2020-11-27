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

`;

const TextCont = styled.div`
margin-top:20px;
display:flex;
text-align:center;
`;

const AlertBox = ({active, onClickYes, onClickNo}) =>{
    return <AlertCont active={active}>
        <TextCont>Are you sure you want to create item?</TextCont>
        <ButtonBox>
            <ButtonCont><Button disabled={false} width="100px" height="50px" text="Yes" onClick={onClickYes}></Button></ButtonCont>
            <ButtonCont><Button disabled={false} width="100px" height="50px" text="No" onClick={onClickNo}></Button></ButtonCont>
        </ButtonBox>
    </AlertCont>
}

AlertBox.defaultProps = {
    active:true
}

export default AlertBox;