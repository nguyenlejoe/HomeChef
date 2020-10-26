import React from 'react';
import styled, {css} from 'styled-components';

const SummaryContainer = styled.div`
    background-color: #FFFFFF;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 308px;
    height: 137px;
    border-radius:20px;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ContentContainer = styled.div`
    display:flex; 
    margin-top:-22px; 
`;

const InfoBox = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;

    p{
        margin-left:20px;
        margin-top:-5px;
    }

    a{
        margin-top:-10px;
        margin-left:20px;
    }
`;

const AvatarBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;

    div{
        background-color:blue;
    }
`;

const SummaryBox = ({buyer,product, note1}) => {
    
    return <SummaryContainer>
                <TitleContainer><h2>{buyer} bought {product}</h2></TitleContainer>
                <ContentContainer>
                    <InfoBox>
                        <ul>
                            <li>{note1}</li>
                        </ul>
                        <p>10/20/2020</p>
                        <a>View full order</a>
                    </InfoBox>
                    <AvatarBox>
                        <div>
                            placeholder avatar
                        </div>
                    </AvatarBox>

                </ContentContainer>

           </SummaryContainer>

}

SummaryBox.defaultProps = {
    buyer:"Alex",
    product: "noodles",
    note1:"Special note 1",

}

export default SummaryBox;