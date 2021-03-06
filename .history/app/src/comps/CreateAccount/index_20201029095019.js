import React from 'react';
import styled from 'styled-components';

const Accounts = styled.div`
    font-family: Poppins;
    display:flex;
    color:#FFF;
`;

const Chef = styled.div`
    :hover{
        background-color:#209B64;
        width:118px;
        height:190px;
        border-radius:31px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-right:40px;
    }

    
`;

const Gourmet = styled.div`
    background-color:#209B64;
    width:118px;
    height:190px;
    border-radius:31px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:40px;
`;

const ChefImg = styled.div`
    margin-bottom:10px;
`;

const GourmetImg = styled.div`
    margin-bottom:10px;
`;

const CreateAccount = ({cheftext, gourmettext}) => {

    return <Accounts>
            <Chef>
                <ChefImg><img src='/chef.png' /></ChefImg>
                Chef
            </Chef>
            <Gourmet>
                <GourmetImg><img src='/gourmet.png' /></GourmetImg>
                Gourmet
            </Gourmet>
        </Accounts>
}

CreateAccount.defaultProps = {
    
}

export default CreateAccount;