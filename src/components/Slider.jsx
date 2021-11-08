
import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import  { webData } from "../data"
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
    border-bottom: 1px solid ${({ theme }) => theme.background};
    transition: show 2s;
    `
    
    const fadeIn = keyframes`
        0%   { opacity: 0; }
        100% { opacity: 1; }
    `;

const Box = styled.div`
 animation: ${fadeIn} 1s linear;
 transition: transform 1s ease-in-out;
`

const Image = styled.img`
width: clamp(100px, 100%, 1200px);
border-radius: 2px;
`

const Slider = () => {
  
    const [show, toggleShow] = useState(false);

    const handleClick = (index) => () => {
        toggleShow(state => ({
            // COPY PREVIOUS STATE
          ...state, 
          // UPDATE VALUE BY INDEX KEY
          [index]: !state[index] 
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

{show[index] ? <Box> 
    
    <Image src={item.img}/>
    <Tech>{item.tech}</Tech>
    <SubDescription>{item.desc}</SubDescription>
    </Box> : toggleShow} 
    
 </div>

))}
</Container>
    )






}

export default Slider
