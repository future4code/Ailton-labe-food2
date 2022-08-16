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

const RestItensCards = ({ item, setAdd, quantity, details }) => {
  const { setOrderId, cart, setOrderRestau, setCart, orderRestau } = useContext(GlobalContext);

  const isOnCart = cart?.filter((product) => product.id === item.id);

  const deleteFromCart = (id) => {
    const newCart = cart?.filter((product) => {
      if (product.id !== id) {
        return product
      }
    });
    setCart(newCart)
    if(cart?.length === 0){
      setOrderRestau([])
      localStorage.setItem("rest", JSON.stringify([]));
    }
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
            {item.price?.toFixed(2).replace(".", ",")}
          </NamesBlack>
          {isOnCart?.length === 0 ? (
            <AddButton
              onClick={() => {
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
