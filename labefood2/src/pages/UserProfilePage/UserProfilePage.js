import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function UserProfilePage() {
  useProtectedPage();
  return (
    <div>
      <Header type={"semSeta"} title={"Meu perfil"} width={"146.5px"} />
      <p>UserProfilePage</p>
      <Footer />
    </div>
  );
}
