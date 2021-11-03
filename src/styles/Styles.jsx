import styled from "styled-components";
import {mobile} from "../responsive"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    /* background-color: #4bff72; */
`

const Header = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.6rem, 7.9vw, 8rem);
  font-weight: 700;
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  color:  #e7dcd8;
  margin: 3rem 0 1rem 0;
  width: clamp(100px, 90%, 1200px);

  /* background-color: #4bff72; */
  `
const Outline = styled.div`
display: inline;
-webkit-text-stroke: 1px #e7dcd8;
-webkit-text-fill-color: black;
`

const Description = styled.p`
  font-family: raleway;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  width: clamp(100px, 90%, 1200px);
  margin-top: 1rem;
  margin-bottom: 2rem;
  color:  #e7dcd8;
  `

const SubHeader = styled.h2`
font-family: 'Poppins', sans-serif;
font-size: clamp(1.5rem, 3vw, 3.4rem);
font-weight: 600;
letter-spacing: -.05rem;
line-height: 1;
word-wrap: break-word;
text-align: left;
color:  #e7dcd8;
margin: 1rem 0 0rem 0rem;

/* background-color: #ffbb00; */
`
const SubDescription = styled.p`
  color: #e7dcd8;
  font-family: raleway;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.3rem, 3.5vw, 1rem); 
  width: 90%;
  /* background-color: aliceblue; */
  `
  
  const Tech = styled.p`
  color: #e7dcd8;
  font-family: raleway;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.1rem, 3.5vw, 1rem); 
  width: 90%;
  /* background-color: aliceblue; */
  `
  
const Button = styled.button`
  border: solid;
  border-color: black;
  border-width: 1px;
  background-color:#e7dcd8;
  border-radius: 50px 0 0 50px;
  padding: .5rem 1rem .5rem 1rem;
  flex:none;
  text-transform: uppercase;
  :hover {
    transition: all .8s ease;
    background-color: #e6ff07;

    border-color: #e6ff07;
  }
  `
  
  export  { Wrapper, Header, SubHeader, Description, SubDescription, Tech, Button, Outline }
 
  