import styled from "styled-components";

// ------ General Setting

export const StyledProduct = styled.main`

background-color: white;
border-radius: 10px;
padding-bottom: 20px;

button {
    display: block;
    background-color: hsl(158, 36%, 37%);
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    width: 90%;
  
    font-weight: bold;
    margin: auto;
}

p {
    font-family: 'Montserrat', sans-serif;
    color: hsl(228, 12%, 48%);
    padding-right: 20px;
    line-height: 1.7em;
}



`
// ------ Image Setup

export const Image = styled.img`
    border-radius: 10px 10px 0px 0px;
    width: 100%;
`
// ------ Image Caption Setup

export const PerfCaption = styled.p`
letter-spacing: 0.4em;
padding-left: 20px;
padding-top: 15px;
font-size: 0.75em;

`
// ------ Perfume description setup

export const PerfDescription = styled.section`

h1 {
    font-family: 'Fraunces', sans-serif;
    color: hsl(212, 21%, 14%);
    font-size: 2em;
    padding-left: 20px;
    padding-top: 10px;
    line-height: 1;
}

p {
    padding-left: 20px;
    padding-top: 20px;
    color: hsl(228, 12%, 48%);
    line-height: 1.5em;
}
`
// ------ Perfume price setup

export const PerfPrice = styled.div`

display: flex;
align-items: center;
padding-bottom: 10px;
padding-top: 15px;
font-size: 1em;
padding-left: 20px;

p {
    
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

// ------ Perfume button Setup

export const PerfButton = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 10px;

p {
    color: hsl(0, 0%, 100%);
}
`