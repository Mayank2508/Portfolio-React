import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Footer from './Footer'
import Home from "./Home";
import { Route,Routes} from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import NavBar from "./NavBar";

const App1=()=>{
    return (
        <>
        <NavBar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/services' Component={Services}/>
        <Route exact path='/contact' Component={Contact}/>
     </Routes>
     <br></br>
     <Footer/>
        </>
    )
}
export default App1;