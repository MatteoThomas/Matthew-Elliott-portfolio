
import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import  { webData } from "../data"
import  KeyboardArrowLeftIcon  from '@mui/icons-material/KeyboardArrowLeft';
import  KeyboardArrowRightIcon  from '@mui/icons-material/KeyboardArrowRight';
import  {  SubHeader,  Description, SubDescription, Tech, Button }  from "../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {mobile, tablet} from "../responsive"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Container = styled.div`
    width:clamp(300px, 90%, 1200px);
    display:flex;
    flex-direction: column;
    /* background-color: #424242; */
    `
const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e7dcd8;
    transition: show 4s;
    `
    
    const fadeIn = keyframes`
        0%   { opacity: 0; }
        100% { opacity: 1; }
    `;

const Box = styled.div`
 animation: ${fadeIn} 1s linear;
 transition: transform 1s ease-in-out;
`

// const Button = styled.button`
//   color: #e7dcd8;
//   border: none;
//   /* border-color:#e672a2;
//   border-width: 1px;
//   border-radius: 50px; */
//   background-color: transparent;
//   `

const Image = styled.img`
width: clamp(100px, 100%, 1200px);
border-radius: 2px;
/* ${mobile({ width: "90%", marginRight: "5vw", marginLeft: "5vw"})} */
`

const Slider = () => {
  
    const [show, toggleShow] = useState(false);

    const handleClick = (index) => () => {
        toggleShow(state => ({
          ...state, // <-- copy previous state
          [index]: !state[index] // <-- update value by index key
        }));
      };
    

    return (
        <Container>
{webData.map((item, index) => (

  <div>
    <BoxHeader>
<SubHeader>{item.title}</SubHeader>
<Button onClick={handleClick(index)}><ExpandMoreIcon/></Button>
</BoxHeader>

{show[index] ? <Box> <Image src={item.img}/><Tech>{item.tech}</Tech><SubDescription>{item.desc}</SubDescription></Box> : toggleShow} 
    
    



 </div>

))}
</Container>
    )






}

export default Slider
