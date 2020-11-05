import React from 'react';
import styled from 'styled-components';

const SignUpCont = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-top: 15px;
`;


const SignUpForm = styled.input`
    // width: ${props =>props.width ? props.width : '239px'};
    // height: ${props =>props.height ? props.height : '60px'};
    font-family: sans-serif;
    ::placeholder{
        color: #B8B8B8;
    };
    outline: none;
    border: none;
    border-bottom: ${props =>props.border_bottom ? props.border_bottom : 'none'} solid #E0E0E0;
    border-radius: ${props =>props.radius ? props.radius : '0px'};
`;

const SignUp = ({text, PHtext=text, width, height, border, radius, border_bottom}) => {
    return <SignUpCont>
        <SignUpForm type="text" placeholder={PHtext} width={width} height={height} border={border} radius={radius} border_bottom= {border_bottom} ></SignUpForm>
    </SignUpCont>;
}
SignUp.defaultProps={
    border_bottom: '3px',
}
export default SignUp;