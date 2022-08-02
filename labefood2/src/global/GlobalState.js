import React from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLogin(navigate);
  };
  const values = {logout}
  return <Provider value={values}>{props.children}</Provider>;
};
