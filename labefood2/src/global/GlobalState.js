import React from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState =(props)=>{
 const Provider = GlobalContext.Provider
 console.log(props.children)
  return(
    <Provider>
      {props.children}
    </Provider>
  )
}