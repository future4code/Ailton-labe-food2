import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Separator } from "../../styled";
import {
  ContainerAddCart,
  ContainerBox,
  DivAdd,
  Select,
  AddCartTitle,
  TitleSelect,
} from "./styled";
import { numbers } from "../../constants/numbers";

export const AddCart = () => {
  const {
    cart,
    setCart,
    setAdd,
    add,
    setQuantity,
    quantity,
    setPedido,
    pedido,
    optionProducts,
    orderId,
  } = useContext(GlobalContext);

  const onChangeValue = (event) => {
    setQuantity(event.target.value);
  };
  console.log(pedido);

  const AddIdButton = () => {
    const [produtoA] = optionProducts.filter(
      (produto) => produto.id === orderId
    );
    console.log(produtoA);
    const newProdOrder = { ...produtoA, quantity };
    console.log(newProdOrder);
    setCart((cart) => [...cart, newProdOrder]);
  };

  console.log("cart", cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      {add && (
        <ContainerAddCart>
          <ContainerBox>
            <Separator height={"43px"} />
            <TitleSelect>Selecione a quantidade desejada</TitleSelect>
            <Separator height={"31px"} />
            <Select value={quantity} name="quantity" onChange={onChangeValue}>
              {/* <option selected disabled value="0">
                0
              </option> */}
              {numbers.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </Select>
            <Separator height={"28px"} />
            <DivAdd>
              <AddCartTitle
                onClick={() => {
                  setAdd(false);
                  setPedido(true);
                  AddIdButton();
                }}
              >
                ADICIONAR AO CARRINHO
              </AddCartTitle>
            </DivAdd>
          </ContainerBox>
        </ContainerAddCart>
      )}
    </>
  );
};
