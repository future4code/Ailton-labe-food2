import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CardHome } from "../../components/CardHome/CardHome";
import { Separator } from "../../styled";
import { NewInput, FilterContainer, Filter } from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function HomePage() {


  useProtectedPage()
  return (
    <div>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"} />
      <Separator height={"8px"} />
      <NewInput placeholder="Restaurante" />
      <Separator height={"20px"} />
      <FilterContainer>
        <Filter>Burguer</Filter>
        <Filter>Asiática</Filter>
        <Filter>Massas</Filter>
        <Filter>Saudável</Filter>
        <Filter>Churrasco</Filter>
      </FilterContainer>
      <CardHome />
      <Footer />
    </div>
  );
}
