import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartContainer, StyleAddress, Delivery, PriceStyle, Span1, Span2, SubTotalDiv, SubTitle, ContainerCheck, Cash, CreditCard, ButtonCart } from "./styled";


export default function CartPage() {
  return (
    <CartContainer>
      <Header type={"semSeta"} width={"135px"} title={"Meu carrinho"} />
      <StyleAddress>
        <Delivery>Endereço de Entrega</Delivery>
        <span>Rua Alessandra Vieira, 42</span>
      </StyleAddress>
      <PriceStyle>
        <Span1>Carrinho vazio</Span1>
        <Span2>Frete: R$:0,00</Span2>
        <SubTotalDiv>
          <span>SUBTOTAL</span>
          <span>R$:00,00</span>
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
      <ButtonCart>Confirmar</ButtonCart>
      <Footer />
    </CartContainer>
  );
}
