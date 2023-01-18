import React, { Component } from "react";
// import { AboutPage } from "./Home_Components/About_page";
import { List } from "../../Component/Home_Components/Order_list";
import { SectionAbout } from "../../Component/section_about";
import Avo from "../../assets/images/avo.jpg";

import "./style.css";
import {MainText} from "../../Component/Main-text";

export class Home extends Component{


    render (){
        return <>
        {/*<AboutPage/>*/}
        <MainText
            title={"Welcome to Simple House"}
            description={"Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."}/>
        <List/>
        <SectionAbout
            img = {Avo}
            title = {'Maecenas nulla neque'}
            descr = {'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.'}
        />
        </>
    }


}
