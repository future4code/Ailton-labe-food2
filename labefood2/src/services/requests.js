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
      console.log("deu certo");
    })
    .catch((err) => {
      alert("Usuário não encontrado");
      console.log("ih ;;");
    });
};

export const Singup = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate);
      clear();
      console.log("Cadastro realizado!");
    })
    .catch((err) => {
      alert("Verifique se todos os campos foram preenchidos");
      console.log("Algo saiu errado");
    });
};

export const AddAddress = (body, goTo, navigate, clear) => {
  axios
    .put(`${BASE_URL}address`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Endereço adicionado")
      alert("Endereço adicionado");
      goTo(navigate);
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
      console.log("Endereço localizado", res);
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

export const UpdateProfile = (body,goTo,navigate) => {
  axios
    .put(`${BASE_URL}profile`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      console.log("Editado");
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
      console.log("Pagina sendo exibida");
    })
    .catch((err) => {
      console.log("Deu erro");
    });
};

export const PlaceOrder = (id, body) => {
  axios
    .post(`${BASE_URL}restaurants/${id}/order`, body, {
      headers: { auth: token },
    })
    .then((res) => {
      console.log("Deu fome");
    })
    .catch((err) => {
      console.log("Deu erro");
    });
};

export const ActiveOrder = () => {
  axios
    .get(`${BASE_URL}active-order`, {
      headers: { auth: token },
    })
    .then((res) => {
      console.log("Pedido localizado");
    })
    .catch((err) => {
      console.log("deu erro");
    });
};

export const OrderHistory = () => {
  axios
    .get(`${BASE_URL}orders/history`, {
      headers: { auth: token },
    })
    .then((res) => {
      console.log("Deu certo");
    })
    .catch((err) => {
      console.log("Deu erro");
    });
};
