import React, { useContext } from "react";
//import ComC from "./Componentc";
import { FirstName,LastName } from "./App";


const ComB=()=>{

const fname=useContext(FirstName);
const lname=useContext(LastName);

    return (
        <h1>{fname}{lname}</h1>
    )
}
export default ComB;