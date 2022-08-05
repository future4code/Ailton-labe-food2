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
  const { orderRestau, cart, optionProducts, setAdd } =
    useContext(GlobalContext);

  useEffect(() => {
    Profile(setUser);
  }, []);

  console.log(cart);

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
      {/* FAZER TERNÁRIO OPÇÃO 1 */}
      <EmptyCart>{/* <Span1>Carrinho vazio</Span1> */}</EmptyCart>
      {/* FAZER TERNÁRIO OPÇÃO 2 */}
      <RestInfo>
        <NamesGreen>{orderRestau[0]?.name}</NamesGreen>
        <p>{orderRestau[0]?.address}</p>
        <p>{orderRestau[0]?.deliveryTime} min</p>
      </RestInfo>
      <PriceStyle>
        <br></br>
        {cartList}
        <br></br>
        <Span2>Frete: R$0,00</Span2>
        <SubTotalDiv>
          <span>SUBTOTAL</span>
          <NamesGreen>
            <strong>R$00,00</strong>
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
