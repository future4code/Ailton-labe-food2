import React from 'react'
import { Separator,PageContainer,PageTitle } from '../../styled';
import Header from '../../components/Header/Header'
import SignUpAddressForm from './SignUpAddressForm';

export default function SignUpAddressPage() {
  return (
    <PageContainer>
      <Header type={"seta"}/>
      <Separator height={"16px"} />
      <PageTitle>Meu endereço</PageTitle>
      <Separator height={"16px"} />
      <SignUpAddressForm/>
    </PageContainer>
  )
};