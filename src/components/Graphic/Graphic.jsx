
import styled from "styled-components"
import  { Wrapper, Description }  from "../../styles/Styles"
import GraphicContainer from "./GraphicContainer";

const Container = styled.div`
`

const Header = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(6rem, 15vw, 16rem);
  letter-spacing: -.11rem;
  line-height: .8;
  word-wrap: break-word;
  text-align: left;
  transition: all .5s ease;
`

const HeaderWrap = styled.div`
  width: clamp(200px, 90%, 1300px);

`

const Outline = styled.div`
  font-family: 'Hurricane', cursive;
  font-size: clamp(6rem, 28vw, 22rem);
  font-weight: 100;
  line-height: 1rem;
  display: inline;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  -webkit-text-fill-color: transparent;
  transition: all .5s ease;
`

const Graphic = () => {

  return (
      <div id="graphic">
    <Container>
      <Wrapper>
     <HeaderWrap>
          <Header>
       <Outline>graphic </Outline>design
       </Header>
    </HeaderWrap>
      <Description>
          I have over a <br/>decade of experience in<br/> online promotion, print, and <br/>product branding.
      </Description>
    <GraphicContainer/>
      </Wrapper>
    </Container>
</div>
  );
}

export default Graphic;
