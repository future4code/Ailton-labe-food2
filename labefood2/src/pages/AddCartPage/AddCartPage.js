import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function AddCartPage() {
  useProtectedPage();
  return <div>AddCartPage</div>;
}
