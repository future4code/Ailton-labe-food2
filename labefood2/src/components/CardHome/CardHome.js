import React from 'react'
import { Container, DivImg, DivText, ContainerText, ColorText, RestName } from './styled'

export const CardHome = () => {
  return (
    <Container>
        <DivImg src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGN__QYo38aSI-q4nCW-GIxtEm_LQe6EBff082M0YOlLp4hN64HB_HXXbvbmncEAUecU8&usqp=CAU"} />
        <ContainerText>
        <RestName>Habibs</RestName> 
         <DivText>
        <ColorText> 15 - 30min</ColorText>
        <ColorText>Frete: R$ 5,90</ColorText>
          </DivText>
        </ContainerText>
    </Container>
  )
}
