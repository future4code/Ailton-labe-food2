import React, { useContext, useEffect, useState } from "react";
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
  ContainerImg,
  Footer
} from "./styled";
import { useParams } from "react-router-dom";
import { AddCart } from "../../components/AddCart/AddCart";
import { GlobalContext } from "../../global/GlobalContext";
import { Separator } from "../../styled";

export default function RestDetailPage({ item }) {
  //useProtectedPage()
  const { setAdd, quantity, restaurantsArray } = useContext(GlobalContext);
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getRestaurantDetail(`${params.id}`, setDetails);
  }, []);
  
  const Rest = restaurantsArray?.filter((item) => {
    return item.id === params.id;
  });

  const principaisList = details
    ?.filter(
      (item) => item.category !== "Acompanhamento" && item.category !== "Bebida"
    )
    .map((item) => (
      <RestItensCards
        quantity={quantity}
        setAdd={setAdd}
        key={item.id}
        item={item}
        Rest={Rest}
        details={details}
      />
    ));

  const acompanhamentosList = details
    ?.filter((item) => item.category === "Acompanhamento")
    .map((item) => (
      <RestItensCards
        quantity={quantity}
        setAdd={setAdd}
        key={item.id}
        item={item}
        Rest={Rest}
        details={details}
      />
    ));

  const bebidasList = details
    ?.filter((item) => item.category === "Bebida")
    .map((item) => (
      <RestItensCards
        quantity={quantity}
        setAdd={setAdd}
        key={item.id}
        item={item}
        Rest={Rest}
        details={details}
      />
    ));

  console.log(params.id);//retorna o id do restaurante (1)//
  console.log(Rest) //retorna array com o objeto do rest dentro//
  return (
    <>
      <AddCart />
      <div>
        <Header type={"seta"} largura={"99.5px"} title={"Restaurante"} />
        <RestDetailContainer>
          <ContainerRest>
            <Separator heigth={"17px"} />
            <ContainerImg Img={Rest[0]?.logoUrl} />
            <NamesGreen>{Rest[0]?.name}</NamesGreen>
            <p>{Rest[0]?.category}</p>
            <DivText>
              <p>05 - {Rest[0]?.deliveryTime} min</p>
              <p>Frete R$ {Rest[0]?.shipping},00</p>
            </DivText>
            <p>{Rest[0]?.address}</p>
          </ContainerRest>
          <NamesBlackBorder>Principais</NamesBlackBorder>
          {principaisList}
          {acompanhamentosList.length > 0 && (
            <>
              <NamesBlackBorder>Acompanhamentos</NamesBlackBorder>
              {acompanhamentosList}
            </>
          )}
          <NamesBlackBorder>Bebidas</NamesBlackBorder>
          {bebidasList}
          <Separator heigth={"10px"}/>
          <Footer></Footer>
        </RestDetailContainer>
      </div>
    </>
  );
}
