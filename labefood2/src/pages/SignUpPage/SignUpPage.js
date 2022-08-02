import React from 'react'
import Header from '../../components/Header/Header'
import seta from "../../assets/seta.svg"
import { LoginContainer, LoginLogo } from '../LoginPage/styled';
import { Separator } from '../../styled';
import SignUpForm from './SignUpForm';
import Logo from "../../assets/logoFutureLogin.png"

export default function SignUpPage() {
  return (
    <LoginContainer>
      <Header type={"seta"} />
      <Separator height={"44px"} />
      <LoginLogo src={Logo}/>
      <Separator height={"16px"} />
      <p>Cadastrar</p>
      <Separator height={"16px"} />
      <SignUpForm/>
    </LoginContainer>
  )
}
