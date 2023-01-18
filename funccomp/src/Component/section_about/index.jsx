import Avo from "../../assets/images/avo.jpg";
import { useState } from "react";
import "./style.css";

export const SectionAbout = () =>{

    const [about] = useState({
        img : Avo,
        title : 'Maecenas nulla neque',
        descr : 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
    });


    return <>
        
    <div className="about">
        <img src={about.img} alt="Avocado" />
        <div className="about_text">
            <div className="about_title">{about.title}</div>
            <div className="about_descr">{about.descr}</div>
            <button className="about_btn">Read More</button>
        </div>
    </div>      
    </>
}