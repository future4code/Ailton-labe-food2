import React, { useContext, useEffect } from "react";
import { ContainerActiveOrder, ContainerOrder, OrderProcess } from "./styled";
import ClockImg from "../../assets/clock.svg";
import { Separator } from "../../styled";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

export default function ActiveOrder() {
  const { orderObjeto } = useContext(GlobalContext);

  function Order() {
    useEffect(() => {
      setTimeout(() => {
        // goToHome(navigate)
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
              SUBTOTAL R$
               {orderObjeto?.order?.totalPrice.toString().includes(".")
                ? orderObjeto?.order?.totalPrice.toString().replace(".", ",")
                : `${orderObjeto?.order?.totalPrice.toString()},00`}
            </strong>
          </p>
        </ContainerOrder>
      </ContainerActiveOrder>
    );
  }
  return <Order />;
}
