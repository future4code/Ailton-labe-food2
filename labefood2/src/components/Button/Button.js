import React from "react";
import { ContainerButton } from "./styled";

export default function Button(props) {
  return <ContainerButton>{props.title}</ContainerButton>;
}
