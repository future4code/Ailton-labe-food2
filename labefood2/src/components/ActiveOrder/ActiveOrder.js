import React, { useContext, useEffect } from "react";
import { ContainerActiveOrder, ContainerOrder, OrderProcess } from "./styled";
import ClockImg from "../../assets/clock.svg";
import { Separator } from "../../styled";
import { GlobalContext } from "../../global/GlobalContext";

export default function ActiveOrder() {
  const { orderObjeto } = useContext(GlobalContext);

  function Order() {
    useEffect(() => {
      setTimeout(() => {
      }, orderObjeto?.order?.expiresAt);
    }, []);
    return (
      <ContainerActiveOrder>
        <div>
          <img src={ClockImg} alt="clock" />
        </div>
        <Separator width={"24px"} />
        <ContainerOrder>
          <OrderProcess>Pedido em andamento</OrderProcess>
          <p>{orderObjeto?.order?.restaurantName}</p>
          <p>
            <strong>
              SUBTOTAL R${orderObjeto?.order?.totalPrice?.toFixed(2).replace(".", ",")}
            </strong>
          </p>
        </ContainerOrder>
      </ContainerActiveOrder>
    );
  }
  return <Order />;
}
