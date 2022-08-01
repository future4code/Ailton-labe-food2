import React from "react";
import { ContainerButton } from "./styled";

export default function Button(props) {
  return <ContainerButton onClick={props.onClick}>{props.title}</ContainerButton>;
}
