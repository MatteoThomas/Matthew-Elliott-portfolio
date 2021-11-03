
import { useState } from 'react'
import styled from 'styled-components'
import  { webData } from "../data"
import  KeyboardArrowLeftIcon  from '@mui/icons-material/KeyboardArrowLeft';
import  KeyboardArrowRightIcon  from '@mui/icons-material/KeyboardArrowRight';
import  {  SubHeader,  Description, SubDescription }  from "../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {mobile, tablet} from "../responsive"

const Container = styled.div`
    width:90%;
    display:flex;
    flex-direction: column;
    /* background-color: aquamarine; */
 
`

const Arrows = styled.div`
// DOESN'T SHOW ON FULLSCREEN WIDTH
    display: none;
    justify-content: space-between;
    /* margin: 0rem 1rem 1rem 1rem; */
    ${mobile({ display: "flex"})}
    
`

const Arrow = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    z-index: 2;
    color: black;
    background-color: #e4ff4e;
  
`

const Wrapper = styled.div`
    width: clamp(200px, 100%, 1200px);
    display: flex;
    margin: 1rem auto 0 auto;
    transition: all 1s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    ${tablet({ flexDirection: "column"})}
    ${mobile({ flexDirection: "initial"})} 
    /* background-color: #776a6a; */

 `

const Key = styled.div`

`

const Slide = styled.div`
    width:100%;
    display: flex;    
    transition: all .5s linear;
    /* background-color: #8dc8fc; */
`


const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({ width: "100vw"})}
    /* background-color: #757564; */
    `
    
    const ImgContainer = styled.div`
    width: 90%;
    object-fit: contain;
    `
    
    const Image = styled.img`
        width: clamp(100px, 100%, 1200px);
        border-radius: 2px;
        /* ${mobile({ width: "90%", marginRight: "5vw", marginLeft: "5vw"})} */
    `

const Icons = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-around;

    /* background-color: aqua; */
`

const Slider = () => {
  
    const [slideIndex, setSlideIndex] = useState(0)

  
    const handleClick = (direction) => {
if(direction === "left"){
    setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
} else {
    setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0)
}
    }

    return (
        <Container>
            <Arrows>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
          <KeyboardArrowLeftIcon/>
            </Arrow>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
        <KeyboardArrowRightIcon/>
            </Arrow>
            </Arrows>
            
            <Wrapper slideIndex={slideIndex} id='wrapper'>


{webData.map((item) => (
<Key>
 <Slide>

<InfoContainer>

        <ImgContainer>
        <Image src={item.img}/>
        </ImgContainer>

    <SubHeader>{item.title} </SubHeader>
    <SubDescription>{item.tech}</SubDescription>
    <SubDescription>{item.desc}</SubDescription>
    
    <Icons>
    <a href={item.link}> 
    <LinkIcon style={{ fontSize: "2rem", color: "white"}}></LinkIcon></a>
    <a href={item.github}> 
    <GitHubIcon style={{ fontSize: "2rem", color: "white"}}></GitHubIcon></a>
    </Icons>


</InfoContainer>

</Slide>
</Key>
))}
            </Wrapper>
        </Container>
    )
}

export default Slider
