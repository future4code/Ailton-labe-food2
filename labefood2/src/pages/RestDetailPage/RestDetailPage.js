import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import RestItensCards from "../../components/RestItensCards/RestItensCards";
import { getRestaurantDetail } from "../../services/requests";
import {
  NamesGreen,
  RestDetailContainer,
  DivText,
  ContainerRest,
  NamesBlackBorder,
} from "./styled";
import { useParams } from "react-router-dom";

export default function RestDetailPage() {
  //useProtectedPage()

  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getRestaurantDetail(`${params.id}`, setDetails);
  }, []);

  const principaisList = details
    ?.filter(
      (item) => item.category !== "Acompanhamento" && item.category !== "Bebida"
    )
    .map((item) => <RestItensCards key={item.id} item={item} />);

  const acompanhamentosList = details
    ?.filter((item) => item.category === "Acompanhamento")
    .map((item) => <RestItensCards key={item.id} item={item} />);

  const bebidasList = details
    ?.filter((item) => item.category === "Bebida")
    .map((item) => <RestItensCards key={item.id} item={item} />);

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
        {principaisList}
        <NamesBlackBorder>Acompanhamentos</NamesBlackBorder>
        {acompanhamentosList}
        <NamesBlackBorder>Bebidas</NamesBlackBorder>
        {bebidasList}
      </RestDetailContainer>
    </div>
  );
}
