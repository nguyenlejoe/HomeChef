import React from 'react';
import styled from 'styled-components';

const BuyerNoteContainer = styled.div`
    font-family: Poppins;
`;


const BuyerNoteCap = styled.div`

`;

const BuyerInput = styled.input`

`;


const BuyerNote = ({text}) => {

    return <BuyerNoteContainer>
            <BuyerNoteCap>Buyer note</BuyerNoteCap>
            <BuyerInput type="text" placeholder="Note" />
        </BuyerNoteContainer>
}

BuyerNote.defaultProps = {
    
}

export default BuyerNote;