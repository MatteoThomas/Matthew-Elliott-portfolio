
import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import  { graphicData } from "../../js/data"
import  {   Description, SubDescription, Tech, Button }  from "../../styles/Styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import {mobile, tablet} from "../../js/responsive"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTransition, animated, useSpring, config } from '@react-spring/web'
import useResizeAware from "react-resize-aware";
import { bool } from 'prop-types';

const Container = styled.div`
    width:clamp(10px, 80%, 1200px);
    /* display:flex;
    flex-direction: column; */
    display: ${({ open }) => open ?  'none' : 'block'};
`
    
const Box = styled.div`
`

const HeadWrapper = styled.div`
    background-color: transparent;
`
const SubHeader = styled.h2`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 200;
    font-size: clamp(1.5rem, 3vw, 3.4rem);
    letter-spacing: -.05rem;
    line-height: 1;
    word-wrap: break-word;
    margin: 0rem 0 0rem 0rem;
    transition: all .5s ease;
    justify-content: flex-end;
    background-color: transparent;
    display: flex;
`

const Image = styled.img`
    width:50%;
    border-radius: 2px;
    margin-bottom: 6rem;
    ${mobile({ width: "100%"})}
`

const Icons = styled.div`
`

const Icon = styled.div`
    margin: 0rem 1rem 1rem 1rem;
    color: ${({ theme }) => theme.text};
    ${mobile({ margin: "0rem 1rem 0rem 1rem"})}
`

const GraphicContainer = (theme, open, setOpen ) => {

// KEEPS SUBHEADER ACCENT COLOR BACKGROUND IF ITEM OPEN    
const inputStyle = (index, theme) => {
  return {
    backgroundColor: open[index] ?  "transparent" : "transparent"  
}

}
   
    return (
        <Container>
{graphicData.map((item, index) => (

  <div>

     <HeadWrapper>
<SubHeader > {item.name}
        {/* <a href={item.link}>
        <Icon>
            <LinkIcon/>
        </Icon>
            </a> */}
</SubHeader>
</HeadWrapper>

<div>

    <Box> 
    <Tech alt={item.alt}></Tech>
    <SubDescription>{item.desc}
    <Icons>

    </Icons>
    </SubDescription>
    <Image src={item.img}/>
    </Box> 
    </div>
 </div>

))}
</Container>
    )

}
GraphicContainer.propTypes = {
    open: bool.isRequired,
  }
  
export default GraphicContainer
