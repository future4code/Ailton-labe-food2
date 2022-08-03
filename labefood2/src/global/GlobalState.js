import React, { useState } from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [add, setAdd] = useState(false);
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLogin(navigate);
  };
  const values = { logout };
  return <Provider value={values}>{props.children}</Provider>;
};
