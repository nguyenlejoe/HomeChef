import React from 'react';
import styled from 'styled-components';

const BuyerNoteContainer = styled.div`
    font-family: Poppins;
`;


const BuyerNoteCap = styled.div`
    color: #1E9761;
    margin-bottom:10px;
`;

const BuyerInput = styled.input`
    width: 270px;
    height: 35px;
    background-color: #ECECEC;
    border-radius: 64px;
    border:none;   
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