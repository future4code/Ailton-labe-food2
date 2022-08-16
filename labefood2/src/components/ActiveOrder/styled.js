import styled from "styled-components";
import { midGreen, black } from "../../constants/color";

export const ContainerActiveOrder = styled.div`
  width: 360px;
  height: 118px;
  margin: 99px 0 49px;
  padding: 24px;
  background-color: ${midGreen};
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.39px;
  color: ${black};
  display: flex;
  align-items: center;
  position:fixed;
  margin-top:483px;
`

export const ContainerOrder = styled.div`
width: 256px;
display: flex;
flex-direction: column;
gap: 8px;
`;

export const OrderProcess = styled.p`
color: white;
font-size: 16px;
`