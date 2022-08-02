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
  