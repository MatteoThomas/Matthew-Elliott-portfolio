import { useTransition } from "@react-spring/core";
import { animated, config } from "@react-spring/web";
import React, { useState } from "react";
import styled from "styled-components"
import { Button } from "../../styles/Styles"
import Contact from "./Contact";

const Wrapper = styled.div`
`

const Container = styled.div`
`
const AnimatedContact = styled(animated.div)`
`
const ButtonWrap = styled.div`
`

const SpringMount = () => {
    const [intervalId, setIntervalId] = useState(0);
    const [disable, setDisable] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    
    // DEFINE ANIMATION PARAMETERS
    const transition = useTransition(isVisible, {
        config: isVisible ? { ...config.molasses} : { duration: 150 },
        from: { opacity: 0, transform: `translate3d(0px, -10px, 0px)` },
        enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
        leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` }

    });

    const handleClick = () => {
        

        console.log(disable)
        const newIntervalId = setInterval(() => {
            setDisable(false);
        }, 2000);
        setIntervalId(newIntervalId);
    }

    return (

        <Wrapper>
            {/* <ButtonWrap>
            <Button  
                disabled={disable} 
                
                onClick={() => {
                    handleClick()
                    setDisable(true)
                    setIsVisible(v => !v);
                }}> 
                {isVisible ? 'CONTACT' : 'CONTACT'}
            </Button>   
            </ButtonWrap>        */}
            <Container>
                {transition((style, item) =>
                item ? <div><AnimatedContact style={style}> 
                <Contact />
                </AnimatedContact></div> : ''
                )}
            </Container>
        </Wrapper>

    )

}

export default SpringMount;