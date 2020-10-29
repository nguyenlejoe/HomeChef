import React from 'react';
import styled from 'styled-components';

const Accounts = styled.div`
    
`;

const Chef = styled.div`
    
`;

const Gourmet = styled.div`
    
`;


const CreateAccount = ({}) => {

    return <Accounts>
            <Chef>
                <ChefImg hero={hero}><img src='/chef.png' /></ChefImg>
                CHEF!
            </Chef>
            <Gourmet>
                GOURMET
            </Gourmet>
        </Accounts>
}

CreateAccount.defaultProps = {
    
}

export default CreateAccount;