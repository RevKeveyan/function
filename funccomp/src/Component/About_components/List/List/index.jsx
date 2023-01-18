export const List1 = (props) => {



    return<>
    <div className="social_wrapper">
                 <div className="social_img">
                 <img src={props.img} alt={props.name} />
                 </div>   

                 <div className="social_info">
                    <div>
                     <div className="social_title">{props.name}</div>
                     <div className="social_subtitle">{props.profession}</div>
                     <div className="social_descr">{props.descr}</div></div>
                     <div className="scoial_icons">
                     {props.social.map((icon,index)=>{
                    return <div key = {index}>
                       <a href={icon.link}><img src={icon.icon} alt={icon.name} /></a>
                    </div>
                   })}
                    </div>
                </div>
            </div>
</>
}
