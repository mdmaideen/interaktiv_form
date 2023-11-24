import React from "react";
import './App.css';
import { Route,Routes } from 'react-router-dom';

import Home from "./components/home";
import About from "./components/about";
import Start from "./components/start";






function App(){







    return(
     

    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="start" element={<Start/>}/>
        <Route path="about" element={<About/> }/>
      </Routes>
     
      
     
       
       

</>

    );
}

export default App;