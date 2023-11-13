import React from "react";
import web from "../src/images/m2.jpeg";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home=()=>{
    return (
        <>
<Common
name='Grow you business with' 
imgsrc="https://media.licdn.com/dms/image/C4D03AQFF8O2kNybahw/profile-displayphoto-shrink_800_800/0/1624801875774?e=1705536000&v=beta&t=1EXCVNOdkrThMl18oQkqAEpxW9l_aAVLdgvmp8L9zYM"
visit='/services'
btname='Get Started'
/>
        </>
    )
}
export default Home;