import React from 'react';
import styled from 'styled-components';

const InputCont = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 15px;
`;


const InputForm = styled.input`
    font-family: sans-serif;
    ::placeholder{
        color: #B8B8B8;
    };
    outline: none;
    border: none;
    border-bottom: 3px solid #E0E0E0; 
`;

const Input = ({text, PHtext=text, width, height}) => {
    return <InputCont>
        <InputForm type="text" placeholder={PHtext} width={width} height={height} ></InputForm>
    </InputCont>;
}

export default Input;