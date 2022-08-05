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
  const [orderRestau, setOrderRestau] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [pedido, setPedido]= useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [optionProducts, setOptionProducts] = useState([])
  
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
    setOrderId,
    quantity,
    cart,
    setCart,
    pedido,
    setPedido,
    currentOrder, 
    setCurrentOrder,
    optionProducts, 
    setOptionProducts,
    orderRestau, 
    setOrderRestau,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
