import { useState } from "react";
import { FullArticle } from "../components/FullArticle";
import { Header } from "../components/Header";
import { NewsCardH } from "../components/NewsCardH";
import { NewsCardHS } from "../components/NewsCardHS";
import { DemoData } from "../data";


const Technology =()=>{

    let [Article,set_Article]=useState('');

    let [page,set_Page] =useState(true);

    let filtered = DemoData.reverse().splice(0,30).filter( (item) => {
        return item.category === 'Technology';
    } );

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
        <div className="Tourism">
   {console.log(Article)}
          {console.log(page)}
        { 
         page? <div>
        <Header/>
          <div className="grid-tourism">
             <div className="tourism0">
                 <h1>Technology</h1>
                 <div className="line"/>
             { filtered.map( (item,index) => (
                     <NewsCardH key={index} title={item.title} description={item.description} image={item.picture}
                     Set={() => Set(item)}
                     ></NewsCardH>
                 ) ) }
             </div>
             <div className="topPost-tourism">
                   <h1>Top Posts</h1>
                   { filtered.map( (item,index) => (
                     <NewsCardHS key={index}  title={item.title} image={item.picture} ></NewsCardHS>
                 ) ) }
                  <div className="ad">
                 <h2>Advertisement</h2> 
                 </div>
             </div>
          </div>
          </div>:
          <div>
              <div className="article" >
            
            { <FullArticle  title={Article.title} image={Article.picture} article={Article.full_article} back={() => back()}/>
             }

        </div>
          </div>
        }
        </div>
    )
}

export default (Technology);