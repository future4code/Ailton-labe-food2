import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logoFutureLogin.png"
import {LoginLogo } from './styled';
import LoginForm from './LoginForm';
import { Separator,PageContainer,PageTitle } from '../../styled';
import { goToSignUp } from '../../routes/coordinator';

export default function LoginPage() {
  const navigate = useNavigate()
  return (
    <PageContainer>
      <Separator height={"88px"} />
      <LoginLogo src={Logo}/>
      <Separator height={"16px"} />
      <PageTitle>Entrar</PageTitle>
      <Separator height={"16px"} />
      <LoginForm/>
      <Separator height={"16px"} />
      <PageTitle onClick={()=>goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</PageTitle>
    </PageContainer>
  )
}
