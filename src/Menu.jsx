import React from "react";
import {NavLink} from 'react-router-dom';

const Menu=()=>{
    return (
        <>
        <NavLink to='/'>ABOUT US</NavLink>
        <NavLink to ='/Contact'> Contact US</NavLink>
        <NavLink to ='/services'> Services US</NavLink>
        <NavLink to='/user/'>User</NavLink>
        <NavLink to='/search'>Search</NavLink>
        </>
    )

}
export default Menu;