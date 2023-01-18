import React, { Component } from "react";
import './style.css'
// import { AboutCont } from "../Contact/Contact_Components/About_page"
import { Form } from "../../Component/Contact_Components/Form"
import { Map } from "../../Component/Contact_Components/Map"
import { FAQ } from "../../Component/Contact_Components/FAQ"
import {MainText} from "../../Component/Main-text";

export class Contact extends Component{
    render (){
        return <>
            {/* <PageDescr/> */}
            {/*<AboutCont/>*/}
            <MainText
                title={"Contact Page"}
                description={"You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."}/>
            <Form/>
            <Map/>
            <FAQ/>
            </>
    }

}