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
  DeleteButton,
} from "./styled";

//Pegar do localStorage - fazer reload?
const RestItensCards = ({ item, setAdd, quantity, Rest, details }) => {
  const { setOrderId, cart, setOrderRestau, setCart, orderRestau } = useContext(GlobalContext);

  const isOnCart = cart?.filter((product) => product.id === item.id);

  const deleteFromCart = (id) => {
    const newCart = cart?.filter((product) => {
      if (product.id !== id) {
        return product
      }
    });
    setCart(newCart)
  };

  return (
    <ItemCard>
      <ItemImg src={item.photoUrl} alt={item.name} />
      <DescriptionItemContain>
        <ItemNameContain>
          <NamesGreen>{item.name}</NamesGreen>
          {isOnCart?.length === 0 ? (
            <p></p>
          ) : (
            <QttContainer>{isOnCart[0].quantity}</QttContainer>
          )}
        </ItemNameContain>
        <DescriptionContainer>
          <p>{item.description}</p>
        </DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>
            R$
            {item.price.toString().includes(".")
              ? item.price.toString().replace(".", ",")
              : `${item.price.toString()},00`}
          </NamesBlack>
          {isOnCart?.length === 0 ? (
            <AddButton
              onClick={() => {
                setOrderRestau(Rest);
                setOrderId(item.id);
                setAdd(true);
              }}
            >
              Adicionar
            </AddButton>
          ) : (
            <DeleteButton
            onClick={() => {
              deleteFromCart(item.id);
            }}
            >
              Remover
            </DeleteButton>
          )}
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default RestItensCards;
