import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h1`
  font-family: "Syne";
  font-size: clamp(2.7rem, 8vw, 8rem);
  font-weight: 700;
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  color:  #e7dcd8;
  margin: 3rem 0 4rem 0;
  width: clamp(100px, 90%, 1200px);
  /* background-color: #ffbb00; */
  `
const Description = styled.p`
  font-family: raleway;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  width: clamp(100px, 90%, 1200px);
  margin-top: -2rem;
  margin-bottom: 2rem;
  color:  #e7dcd8;
  `

const SubHeader = styled.h2`
font-family: "Syne";
font-size: clamp(2rem, 3vw, 3.4rem);
font-weight: 700;
letter-spacing: -.11rem;
line-height: .8;
word-wrap: break-word;
text-align: left;
color:  #e7dcd8;
margin: 1rem 0 1rem 0rem;
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
  
  
const Button = styled.button`
  color: #e7dcd8;
  border: solid;
  border-color: #000000;
  background-color: transparent;
  border-radius: 50px;
  padding: .5rem 1rem .5rem 1rem;
  flex:none;
  `
  
  export  { Wrapper, Header, SubHeader, Description, SubDescription, Button }
 
  