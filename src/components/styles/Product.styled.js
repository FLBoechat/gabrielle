import styled from "styled-components";

// ------ General Settings

export const StyledProduct = styled.div`

background-color: white;
border-radius: 10px;
padding-bottom: 20px;
max-width: 375px;
margin: auto;


@media (min-width: ${({theme}) => theme.desktop}){
    display: flex;
    width: fit-content;
    justify-content: center;
    padding-bottom: 0px;
}  
`





