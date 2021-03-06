import React from "react";
import styled from "styled-components";

import { mobile } from "../../js/responsive"
import { webData } from '../../js/data'
import GitHubIcon from '@mui/icons-material/GitHub';


const Container = styled.div`
  width: clamp(200px, 90%, 1200px);
  margin: 2rem auto 5rem auto;
  display: grid; 
  grid-template-columns: 1.1fr 0.5fr 1.4fr 1fr 1fr; 
  grid-template-rows: 0.2fr 1.6fr; 
  gap: 15px 15px; 
  grid-template-areas: 
    "title icons image desc date"
    "title . image desc ."; 
  ${mobile({ display: "flex", flexDirection: "column", marginTop: "5rem"})}
  border-top: 1px  solid ${({ theme }) => theme.text};
  padding-top: 1rem;
`

const TitleWrapper = styled.div`
`
const Header = styled.div`
`
  
const Title = styled.div`
  grid-area: title;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.3rem, 11vw, 12rem);
  letter-spacing: -.05rem;
  line-height: 8rem;
  ${mobile({ lineHeight: "2rem"})}
  font-style: italic;
  word-wrap: break-word;
  transition: all .5s ease;
  text-align: left;
  a {
  &:hover {
    color: ${({ theme }) => theme.accent}
  }
}
`

const Image = styled.img`
  grid-area: image;
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
    a {
      padding: 2rem 2rem 2rem 0rem;
      &:hover {
        color: ${({ theme }) => theme.accent}
      }
    }
  ${mobile({ paddingTop: "0rem"})}
`

const Date = styled.div`
  grid-area: date;
  text-align: right;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  ${mobile({ textAlign: "right", marginTop: "-2.5rem"})}
`

const Grid = () => {

  return (
    <div>
        {webData.map((item) => {
          return (
            <div key={item.id}>
              <Container>
                <Image src={item.img}/>  
                <TitleWrapper>
                <Title> <a href={item.link}>{item.title}</a></Title>
                </TitleWrapper>
                <Desc>{item.desc}</Desc>
                <Header>
                <Icons>
                  <a href={item.github}><GitHubIcon/></a>
                </Icons>
                  </Header>
                  <Date>
                  {item.date}
                  </Date>
              </Container>
            </div>
          )
        })}
    </div>
  );
}
export default Grid;
