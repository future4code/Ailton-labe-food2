import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logoFutureLogin.png"
import { LoginContainer, LoginLogo } from './styled';
import LoginForm from './LoginForm';
import { Separator } from '../../styled';

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <LoginContainer>
      <Separator height={"88px"} />
      <LoginLogo src={Logo}/>
      <Separator height={"16px"} />
      <p>Entrar</p>
      <Separator height={"16px"} />
      <LoginForm/>
      <Separator height={"16px"} />
      <p>Não possui cadastro? Clique aqui.</p>
    </LoginContainer>
  )
}
