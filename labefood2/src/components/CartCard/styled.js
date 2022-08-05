import styled from "styled-components";
import { midGreen, greyish, black } from "../../constants/color";

export const ItemCard = styled.div`
margin-top: 8px;
display: flex;
width: 328px;
border: 1px solid ${greyish};
border-radius: 8px;
`;
export const ItemNameContain = styled.div`
display: flex;
border-radius: 0 8px 0 0;
height: fit-content;
width: 215px;
justify-content: space-between;
color: ${midGreen};
`;
export const DescriptionItemContain = styled.div`
display: flex;
flex-direction: column;
padding-left: 16px;
font-size: 12px;
`;
export const NamesGreen = styled.p`
color: ${midGreen};
padding-top: 12px;
font-size: 16px;
`;
export const NamesBlack = styled.p`
color: ${black};
font-size: 16px;
padding-top: 12px;
padding-bottom: 8px;
`;
export const ItemImg = styled.img`
width: 96px;
height: 112px;
`;
export const AddButton = styled.button`
width: 90px;
height: 31px;
margin: 19px 0 0 8px;
padding: 8px 20.5px 9px 21.5px;
color: ${midGreen};
border: solid 1px ${midGreen};
border-radius: 8px 0 8px 0;
font-size: 12px;
letter-spacing: -0.29px;
background-color: white;
`;
export const DeleteButton = styled(AddButton)`
color: red;
border: solid 1px red;
`;
export const QttContainer = styled.div`
width: 33px;
height: 33px;
margin: 0 0 11px 16px;
padding: 7px 12px;
border: solid 1px ${midGreen};
border-radius: 0 8px 0 8px;
font-size: 16px;
letter-spacing: -0.39px;
`;
export const DescriptionContainer = styled.div`
width: 200px;
height: 30px;
`