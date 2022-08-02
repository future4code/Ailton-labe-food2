import styled from 'styled-components';
import { greyish, black } from './constants/color';

export const Separator = styled.div`
height: ${(props) => props.height};
width: ${(props) => props.width};
`
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputStyled = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyish};
`
export const PageTitle = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.39px;
  color:${black}
`