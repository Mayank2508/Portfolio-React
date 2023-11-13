import React from "react";
import web from '../src/images/s1.jpg'
import { NavLink } from "react-router-dom";

const Card=(props)=>{
    return (
        <>
        
            <div className="col-md-4 col-10 max-auto">
            <div className="card">
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <NavLink to={props.gitlink} class="btn btn-primary">Git Repository</NavLink>
  </div>
</div>
            </div>

       
        </>
    )
}
export default Card;