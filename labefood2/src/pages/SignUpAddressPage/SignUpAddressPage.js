import React from 'react'
import { Separator } from '../../styled';
import Header from '../../components/Header/Header'
import { LoginContainer } from '../LoginPage/styled';

export default function SignUpAddressPage() {
  return (
    <LoginContainer>
      <Header type={"seta"}/>
      <Separator height={"16px"} />
      <p>Meu endereço</p>
      <Separator height={"16px"} />
      {/* colocar o form aqui  */}
    </LoginContainer>
  )
}
