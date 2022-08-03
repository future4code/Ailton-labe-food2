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
} from "./styled";
import {numbers} from "../../constants/numbers"
export const AddCart = () => {
  const {setAdd, add, setQuantity, quantity} = useContext(GlobalContext)
  const onChangeValue =(event)=>{
    setQuantity(event.target.value)
  }
  console.log(quantity)
  return (
    <>
    {add && (<ContainerAddCart >
    <ContainerBox>
      <Separator height={"43px"} />
      <TitleSelect>Selecione a quantidade desejada</TitleSelect>
      <Separator height={"31px"} />
      <Select value={quantity} name='quantity' onChange={onChangeValue}>
        <option selected disabled value="">0</option>
        {numbers.map((item, index)=>{
          return <option key={index}>{item}</option>
        })}
      </Select>
      <Separator height={"28px"} />
      <DivAdd>
        <AddCartTitle onClick={()=>setAdd(false)}>ADICIONAR AO CARRINHO</AddCartTitle>
      </DivAdd>
    </ContainerBox>
  </ContainerAddCart>)}
  </>
    
  );
};
