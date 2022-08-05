import styled from "styled-components";
import { greyish, midGreen, black } from "../../constants/color";

export const UserInfo = styled.div`
height: 102px;
width: 360px;
padding: 16px;
gap: 8px;
line-height: 24px;
display: flex;
justify-content: space-between;
`;
export const InternalContainer = styled.div`
height: 76px;
`
export const PencilContainer = styled.img`
height: 24px;
width: 24px;
`
export const StyleAddress = styled.div`
background-color: #eeeeee;
height: 76px;
width: 360px;
padding: 16px;
display: flex;
justify-content: space-between;
margin-top: 10px;
`;
export const Delivery = styled.span`
display: flex;
color: #b8b8b8;
padding-bottom: 8px;
`;
export const HistoryContainter = styled.div`
padding-left: 16px;
padding-right: 16px;
display: flex;
flex-direction: column;
`
export const NamesBlackBorder = styled.p`
color: ${black};
padding-top: 12px;
padding-bottom: 8px;
border-bottom: 1px solid black;
`;

export const ButtonLogout = styled.button`
border: none;
padding: 2px;
margin-bottom: 10px;
`