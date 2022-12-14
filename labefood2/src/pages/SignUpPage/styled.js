import styled from 'styled-components';
import { greyish } from '../../constants/color';

export const InputPassword = styled.input`
  border-radius: 2px;
  border: none;
  padding: 16px;
  justify-content: space-between;
`;
export const InputPContainer = styled.div`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyish};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImgPassword = styled.img`
  margin-right: 16px;
  width: 24px;
  height: 24px;
`;
