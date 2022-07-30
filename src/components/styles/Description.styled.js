import styled from "styled-components"

// ------ Item Description

export const Description = styled.section`

h1 {
    font-family: 'Fraunces', sans-serif;
    color: hsl(212, 21%, 14%);
    font-size: 2em;
    padding: 20px 20px 20px 20px;
    line-height: 1;
}

p {
    font-family: 'Montserrat', sans-serif;
    color: hsl(228, 12%, 48%);
    padding-left: 20px;
    padding-right: 20px;
    line-height: 1.7em;

    @media (min-width: ${({theme}) => theme.desktop}){
    padding-bottom: 15px;
    
    } 
}

`

export const Title1 = styled.h1`

@media (min-width: ${({theme}) => theme.desktop}){
    display: none;
    
} 
`
export const Title2 = styled.h1`
display: none;

@media (min-width: ${({theme}) => theme.desktop}){
    display: block;
    
} 
`