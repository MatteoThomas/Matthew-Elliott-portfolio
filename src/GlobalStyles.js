import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;900&display=swap');

  body {
    background-color: aliceblue;
    font-family: 'Gruppo', cursive;
  }

  h1 {
    color: black;
    font-family: 'Noto Sans Mono', monospace;
    font-size: 7rem;
    letter-spacing: -.6rem;
    line-height: 5rem;
    padding: 0;
    color:#e7e7e7;
    -webkit-text-stroke: 1px black;
  }

  h2 {
padding: 0;
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



`;

export default GlobalStyles;
