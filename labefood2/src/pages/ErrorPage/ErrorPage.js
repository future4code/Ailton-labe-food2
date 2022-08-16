import React from 'react';
import {
  PageContainer,
  PageTitle,
  ErrorPageContainer,
  Separator,
} from '../../styled';
import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../../assets/errorimg.png';
import { ErrorButton } from '../ErrorPage/styled';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ErrorPageContainer>
        <img src={ErrorImg} />
        <PageTitle>Um erro inesperado ocorreu.</PageTitle>
        <Separator height={'5px'} />
        <p onClick={() => goToHome(navigate)}>
          Por favor retorne à pagina inicial.
        </p>
        <Separator height={'16px'} />
        <ErrorButton onClick={() => goToHome(navigate)}>Voltar</ErrorButton>
      </ErrorPageContainer>
    </PageContainer>
  );
}
