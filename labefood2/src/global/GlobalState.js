import React, { useState, useEffect } from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../hooks/useRequest";
import { getRestaurants } from "../services/requests";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [add, setAdd] = useState(false);
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLogin(navigate);
  };
  const [restaurantsArray, setRestaurantsArray] = useState([]);

  useEffect(() => {
    getRestaurants(setRestaurantsArray);
  }, []);

  const values = { logout, restaurantsArray };

  return (
  <Provider value={values}>{props.children}</Provider>
  );
};