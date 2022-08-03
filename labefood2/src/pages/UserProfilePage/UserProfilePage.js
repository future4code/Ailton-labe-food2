import React, { useState,useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HistoryCard from '../../components/HistoryCard/HistoryCard';
import PencilImg from '../../assets/edit.svg'
import {UserInfo, StyleAddress, Delivery, NamesBlackBorder, HistoryContainter, InternalContainer, PencilContainer} from './styled'
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToEditProfile, goToEditAddress } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Profile} from '../../services/requests';



export default function UserProfilePage() {
  // useProtectedPage();
  const navigate = useNavigate()
  const [user,setUser]=useState("")

  useEffect(() => {
   Profile(setUser);
  }, []);
  console.log(user)
  return (
    <div>

      <Header type={"semSeta"} title={"Meu perfil"} width={"146.5px"}/>
      <UserInfo>
        <InternalContainer>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.cpf}</p>
        </InternalContainer>
        <PencilContainer onClick={()=>goToEditProfile(navigate)} src={PencilImg} alt='imagem de lápis para editar as informações'/>
      </UserInfo>
      <StyleAddress>
        <InternalContainer>
        <Delivery>Endereço de Entrega</Delivery>
        <span>{user.address}</span>
        </InternalContainer>
        <PencilContainer onClick={()=>goToEditAddress(navigate)} src={PencilImg} alt='imagem de lápis para editar as informações'/>
      </StyleAddress>
      <HistoryContainter>
      <NamesBlackBorder>Histórico de pedidos</NamesBlackBorder>
      <HistoryCard/>
      <HistoryCard/>
      <HistoryCard/>
      </HistoryContainter>
      <Footer/>
    </div>
  );
}
