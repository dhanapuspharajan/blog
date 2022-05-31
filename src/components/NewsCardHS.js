import '../App.css';
export function NewsCardHS(props){


       let {image,title,description,Set} = props;
    return(
        <div className="NewsCardHS">
             <img src={image} alt='' ></img>
             <div className='NewsCardHS-1'>
             <h1 onClick={Set}>{title}</h1>
             <h3>{description}</h3>
             </div>
           
        </div>
    )
}