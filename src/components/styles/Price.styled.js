import styled from 'styled-components'

// ------ Perfume price setup

export const PerfPrice = styled.div`

display: flex;
align-items: center;
padding-bottom: 5px;
padding-top: 10px;
font-size: 1em;
gap: 20px;

p {
    font-family: 'Montserrat', sans-serif;
    color: hsl(228, 12%, 48%);
    line-height: 1.7em;
    display: flex;
    font-family: 'Fraunces', sans-serif;
    color: hsl(158, 36%, 37%);
    font-size: 2em;
}

span {
    font-family: 'Montserrat', sans-serif;
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
    font-size: 0.4em;
}

@media (min-width: ${({theme}) => theme.desktop}){
    padding-bottom: 15px;
    
} 
`