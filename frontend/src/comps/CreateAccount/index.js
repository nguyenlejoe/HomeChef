import React from 'react';
import styled,  {css}from 'styled-components';

const Accounts = styled.div`
    font-family: Poppins;
    display:flex;
    color:#FFF;
    background-color:#20B573;
`;

const Chef = styled.div`
    width:118px;
    height:190px;
    border-radius:31px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:40px;


    ${props => props.active === true && css`
    background-color:#209B64;
    `}

`;

const Gourmet = styled.div`
    width:118px;
    height:190px;
    border-radius:31px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    ${props => props.active === true && css`
    background-color:#209B64;
        `}
    }
`;

const ChefImg = styled.div`
    margin-bottom:10px;
`;

const GourmetImg = styled.div`
    margin-bottom:10px;

`;

const CreateAccount = ({activeChef, activeGourmet,  cheftext, gourmettext, onClick}) => {

    return <Accounts>
            <Chef onClick={onClick} active={activeChef}>
                <ChefImg><img src='/chef.png' /></ChefImg>
                Chef
            </Chef>
            <Gourmet onClick={onClick} active={activeGourmet}>
                <GourmetImg ><img src='/gourmet.png' /></GourmetImg>
                Gourmet
            </Gourmet>
        </Accounts>
}

CreateAccount.defaultProps = {

}

export default CreateAccount;