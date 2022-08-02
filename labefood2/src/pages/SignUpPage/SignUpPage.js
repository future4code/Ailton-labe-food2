import React from 'react'
import Header from '../../components/Header/Header'
import { LoginLogo } from '../LoginPage/styled';
import { Separator,PageContainer,PageTitle } from '../../styled';
import SignUpForm from './SignUpForm';
import Logo from "../../assets/logoFutureLogin.png"

export default function SignUpPage() {
  return (
    <PageContainer>
      <Header type={"seta"} />
      <Separator height={"44px"} />
      <LoginLogo src={Logo}/>
      <Separator height={"16px"} />
      <PageTitle>Cadastrar</PageTitle>
      <Separator height={"16px"} />
      <SignUpForm/>
    </PageContainer>
  )
}
