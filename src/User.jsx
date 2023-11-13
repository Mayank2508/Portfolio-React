import React from "react";
import {useParams,useLocation} from 'react-router-dom';





const User=()=>{
    const {fname,lname}=useParams();

    const location=useLocation();

    return (<><h1>user {fname} {lname} page</h1>
    
   
    </>)
}
export default User;