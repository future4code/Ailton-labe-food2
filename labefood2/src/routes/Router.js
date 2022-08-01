import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoPage from "../pages/LogoPage/LogoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignUpAddress from "../pages/SignUpAddressPage/SignUpAddressPage";
import HomePage from "../pages/HomePage/HomePage";
import RestDetailPage from "../pages/RestDetailPage/RestDetailPage";
import AddCartPage from "../pages/AddCartPage/AddCartPage";
import CartPage from "../pages/CartPage/CartPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogoPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/signup/address" element={<SignUpAddress />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/restaurant/:id" element={<RestDetailPage />} />
        <Route exact path="/add/:id" element={<AddCartPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/profile" element={<UserProfilePage />} />
        <Route exact path="/editProfile" element={<EditProfilePage />} />
        <Route exact path="/editAddress" element={<EditAddressPage />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
