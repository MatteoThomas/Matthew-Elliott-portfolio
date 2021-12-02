import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import {mobile} from "../../js/responsive"
import  { Wrapper, Outline }  from "../../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImageIcon from '@mui/icons-material/Image';

const Container = styled.div`

`
const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.7rem, 11vw, 8rem);
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: right;
  transition: all .5s ease;
  /* width: clamp(100px, 90%, 1200px); */
`

const SubDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  letter-spacing: .01vw;
  font-size: clamp(.2rem, 3.5vw, 1rem); 
  padding-right: 2rem;
`

const SubHeader = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 3.4rem);
  letter-spacing: -.05rem;
  line-height: 1;
  word-wrap: break-word;
  text-align: right;
`
const Button = styled.button`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 200;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  transition: all .5s ease;
  cursor: pointer;
  margin: 1rem 1rem 0 -1rem;

  
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

const ButtonWrap = styled.div`
  /* display: flex;
  justify-content: end; */
  
  & input {
    font-size: 2rem;
    ${mobile({ fontSize: "1.2rem"})};
    border-bottom: none;
    color: ${({theme}) => theme.text};
    &:hover {
      color: ${({theme}) => theme.accent};
      border-radius: 50px;
  } 
}
`
const HeaderIconsWrap = styled.div`
  width: clamp(100px, 90%, 1200px);
`

const IconContainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12rem 0 0 0;
  ${mobile({ margin: "6rem 0rem 0rem 0rem"})}
`

const Icons = styled.div`
  display: flex;
  margin: 2rem 1rem 0 0;
  ${mobile({ margin:"-1rem 0 0 0"})};
  `

const IconWrapper = styled.div`
  // MATERIAL UI ICONS USE THIS TO INHERIT SIZE
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  margin: -.5rem 0rem 1rem 0rem;
  padding: .5rem .1rem 0rem 0rem;
  background-color: transparent;
  transition: all 1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 1s ease-in-out;
  }
  &:active {
    transform: scale(1.3);
    transition: all 1s ease-in-out;
  }
`

const Form = styled.form`
  /* width: clamp(100px, 90%, 1200px); */
  color: ${({ theme }) => theme.text};
  font-family: 'Poppins', sans-serif;
`

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({theme}) => theme.accent};
  border-bottom: 2px solid ${({theme}) => theme.text};
  width: 100%;
  font-size: 3rem;  
  ${mobile({ fontSize: "1rem"})};
`

const Label = styled.div`
  margin: 1rem 0 0 0;
`

const Contact = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_818x1x1",
        "template_3vq1l5a",
        e.target,
        "user_iwbCAENbu4RyZEHcbrk1W"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          document.querySelector("form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
  
  <div id="contact">
  
  <Container>
    <Wrapper>
  
  <HeaderIconsWrap>
    
    <Header>
     
    
        <Outline>contact </Outline>
       me
    </Header>

    <Form onSubmit={sendEmail}> 

      <SubHeader>Drop a line anytime.</SubHeader>
    
        <Label>Name</Label>
        <Input type="text" name="from_name" />

        <Label>Email</Label>
        <Input type="email" name="user_email" />

        <Label>Message</Label>
        <Input type="text" name="message" />
    
        <ButtonWrap>
          <Button>
            <Input type="submit" value="Send" />
          </Button>
        </ButtonWrap>
    
      </Form>
      
      <IconContainer>
      <Icons>
        <a href="mailto:matt.ell@pm.me">
          <IconWrapper>
          <MailOutlineIcon href="mailto:matt.ell@pm.me" style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
          </IconWrapper>
          </a>

        <SubDescription>matt.ell@pm.me 
        </SubDescription>

    </Icons>
    
    <Icons>
    <a href="https://github.com/MatteoThomas">
      <IconWrapper>
      <GitHubIcon style={{ color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    <SubDescription>Github
    </SubDescription>
    </Icons>
    
    <Icons>
    <a href="https://www.linkedin.com/in/matthewell/">
    <IconWrapper>
    
      <LinkedInIcon style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    <SubDescription>LinkedIn
    </SubDescription>
    </Icons>

    <Icons>
    <a href="https://www.instagram.com/mattycakes512/">
    <IconWrapper>
    
      <InstagramIcon style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    <SubDescription>Instagram
    </SubDescription>
    </Icons>

    <Icons>
    <a href="https://matteoelliott.myportfolio.com/">
    <IconWrapper>
    
      <ImageIcon style={{color: "inherit", fontSize: "inherit", margin: "inherit"}}/>
      </IconWrapper>
    </a>
    {/* <SubDescription>Graphic Design Portfolio
    </SubDescription> */}
    </Icons>


</IconContainer>
    </HeaderIconsWrap>
   
    
    </Wrapper>
  </Container>
  </div>
  );
}

export default Contact;
