import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

import {
  ItemCard,
  ItemImg,
  DescriptionItemContain,
  ItemNameContain,
  NamesGreen,
  QttContainer,
  NamesBlack,
  AddButton,
  DescriptionContainer,
} from "./styled";

const RestItensCards = ({ item, setAdd, quantity, key, Rest, details }) => {
  const { setOrderId, cart } = useContext(GlobalContext);

  const isOnCart = cart.filter((product) => product.id === item.id);

  return (
    <ItemCard>
      <ItemImg src={item.photoUrl} alt={item.name} />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>{item.name}</NamesGreen>
          {isOnCart && <QttContainer>{isOnCart.quantity}</QttContainer>}
        </ItemNameContain>
        <DescriptionContainer>
          <p>{item.description}</p>
        </DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>
            R$
            {item.price.toString().includes(".")?
            item.price.toString().replace(".", ","):
            `${item.price.toString()},00`}
          </NamesBlack>
          <AddButton
            onClick={() => {
              setOrderId(item.id);
              setAdd(true);
            }}
          >
            Adicionar
          </AddButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
