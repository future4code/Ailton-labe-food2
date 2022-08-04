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
  const { cart, setCart, pedido } = useContext(GlobalContext);
  //  const quantidade =[... quantidade,
  //   {id:key, qty:quantity}
  //  ]

  const AddCart = () => {
    const produtos = details.filter((produto) => {
      return produto.id === item.id;
    });
    const CartCopy = [...cart, produtos];
    setCart(CartCopy);
  };

  return (
    <ItemCard>
      <ItemImg src={item.photoUrl} alt={item.name} />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>{item.name}</NamesGreen>
          <QttContainer>{quantity}</QttContainer>
        </ItemNameContain>
        <DescriptionContainer>
          <p>{item.description}</p>
        </DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>R${item.price}</NamesBlack>
          <AddButton onClick={() => {setAdd(true)
          AddCart()}}>Adicionar</AddButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
