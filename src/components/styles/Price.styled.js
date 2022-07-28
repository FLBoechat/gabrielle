import styled from 'styled-components'

// ------ Perfume price setup

export const PerfPrice = styled.div`

display: flex;
align-items: center;
padding-bottom: 10px;
padding-top: 15px;
font-size: 1em;

p {
    font-family: 'Montserrat', sans-serif;
    color: hsl(228, 12%, 48%);
    padding-left: 20px;
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
`