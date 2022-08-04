import React, { useState,useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CardHome } from "../../components/CardHome/CardHome";
import { Separator } from "../../styled";

import { NewInput, FilterContainer, Filter, HomeContainer, CategoryListAll, CategoryListFilter, } from "./styled";

import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../global/GlobalContext";

export default function HomePage() {
  //useProtectedPage()
  const [query,setQuery]=useState("")
  const { restaurantsArray } = useContext(GlobalContext);

  const restaurantsListCategory = restaurantsArray?.map((item) => {
    return (
      <Filter key={item.id} item={item.category} style={{ color: "black" }}>
        {item.category}
      </Filter>
    );
  });

  const restaurantsList = restaurantsArray?.filter((item)=>{
    return item.name.toLowerCase().includes(query)
  }).map((item) => {
    return <CardHome key={item.id} item={item} />;
  });
  const onChangeQuery= (event)=>{
    setQuery(event.target.value)
  }
  console.log(query)
  return (
    <HomeContainer>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"} />
      <Separator height={"8px"} />
      <NewInput placeholder="Restaurante" value={query} onChange={onChangeQuery}/>
      <Separator height={"8px"} />
      <FilterContainer>
        <CategoryListAll>Todos</CategoryListAll>
        <CategoryListFilter>{restaurantsListCategory}</CategoryListFilter>
      </FilterContainer>
      {restaurantsList}
      <Footer />
    </HomeContainer>
  );
}
