import "./style.css"
import Facebook from "../../../assets/icons/facabook.png"
import YouTube from "../../../assets/icons/youtube.png"
import Insta from "../../../assets/icons/insta.png"
import Twitter from "../../../assets/icons/twit.png"
import Jen from "../../../assets/img/1.jpg";
import Daisy from "../../../assets/img/2.jpg";
import Flor from "../../../assets/img/3.jpg";
import Val from "../../../assets/img/4.jpg";
import { List1 } from "./List";
import { useState } from "react"

export const Users = () =>{


    const [user] = useState([
        {
            img : Jen,
            name : 'Jennifer Soft',
            profession : 'Founder and CEO',
            descr : 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
            social : [
                {
                    icon : Facebook,
                    name : 'Facebook',
                    link : 'facebook.com'
                },
                {
                    icon : Twitter,
                    name : 'Twitter',
                    link : 'Twitter.com'
                },
                {
                    icon : Insta,
                    name : 'Instagram',
                    link : 'Instagramm.com'
                },
            ]
            
        },
        {
            img : Daisy,
            name : 'Daisy Walker',
            profession : 'Executive Chef',
            descr : 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
            social : [
                {
                    icon : Facebook,
                    name : 'Facebook',
                    link : 'facebook.com'
                },
                {
                    icon : Twitter,
                    name : 'Twitter',
                    link : 'Twitter.com'
                },
              
            ]
            
        },
        {
            img : Flor,
            name : 'Florence Nelson',
            profession : 'Kitchen Manager',
            descr : 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
            social : [
                {
                    icon : Facebook,
                    name : 'Facebook',
                    link : 'facebook.com'
                },
              
                {
                    icon : Insta,
                    name : 'Instagram',
                    link : 'Instagramm.com'
                },
            ]
            
        },

        {
            img : Val,
            name : 'Valentina Martin',
            profession : 'Culinary Director',
            descr : 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
            social : [
                {
                    icon : Facebook,
                    name : 'Facebook',
                    link : 'facebook.com'
                },
                {
                    icon : Twitter,
                    name : 'Twitter',
                    link : 'Twitter.com'
                },
                {
                    icon : Insta,
                    name : 'Instagram',
                    link : 'Instagramm.com'
                },
                {
                    icon : YouTube,
                    name : 'YouTube',
                    link : 'YouTube.com'
                },
            ]
            
        },
    ]);

    return <>
    <div className="social">
        {user.map((element, index)=>{
            return <List1
                img = {element.img}
                name = {element.name}
                profession = {element.profession}
                descr = {element.descr}
                social = {element.social}
            />
        
        })}
    </div>
</>
}
