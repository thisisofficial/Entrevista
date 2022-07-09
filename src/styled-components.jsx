import styled from 'styled-components';

export const BG = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Cont = styled.div`
    min-width: 450px;
    width: 50px;
    min-height: 400px;
    height: auto;
`;

export const SearchBar = styled.input`
    width: 100%;
    height:auto;
    padding: 10px 10px;
    border-width:2px;
    border-style: solid;
    border-color: #4d4c4c;
    font-size: 18px;
    &:placeholder-shown{
        background-color: #a3a3a3;
        font-weight: 400;
        color: #4d4c4c;
    }
    &:not(:placeholder-shown){
        background-color: #fcf7f7;
        font-weight: 700;
        color: #000000;
    }
    &:focus{
        outline: none;
    }

`;

export const Bar = styled.div`
    width: 100%;
    height:auto;
    padding: 10px 10px;
    background-color: ${props=>props.failed? "#fc4c4c": "#75bee6"}; 
    border-width:2px;
    border-style: solid;
    border-color: ${props=>props.failed? "#a11313": "#1a4978"};
    font-size: 18px;
    font-weight: 400;
    color: #000000;
`;