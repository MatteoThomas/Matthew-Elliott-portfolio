import { createGlobalStyle } from "styled-components";
import { mobile } from "../js/responsive";

export const lightTheme = {
  body: "#e7dcd8",
  background: "#e7dcd8",
  text: "#222222",
  accent: "#e25c7d",
  accentTwo: "#d4ff13",
  opacity: "0",
  invert: "0",
};

export const darkTheme = {
  body: "#222222",
  background: "#222222",
  text: "#e7dcd8",
  accent: "#A1FF00",
  accentTwo: "#e25c7d",
  opacity: ".3",
  invert: "1",
};

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    margin: 0;
  }

  h1 {

    margin: 0;
  }

  h2 {

    margin: 0;
  }


a {
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding:.2rem .5rem .2rem .5rem;
}

a:link {
  text-decoration: none;
  color: ${({ theme }) => theme.text}

}

a:hover {
  text-decoration: none;
  color: ${({ theme }) => theme.accent}
}

a:visited {
  text-decoration: none;
  color: ${({ theme }) => theme.text}

}

a:active {
  text-decoration: none;
  color: ${({ theme }) => theme.accent}

}

a:focus {
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 50px;

}

.container-slider {
  width: clamp(100px, 90%, 1200px);
  /* height: 400px; */
  margin: 100px 1rem 0 1rem;
  position: relative;
  /* overflow: hidden; */
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out .2s;
}

.active-anim {
  opacity: 1;
}

.btn-slide {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  ${mobile({ width: "40px", height: "40px", marginTop: "0" })}
  transition: all .5s ease-in-out;
  margin-top: -10rem;
  /* background-color: aqua; */
}

.btn-slide img {
  width: 25px;
  height: 25px;
  pointer-events: none;
}

.prev {
  top: 6rem;
  left:0rem;
  ${mobile({ top: "-4rem", left: "-1rem" })};
}

.prev:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.2);
}

.next {
  top: 6rem;
  left: 6rem;
  ${mobile({ top: "-4rem", left: "4rem" })};
}

.next:hover {
  transition: all .5s ease-in-out;
  transform: rotate(-136deg);
  transform: scale(1.2);
  }

.container-dots {
  display: block;
  display: flex;
  transition: all .5s ease-in-out;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 2rem 5px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text};
  transition: all .5s ease-in-out;
}

.dot.active {
  background: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent};
  transition: all .5s ease-in-out;
}

// IF BROWSER DOESNT SUPPORT CSS BLUR USE BACKGROUND_COLOR
/* .blur {
  background-color: ${({ theme }) => theme.body};
}

@supports (backdrop-filter: blur(26.5px)) {
  .blur {
    background: rgba( 5, 5, 5, 0 );
    backdrop-filter: blur( 26.5px );
    -webkit-backdrop-filter: blur( 26.5px );
  }
} */

/* .canvas {
  position:absolute;
} */

.webgl
{
  z-index:300;
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
}

`;

export default GlobalStyles;
