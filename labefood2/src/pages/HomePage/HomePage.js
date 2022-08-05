import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CardHome } from "../../components/CardHome/CardHome";
import { Separator } from "../../styled";
import {
  NewInput,
  FilterContainer,
  Filter,
  HomeContainer,
  CategoryListAll,
  CategoryListFilter,
} from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../global/GlobalContext";

export default function HomePage() {
  //useProtectedPage()
  const [query, setQuery] = useState("");
  const { restaurantsArray } = useContext(GlobalContext);
  const [selectCategory, setSelectCategory] = useState("");

  const onClickCategory = (e) => {
    setSelectCategory(e);
  };

  const restaurantsListCategory = restaurantsArray?.map((item) => {
    return (
      <Filter
        key={item.id}
        item={item.category}
        onClick={() => {
        onClickCategory(item.category);
        }}
        selectCategory={selectCategory}
      >
        {item.category}
      </Filter>
    );
  });

  const restaurantsList = restaurantsArray
    ?.filter((item) => {
      return item.name.toLowerCase().includes(query);
    })
    .filter((item) => {
      return item.category.includes(selectCategory);
    })
    .map((item) => {
      return <CardHome key={item.id} item={item} />;
    });
  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <HomeContainer>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"} />
      <Separator height={"8px"} />
      <NewInput
        placeholder="Restaurante"
        value={query}
        onChange={onChangeQuery}
      />
      <Separator height={"8px"} />
      <FilterContainer>
        <CategoryListAll
          onClick={() => {
            onClickCategory("");
          }}
        >
          Todos
        </CategoryListAll>
        <CategoryListFilter>{restaurantsListCategory}</CategoryListFilter>
      </FilterContainer>
      {restaurantsList}
      <Footer />
    </HomeContainer>
  );
}
