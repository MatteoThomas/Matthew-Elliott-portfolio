import React, { useState } from 'react'
import styled from "styled-components"

import { webData } from '../../js/data'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { mobile } from "../../js/responsive"
import { animated, useTransition, config } from '@react-spring/web'

const Container = styled.div`  
    height:350px;
    /* width: clamp(100px, 90%, 1200px); */
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0rem 0 0 0;
    ${mobile({ flexDirection: "column"})}
    background-color: #a03c2867;
`

const SubHeader = styled.h2`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 100;
    font-size: clamp(1.3rem, 6vw, 3.4rem);
    letter-spacing: -.05rem;
    line-height: 1;
    font-style: italic;
    word-wrap: break-word;
    margin: 0 auto 0rem auto;
    transition: all .5s ease;
    text-align: left;
    background-color: #377575;
`

const SubDescription = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 100;
    letter-spacing: .01vw;
    line-height: clamp(.1rem, 6vw, 1.4rem);
    font-size: clamp(.3rem, 100%, 21rem); 
    transition: all 1.5s ease;
    text-align: left;
    background-color: #7c3fad;
`

const ImageWrapper = styled.div`
    width:100%;
    border-radius: 20px;
`

const Icons = styled.div`
    display: flex;
    background-color: #6e0f3476;
`

const Icon = styled.div`
    /* margin: 1rem 2rem 0rem 0rem; */
    color: ${({ theme }) => theme.text};
    background-color: #47f55e68;
`

const SlideInfo = styled.div`
    border-radius: 0 0px 0px 0;
    /* margin-top: 1rem; */
`

const AnimatedAbout = styled(animated.div)``

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const [isVisible, setIsVisible] = useState(true);

    
    // DEFINE ANIMATION PARAMETERS
    const transition = useTransition(isVisible, {
        config: isVisible ? { ...config.molasses } : { duration: 150 },
        from: { opacity: 0, transform: `translate3d(110px, -10px, 0px)` },
        enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
        leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` }

    });

  
    const nextSlide = () => {
        if(slideIndex !== webData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === webData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(webData.length)
        }
    }

 
    return (
        <div >
            <Container>
            {webData.map((item, index) => {
                return (
                    <div key={item.id}>
                    <Container>
                {transition((style, itemB) =>
                itemB ? <div><AnimatedAbout style={style}> 

                        <Wrapper>
             
                         <SlideInfo>
                        <SubHeader>{item.title}</SubHeader>

                        <SubDescription>{item.desc}</SubDescription>

                            <Icons>
                                <a href={item.link}>
                                <Icon>
                                    <LinkIcon/>
                                </Icon>
                                    </a>
                                <a href={item.github}>
                                <Icon>      
                                    <GitHubIcon/>
                                </Icon>
                                    </a>
                            </Icons>
                        </SlideInfo>
                        <ImageWrapper>
                        <img 
                        src={item.img} 
                        />
                        </ImageWrapper>
                  
                        </Wrapper>
                        </AnimatedAbout></div> : ''
                        )}
                    </Container>           


                        
                    </div>
                )
            })}

        </Container>
        </div>
    )
}