import styled from 'styled-components'

// ------ Image Setup

export const Image = styled.img`
    border-radius: 10px 10px 0px 0px;
    width: 100%;

    @media (min-width: ${({theme}) => theme.desktop}){
        display: none;
    }
`

export const Image2 = styled.img`
display: none;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    @media (min-width: ${({theme}) => theme.desktop}){
        display: block;
        border-radius: 10px 0px 0px 10px;
    }
`
// ------ Image Caption Setup

export const PerfCaption = styled.p`

font-family: 'Montserrat', sans-serif;
color: hsl(228, 12%, 48%);
letter-spacing: 0.4em;
padding-left: 20px;
padding-top: 15px;
font-size: 0.75em;
`