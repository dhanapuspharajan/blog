import '../App.css';
import { useArticleContextConsumer } from '../Context';
export function NewsCardH(props){
     let [Article,setArticle] =useArticleContextConsumer();
     let [page,setPage] =useArticleContextConsumer();
       let {image,title,description,Set} = props;


    return(
        <div className="NewsCardH">
             <img src={image} alt='' ></img>
             <div className='NewsCardH-1'>
             <h1 onClick={Set} >{title}</h1>
             <h3>{description}</h3>
      
             </div>
           
        </div>
    )
}