import styled from 'styled-components';
import { InputStyled } from '../../styled';
import { greyish, midGreen } from '../../constants/color';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  margin: 0 16px;
  border: 1px solid ${greyish};
  border-radius: 2px;
`;
export const InputImg = styled.img`
  margin-left: 17px;
`;
export const NewInput = styled(InputStyled)`
  margin-left: 16px;
  border: none;
`;
export const FilterContainer = styled.div`
  width: 360px;
  padding-left: 16px;
  display: flex;
  overflow-x: auto;
  font-family: 'Roboto', sans-serif;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
export const Filter = styled.span`
  display: flex;
  margin: 10px;
  max-width: 87px;
  color: ${(props) =>
    props.selectCategory === props.item ? `${midGreen}` : 'black'};
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
