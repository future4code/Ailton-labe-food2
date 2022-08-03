import styled from "styled-components";
import { InputStyled } from "../../styled";

export const NewInput = styled(InputStyled)`
  margin-left: 16px;
`;
export const FilterContainer = styled.div`
  width: 360px;
  padding-left: 16px;
  display: flex;
  overflow-x: auto;
  font-family: "Roboto", sans-serif;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
export const Filter = styled.span`
  display: flex;
  margin: 10px;
  max-width: 87px;
  color: black;
  justify-content: space-evenly;
  align-items: center;
`;

export const CategoryListAll = styled.span`
  display: flex;

  max-width: 87px;
  color: black;
  height: 19px;
  align-items: center;
  padding-top: 28.5px;
`;
export const CategoryListFilter = styled.span`
  display: flex;
  margin: 10px;
  max-width: 87px;
  color: black;
  height: 39px;
`;
