import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CardHome } from "../../components/CardHome/CardHome";
import { Separator } from "../../styled";
import {
  NewInput,
  FilterContainer,
  Filter,
  CategoryListAll,
  CategoryListFilter,
} from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../global/GlobalContext";

export default function HomePage() {
  //useProtectedPage()

  const { restaurantsArray } = useContext(GlobalContext);

  const restaurantsListCategory = restaurantsArray?.map((item) => {
    return (
      <Filter key={item.id} item={item.category} style={{ color: "black" }}>
        {item.category}
      </Filter>
    );
  });

  const restaurantsList = restaurantsArray?.map((item) => {
    return <CardHome key={item.id} item={item} />;
  });

  return (
    <div>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"} />
      <Separator height={"8px"} />
      <NewInput placeholder="Restaurante" />
      <Separator height={"8px"} />
      <FilterContainer>
        <CategoryListAll>Todos</CategoryListAll>
        <CategoryListFilter>{restaurantsListCategory}</CategoryListFilter>
      </FilterContainer>
      {restaurantsList}
      <Footer />
    </div>
  );
}
