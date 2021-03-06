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


const SearchTwoInput = styled.input`
    width: 270px;
    height: 35px;
    background-color: #ECECEC;
    border-radius: 20px;
    border:none;
    padding-left:20px;
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
    margin-left:10px;
`;



const SearchFor = ({expand, onChange,search, onClick}) => {
    const [expanded, setExpanded] = useState(false); 
    const [keyword, setKeyword] = useState("");
    const [name, setName] = useState("");

    useEffect(()=>{
        setExpanded(expand);
    }, [expand])

    return <SearchBox>
        <DropdownContainer>
            <SearchDropdown>
                <SearchTwoInput  onChange={(e)=>{
                    setKeyword(e.target.value)
                }} 
                type="text" placeholder="Search for the item you are looking for!" onClick={()=>{
                        setExpanded(!expanded);
                    }}>
                </SearchTwoInput>
            </SearchDropdown>
            {/* <SearchExpand expanded={expanded}>
                <div>#Beef</div>
                <div>#Beef Noodle</div>
                <div>#Beef Steak</div>
                <div>#Beef Donair</div>
            </SearchExpand> */}
        </DropdownContainer>
        <SearchTwoImg onClick={()=>{
            onClick(keyword,name)
        }}><img src='/SearchIcon.svg'/></SearchTwoImg>
    </SearchBox>;
}

export default SearchFor;


