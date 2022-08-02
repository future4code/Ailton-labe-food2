import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { CardHome } from '../../components/CardHome/CardHome'
import { Separator } from '../../styled';
import { NewInput, FilterContainer, Filter } from './styled'

export default function HomePage() {
  return (
    <div>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"}/>
      <Separator height={"8px"}/>
      <NewInput  placeholder="Restaurante"/>
      <Separator height={"20px"} />
      <FilterContainer>
        <Filter>Burguer</Filter>
        <Filter>Asiatica</Filter>
        <Filter>Massas</Filter>
        <Filter>Saudavel</Filter>
        <Filter>Churrasco</Filter>
      </FilterContainer>
      <CardHome/>
      <Footer/>
    </div>

  )
}
