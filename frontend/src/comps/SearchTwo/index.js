import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const SearchBox = styled.div`
    display:flex;
    justify-content:center;

`;

const DropdownContainer = styled.div`
    display:inline-flex;
    flex-direction:column;
`;

const SearchDropdown = styled.div`
    
`;


const SearchTwoInput = styled.div`
    width: 270px;
    height: 35px;
    background-color: #ECECEC;
    border-radius: 20px;
    border:none;
`;

const SearchExpand = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    height:${props=>props.expanded ? "auto" : "0px"};
    font-size:${props=>props.expanded ? "18px" : "0px"};
    opacity:${props=>props.expanded ? 1 : 0};
    transition:opacity 0.5s;
    flex-direction:column;
    div {
        padding: ${props=>props.expanded ? "10px 15px" : "0px"};
        margin: ${props=>props.expanded ? "5px 0" : "0px"};
        cursor: pointer;
        &:hover {
            background-color:#DDD;
        }
    }
`;

const SearchTwoImg = styled.div`
    
`;


const SearchFor = ({expand}) => {
    const [expanded, setExpanded] = useState(false); 

    useEffect(()=>{
        setExpanded(expand);
    }, [expand])

    return <SearchBox>
        <DropdownContainer>
            <SearchDropdown>
                <SearchTwoInput type="text" placeholder="" onClick={()=>{
                        setExpanded(!expanded);
                    }}>
                </SearchTwoInput>
            </SearchDropdown>
            <SearchExpand expanded={expanded}>
                <div>#Beef</div>
                <div>#Beef Noodle</div>
                <div>#Beef Steak</div>
                <div>#Beef Donair</div>
            </SearchExpand>
        </DropdownContainer>
        <SearchTwoImg><img src='/Searchtwo.png'/></SearchTwoImg>
    </SearchBox>;
}

export default SearchFor;


