import React from "react";
import { Separator } from "../../styled";
import {
  ContainerAddCart,
  ContainerBox,
  DivAdd,
  Select,
  AddCartTitle,
  TitleSelect,
} from "./styled";

export const AddCart = () => {
  return (
    <ContainerAddCart>
      <ContainerBox>
        <Separator height={"43px"} />
        <TitleSelect>Selecione a quantidade desejada</TitleSelect>
        <Separator height={"31px"} />
        <Select>
          <option>1</option>
        </Select>
        <Separator height={"28px"} />
        <DivAdd>
          <AddCartTitle>ADICIONAR AO CARRINHO</AddCartTitle>
        </DivAdd>
      </ContainerBox>
    </ContainerAddCart>
  );
};
