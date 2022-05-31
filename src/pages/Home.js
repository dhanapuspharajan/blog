import { useState } from "react";
import { FullArticle } from "../components/FullArticle";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { NewsCard } from "../components/NewsCard";
import { DemoData } from "../data";
const Home =() => {
  
    let [Article,set_Article]=useState('');

    let [page,set_Page] =useState(true);

    function Set(passed_item){
         set_Article(passed_item);
         console.log(Article);
         set_Page(false);
    
    }

    function back(){
        set_Article('');
        set_Page(true);
        console.log(page);
    }
    return(
      
        <div className="Home">
           {page? <div>
               <Header/>
            {console.log('home page')}
            <br/>
            <hr/>
            <div className="gallery">
             <div className="grid-item0">
             { DemoData.reverse().splice(0,1).map( (item,index) => (
                <Gallery image={item.picture} widthS={'710px'} heigthS={'200px'} key={index}></Gallery> 
                 ) ) }
             </div>
             <div className="grid-item1">
             { DemoData.reverse().splice(0,2).map( (item,index) => (
                <Gallery image={item.picture} key={index} widthS={'350px'} ></Gallery>  ) ) }
             </div>
             </div>
             <br/>
             <h2>The Latest</h2>
             <div className="line" style={{position:'relative',top:'-5px'}}></div>
             <section className="Home-Latest"> 
                 {DemoData.reverse().splice(0,8).map( 
                     (item,index) => (
                         <NewsCard
                          key={index}
                         image={item.picture} title={item.title} description={item.description} 
                         Set={() => Set(item)}
                         />
                     )
                  )}
             </section>
             </div> :<div className="article" >
            
            { <FullArticle  title={Article.title} image={Article.picture} article={Article.full_article} back={() => back()}/>
             }
             </div>
             }
        </div>
    )
}

export default (Home);