import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { CardHome } from '../../components/CardHome/CardHome'
import { Separator } from '../../styled';
import { NewInput } from './styled'

export default function HomePage() {
  return (
    <div>
      <Header title={"FutureEats"} type={"semSeta"} width={"143.5px"}/>
      <Separator height={"8px"}/>
      <NewInput  placeholder="Restaurante"/>
      <p>Comidas</p>
      <Separator height={"15px"}/>
      <CardHome/>
      <Footer/>
    </div>

  )
}
