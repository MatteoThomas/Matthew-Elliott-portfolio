import React from "react";
import resumepdf from "../img/Matthew_Elliott_res.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e7fae9;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 4rem;
`
const Title = styled.div`
    font-family: "Syne";
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: -.11rem;
    line-height: 2.3rem;
    color:  black;
    margin: 4rem 0 3rem 0;
    transform: scale(1, .9);
    width: 80%;
    /* background-color: aqua; */
text-align: center;
    `


const Button = styled.button`

`
const Img = styled.img`
width: 50%;
`

const Resume = () => {

  return (
    <Container>
        <Title>
        Resume
      </Title>
    <a href="https://docs.google.com/document/d/1yIj3v-auWwRtl1c8PikZNHBjr5PvkoXtcOY7j9OFkPs/edit?usp=sharing">
          Resume - <Button>PDF Link</Button>
      </a>
      {/* <Img id="resumeImg" src={resumepdf} alt="resume" /> */}

      </Container>
  );
}

export default Resume