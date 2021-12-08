import { useTransition } from "@react-spring/core";
import { animated, config } from "@react-spring/web";
import React, { useState } from "react";
import styled from "styled-components"
import About from "./About";


const Wrapper = styled.div`
`
const Container = styled.div`
`
const AnimatedAbout = styled(animated.div)`
`

const ButtonWrap = styled.div`
`

const SpringMount = () => {


    const [isVisible] = useState(true);

    
    // DEFINE ANIMATION PARAMETERS
    const transition = useTransition(isVisible, {
        config: isVisible ? { ...config.molasses} : { duration: 150 },
        from: { opacity: 0, transform: `translate3d(0px, 822px, 0px)` },
        enter: { opacity: 1, transform: `translate3d(0px, 0px, 0px)` },
        leave: { opacity: 0, transform: `translate3d(0px, 10px, 0px)` },
        delay: 400

    });

    return (

        <Wrapper>
            <ButtonWrap>

            </ButtonWrap>       
            <Container>
                {transition((style, item) =>
                item ? <div><AnimatedAbout style={style}> 
                <About />
                </AnimatedAbout></div> : ''
                )}
            </Container>
        </Wrapper>

    )

}

export default SpringMount;