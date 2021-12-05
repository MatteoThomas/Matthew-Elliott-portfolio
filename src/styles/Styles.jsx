import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .5s ease;
  
`

const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.7rem, 11vw, 8rem);
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  transition: all .5s ease;
`

const HelloOutline = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  display: inline;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: ${({ theme }) => theme.body};
  padding: .4rem;
  transition: all .5s ease;
  `

const Outline = styled.div`
  font-family: 'Hurricane', cursive;
  font-size: clamp(4rem, 9vw, 8rem);
  font-weight: 100;
  display: inline;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
  transition: all .5s ease;
`

const Description = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 2rem);
  font-size: clamp(.3rem, 3.5vw, 1.74rem); 
  width: clamp(100px, 80%, 1200px);
  transition: all .5s ease;
  color:${({ theme }) => theme.text};
  text-align: right;
  `

const SubHeader = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  font-size: clamp(1.5rem, 3vw, 3.4rem);
  letter-spacing: -.05rem;
  line-height: 1;
  word-wrap: break-word;
  margin: 1rem 0 1rem 0rem;
  transition: all .5s ease;
  text-align: left;
  background-color: transparent;
`

const SubDescription = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.3rem, 3.5vw, 1rem); 
  transition: all .5s ease;
`
  
const Tech = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  text-align: left;
  letter-spacing: .01vw;
  line-height: clamp(.1rem, 6vw, 1.4rem);
  font-size: clamp(.1rem, 3.5vw, 1rem); 
  width: 100%;
  transition: all .5s ease;
`
  
const Button = styled.button`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  flex:none;
  transition: all .5s ease;
  cursor: pointer;
  margin: 1rem;
  
  a {
    color: ${({ theme }) => theme.text};
    transition: all .5s ease;
  }

  &:hover {
    transition: all .5s ease;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};

  a {
    color: ${({ theme }) => theme.body};
    transition: all .5s ease;
    }
  }
  `
  
  export  { Wrapper, Header, SubHeader, Description, SubDescription, Tech, Button, Outline, HelloOutline}
 
  