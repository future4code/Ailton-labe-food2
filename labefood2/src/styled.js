import styled from "styled-components";
import { greyish, black } from "./constants/color";

export const Separator = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputStyled = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyish};
  padding: 16px;
  justify-content: space-between;
`;
export const LabelStyled = styled.label`
  position: relative;
  width: 78px;
  top: -67px;
  left: -115px;
  padding: 4px;
  background-color: white;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: ${greyish};
  z-index: 1;
`;
export const PageTitle = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  letter-spacing: -0.39px;
  color: ${black};
  margin-top: 28px;
`;
