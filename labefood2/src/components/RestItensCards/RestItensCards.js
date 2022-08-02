import React from "react";
import Comida from "../../assets/comidaburguer.png";
import { ItemCard, ItemImg, DescriptionItemContain, ItemNameContain, NamesGreen, QttContainer, NamesBlack, AddButton} from "./styled";

const RestItensCards = () => {
  return (
    <ItemCard>
      <ItemImg src={Comida} alt="Algo" />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>Item-Burgão</NamesGreen>
          <QttContainer>2</QttContainer>
        </ItemNameContain>
        <p>Descrição-Com queijo, sem queijo, tomate, etc</p>
        <ItemNameContain>
          <NamesBlack>R$20,00</NamesBlack>
          <AddButton>Adicionar</AddButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
