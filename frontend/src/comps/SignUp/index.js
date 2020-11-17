import React from 'react';
import styled from 'styled-components';

const SignUpCont = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 15px;
`;


const SignUpForm = styled.input`
    font-family: sans-serif;
    ::placeholder{
        color: #B8B8B8;
    };
    outline: none;
    border: none;
    border-bottom: 3px solid #E0E0E0; 
`;

const SignUp = ({text, PHtext=text, width, height,  onChange, type}) => {
    return <SignUpCont>
        <SignUpForm onChange={onChange} type={type} placeholder={PHtext} width={width} height={height} ></SignUpForm>
        </SignUpCont>;
}

SignUp.defaultProps ={
    type :"text"
}

export default SignUp;