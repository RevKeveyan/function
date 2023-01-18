import React, {Component} from "react";
import { useState } from "react";

export const Show = (props) =>{
    const [flag, setFlag] = useState(false);


   const Close = ()=>{
    setFlag(!flag);

    }

    return <div className="faq_help"> 
        <button onClick={Close} className="faq_question"> {props.question} <img className={!flag? "rotate":null} src={props.img} alt="Arrow" /></button>
        {flag ? <p>{props.text}</p> : null}
        </div>
}
