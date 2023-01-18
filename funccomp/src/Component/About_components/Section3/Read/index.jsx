export const ReadAbout = (props) =>{

    return<div>
            <div className="read_img">
                <img src={props.icon} alt={props.name} />
            </div>
            <div className="read_descr">
                {props.descr}
            </div>
            <button className="read_btn" id = {'btn'+props.index}>Read More</button>
        </div>
}
