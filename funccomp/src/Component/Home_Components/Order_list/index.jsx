import { useState } from "react";
import Pizza1 from "../../../assets/images/1.jpg";
import Pizza2 from "../../../assets/images/2.jpg";
import Pizza3 from "../../../assets/images/3.jpg";
import Pizza4 from "../../../assets/images/8.jpg";
import Pizza5 from "../../../assets/images/9.jpg";
import Salad1 from "../../../assets/images/4.jpg";
import Salad2 from "../../../assets/images/5.jpg";
import Noodle1 from "../../../assets/images/6.jpg";
import Noodle2 from "../../../assets/images/7.jpg";
import {Products} from "./Products";

export const List = () =>{

    const [buttons] = useState(['Pizza','Salad', 'Noodle']);
    const [list] = useState([
        {
            img : Pizza1,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Pizza"
        },
        {
            img : Pizza2,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Pizza"
        },
        {
            img : Pizza3,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Pizza"
        },
        {
            img : Pizza4,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Pizza"
        },
        {
            img : Pizza5,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Pizza"
        },
        {
            img : Salad1,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Salad"
        },
        {
            img : Salad2,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Salad"
        },
        {
            img : Salad2,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Salad"
        },
        {
            img : Salad1,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Salad"
        },
        {
            img : Noodle1,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Noodle"
        },
        {
            img : Noodle2,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Noodle"
        },
        {
            img : Noodle2,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Noodle"
        },
        {
            img : Noodle1,
            title : 'Fusce dictum finibus',
            description : 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price : '$45 / $55',
            type : "Noodle"
        },
    ]);
    const [list2, listchange] = useState([]);

    const [name, namechange] = useState('Pizza');

   
     const active = (elem) =>{
        namechange (elem);
        listchange (list.filter(x=> x.type === elem));
        
           
     }

    //  componentDidMount(){
    //     listchange(list.filter(x => x.type === name));
    //  }

    return <>
    <div className="btns">
    {buttons.map((elem,index)=>{
        return <button onClick={()=> active(elem)} className={name === elem ? "active" : null} key={index}>{elem}</button>
    })}
    </div>
    <div className="lists">
    {list2.map((elem,index)=>{
        return <div key={index}><Products
            img={elem.img}
            title={elem.title}
            description={elem.description}
            price={elem.price}/></div>
    })}
    </div>
    </>
}
