export function FullArticle(props){
     let { title,image,article,back } = props

   
     return(
         
         <div className="article-page">
             { console.log(title ,article )}
            <div className="article-head">
                <i className="material-icons" 
                onClick={back}>arrow_back</i>
                <h1>{title}</h1>
            </div>
                 <br/>
                 <img src={image} alt="" ></img>
                 <p>{article}</p>
         </div>
     )
}