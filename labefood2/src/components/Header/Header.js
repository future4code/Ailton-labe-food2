import React from 'react'
import { HeaderTitle, ContainerHeader,SetaImg } from './styled'
import {Separator} from "../../styled"
import seta from "../../assets/seta.svg"
import { goBack } from '../../routes/coordinator'
import { useNavigate } from 'react-router'

export default function Header(props) {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      {props.type === "seta" && (
        <>
      <Separator width={"16px"}/>
       <SetaImg  src={seta} onClick={()=>goBack(navigate)}/>
       </>)}
      {props.type ==="semSeta" &&(
        <Separator width={props.width}/>
      )}
      <HeaderTitle>{props.title}</HeaderTitle>
    </ContainerHeader>
  )
}
