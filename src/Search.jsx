import React, { useState } from "react";



const Search =()=>{

    const [image,setImage]=useState();

    const inputEvent=(event)=>{
const data=event.target.value;
setImage(data)
    }
    return (
        <>
        <div className="searchbar">
        <input type='text' placeholder="search anything" 
        
        value={image}
        onChange={inputEvent}/>
        </div>
        
        
        </>
    )
}
export default Search;