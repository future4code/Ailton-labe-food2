import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/url";
import { token } from "../constants/token";

export const Login = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      window.alert("Usuário não encontrado");
      console.log("Ih...", err);
    });
};

export const Singup = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      alert("Verifique se todos os campos foram preenchidos");
      console.log("Algo saiu errado", err);
    });
};

export const AddAddress = (body, goTo, navigate, clear) => {
  axios
    .put(`${BASE_URL}address`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate);
      alert("Endereço adicionado");
      clear();
    })
    .catch((err) => {
      alert("Verifique se todos os campos foram preenchidos");
      console.log("Ver de novo, saiu errado", err);
    });
};

export const FullAddress = () => {
  axios
    .get(`${BASE_URL}profile/address`, {
      headers: { auth: token },
    })
    .then((res) => {
    })
    .catch((err) => {
      console.log("Ih ;;", err);
    });
};

export const Profile = (setData) => {
  axios
    .get(`${BASE_URL}profile`, {
      headers: { auth: token },
    })
    .then((res) => {
      setData(res.data.user);
    })
    .catch((err) => {
      console.log("Tem algo errado");
    });
};

export const UpdateProfile = (body, goTo, navigate) => {
  axios
    .put(`${BASE_URL}profile`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      goTo(navigate);
    })
    .catch((err) => {
      console.log("Deu errado");
    });
};

export const getRestaurants = (setData) => {
  axios
    .get(`${BASE_URL}restaurants`, {
      headers: { auth: token },
    })
    .then((res) => {
      setData(res.data.restaurants);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const getRestaurantDetail = (id, setData) => {
  axios
    .get(`${BASE_URL}restaurants/${id}`, {
      headers: { auth: token },
    })
    .then((res) => {
      setData(res.data.restaurant.products);
    })
    .catch((err) => {
      console.log("Deu erro");
    });
};

export const PlaceOrder = (id, sendOrder, payMethod) => {
  const body = {
    "products": sendOrder,
    "paymentMethod": payMethod
  }
  axios
    .post(`${BASE_URL}restaurants/${id}/order`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      alert("Seu pedido foi feito com sucesso!:)")
    })
    .catch((err) => {
      console.log(err);
      alert('Algo deu errado. Verifique seu pedido e a forma de pagamento estão completos!')
    });
};

export const ActiveOrder = (setData) => {
  axios
    .get(`${BASE_URL}active-order`, {
      headers: { auth: token },
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log("deu erro");
    });
};

export const getOrderHistory = (setData) => {
  axios
    .get(`${BASE_URL}orders/history`, {
      headers: { auth: token },
    })
    .then((res) => {
      setData(res.data.orders);
    })
    .catch((err) => {
      console.log("Deu erro");
    });
};
