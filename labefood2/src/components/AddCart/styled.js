import styled from "styled-components";
import { greyish, midGreen } from "../../constants/color";

export const ContainerAddCart = styled.div`
height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  user-select: none;
`
export const ContainerBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
width:328px;
height:216px;
`
export const DivAdd = styled.div`
display:flex;
width:100%;
justify-content:flex-end;
`
export const Select = styled.select`
width:296px;
height:56px;
border-radius:4px;
border: solid 1px ${greyish};
padding-left:16px;
`
export const AddCartTitle = styled.p`
color: ${midGreen};
font-size:16px;
letter-spacing:-0.39px;
padding-right:16px;
`
export const TitleSelect = styled.p`
font-size:16px;
letter-spacing:-0.39px;

`
export const GoBack = styled.img`
position:absolute;
margin-top:17px;
margin-right:280px;
`