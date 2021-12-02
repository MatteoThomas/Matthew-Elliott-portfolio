import React, { useState } from "react";
import styled from "styled-components";
import  { Wrapper, Header, Outline }  from "../../styles/Styles";
import { mobile } from "../../js/responsive"
import { webData } from '../../js/data'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


const Container = styled.div`
  width:clamp(10px, 80%, 1200px);
  margin: 2rem auto 0 auto;
  display: grid; 
  grid-template-columns: 2.4fr 0fr .6fr; 
  grid-template-rows: 0.6fr 2.3fr 0.8fr; 
  gap: 15px 15px; 
  grid-template-areas: 
    "title icons image"
    "desc desc image"
    ". . image"; 
    ${mobile({ display: "flex", flexDirection: "column", marginTop: "5rem"})}
border-top: 1px  solid ${({ theme }) => theme.text};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

`
const Title = styled.div`
    grid-area: title;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 100;
    font-size: clamp(1.3rem, 6vw, 3.4rem);
    letter-spacing: -.05rem;
    line-height: 1;
    font-style: italic;
    word-wrap: break-word;
    transition: all .5s ease;
    text-align: left;
    width: 100%;
    padding-top: .7rem;
    `

const Image = styled.img`
    grid-area: image;
    padding-top: 1rem;
`

const Desc = styled.div`
    grid-area: desc;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 100;
    letter-spacing: .01vw;
    line-height: clamp(.1rem, 6vw, 1.4rem);
    font-size: clamp(.3rem, 100%, 21rem); 
    transition: all 1.5s ease;
    text-align: left;
`

const Icons = styled.div`
    grid-area: icons;
    display: flex;
    justify-content: space-between;
    /* background-color: aliceblue; */
    /* width: 100%; */

   a {
     padding: 0 2rem 0rem 2rem;

   }
     `

const Date = styled.div`
padding-top: .2rem;
`

const Grid = () => {

  return (
    <div>
        {webData.map((item) => {
          return (
            <div key={item.id}>
              <Container>
                <TitleWrapper>
                <Title>{item.title}</Title>
                <Icons>
                  <a href={item.link}><LinkIcon/></a>
                  <a href={item.github}><GitHubIcon/></a>
                  <Date>
                  {item.date}
                  </Date>
                </Icons>
                </TitleWrapper>
                <Desc>{item.desc}</Desc>
                <Image src={item.img}/>  
              </Container>
            </div>
          )
        })}
    </div>
  );
}
export default Grid;
