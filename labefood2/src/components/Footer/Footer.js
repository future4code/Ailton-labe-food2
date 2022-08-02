import React from "react";
import CartGreen from "../../assets/cartGreen.svg"
import CartWhite from "../../assets/cartWhite.svg"
import HomeGreen from "../../assets/homeGreen.svg"
import HomeWhite from "../../assets/homeWhite.svg"
import ProfileGreen from "../../assets/profileGreen.svg"
import ProfileWhite from "../../assets/profileWhite.svg"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToCart, goToHome, goToUserProfile} from "../../routes/coordinator"

const FooterContainer = styled.div`
margin: 16px 0 0;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
background-color: #fff;
display: flex;
justify-content: space-between;
width: 360px;
height: 49px;
align-items: center;
position: fixed;
bottom: 0;
`
const HomeIconContainer = styled.div`
width: 120px;
height: 49px;
padding: 11px 46px 11px 47px;
`

const HomeIcon = styled.img`
height: 27px;
width: 27px;
`

const CartIconContainer = styled.div`
width: 120px;
height: 49px;
padding: 10px 46px 10px 47px;
`

const CartIcon = styled.img`
height: 27px;
width: 27px;
`
const ProfileIconContainer = styled.div`
width: 120px;
height: 49px;
padding: 10px 46px 9px 47px;
`

const ProfileIcon = styled.img`
height: 27px;
width: 27px;
`

const Footer = () => {

  const navigate = useNavigate();

  let urlPage = ""

  const url = window.location.pathname.substring(1);



  if (url === "home") {
    urlPage = "home"
  } else if (url === "profile") {
    urlPage = "profile"
  } else if (url === "cart") {
    urlPage = "cart"
  }

  
    return(
      <FooterContainer>
        <HomeIconContainer>
        <div onClick={() => goToHome(navigate)}>{urlPage === 'home' ? <img alt='icone-home' src={HomeGreen} /> : <img alt='icone-home' src={HomeWhite} />}</div>
        </HomeIconContainer>
        <CartIconContainer>
        <div onClick={() => goToCart(navigate)}>{urlPage === 'cart' ? <img alt='icone-carrinho' src={CartGreen} /> : <img alt='icone-carrinho' src={CartWhite} />}</div>
        </CartIconContainer>
        <ProfileIconContainer>
        <div onClick={() => goToUserProfile(navigate)}>{urlPage === 'profile' ? <img alt='icone-perfil' src={ProfileGreen} /> : <img alt='icone-perfil' src={ProfileWhite} />}</div>
        </ProfileIconContainer>
      </FooterContainer>
    )

}
export default Footer


  

