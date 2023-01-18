import './style.css'

export const Products = (props) =>{
 
    
    return <div>
    <img src={props.img} alt="nkar"/>
    <h2 className="list_title">{props.title}</h2>
    <p className="list_descr">{props.description}</p>
    <span className="list_price">{props.price}</span>
</div>

}