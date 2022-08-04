import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import PencilImg from "../../assets/edit.svg";
import {
  UserInfo,
  StyleAddress,
  Delivery,
  NamesBlackBorder,
  HistoryContainter,
  InternalContainer,
  PencilContainer,
  ButtonLogout
} from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToEditProfile, goToEditAddress } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Profile, getOrderHistory } from "../../services/requests";
import { Separator } from "../../styled";
import { GlobalContext } from "../../global/GlobalContext";

export default function UserProfilePage() {
  // useProtectedPage();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);
  const { logout } = useContext(GlobalContext);

  useEffect(() => {
    Profile(setUser);
    getOrderHistory(setOrderHistory);
  }, []);

  const historyList = orderHistory?.map((item) => (
    <HistoryCard key={item.id} item={item} />
  ));

  return (
    <div>
      <Header type={"semSeta"} title={"Meu perfil"} width={"146.5px"} />
      <UserInfo>
        <InternalContainer>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
          <Separator />
       {/* <ButtonLogout onClick={ logout(navigate) }>logout</ButtonLogout> */}
          <Separator height={"30px"}/> 
        </InternalContainer>
        <PencilContainer
          onClick={() => goToEditProfile(navigate)}
          src={PencilImg}
          alt="imagem de lápis para editar as informações"
        />
      </UserInfo>
      <StyleAddress>
        <InternalContainer>
          <Delivery>Endereço de Entrega</Delivery>
          <span>{user.address}</span>
        </InternalContainer>
        <PencilContainer
          onClick={() => goToEditAddress(navigate)}
          src={PencilImg}
          alt="imagem de lápis para editar as informações"
        />
      </StyleAddress>
      <HistoryContainter>
        <NamesBlackBorder>Histórico de pedidos</NamesBlackBorder>
        {orderHistory.length == 0 ? (
          <>
            <Separator height="10px" />
            <p>Você ainda não tem histórico.</p>
            <p>Que tal pedir algo agora?</p>
          </>
        ) : (
          historyList
        )}
      </HistoryContainter>
     
      <Footer />
    </div>
  );
}
