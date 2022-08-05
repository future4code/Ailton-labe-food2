import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Profile } from "../../services/requests";
import RestItensCards from "../../components/RestItensCards/RestItensCards";
import { GlobalContext } from "../../global/GlobalContext";
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
  
} from "./styled";

export default function CartPage() {
  //useProtectedPage()
  const [user, setUser] = useState({});
  const { orderRestau, cart, optionProducts, setAdd, 
    setOrderRestau } =
    useContext(GlobalContext);

  useEffect(() => {
    Profile(setUser);
  }, []);

  let ShippingValue = 0
if(cart?.length !== 0){
  ShippingValue = orderRestau[0]?.shipping
}
 
  console.log(cart);
  console.log(orderRestau);

  //Calcular valor total

  const Total = () => {
    let totalValue = 0;
    for (let product of cart) {
      totalValue += product.price * product.quantity;
    }
    let totalWithShipping = totalValue + ShippingValue;
    return totalWithShipping;
  };

  const cartList = cart?.map((itemCart) => {
    <RestItensCards
      quantity={itemCart.quantity}
      setAdd={setAdd}
      key={itemCart.id}
      item={itemCart}
      Rest={orderRestau}
      details={optionProducts}
    />;
  });

  return (
    <CartContainer>
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
          <input type="radio" id="money" name="radio" />
          <span>Dinheiro</span>
        </Cash>
        <CreditCard>
          <input type="radio" id="creditcard" name="radio" />
          <span>Cartão de Credito</span>
        </CreditCard>
      </ContainerCheck>
      {/* FAZER TERNÁRIO OPÇÃO de cor do botão */}
      <ButtonCart>Confirmar</ButtonCart>
      <Footer />
    </CartContainer>
  );
}
