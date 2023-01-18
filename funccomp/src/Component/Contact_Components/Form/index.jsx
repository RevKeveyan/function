import './style.css'
import Facebook from "../../../assets/icons/facabook.png"
import Insta from "../../../assets/icons/insta.png"
import Twitter from "../../../assets/icons/twit.png"
import Phone from "../../../assets/icons/phone.png"
import EmailP from "../../../assets/icons/email.png"
import { useState } from 'react'


export const Form = () =>{

    const  [title] = useState('Our Address');
    const  [text] = useState('180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550');
    const  [phone] = useState('080-090-0110');
    const  [phoneIcon] = useState(Phone);
    const  [email] = useState('info@company.co');
    const  [emailicon] = useState(EmailP);
    const  [social] = useState([
        {
            name : "Facebook",
            link : "facebook.com",
            icon : Facebook,
        },
        {
            name : "Insta",
            link : "insta.com",
            icon : Insta,
        },
        {
            name : "Twitter",
            link : "twitter.com",
            icon : Twitter,
        },
    ]);


    const  [allInputs] = useState({
        Name : "",
        Email : "",
        Message : "",
    });

    const [error,setError] = useState({
        nameError : "",
        emailErr : "",
        messageErr : "",
    });

   const name1 = (e) =>{
             allInputs[e.target.name] = e.target.value;
                
            };


            const validation = ()=>{
                let valid = true
                const errors = {
                    nameError : "",
                    emailErr : "",
                    messageErr : "",
                   
                };
        
                if(!allInputs.Name){
                    errors.nameError = "Required Name";
                    valid = false;
                }
                if(!allInputs.Email){
                    errors.emailErr = "Required Email";
                    valid = false;
                }
                if(!allInputs.Message){
                    errors.messageErr = "Required Massage";
                    valid = false;
                }
        
                setError(errors);
                return valid;
            };
        

    return <>
    <div className="form">
        <div className="form_inputs">
                {error.nameError? <p className="errtext">{error.nameError}</p> : null}
                <input className={error.nameError? "red":null} onChange={name1}  type="text" name ="Name" placeholder="Name"/>
                {error.nameError? <p className="errtext">{error.emailErr}</p> : null}
                <input className={error.nameError? "red":null} onChange={name1} type="text" name ="Email"  placeholder="Email"/>
                {error.messageErr? <p className="errtext">{error.messageErr}</p> : null}
                <textarea className={error.messageErr? "red":null} onChange={name1} name="Message" id="" cols="30" rows="10"  placeholder="Message"></textarea>
                <button onClick={validation} className="form_btn">Send</button>
        </div>
        <div>
            <h2 className="form_title">{title}</h2>
            <p className="form_text">{text}</p>
            <ul className="form_cont">
                <li><img src={phoneIcon} alt="" />{phone}</li>
                <li><img src={emailicon} alt="" />{email}</li>
            </ul>
            <ul className="form_social">
            {social.map((elem,index)=>{
                return<li key={index}><img src={elem.icon} alt={elem.name} /></li>
            })}
            </ul>
        </div>
    </div>
</>
}