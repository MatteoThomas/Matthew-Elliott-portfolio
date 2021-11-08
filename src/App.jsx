import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from './globalStyles';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./globalStyles"

const App = () => {

    // const [theme, setTheme] = useState('dark');
    // const toggleTheme = () => {

    //   if (theme === 'light') {
    //     setTheme('dark');

    //   } else {
    //     setTheme('light');
    //   }
    // }
return (

<div>
{/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles /> */}

<Home/>

{/* </ThemeProvider> */}

</div>
)}

export default App;
