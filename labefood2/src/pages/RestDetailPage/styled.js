import styled from "styled-components";
import { midGreen, greyish, black } from "../../constants/color";

export const RestDetailContainer = styled.div`
  width: 328px;
  padding-left: 16px;
  color: ${greyish};
`;
export const ContainerRest = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
`;
export const DivText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 128px;
`;
export const NamesGreen = styled.p`
color: ${midGreen};
padding-top: 12px;
font-size: 16px;
`;
export const NamesBlackBorder = styled.p`
color: ${black};
padding-top: 12px;
padding-bottom: 8px;
border-bottom: 1px solid black;
`;
export const NamesBlack = styled.p`
color: ${black};
font-size: 16px;
padding-top: 12px;
padding-bottom: 8px;
`;

