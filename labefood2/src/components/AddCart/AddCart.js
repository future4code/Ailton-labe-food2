import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Separator } from "../../styled";
import {
  ContainerAddCart,
  ContainerBox,
  DivAdd,
  Select,
  AddCartTitle,
  TitleSelect,
  GoBack,
} from "./styled";
import { numbers } from "../../constants/numbers";
import seta from "../../assets/seta.svg";

export const AddCart = () => {
  const {
    cart,
    setCart,
    setAdd,
    add,
    setQuantity,
    quantity,
    setPedido,
    optionProducts,
    orderId,
    setOrderRestau,
    orderRestau,
    temporaryRest,
  } = useContext(GlobalContext);

  const onChangeValue = (event) => {
    setQuantity(event.target.value);
  };

  const authRest = () => {
    if (orderRestau.length === 0 || cart?.length === 0) {
      setOrderRestau(temporaryRest);
      const [produtoA] = optionProducts.filter(
        (produto) => produto.id === orderId
      );
      const newProdOrder = { ...produtoA, quantity };
      setCart((cart) => [...cart, newProdOrder]);
    } else if (orderRestau[0].id === temporaryRest[0].id){
      setOrderRestau(temporaryRest);
      const [produtoA] = optionProducts.filter(
        (produto) => produto.id === orderId
      );
      const newProdOrder = { ...produtoA, quantity };
      setCart((cart) => [...cart, newProdOrder]);
    } else{
      window.alert("Esvazie seu carrinho antes de pedir de outro restaurante.");
    }
  };

  return (
    <>
      {add && (
        <ContainerAddCart>
          <ContainerBox>
            <Separator height={"43px"} />
            <GoBack src={seta} onClick={() => setAdd(false)} />
            <TitleSelect>Selecione a quantidade desejada</TitleSelect>
            <Separator height={"31px"} />
            <Select value={quantity} name="quantity" onChange={onChangeValue}>
              <option selected disabled value="0">
                0
              </option>
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
                  authRest();
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
