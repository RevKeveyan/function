import "./style.css"
import { useState } from "react";



export const Footer = () =>{
    const [rights] = useState('Copyright © 2045 Simple House | Design: TemplateMo');


    return <div className="rights">{rights}</div>
}
