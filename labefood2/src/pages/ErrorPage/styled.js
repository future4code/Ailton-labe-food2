import styled from 'styled-components';
import { black, midGreen } from '../../constants/color';

export const ErrorButton = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: ${midGreen};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: ${black};
  border: none;
`;
