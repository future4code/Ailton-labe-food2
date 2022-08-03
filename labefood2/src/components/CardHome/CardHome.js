import React from "react";
import { goToRestDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DivImg,
  DivText,
  ContainerText,
  ColorText,
  RestName,
} from "./styled";

export const CardHome = ({ item }) => {
  const navigate = useNavigate();

  const onClickRest = (item) => {
    goToRestDetail(navigate, item?.id);
  };

  return (
    <Container onClick={() => onClickRest(item)}>
      <DivImg
        FotoImg={
          item.logoUrl
        }
      />
      <ContainerText>
        <RestName>{item.name}</RestName>
        <DivText>
          <ColorText> {item.deliveryTime} min</ColorText>
          <ColorText>Frete: R$ {item.shipping},90</ColorText>
        </DivText>
      </ContainerText>
    </Container>
  );
};
