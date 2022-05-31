import '../App.css';

export function NewsCard(props){
       let {image,title, description,Set} = props;
    return(
        <div className="NewsCard">
             <img src={image} alt='' ></img>
             <h3 onClick={Set} >{title}</h3>
             <h4>{description}</h4>
        </div>
    )
}