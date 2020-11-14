import React from 'react';
import styled, {css} from 'styled-components';
import AvatarOverlap from '../AvatarOverlap';

const SummaryContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: #FFFFFF;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 308px;
    height: 170px;
    border-radius:20px;
`;

const TitleCont = styled.h3`
    height: 40%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10px;
    padding-bottom:15px;
`;

const ContentContainer = styled.div`
    display:flex; 
    margin-top:-22px; 
`;

const InfoBox = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;

`;

const AContainer = styled.a`
margin: 15px 0 5px 30px;
`;

const DateContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 152px;
    height: 22px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    background-color:#24B574;
    font-size:12px;
    margin: 0px 0 5px 25px;
`;

const NoteContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 106px;
    height: 20px;
    background: #FFFFFF; 
    border: 1px solid #E1E1E1;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    margin-left:25px;
    margin-top:5px;
`;

const AvatarBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:65%;
    div{
        margin-bottom:5px;
    }
    

`;


const SummaryBox = ({buyer,product, note1, date}) => {
    
    return <SummaryContainer>
                <TitleCont>{buyer} bought {product}</TitleCont>
                <ContentContainer>
                    <InfoBox>
                        <DateContainer>Confirmed on {date}</DateContainer>
                        <NoteContainer>{note1}</NoteContainer>
                        <AContainer>View full order</AContainer>
                    </InfoBox>
                    <AvatarBox>
                        <AvatarOverlap></AvatarOverlap>
                    </AvatarBox>

                </ContentContainer>

           </SummaryContainer>

}

SummaryBox.defaultProps = {
    buyer:"Alex",
    product: "noodles",
    note1:"Special note 1",
    date:"10/22/2020"

}

export default SummaryBox;