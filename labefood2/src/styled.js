import styled from 'styled-components';
import { greyish } from './constants/color';

export const Separator = styled.div`
height: ${(props) => props.height};
width: ${(props) => props.width};
`
export const InputStyled = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyish};
`