import styled from "styled-components";

// ------ General Settings

export const StyledProduct = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
border-radius: 10px;
padding-bottom: 20px;
width: 345px;
margin: 0 auto;
display: flex;
flex-direction: column;

div {
    padding-left: 20px;
    padding-right: 20px;
}



@media (min-width: ${({theme}) => theme.desktop}){
    display: flex;
    flex-direction: row;
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





