import React from "react";
import CartGreen from "../../assets/cartGreen.svg";
import CartWhite from "../../assets/cartWhite.svg";
import HomeGreen from "../../assets/homeGreen.svg";
import HomeWhite from "../../assets/homeWhite.svg";
import ProfileGreen from "../../assets/profileGreen.svg";
import ProfileWhite from "../../assets/profileWhite.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCart, goToHome, goToUserProfile } from "../../routes/coordinator";
import {
  HomeIcon,
  FooterContainer,
  HomeIconContainer,
  CartIconContainer,
  CartIcon,
  ProfileIconContainer,
  ProfileIcon,
} from "./styled";

const Footer = () => {
  const navigate = useNavigate();

  let urlPage = "";

  const url = window.location.pathname.substring(1);

  if (url === "home") {
    urlPage = "home";
  } else if (url === "profile") {
    urlPage = "profile";
  } else if (url === "cart") {
    urlPage = "cart";
  }

  return (
    <FooterContainer>
      <HomeIconContainer>
        <div onClick={() => goToHome(navigate)}>
          {urlPage === "home" ? (
            <img alt="icone-home" src={HomeGreen} />
          ) : (
            <img alt="icone-home" src={HomeWhite} />
          )}
        </div>
      </HomeIconContainer>
      <CartIconContainer>
        <div onClick={() => goToCart(navigate)}>
          {urlPage === "cart" ? (
            <img alt="icone-carrinho" src={CartGreen} />
          ) : (
            <img alt="icone-carrinho" src={CartWhite} />
          )}
        </div>
      </CartIconContainer>
      <ProfileIconContainer>
        <div onClick={() => goToUserProfile(navigate)}>
          {urlPage === "profile" ? (
            <img alt="icone-perfil" src={ProfileGreen} />
          ) : (
            <img alt="icone-perfil" src={ProfileWhite} />
          )}
        </div>
      </ProfileIconContainer>
    </FooterContainer>
  );
};
export default Footer;
