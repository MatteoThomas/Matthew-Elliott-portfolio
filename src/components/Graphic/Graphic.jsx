
import styled from "styled-components"
import  { Wrapper, Header, Description, Outline}  from "../../styles/Styles"
import {mobile} from "../../js/responsive"
import GraphicContainer from "./GraphicContainer";


const Container = styled.div`
`

const HeaderWrap = styled.div`
  width: clamp(200px, 90%, 1200px);
  display: flex;
  align-items: center;
  ${mobile({ width: "80%", flexWrap: "wrap"})};
`

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  letter-spacing: .01vw;
  line-height: clamp(.01rem, 3vw, 2rem);
  font-size: clamp(1rem, 1vw, 14.74rem); 
  width: clamp(100px, 12%, 1200px);
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

  :hover {
    transition: all .5s ease;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};

  a {
    color: ${({ theme }) => theme.body};
    transition: all .5s ease;
    }
  }
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

      <Button>
        <a href="https://matteoelliott.myportfolio.com">
          My Portfolio
        </a>
      </Button>

    </HeaderWrap>
      <Description>

          I have over a decade of experience in online promotion, 
          print, and product branding.

      </Description>

    <GraphicContainer/>

   


      </Wrapper>
    </Container>
</div>

  );
}

export default Graphic;
