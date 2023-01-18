
import Logo from "../../assets/img/logo.png";
import {NavLink} from "react-router-dom";
import { useState } from "react";

import './style.css';


export const Header = () =>{

const [pages] = useState(['Home','About', 'Contact']);
const [path] = useState(['home', 'about', 'contact']);
const [logo] = useState({
            logoImg : Logo,
            title : "Simple House",
            subtitle : "new restaurant template",
            });

    return <>
             <div className="header">
                <div className="menu">
                    <div className="logo"> 
                        <img src={logo.logoImg} alt="Logo" />
                        <div className="logo_descr">
                            <div className="title">{logo.title}</div>
                            <div className="subtitle">{logo.subtitle}</div>
                        </div>
                    </div>
                <ul className="menu_links">
                    {pages.map((elem, index)=>{
                        return <li key={index}>
                        <NavLink to={'/'+path[index]}>
                            {elem}
                        </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            </div>
        </>
}