import React from 'react';
import styled from 'styled-components';

const Accounts = styled.div`
    display:flex;
`;

const Chef = styled.div`
    background-color:#209B64;
    width:118px;
    height:190px;
    border-radius:31px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:30px;
    
`;

const Gourmet = styled.div`
    margin-top:30px;
`;

const ChefImg = styled.div`
    
`;

const GourmetImg = styled.div`
    
`;

const CreateAccount = ({}) => {

    return <Accounts>
            <Chef>
                <ChefImg><img src='/chef.png' /></ChefImg>
                CHEF!
            </Chef>
            <Gourmet>
                <GourmetImg><img src='/gourmet.png' /></GourmetImg>
                GOURMET
            </Gourmet>
        </Accounts>
}

CreateAccount.defaultProps = {
    
}

export default CreateAccount;