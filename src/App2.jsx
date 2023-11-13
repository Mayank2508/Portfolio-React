import React from "react";
import {Route,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Services from "./Services";
import User from "./User";
import Search from './Search'

const App2=()=>{
return (
    <>
    <Menu/>
   <Routes>

<Route exact path='/' Component={ ()=><About name='About'/> }/>
<Route exact path='/contact' Component={Contact}/>
<Route exact path='/services' Component={Services}/>
<Route path='/user/:fname/:lname' Component={User}/>
<Route path='/search' Component={Search}/>
<Route Component={Error}/>
</Routes>
    </>
)

}
export default App2;