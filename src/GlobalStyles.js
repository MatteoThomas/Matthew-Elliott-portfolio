import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  html {
    scroll-behavior: smooth;
  }

  body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

}



  h1 {
    font-family: "Nagoda";
 src: local("Nagoda"), url("./fonts/Nagoda.ttf") format("truetype");
  }

  h2 {
    padding: 0;
    margin: 0;
  }


a {
  color: black;
}

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

.font {
 font-family: "Nagoda";
 src: local("Nagoda"), url("./fonts/Nagoda.ttf") format("truetype");
}
`;
export default GlobalStyles;
