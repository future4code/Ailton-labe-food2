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
  GoBack
} from "./styled";
import { numbers } from "../../constants/numbers";
import seta from "../../assets/seta.svg"

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
    setOrderRestau,
    
  } = useContext(GlobalContext);

  const onChangeValue = (event) => {
    setQuantity(event.target.value);
  };

 
  const AddIdButton = () => {
    const [produtoA] = optionProducts.filter(
      (produto) => produto.id === orderId
    );
    const newProdOrder = { ...produtoA, quantity };
    setCart((cart) => [...cart, newProdOrder]);
    /* let i = 0;
    for (cartItem of cart){
      if (cartItem.id !== orderId){
        setCart((cart) => [...cart, newProdOrder])
      }
    }  */
  };


 
  return (
    <>
      {add && (
        <ContainerAddCart>
          <ContainerBox>
            <Separator height={"43px"} />
            <GoBack src={seta} onClick={()=>setAdd(false)}/>
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
        
        </ContainerAddCart >
      )}
    </>
  );
};
