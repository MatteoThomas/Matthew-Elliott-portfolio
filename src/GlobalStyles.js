import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  html {
    scroll-behavior: smooth;
  }

  body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all .5s ease-in-out;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

  h1 {
    padding: 0;
    margin: 0;
  }

  h2 {
    padding: 0;
    margin: 0;
  }


/* a {
  color: black;
} */

a:link {
  text-decoration: none;

}
a:link {
  text-decoration: none;

}

a:hover {
  text-decoration: none;

}
a:visited {
  text-decoration: none;

}

a:active {
  text-decoration: none;

}

`;
export default GlobalStyles;

export const lightTheme = {
  body: "#e7dcd8",
  background: "black",
  text: "black",
  accent: "#eeff00",
  // hoverText: "#e7dcd8",
};
export const darkTheme = {
  body: "black",
  background: "#e7dcd8",
  text: "#e7dcd8",
  accent: "#eeff00",
  // hoverText: "black",
};
