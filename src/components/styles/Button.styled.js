import styled from "styled-components"

// Add Cart Button Setup

export const Button = styled.button`
display: flex;
background-color: hsl(158, 36%, 37%);
border-radius: 8px;
padding-top: 15px;
padding-bottom: 15px;
border: none;
width: 100%;
font-weight: bold;
margin: auto;
justify-content: center;
align-items: center;
gap: 10px;
color: white;


@media (min-width: ${({theme}) => theme.desktop}){
   cursor: pointer;

    :active {
        filter: brightness(60%);
    }
    
} 
`