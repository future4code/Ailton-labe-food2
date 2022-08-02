import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function CartPage() {
  useProtectedPage()
  return (
    <div>
      <Header type={"semSeta"} largura={"135px"} title={"Meu carrinho"}/>
      <p>CartPage</p>
      <Footer/>
    </div>

  )
}
