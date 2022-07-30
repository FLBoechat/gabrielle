import styled from "styled-components";

// ------ General Settings

export const StyledProduct = styled.div`

background-color: white;
border-radius: 10px;
padding-bottom: 20px;
width: 345px;
margin: auto;

div {
    padding-left: 20px;
    padding-right: 20px;
}



@media (min-width: ${({theme}) => theme.desktop}){
    display: flex;
    height: auto;
    width: 600px;
    padding: 0;

    section {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
}  
`





