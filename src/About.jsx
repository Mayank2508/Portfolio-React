import React from "react";
import web from "../src/images/sd3.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const About=()=>{
    return (
        <>
  <Common 
  name='Talented Boy from Uttar Pradesh' 
  imgsrc="https://nwc.edu/academics/photos/program-photos/computer-science.jpg"
  visit='/contact'
  btname='Contact Now'
  
  />
        </>
    )
}
export default About;