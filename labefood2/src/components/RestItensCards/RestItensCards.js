import React from "react";
import { ItemCard, ItemImg, DescriptionItemContain, ItemNameContain, NamesGreen, QttContainer, NamesBlack, AddButton, DescriptionContainer} from "./styled";

const RestItensCards = ({item, setAdd, quantity}) => {
 
  return (
    <ItemCard>
      <ItemImg src={item.photoUrl} alt={item.name} />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>{item.name}</NamesGreen>
          <QttContainer>{quantity}</QttContainer>
        </ItemNameContain>
        <DescriptionContainer><p>{item.description}</p></DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>R${item.price}</NamesBlack>
          <AddButton onClick={() => setAdd(true)}>Adicionar</AddButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
