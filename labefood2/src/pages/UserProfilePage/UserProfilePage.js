import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HistoryCard from '../../components/HistoryCard/HistoryCard';
import PencilImg from '../../assets/edit.svg'
import {UserInfo, StyleAddress, Delivery, NamesBlackBorder, HistoryContainter, InternalContainer, PencilContainer} from './styled'
import { useProtectedPage } from "../../hooks/useProtectedPage";



export default function UserProfilePage() {
  useProtectedPage();
  return (
    <div>

      <Header type={"semSeta"} title={"Meu perfil"} width={"146.5px"}/>
      <UserInfo>
        <InternalContainer>
        <p>Nome Sobrenome</p>
        <p>email@email.com</p>
        <p>123.456.789-01</p>
        </InternalContainer>
        <PencilContainer src={PencilImg} alt='imagem de lápis para editar as informações'/>
      </UserInfo>
      <StyleAddress>
        <InternalContainer>
        <Delivery>Endereço de Entrega</Delivery>
        <span>Rua Alessandra Vieira, 42</span>
        </InternalContainer>
        <PencilContainer src={PencilImg} alt='imagem de lápis para editar as informações'/>
      </StyleAddress>
      <HistoryContainter>
      <NamesBlackBorder>Histórico de pedidos</NamesBlackBorder>
      <HistoryCard/>
      <HistoryCard/>
      <HistoryCard/>
      </HistoryContainter>
      <Footer/>
    </div>
  );
}
