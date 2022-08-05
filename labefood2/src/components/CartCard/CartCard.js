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
  const { cart, setCart} =
    useContext(GlobalContext);

  const deleteFromCart = (id) => {
    const newCart = cart?.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    });
    setCart(newCart);
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
          <NamesBlack>
            R$
            {item.price.toString().includes(".")
              ? item.price.toString().replace(".", ",")
              : `${item.price.toString()},00`}
          </NamesBlack>
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
