import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#e7dcd8",
  background: "#e7dcd8",
  text: "#222222",
  accent: "#d69f9f",
  accentTwo: "#c3e760",
  opacity: "0",
  invert: "0",
};

export const darkTheme = {
  body: "#222222",
  background: "#222222",
  text: "#e7dcd8",
  accent: "#c3e760",
  accentTwo: "#d69f9f",
  opacity: ".3",
  invert: "1",
};

const GlobalStyles = createGlobalStyle`

*::-webkit-scrollbar {
    width: 20px;
    z-index: -1;
  }

  *::-webkit-scrollbar-track {
    filter: opacity(0);
    /* background: transparent; */
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.accent};
    border-radius: 0px;
    border: 13px  ${({ theme }) => theme.background};
  }

* {
  box-sizing: border-box;
}

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    /* Hide horizontal scrollbar */
    overflow: overlay;
    overflow-x: hidden; 
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
  /* border: 1px solid ${({ theme }) => theme.accent}; */
  border-radius: 50px;

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
