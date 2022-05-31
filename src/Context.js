import React, { useContext, useState } from "react";

const ArticleContext = React.createContext();

export function ArticleContextProvider({children}){
  let [Article,set_Article] = useState("");
  let [page,set_Page] = useState(true);
  return (
      <ArticleContext.Provider value={[[Article,set_Article],[page ,set_Page]]}>
          {children}
      </ArticleContext.Provider>
  )
}


export function useArticleContextConsumer(){
    return useContext(ArticleContext);
}