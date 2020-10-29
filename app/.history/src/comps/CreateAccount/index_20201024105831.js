import React from 'react';
import styled from 'styled-components';

const Accounts = styled.div`
    
`;

const Chef = styled.div`
    background-color:#209B64;
    width:118px;
    height:190px;
    border-radius:31px;
    align-items:center;
    justify-content:center;
    
`;

const Gourmet = styled.div`
    
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