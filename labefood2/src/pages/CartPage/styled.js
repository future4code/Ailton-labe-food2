import styled from "styled-components";
import { greyish, midGreen } from "../../constants/color";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0ch;
`;
export const StyleAddress = styled.div`
  background-color: #eeeeee;
  height: 76px;
  width: 360px;
  padding-left: 16px;
  padding-top: 16px;
  margin-bottom: 16px;
`;
export const Delivery = styled.span`
  display: flex;
  color: #b8b8b8;
  padding-bottom: 8px;
`;
export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
export const RestInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  gap:8px;
  color: ${greyish}
`;
export const PriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 90%;
  justify-content: space-between;
`;
export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
export const Cash = styled.label`
  display: flex;
  margin-bottom: 4px;
  padding-bottom: 4px;
  span {
    margin-left: 5px;
  }
`;
export const CreditCard = styled.label`
  display: flex;
  margin-bottom: 4px;
  span {
    margin-left: 5px;
  }
`;
export const Span1 = styled.span`
  display: flex;
  justify-content: center;
`;
export const Span2 = styled.span`
  display: flex;
  justify-content: end;
`;
export const SubTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
`;
export const SubTitle = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 8px;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 5px;
  width: 90%;
  justify-content: flex-start;
`;
export const ButtonCart = styled.button`
  width: 90%;
  height: 42px;
  color: black;
  font-size: 16px;
  background-color: rgba(92, 182, 70, 0.5);
  border-radius: 2px;
  border: none;
  margin-top: 0;
  position: fixed;
  bottom: 65px;
`;
export const NamesGreen = styled.p`
  color: ${midGreen};
  font-size: 16px;
`;
