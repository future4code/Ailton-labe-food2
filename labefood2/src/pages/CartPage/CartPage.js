import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
  return (
    <CartContainer>
      <Header type={"semSeta"} width={"135px"} title={"Meu carrinho"} />
      <StyleAddress>
        <Delivery>Endereço de Entrega</Delivery>
        <span>Rua Alessandra Vieira, 42</span>
      </StyleAddress>
      {/* FAZER TERNÁRIO OPÇÃO 1 */}
      <EmptyCart>
        <Span1>Carrinho vazio</Span1>
      </EmptyCart>
      {/* FAZER TERNÁRIO OPÇÃO 2 */}
      {/* <RestInfo>
        <NamesGreen>Nome restaurante</NamesGreen>
        <p>R. Fradique Coutinho, 1136 - Vl Mada</p>
        <p>50 - 60 min</p>
      </RestInfo> */}
      <PriceStyle>
        <br></br>
        <br></br>
        <Span2>Frete: R$:0,00</Span2>
        <SubTotalDiv>
          <span>SUBTOTAL</span>
          <NamesGreen>
            <strong>R$:00,00</strong>
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
