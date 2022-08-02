import React from "react";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import RestItensCards from '../../components/RestItensCards/RestItensCards'
import {
  NamesGreen,
  RestDetailContainer,
  DivText,
  ContainerRest,
  NamesBlackBorder,
} from "./styled";


export default function RestDetailPage() {
  useProtectedPage()
  return (
    <div>
      <Header type={"seta"} largura={"99.5px"} title={"Restaurante"} />
      <RestDetailContainer>
        <ContainerRest>
          <img />
          <NamesGreen>Nome restaurante</NamesGreen>
          <p>Categoria</p>
          <DivText>
            <p>50 - 60 min</p>
            <p>Frete R$6,00</p>
          </DivText>
          <p>Endereço</p>
        </ContainerRest>
        <NamesBlackBorder>Principais</NamesBlackBorder>
        <RestItensCards/>
        <RestItensCards/>
        <NamesBlackBorder>Acompanhamentos</NamesBlackBorder>
        <RestItensCards/>
        <RestItensCards/>
      </RestDetailContainer>
    </div>
  );
}
