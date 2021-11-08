import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.6rem, 7.9vw, 8rem);
  font-weight: 700;
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  margin: 1rem 0 1rem 0;
  width: clamp(100px, 90%, 1200px);
  `
const Outline = styled.div`
display: inline;
-webkit-text-stroke: 1px ${({ theme }) => theme.text};
-webkit-text-fill-color: ${({ theme }) => theme.body};
transition: all .5s ease;
`

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  width: clamp(100px, 90%, 1200px);
  margin-top: 1rem;
  margin-bottom: 2rem;
  `

const SubHeader = styled.h2`
font-family: 'Poppins', sans-serif;
font-size: clamp(1.5rem, 3vw, 3.4rem);
font-weight: 600;
letter-spacing: -.05rem;
line-height: 1;
word-wrap: break-word;
text-align: left;
margin: 1rem 0 0rem 0rem;
`
const SubDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.3rem, 3.5vw, 1rem); 
  width: 90%;
  `
  
  const Tech = styled.p`

  font-family: 'Poppins', sans-serif;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.1rem, 3.5vw, 1rem); 
  width: 90%;

  `
  
const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  border: solid;
  border-color:${({ theme }) => theme.background};
  border-width: 1px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 50px 50px 50px 50px;
  padding: .5rem 1rem .5rem 1rem;
  flex:none;
  transition: all .5s ease;
  cursor: pointer;
  margin: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    transition: all .5s ease;
  }

  :hover {
    transition: all .5s ease;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.background};

  a {
    color: ${({ theme }) => theme.body};
    transition: all .5s ease;
    }
  }
  `
  
  export  { Wrapper, Header, SubHeader, Description, SubDescription, Tech, Button, Outline }
 
  