import React from "react";
import { ItemCard, ItemImg, DescriptionItemContain, ItemNameContain, NamesGreen, QttContainer, NamesBlack, AddButton, DescriptionContainer} from "./styled";

const RestItensCards = ({item}) => {

  return (
    <ItemCard>
      <ItemImg src={item.photoUrl} alt={item.name} />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>{item.name}</NamesGreen>
          <QttContainer>2</QttContainer>
        </ItemNameContain>
        <DescriptionContainer><p>{item.description}</p></DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>R${item.price}</NamesBlack>
          <AddButton>Adicionar</AddButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
