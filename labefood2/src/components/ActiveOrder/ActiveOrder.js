import React from "react";
import { ContainerActiveOrder, ContainerOrder, OrderProcess } from "./styled";
import ClockImg from "../../assets/clock.svg";
import { Separator } from "../../styled";

export default function ActiveOrder() {
  return (
    <ContainerActiveOrder>
      <div>
        <img src={ClockImg} alt="clock" />
      </div>
      <Separator width={"24px"} />
      <ContainerOrder>
        <OrderProcess>Pedido em andamento</OrderProcess>
        <p>Chazinho</p>
        <p><strong>SUBTOTAL R$2,00</strong></p>
      </ContainerOrder>
    </ContainerActiveOrder>
  );
}
