import React, { Component } from "react";
import './style.css'
import Arrow from "../../../assets/icons/arrow.png"
import { Show } from "./FAQ components";
import { MainText } from "../../Main-text";
import { useState } from "react";


export const FAQ = () =>{
    const [title] = useState('FAQs');
    const [text] = useState('This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #777');

    const [questions] = useState([{
        question : '1. Fusce eu lorem et dui #09C maximus varius?',
        text : '#777 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.',
    },
    {
        question : '2. Vestibulum #999 ante ipsum primis in faucibus orci?',
        text : 'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.',
    },
    {
        question : '3. Um erat. Lorem ipsum dolor sit amet consectetur?',
        text : 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.',
    },
    {
        question : '4. Ut ac erat sit amet neque efficitur faucibus et in lectus?',
        text : 'Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.',
    },
    ],)
    
    return <>
                <div className="faq">
                   <MainText
                    title = {title}
                    description = {text}
                   />

                    <div className="faq_questions">
                            {questions.map((elem,index)=>{
                                return <Show
                                img = {Arrow}
                                text = {elem.text}
                                question = {elem.question}
                                />
                            })}
                    </div>
                </div>
        </>
}
