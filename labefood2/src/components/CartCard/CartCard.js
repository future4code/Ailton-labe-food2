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
  DescriptionContainer,
  DeleteButton,
} from "./styled";

const CartCard = ({ item }) => {
  const { cart, setCart, setOrderRestau } = useContext(GlobalContext);

  const deleteFromCart = (id) => {
    const newCart = cart?.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    });
    setCart(newCart);
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
          <QttContainer>{item.quantity}</QttContainer>
        </ItemNameContain>
        <DescriptionContainer>
          <p>{item.description}</p>
        </DescriptionContainer>
        <ItemNameContain>
          <NamesBlack>R${item.price?.toFixed(2).replace(".", ",")}</NamesBlack>
          <DeleteButton
            onClick={() => {
              deleteFromCart(item.id);
            }}
          >
            Remover
          </DeleteButton>
        </ItemNameContain>
      </DescriptionItemContain>
    </ItemCard>
  );
};

export default CartCard;
