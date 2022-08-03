import React, { useState, useEffect } from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../hooks/useRequest";
import { getRestaurants } from "../services/requests";
import { token } from "../constants/token";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [restaurantsArray, setRestaurantsArray] = useState([]);
  const [add, setAdd] = useState(false);
  const [restId, setRestId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [quantity, setQuantity] = useState(0);
  
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLogin(navigate);
  };

  useEffect(() => {
    getRestaurants(setRestaurantsArray);
  }, [token]);


  const values = {
    logout,
    restaurantsArray,
    setAdd,
    add,
    setQuantity,
    setRestId,
    restId,
    orderId,
    quantity,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
