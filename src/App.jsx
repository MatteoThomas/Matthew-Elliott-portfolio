import React from "react";
import Home from "./home/Home";
import { BrowserRouter } from "react-router-dom";

const App = () => {

    return (

        <div>
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </div>
)}

export default App;
