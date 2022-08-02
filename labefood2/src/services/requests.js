import axios from 'axios'
import { BASE_URL} from '../constants/url'

export const Login = (body, goTo, navigate) => {
    axios
    .post(`${BASE_URL}login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      goTo(navigate);
      console.log("deu certo")
    })
    .catch((err) => {
      alert("Usuário não encontrado")
      console.log("ih ;;")
    })
  };

  export const Singup = (body, goTo, navigate) => {
    axios
    .post(`${BASE_URL}signup`,body)
    .then((res) => {
      goTo(navigate)
      console.log("Foi direcionado?")
    })
    .catch((err) => {
      alert("Verifique se todos os campos foram preenchidos")
      console.log("Algo saiu errado")
    })
  };
  
  export const AddAddress = (body, goTo, navigate) => {
    axios
    .put(`${BASE_URL}address`, body, {
      headers: { auth: token }
    })
    .then((res) => {
      alert("Endereço adicionado")
    })
    .catch((err) => {
      alert("Verifique se todos os campos foram preenchidos")
      console.log("Ver de novo, saiu errado")
    })
  };
  
  export const FullAddress = () => {
    axios
    .get(`${BASE_URL}profile/address`, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Endereço localizado")
    })
    .catch((err) => {
      console.log("Ih ;;")
    })
  };

  export const Profile = () => {
    axios
    .get(`${BASE_URL}profile`, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Usuario localizado")
    })
    .catch((err) => {
      console.log("Tem algo errado")
    })
  };

  export const UpdateProfile = (body) => {
    axios
    .put(`${BASE_URL}profile`, body, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Editado")
    })
    .catch((err) => {
      console.log("Deu errado")
    })
  };

  export const Restaurants = () => {
    axios
    .get(`${BASE_URL}retaurants`, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("restaurante localizado")
    })
    .catch((err) => {
      console.log("Não achou")
    })
  };

  export const RestaurantDetail = (id) => {
    axios
    .get(`${BASE_URL}restaurants/${id}`, {
      headers: { auth: token }
    })
    then((res) => {
      console.log("Pagina sendo exibida")
    })
    .catch((err) => {
      console.log("Deu erro")
    })
  };

  export const PlaceOrder = (id, body) => {
    axios
    .post(`${BASE_URL}restaurants/${id}/order`, body, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Deu fome")
    })
    .catch((err) => {
      console.log("Deu erro")
    })
  };

  export const ActiveOrder = () => {
    axios
    .get(`${BASE_URL}active-order`, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Pedido localizado")
    })
    .catch((err) => {
      console.log("deu erro")
    })
  };

  export const OrderHistory = () => {
    axios
    .get(`${BASE_URL}orders/history`, {
      headers: { auth: token }
    })
    .then((res) => {
      console.log("Deu certo")
    })
    .catch((err) => {
      console.log("Deu erro")
    })
  };

