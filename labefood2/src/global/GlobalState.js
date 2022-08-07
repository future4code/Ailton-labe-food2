import React, { useState, useEffect } from "react";
import { goToLogin } from "../routes/coordinator";
import { GlobalContext } from "./GlobalContext";
import { ActiveOrder, getRestaurants } from "../services/requests";
import { token } from "../constants/token";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [restaurantsArray, setRestaurantsArray] = useState([]);
  const [add, setAdd] = useState(false);
  const [restId, setRestId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orderRestau, setOrderRestau] = useState("");
  const [temporaryRest, setTemporaryRest] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState("");
  const [pedido, setPedido] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [optionProducts, setOptionProducts] = useState([]);
  const [orderObjeto, setOrderObjeto] = useState("")

  const logout = (navigate) => {
    localStorage.clear()
    goToLogin(navigate);
  };

  if (cart === "") {
    const getLocal = JSON.parse(localStorage.getItem("cart"));
    setCart(getLocal ? getLocal : []);
  }

  if (orderRestau === "") {
    const getLocal = JSON.parse(localStorage.getItem("rest"));
    setOrderRestau(getLocal ? getLocal : []);
  }

    useEffect(() => {
      ActiveOrder(setOrderObjeto)
      getRestaurants(setRestaurantsArray);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("rest", JSON.stringify(orderRestau));
    }, [token, cart, orderRestau]);
  
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
    orderObjeto,
    temporaryRest, 
    setTemporaryRest,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
