import styled from "styled-components";



const Header = styled.div`
  font-family: "Syne";
  font-size: clamp(3rem, 5vw, 17rem);
  font-weight: 700;
  letter-spacing: -.11rem;
  line-height: 7vh;
  color:  #000000;
  margin: 0rem 0 3rem 0;
  width: 85%;
  word-wrap: break-word;
  text-align: center;
  `

const Description = styled.p`
  font-family: raleway;
  margin-top: -2rem;
  margin-bottom: 2rem;
  letter-spacing: .01vw;
  line-height: clamp(.2rem, 6vw, 4.5rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  text-align: center;
  width: 85%;
  `
  
const Button = styled.button`
  border: none;
  color: aliceblue;
  background-color: #e4ff4e;  
  border-radius: 20px;
  padding: .5rem;
  margin: 1rem 0 2rem 0;
  margin-left: 50vw;
  `
  
  export  { Header, Description, Button }
 
  