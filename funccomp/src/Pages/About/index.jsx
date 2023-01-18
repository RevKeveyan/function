import React, { Component } from "react";
// import { PageDescr } from "../About/About_components/About_page";
import { Users } from "../../Component/About_components/List";
import { SectionBg } from '../../Component/About_components/Sectionbg';
import { Read } from "../../Component/About_components/Section3";
import { SectionAbout } from "../../Component/section_about";
import {MainText} from "../../Component/Main-text";
import Rest from '../../assets/img/7.jpg';


export class About extends Component{

    render (){
        return <>
            <MainText
                title={"About Simple House"}
                description={"This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."}/>
            <Users/>
            <SectionBg/>
            <Read/>
            <SectionAbout
                img = {Rest}
                title = {'History of our restaurant'}
                descr = {'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.'}
            />
            </>
    }
}