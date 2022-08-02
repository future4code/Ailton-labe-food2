import styled from "styled-components";
import { midGreen, greyish, black } from "../../constants/color";

export const CardContainer = styled.div`
margin-top: 8px;
padding: 16px;
display: flex;
flex-direction: column;
width: 328px;
height: 102px;
border: 1px solid ${greyish};
border-radius: 8px;
font-size: 16px;
letter-spacing: -0.39px;
gap: 8px;
`;
export const NamesGreen = styled.p`
color: ${midGreen};
`;
export const DataSentense = styled.p`
font-size: 12px;
`;
