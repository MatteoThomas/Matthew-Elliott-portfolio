import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import styled from "styled-components";
import { Label } from "@mui/icons-material";

const Container = styled.div`
  background-color: #e7fae9;
  width: 100vw;
  `
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #050505;
  /* width: 80%; */
`

const Title = styled.div`
  font-family: "Syne";
  font-size: 2.7rem;
  font-weight: 700;
  color:  #e7fae9;
  /* z-index: 1; */
  margin: 4rem 0 3rem 0;
  letter-spacing: -.11rem;
  transform: scale(1, .9);
  width: 80%;
  text-align: center;
  /* background-color: #000000; */
`

const Form = styled.div`
  margin-bottom: 20vh;
  color:  #e7fae9;
  font-size: 2rem;
`

const Name = styled.div`
  margin: 1rem;
`

const Text = styled.input`
  color:  #e7fae9;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid var(--pink);
  outline: none;
`

const Email = styled.input`
  background-color: var(--dark);
  border: none;
  border-bottom: 1px solid var(--pink);
  outline: none;
  color:  #e7fae9;
  font-size: 2rem;

`

const Submit = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;
`

const Contact = () => {
  
  const  [ count , setCount ] = useState(0)

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

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
  <Container>
    <Wrapper>

    <Title>
        Contact
    </Title>

    </Wrapper>
  </Container>
  );
}

export default Contact;
