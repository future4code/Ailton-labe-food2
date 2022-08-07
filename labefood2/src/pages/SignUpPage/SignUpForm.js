import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  InputStyled,
  Separator,
  FormContainer,
  LabelStyled,
} from "../../styled";
import { goToSignUpAdress } from "../../routes/coordinator";
import { Singup } from "../../services/requests";
import SenhaImg from "../../assets/senha.svg";
import SenhaImg2 from "../../assets/senha2.svg";
import { InputPassword, InputPContainer, ImgPassword } from "./styled";
import { greyish } from "../../constants/color";

export default function SignUpForm() {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const onChangeConfirm = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitForm = (event) => {
    if (form.password !== confirmPassword) {
      setError(true);
      window.alert("As senhas devem ser a mesma");
    } else {
      event.preventDefault();
      Singup(form, goToSignUpAdress, navigate, clear);
    }
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="Nome e sobrenome"
        name={"name"}
        value={form.name}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Nome*</LabelStyled>
      <Separator height={"16px"} />
      <InputStyled
        placeholder="email@email.com"
        name={"email"}
        value={form.email}
        onChange={onChange}
        type="email"
        pattern="[a-zA-Z0-9._%+-]+@[a-z0A-Z-9.-]+\.[a-zA-Z]{2,}$"
        required
      />
      <LabelStyled>E-mail*</LabelStyled>
      <Separator height={"16px"} />
      <InputStyled
        placeholder="000.000.000-00"
        name={"cpf"}
        value={form.cpf}
        onChange={onChange}
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />
      <LabelStyled>CPF*</LabelStyled>
      <Separator height={"16px"} />
      <InputPContainer style={{ borderColor: error ? "red" : `${greyish}` }}>
        <InputPassword
          placeholder="Mínimo 6 caracteres"
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          pattern="^(?=.*[a-zA-Z]).{6,50}$"
          required
        />
        <ImgPassword
          onClick={togglePassword}
          src={showPassword ? SenhaImg2 : SenhaImg}
        />
      </InputPContainer>
      <LabelStyled>Senha*</LabelStyled>
      <Separator height={"16px"} />
      <InputPContainer style={{ borderColor: error ? "red" : `${greyish}` }}>
        <InputPassword
          placeholder="Confirme a senha a senha anterior"
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={onChangeConfirm}
          type={showPassword2 ? "text" : "password"}
          pattern="^(?=.*[a-zA-Z]).{6,50}$"
          required
        />
        <ImgPassword
          onClick={togglePassword2}
          src={showPassword2 ? SenhaImg2 : SenhaImg}
        />
      </InputPContainer>
      <LabelStyled>Confirmar*</LabelStyled>
      <Separator height={"16px"} />
      <Button
        onClick={() => goToSignUpAdress(navigate)}
        type={"submit"}
        title={"Criar"}
      />
    </FormContainer>
  );
}
