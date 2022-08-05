import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Profile, PlaceOrder } from "../../services/requests";
import { GlobalContext } from "../../global/GlobalContext";
import CartCard from "../../components/CartCard/CartCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  CartContainer,
  StyleAddress,
  Delivery,
  PriceStyle,
  Span1,
  Span2,
  SubTotalDiv,
  SubTitle,
  ContainerCheck,
  Cash,
  CreditCard,
  ButtonCart,
  NamesGreen,
  EmptyCart,
  RestInfo,
  ContainerScroll,
} from "./styled";
import { Separator } from "../../styled";

export default function CartPage() {
  //useProtectedPage()
  const [user, setUser] = useState({});
  const [payMethod, setPayMethod] = useState("");
  const { orderRestau, cart } = useContext(GlobalContext);

  useEffect(() => {
    Profile(setUser);
  }, []);

  let ShippingValue = 0;
  if (cart?.length !== 0) {
    ShippingValue = orderRestau[0]?.shipping;
  }

  console.log(cart);
  console.log(orderRestau);

  const Total = () => {
    let totalValue = 0;
    for (let product of cart) {
      totalValue += product.price * product.quantity;
    }
    let totalWithShipping = totalValue + ShippingValue;
    return totalWithShipping;
  };

  const cartList = cart?.map((itemCart) => {
    return <CartCard key={itemCart.id} item={itemCart} />;
  });

  let sendOrder = [];
  for (let item1 of cart) {
    sendOrder.push({ id: item1.id, quantity: item1.quantity });
  }
  console.log(sendOrder);
  console.log(orderRestau[0]?.id);

  return (
    <CartContainer>
      <ContainerScroll>
        <Header type={"semSeta"} width={"135px"} title={"Meu carrinho"} />
        <StyleAddress>
          <Delivery>Endereço de Entrega</Delivery>
          <span>{user.address}</span>
        </StyleAddress>
        {cart.length === 0 && (
          <EmptyCart>
            <Span1>Carrinho Vazio</Span1>
          </EmptyCart>
        )}
        {cart.length > 0 && (
          <>
            <RestInfo>
              <NamesGreen>{orderRestau[0]?.name}</NamesGreen>
              <p>{orderRestau[0]?.address}</p>
              <p>{orderRestau[0]?.deliveryTime} min</p>
            </RestInfo>
            <br></br>
            {cartList}
          </>
        )}
        <PriceStyle>
          <br></br>
          <Span2>Frete: R${ShippingValue},00</Span2>
          <SubTotalDiv>
            <span>SUBTOTAL</span>
            <NamesGreen>
              <strong>
                R$
                {Total().toString().includes(".")
                  ? Total().toString().replace(".", ",")
                  : `${Total().toString()},00`}
              </strong>
            </NamesGreen>
          </SubTotalDiv>
        </PriceStyle>
        <SubTitle>Formas de Pagamento</SubTitle>
        <ContainerCheck>
          <Cash>
            <input
              type="radio"
              id="money"
              name="dinheiro"
              value="dinheiro"
              onChange={() => {
                setPayMethod("dinheiro");
              }}
            />
            <span>Dinheiro</span>
          </Cash>
          <CreditCard>
            <input
              type="radio"
              id="creditcard"
              name="creditcard"
              value="creditcard"
              onChange={() => {
                setPayMethod("creditcard");
              }}
            />
            <span>Cartão de Credito</span>
          </CreditCard>
        </ContainerCheck>
        {/* FAZER TERNÁRIO OPÇÃO de cor do botão */}
        <ButtonCart
        onClick={() => {
            PlaceOrder(orderRestau[0]?.id, sendOrder, payMethod);
          }}
        >
          Confirmar
        </ButtonCart>
        <br></br>
        <br></br>
        <br></br>
        <Separator heigth="100px" />
      </ContainerScroll>
      <Footer />
    </CartContainer>
  );
}
