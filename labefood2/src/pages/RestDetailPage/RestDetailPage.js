import React from "react";
import Header from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function RestDetailPage() {
  useProtectedPage()
  return (
    <div>
      <Header type={"seta"} largura={"99.5px"} title={"Restaurante"} />
      <p>RestDetailPage</p>
    </div>
  );
}
