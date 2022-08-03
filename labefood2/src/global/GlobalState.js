import React, { useState } from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";
import {useRequest} from "../hooks/useRequest"

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [add, setAdd] = useState(false);
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLogin(navigate);
  };
  const Restaurants = useRequest("restaurants") 
  const values = { logout, Restaurants };
  return <Provider value={values}>{props.children}</Provider>;
};
