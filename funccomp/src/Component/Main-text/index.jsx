import "./style.css"


export const MainText = (props) =>{
       
       
       
       return <div className="title2">
        {props.title? <h2>{props.title}</h2> : null}
        <p>{props.description}</p>
    </div>
}